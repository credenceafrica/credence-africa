const PHONE_NUMBER = "+254719468240";
const WHATSAPP_MESSAGE = "Hello Credence Africa, I would like to know more about how you can help.";
const WHATSAPP_URL = `https://wa.me/254719468240?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const fab =
  "fab flex size-14 items-center justify-center rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.25)]";

/**
 * WhatsApp and phone buttons fixed bottom-right on every public page. They clear
 * notches via safe-area insets and sit below the header, modals and toasts (z-40).
 */
export function FloatingActions() {
  return (
    <div className="fixed bottom-[max(20px,env(safe-area-inset-bottom))] right-[max(20px,env(safe-area-inset-right))] z-40 flex flex-col gap-3 print:hidden [@media(max-height:500px)]:flex-row">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`${fab} bg-[#1F7A4D] text-white`}
      >
        <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.6L4 20z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-1.5-1-2-2l1-1-1-2L9 9.5z" />
        </svg>
      </a>
      <a href={`tel:${PHONE_NUMBER}`} aria-label="Call us" className={`${fab} bg-primary text-ink`}>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      </a>
    </div>
  );
}
