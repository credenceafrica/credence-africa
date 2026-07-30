/**
 * Content for the three legal pages (Privacy Policy, Terms and Conditions, Refund Policy).
 * Transcribed from the client's legal document with the site house style applied
 * (no comma before a conjunction; no em dashes). Section numbers are positional, so the
 * order of `sections` is the order shown and referenced.
 *
 * NOTE: per the source document, these are templates and should be reviewed by a qualified
 * Kenyan lawyer before final publication. Update `legalLastUpdated` when the wording changes.
 */

export const legalLastUpdated = "30 July 2026";

export const legalContact = {
  email: "connect@credence.africa",
  address: "Applewood Adams, Ngong Road, Nairobi, Kenya",
};

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  /** kebab-case anchor used by the table of contents and deep links */
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalPolicy = {
  slug: string;
  title: string;
  metaDescription: string;
  /** Lead paragraph shown in the hero under the title. */
  intro: string;
  sections: LegalSection[];
};

const privacyPolicy: LegalPolicy = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  metaDescription:
    "How Credence Africa collects, uses, stores and protects your personal information and your rights under the Kenya Data Protection Act, 2019.",
  intro:
    'Credence Africa ("we", "us" or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store and protect your personal information when you visit our website (www.credence.africa), use our services or interact with us.',
  sections: [
    {
      id: "information-we-collect",
      heading: "Information We Collect",
      blocks: [
        { type: "p", text: "We may collect:" },
        {
          type: "ul",
          items: [
            "Personal details: name, email address, phone number, company name, job title and other information you provide when filling forms, booking consultations, registering for events or corresponding with us.",
            "Technical data: IP address, browser type, device information, pages visited and usage data collected through cookies and analytics tools.",
            "Any other information you voluntarily share with us.",
          ],
        },
      ],
    },
    {
      id: "cookies-and-analytics",
      heading: "Cookies and Analytics",
      blocks: [
        {
          type: "p",
          text: "We use cookies and similar technologies to improve website performance, analyse traffic and enhance user experience. You can manage or disable cookies through your browser settings. We also use third-party analytics tools (such as Google Analytics) that may collect anonymised usage data.",
        },
      ],
    },
    {
      id: "how-we-use-your-information",
      heading: "How We Use Your Information",
      blocks: [
        { type: "p", text: "We use your information to:" },
        {
          type: "ul",
          items: [
            "Respond to enquiries and deliver our services.",
            "Send relevant updates, event invitations or thought leadership (you may opt out at any time).",
            "Improve our website, services and user experience.",
            "Comply with legal and regulatory obligations.",
          ],
        },
      ],
    },
    {
      id: "international-data-transfers",
      heading: "International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "Some of our service providers (for example email platforms, analytics tools or cloud hosting) may process data outside Kenya. Where this occurs, we ensure appropriate safeguards are in place in line with the Kenya Data Protection Act, 2019.",
        },
      ],
    },
    {
      id: "sharing-of-information",
      heading: "Sharing of Information",
      blocks: [
        { type: "p", text: "We do not sell your personal data. We may share it with:" },
        {
          type: "ul",
          items: [
            "Trusted service providers who assist us in operating our website and delivering services (under confidentiality agreements).",
            "Legal or regulatory authorities when required by law.",
          ],
        },
      ],
    },
    {
      id: "data-retention",
      heading: "Data Retention",
      blocks: [
        {
          type: "p",
          text: "We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by law. Typical retention periods are:",
        },
        {
          type: "ul",
          items: [
            "Enquiry and contact data: up to 2 years after last interaction.",
            "Client engagement records: as required under applicable professional and tax regulations.",
            "Website analytics data: in accordance with the tools' standard retention settings.",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      heading: "Your Rights",
      blocks: [
        { type: "p", text: "Under the Kenya Data Protection Act, 2019, you have the right to:" },
        {
          type: "ul",
          items: [
            "Access your personal data",
            "Request correction (rectification) of inaccurate data",
            "Request deletion (erasure) of your data",
            "Restrict or object to processing",
            "Data portability (where applicable)",
            "Withdraw consent at any time",
          ],
        },
        { type: "p", text: "To exercise any of these rights, contact us using the details below." },
      ],
    },
    {
      id: "contact-us",
      heading: "Contact Us",
      blocks: [
        { type: "p", text: "For any privacy-related questions or requests, email connect@credence.africa." },
        { type: "p", text: "Postal address: Credence Africa, Applewood Adams, Ngong Road, Nairobi, Kenya." },
      ],
    },
  ],
};

const termsAndConditions: LegalPolicy = {
  slug: "terms-and-conditions",
  title: "Terms and Conditions",
  metaDescription:
    "The terms governing your use of the Credence Africa website and services, including intellectual property, liability and governing law.",
  intro:
    "Welcome to Credence Africa. By accessing or using our website and services, you agree to these Terms and Conditions.",
  sections: [
    {
      id: "services",
      heading: "Services",
      blocks: [
        {
          type: "p",
          text: "Credence Africa provides advisory, capital structuring, market entry, public affairs, executive education, research and related institutional support services across Africa. All formal engagements are governed by separate written agreements or proposals.",
        },
      ],
    },
    {
      id: "website-use",
      heading: "Website Use",
      blocks: [
        {
          type: "p",
          text: "You may use this website for lawful purposes only. You must not attempt to disrupt the site, introduce malware, scrape content or misuse any materials.",
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual Property",
      blocks: [
        {
          type: "p",
          text: "All content on this website (including text, logos, graphics, reports, designs and downloadable materials) is owned by or licensed to Credence Africa and protected by copyright and other intellectual property laws. You may not copy, reproduce, distribute, modify or create derivative works without our prior written consent.",
        },
      ],
    },
    {
      id: "third-party-links-and-content",
      heading: "Third-Party Links and Content",
      blocks: [
        {
          type: "p",
          text: "Our website may contain links to third-party websites or resources. We are not responsible for the content, accuracy or practices of any third-party sites. Accessing them is at your own risk.",
        },
      ],
    },
    {
      id: "no-professional-advice-via-website",
      heading: "No Professional Advice via Website",
      blocks: [
        {
          type: "p",
          text: "Content on this website is for general information only and does not constitute legal, financial, investment or professional advice. Formal advice is provided only under a signed engagement letter.",
        },
      ],
    },
    {
      id: "payment-terms",
      heading: "Payment Terms",
      blocks: [
        {
          type: "p",
          text: "Where applicable, fees for services, programmes or events are due as stated in the relevant invoice, proposal or registration terms. Late payments may attract interest or suspension of services.",
        },
      ],
    },
    {
      id: "confidentiality",
      heading: "Confidentiality",
      blocks: [
        {
          type: "p",
          text: "Both parties agree to keep confidential any non-public information shared during engagements, unless disclosure is required by law or agreed in writing.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "To the maximum extent permitted by law, Credence Africa shall not be liable for any indirect, incidental, special or consequential damages arising from your use of the website or reliance on its content.",
        },
      ],
    },
    {
      id: "force-majeure",
      heading: "Force Majeure",
      blocks: [
        {
          type: "p",
          text: "We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including natural disasters, government actions, pandemics or technical failures.",
        },
      ],
    },
    {
      id: "termination",
      heading: "Termination",
      blocks: [
        {
          type: "p",
          text: "We may suspend or terminate access to the website or services if you breach these Terms. Provisions that by nature should survive termination (including intellectual property, limitation of liability and confidentiality) shall remain in effect.",
        },
      ],
    },
    {
      id: "governing-law",
      heading: "Governing Law",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by the laws of Kenya. Any disputes shall be subject to the exclusive jurisdiction of the courts of Kenya.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms from time to time. Continued use of the website after changes constitutes acceptance of the revised Terms.",
        },
      ],
    },
  ],
};

const refundPolicy: LegalPolicy = {
  slug: "refund-policy",
  title: "Refund Policy",
  metaDescription:
    "Credence Africa's refund terms for advisory engagements, executive education, workshops, events and training.",
  intro:
    "This Refund Policy applies to fees paid for Credence Africa's services, programmes, events and training.",
  sections: [
    {
      id: "advisory-and-consulting-engagements",
      heading: "Advisory and Consulting Engagements",
      blocks: [
        {
          type: "p",
          text: "Fees for advisory, capital raising, market entry and similar professional services are generally non-refundable once work has commenced, unless otherwise stated in the signed engagement letter or proposal. Any refund or credit is at Credence Africa's sole discretion and will only be considered in exceptional circumstances. Non-refundable deposits or mobilisation fees (where charged) are clearly stated in the proposal.",
        },
      ],
    },
    {
      id: "executive-education-workshops-and-training",
      heading: "Executive Education, Workshops and Training",
      blocks: [
        {
          type: "ul",
          items: [
            "Cancellations received more than 14 days before the start date may be eligible for a full or partial refund, less any non-recoverable costs or administration fees.",
            "Cancellations within 14 days of the start date are generally non-refundable.",
            "You may transfer your registration to another participant or a future programme (subject to availability and our written approval).",
          ],
        },
      ],
    },
    {
      id: "events-and-convenings",
      heading: "Events and Convenings",
      blocks: [
        {
          type: "p",
          text: "Ticket or participation fees for events are non-refundable unless the event is cancelled by Credence Africa. In the event of cancellation by us, you will receive a full refund or the option to transfer to a future event.",
        },
      ],
    },
    {
      id: "force-majeure",
      heading: "Force Majeure",
      blocks: [
        {
          type: "p",
          text: "If an event, programme or service is cancelled or postponed due to circumstances beyond our reasonable control (including government restrictions, natural disasters or public health emergencies), we will offer a full refund or the option to transfer to a future date.",
        },
      ],
    },
    {
      id: "how-to-request-a-refund",
      heading: "How to Request a Refund",
      blocks: [
        {
          type: "p",
          text: "Email connect@credence.africa with your full name, booking or invoice reference and reason for the request. We will respond within 7 to 10 business days.",
        },
      ],
    },
    {
      id: "processing",
      heading: "Processing",
      blocks: [
        {
          type: "p",
          text: "Approved refunds will be processed to the original payment method within 14 to 21 business days.",
        },
      ],
    },
  ],
};

export const legalPolicies: LegalPolicy[] = [privacyPolicy, termsAndConditions, refundPolicy];

export const legalPolicyBySlug: Record<string, LegalPolicy> = Object.fromEntries(
  legalPolicies.map((p) => [p.slug, p])
);
