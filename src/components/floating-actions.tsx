import { Phone } from "lucide-react";

const PHONE_NUMBER = "+254719468240";
const WHATSAPP_MESSAGE = "Hello Credence Africa, I would like to know more about how you can help.";
const WHATSAPP_URL = `https://wa.me/254719468240?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Reuses the same WhatsApp glyph the insights share row uses, for one consistent mark site-wide.
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      <path d="M12.061 0C5.425 0 0 5.373 0 12.001c0 2.101.548 4.103 1.547 5.861L0 24l6.335-1.524a11.93 11.93 0 0 0 5.726 1.525C18.698 24.001 24.12 18.628 24.12 12.001S18.697 0 12.061 0zm.001 2.16c5.434 0 9.855 4.382 9.855 9.841 0 5.458-4.42 9.84-9.855 9.84a9.78 9.78 0 0 1-4.987-1.38l-.357-.21-3.704.895.91-3.585-.232-.37C2.694 15.617 2.16 13.845 2.16 12.002c0-5.458 4.42-9.84 9.9-9.84zm4.566 12.285c-.249-.124-1.474-.727-1.703-.808-.229-.081-.396-.124-.562.124-.167.248-.644.808-.79.973-.145.166-.29.186-.539.062-.249-.124-.925-.34-1.92-1.18-.775-.653-1.29-1.46-1.444-1.708-.155-.248-.016-.38.11-.504.111-.11.249-.289.373-.434.125-.145.167-.248.249-.414.083-.167.042-.31-.021-.434-.063-.124-.562-1.353-.77-1.852-.2-.49-.405-.424-.562-.432-.146-.008-.313-.008-.479-.008a.956.956 0 0 0-.687.31c-.229.289-.875.851-.875 2.071 0 1.22.896 2.399 1.01 2.565.115.166 1.745 2.64 4.23 3.72.58.257 1.043.411 1.4.527.538.172.955.147 1.306.09.395-.064 1.22-.5 1.391-.973.172-.473.172-.875.125-1.04-.047-.165-.171-.248-.42-.372z" />
    </svg>
  );
}

/**
 * Two floating contact actions (WhatsApp + phone), fixed bottom-right on every public page.
 * Square to match the Execution Ledger system; clears notches via safe-area insets; sits below
 * the header, modals and toasts (z-40) so it never covers them. Hidden from print.
 */
export function FloatingActions() {
  const fabBase =
    "group relative flex size-14 items-center justify-center rounded-none text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none";
  const labelBase =
    "pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap bg-foreground px-3 py-1.5 text-sm font-light text-white opacity-0 transition-all duration-200 md:block md:translate-x-2 group-hover:opacity-100 md:group-hover:translate-x-0 motion-reduce:transition-none";

  return (
    <div className="fixed z-40 flex flex-col gap-3 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-[max(1.5rem,env(safe-area-inset-right))] print:hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Credence Africa on WhatsApp"
        title="Chat on WhatsApp"
        className={`${fabBase} bg-[#25D366] hover:bg-[#1da851] focus-visible:ring-[#25D366]`}
      >
        <span className={labelBase}>Chat on WhatsApp</span>
        <WhatsAppIcon className="size-7 fill-current" />
      </a>

      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Credence Africa"
        title="Call us"
        className={`${fabBase} bg-primary hover:bg-primary/90 focus-visible:ring-primary`}
      >
        <span className={labelBase}>Call us</span>
        <Phone className="size-6" aria-hidden="true" />
      </a>
    </div>
  );
}
