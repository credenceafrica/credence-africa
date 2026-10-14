import Link from "next/link";
import { contact } from "@/lib/contact";
import { legalPages } from "@/lib/site-map";
import { Arrow } from "./site/primitives";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Who We Work With", href: "/who-we-work-with" },
  { label: "Events", href: "/events" },
  { label: "Insights", href: "/insights" },
  { label: "Book a Consultation", href: "/consult" },
];

const legalLinks = [...legalPages, { label: "Sitemap", href: "/site-map" }];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Aw6gyX8ZH/?mibextid=wwXIfr",
    size: 16,
    path: "M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V21M6 10h8",
  },
  { label: "X", href: "https://x.com/CredenceAfrica", size: 14, path: "M4 4l16 16M20 4L4 20" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/credence-africalimited",
    size: 16,
    path: "M6 10v9M6 6v.01M10 19v-9M10 14a4 4 0 0 1 8 0v5",
  },
];

const cell = "border-b border-r border-line-dark p-8 max-[720px]:p-6";
const heading = "mb-4 mt-0 text-[15px] font-medium text-primary";
const link = "foot-link hit text-[#E5E5E5]";
// On touch screens the rows open up so each link's 44px tap area clears its neighbours.
const list = "flex flex-col gap-2 [@media(pointer:coarse)]:gap-5";

export function Footer() {
  return (
    <footer className="block w-full bg-black pb-8 pt-[72px] text-[15px] leading-[1.6] text-body-dark">
      <div className="mx-auto w-full max-w-[1400px] px-8 max-[720px]:px-5">
        <div className="border border-line-dark">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))]">
            <div className={`${cell} flex flex-col items-start gap-[18px]`}>
              <Link href="/" aria-label="Credence Africa home" className="hit inline-flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-light.png" alt="Credence Africa" className="block h-7 w-auto max-w-full" />
              </Link>
              <p className="m-0">Enabling the institutions that build Africa.</p>
              <Link
                href="/consult"
                className="pill inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-ink"
              >
                Book a Consultation
                <Arrow />
              </Link>
              <div className="mt-1.5 flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="social hit flex size-10 items-center justify-center rounded-full border border-line-dark text-white"
                  >
                    <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className={cell}>
              <h3 className={heading}>Quick Links</h3>
              <div className={list}>
                {quickLinks.map((l) => (
                  <Link key={l.href} href={l.href} className={link}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={cell}>
              <h3 className={heading}>Contact</h3>
              <div className={list}>
                <a href={`mailto:${contact.email}`} className={link}>
                  {contact.email}
                </a>
                <a href={`tel:${contact.phoneHref}`} className={link}>
                  {contact.phone}
                </a>
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={link}>
                  {contact.address}
                </a>
              </div>
            </div>

            <div className="border-b border-line-dark p-8 max-[720px]:p-6">
              <h3 className={heading}>Legal</h3>
              <div className={list}>
                {legalLinks.map((l) => (
                  <Link key={l.href} href={l.href} className={link}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 px-8 py-5 text-[14px] max-[720px]:px-6">
            <span>© {new Date().getFullYear()} Credence Africa. All rights reserved.</span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
