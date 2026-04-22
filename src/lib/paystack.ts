export interface PaystackResponse {
    reference: string;
    status?: string;
    message?: string;
    trans?: string;
    transaction?: string;
}

interface PaystackSetupConfig {
    key: string;
    email: string;
    amount: number;
    currency?: string;
    ref?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
    callback: (response: PaystackResponse) => void;
    onClose: () => void;
}

declare global {
    interface Window {
        PaystackPop?: {
            setup: (config: PaystackSetupConfig) => { openIframe: () => void };
        };
    }
}

const PAYSTACK_SCRIPT_SRC = 'https://js.paystack.co/v1/inline.js';
let loadPromise: Promise<void> | null = null;

function loadPaystack(): Promise<void> {
    if (typeof window === 'undefined') {
        return Promise.reject(new Error('Paystack can only be loaded in the browser'));
    }
    if (window.PaystackPop) return Promise.resolve();
    if (loadPromise) return loadPromise;

    loadPromise = new Promise((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(`script[src="${PAYSTACK_SCRIPT_SRC}"]`);
        if (existing) {
            existing.addEventListener('load', () => resolve());
            existing.addEventListener('error', () => reject(new Error('Failed to load Paystack')));
            return;
        }
        const script = document.createElement('script');
        script.src = PAYSTACK_SCRIPT_SRC;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => {
            loadPromise = null;
            reject(new Error('Failed to load Paystack'));
        };
        document.body.appendChild(script);
    });

    return loadPromise;
}

export interface PayWithPaystackArgs {
    email: string;
    amount: number;
    currency?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    metadata?: Record<string, unknown>;
    reference?: string;
}

export class PaystackClosedError extends Error {
    constructor() {
        super('Payment was cancelled.');
        this.name = 'PaystackClosedError';
    }
}

export async function payWithPaystack(args: PayWithPaystackArgs): Promise<PaystackResponse> {
    const key = process.env.NEXT_PUBLIC_CREDENCE_ENGAGE_PAYSTACK_PUBLIC_KEY;
    if (!key) {
        throw new Error('Paystack public key is not configured');
    }
    await loadPaystack();
    if (!window.PaystackPop) {
        throw new Error('Paystack failed to initialize');
    }

    return new Promise<PaystackResponse>((resolve, reject) => {
        let settled = false;
        const handle = window.PaystackPop!.setup({
            key,
            email: args.email,
            amount: args.amount,
            currency: args.currency || 'KES',
            firstname: args.firstName,
            lastname: args.lastName,
            phone: args.phone,
            ref: args.reference,
            metadata: args.metadata,
            callback: (response) => {
                settled = true;
                resolve(response);
            },
            onClose: () => {
                if (settled) return;
                reject(new PaystackClosedError());
            },
        });
        handle.openIframe();
    });
}
