import {
  Accessibility,
  BriefcaseBusiness,
  CloudSun,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { HELP_HEADINGS, serviceLinks, type LandingPage } from "./landing-content";

/**
 * Cross-sector theme landing pages.
 *
 * These are Credence Africa's seven themes, per the Consultant Onboarding
 * Guide (September 2026 edition): Climate Resilience and Environmental
 * Sustainability, Consumer Protection and Digital Trust, Economic Inclusion
 * and Accessibility, Gender and Women in Enterprise, Governance Integrity
 * and Responsible Business, Workforce Skills Leadership and Productivity,
 * and Youth and Intergenerational Opportunity.
 *
 * Climate, governance, gender, workforce and accessibility keep their
 * existing slugs; their titles and copy were updated to match the guide.
 * Capital, trade, industrialisation, infrastructure, technology
 * transformation, policy, enterprise, innovation and urbanization were
 * retired as themes in October 2026; see the redirects in next.config.ts.
 */
export type Theme = LandingPage;

export const themeList: Theme[] = [
  {
    slug: "climate",
    kind: "theme",
    name: "Climate Resilience and Environmental Sustainability",
    scope:
      "Climate exposure, adaptation, emissions, resource efficiency, biodiversity, environmental continuity and the finance that supports them.",
    icon: CloudSun,
    seoTitle: "Climate Resilience and Environmental Sustainability Consulting in Africa",
    metaDescription:
      "Climate resilience, environmental sustainability and climate finance advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "climate resilience consulting Africa",
      "environmental sustainability advisory Africa",
      "climate finance advisory Africa",
      "climate consulting Kenya",
      "sustainability consulting Nigeria",
      "climate resilience advisory South Africa",
      "resource efficiency strategy Africa",
    ],
    h1: "Climate Resilience and Environmental Sustainability Advisory Across Africa",
    intro:
      "Credence Africa helps businesses, investors and institutions understand their climate exposure and build a credible response. We support adaptation, emissions management, resource efficiency, biodiversity, environmental continuity, climate finance, research and institutional capability.",
    actions: [
      { label: "Discuss a Climate Resilience Mandate", consult: "capital" },
      { label: "Commission Climate and Environmental Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Turn climate exposure into a strategic and institutional response",
      paragraphs: [
        "Climate exposure affects capital, supply chains, infrastructure, operations, communities and market access. Rising expectations around emissions, resource use and biodiversity also shape how investors, customers, regulators and partners judge an institution. A credible response connects environmental priorities to commercial and public interest outcomes.",
        "Credence Africa works across climate exposure assessment, adaptation planning, emissions management, resource efficiency, biodiversity and environmental continuity, alongside the climate finance, carbon markets and circular economy work that fund them. We support clients that need to understand the exposure, build capability or structure a credible initiative.",
      ],
    },
    needs: {
      lead: "We help institutions determine:",
      items: [
        "Where the institution's climate and environmental exposure is financially and operationally material",
        "What adaptation, emissions reduction or resource efficiency priorities require action",
        "What capital and partnerships can support the response",
        "How biodiversity and environmental continuity bear on licensing, supply chains and reputation",
        "How climate commitments translate into programmes, governance and measurable decisions",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build climate resilience and environmental sustainability capability.",
        items: [
          "Executive education on climate exposure and adaptation strategy",
          "Climate finance and investment readiness programmes",
          "Board and governance programmes for climate and environmental oversight",
          "Emissions, resource efficiency and circular economy learning programmes",
          "Climate policy dialogues, investor forums and sector roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb: "Our research helps clients understand exposure, opportunity, policy and investment conditions.",
        items: [
          "Climate exposure and environmental sustainability assessments",
          "Climate finance and investment landscape research",
          "Adaptation, resilience and emissions studies",
          "Resource efficiency, biodiversity and circular economy intelligence",
          "Policy, regulation and stakeholder analysis",
          "Sector reports, opportunity briefs and commissioned publications",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work turns climate and environmental priorities into strategic, capital and institutional action.",
        items: [
          "Climate resilience and environmental sustainability strategy",
          "Climate finance and investment preparation",
          "Adaptation and emissions reduction initiative design",
          "Stakeholder, policy and public affairs strategy",
          "Resource efficiency and biodiversity partnership development",
          "Governance, capability and implementation planning",
        ],
      },
    ],
    mandates: [
      "A company assessing climate exposure across its growth and investment decisions",
      "A climate venture preparing for capital and market entry",
      "An investor assessing climate or environmental exposure in a transaction",
      "A government or association developing climate policy research and stakeholder engagement",
      "A development partner designing a resilience or climate finance initiative",
    ],
    audiences: [
      "Corporations, SMEs and climate ventures",
      "Investors, banks, funds and development finance institutions",
      "Governments, cities, regulators and public agencies",
      "Associations, foundations and development partners",
      "Universities, research institutions and sector platforms",
    ],
    geography:
      "Kenya is a priority market for climate innovation, renewable energy, agriculture and resilience. Nigeria is a priority market for energy access, infrastructure, cities and large-scale transition needs. South Africa is a priority market for industrial transition, power, finance and sustainability governance. We can also structure regional and pan-African work.",
    why:
      "We connect climate exposure to capital, policy, markets and institutional execution. We avoid generic commitments. Our work defines the decision, the evidence, the governance and the route to implementation. Technical climate science, verification and certification are delivered with qualified specialists.",
    faqs: [
      {
        q: "What climate resilience consulting services does Credence Africa provide?",
        a: "We provide climate exposure assessment, resilience and adaptation strategy, environmental sustainability advisory, climate finance preparation, market research, policy analysis, stakeholder engagement and capability building.",
      },
      {
        q: "Does Credence Africa provide carbon credit certification?",
        a: "No. We support carbon market strategy, research, investment and institutional work. Validation, verification, certification and technical measurement are handled by qualified specialist bodies.",
      },
      {
        q: "Can Credence Africa help us access climate finance?",
        a: "We can assess readiness, strengthen the investment case, identify relevant capital pathways and support engagement. Funding decisions remain with capital providers.",
      },
      {
        q: "Can you support work in Kenya, Nigeria and South Africa?",
        a: "Yes. We can deliver country specific, comparative or regional climate resilience and environmental sustainability mandates across the three priority markets and the wider continent.",
      },
    ],
    closing: {
      heading: "Build a climate strategy that can be governed and financed",
      body:
        "Credence Africa can help you assess the exposure, establish the evidence and organise the capital, policy and capability required for action.",
      label: "Book a Climate Resilience Consultation",
      consult: "capital",
    },
    links: serviceLinks("capital", "publicAffairs", "research", "institute", "trade"),
  },
  {
    slug: "governance",
    kind: "theme",
    name: "Governance Integrity and Responsible Business",
    scope:
      "Accountability, ethics, conflicts of interest, transparency, decision quality and stakeholder trust.",
    icon: ShieldCheck,
    seoTitle: "Governance Integrity and Responsible Business Consulting in Africa",
    metaDescription:
      "Governance integrity, ethics and responsible business advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "governance integrity advisory Africa",
      "responsible business consulting Africa",
      "corporate ethics advisory Africa",
      "governance advisory Kenya",
      "business integrity consulting Nigeria",
      "board effectiveness South Africa",
      "stakeholder trust advisory Africa",
    ],
    h1: "Governance Integrity and Responsible Business Advisory Across Africa",
    intro:
      "Credence Africa helps boards, executives and institutions build the accountability, ethics and decision quality that earn stakeholder trust. We support corporations, cooperatives, nonprofits, public institutions and sector bodies across African markets.",
    actions: [
      { label: "Discuss a Governance Integrity Mandate", consult: "institute" },
      { label: "Book a Board and Ethics Review", consult: "institute" },
    ],
    positioning: {
      heading: "Build institutions stakeholders can trust to decide well",
      paragraphs: [
        "Responsible business depends on more than a code of conduct. It requires clear accountability, well managed conflicts of interest, transparent reporting and decisions that can withstand scrutiny from investors, regulators, members and the public. Weak governance integrity creates exposure, erodes trust and slows capital.",
        "Credence Africa supports governance integrity and responsible business as a cross-sector theme. We help clients clarify accountability, manage conflicts, strengthen transparency and improve the quality of institutional decisions. Our work focuses on how the institution actually behaves, not only on what its policies say.",
      ],
    },
    needs: {
      lead: "We support institutions that need clarity on:",
      items: [
        "Where accountability sits for a decision, a risk or a stakeholder commitment",
        "How conflicts of interest are identified, disclosed and managed",
        "What transparency and reporting stakeholders can reasonably expect",
        "What weakens decision quality at board and executive level",
        "What a responsible business commitment should mean in practice, not only in policy",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute, we build the capability that supports accountable, trustworthy institutions.",
        items: [
          "Board induction and governance integrity education",
          "Ethics, conflicts of interest and anti-corruption programmes",
          "Executive decision making and accountability training",
          "Governance for cooperatives, nonprofits and public institutions",
          "Risk, compliance and institutional stewardship programmes",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research and assessment work establishes the evidence for a credible integrity programme.",
        items: [
          "Governance integrity and responsible business assessments",
          "Board effectiveness and decision quality reviews",
          "Conflicts of interest and accountability reviews",
          "Transparency, disclosure and reporting benchmarking",
          "Stakeholder trust and reputation research",
          "Policy and institutional practice reviews",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps institutions redesign governance around accountability and trust.",
        items: [
          "Governance integrity framework and board structure design",
          "Conflicts of interest and disclosure policy design",
          "Decision rights, transparency and accountability systems",
          "Responsible business strategy and stakeholder engagement",
          "Risk, compliance and institutional resilience strategy",
          "Ethics programme design and implementation support",
        ],
      },
    ],
    mandates: [
      "A company strengthening accountability and ethics before capital or expansion",
      "A board reviewing its conflicts of interest and decision processes",
      "A cooperative improving member accountability and institutional trust",
      "A nonprofit or public institution strengthening transparency and reporting",
      "A development partner designing an institutional integrity initiative",
    ],
    audiences: [
      "Corporations, SMEs and family businesses",
      "Boards, investors and holding companies",
      "Cooperatives, SACCOs and member institutions",
      "Nonprofits, foundations and faith institutions",
      "Governments, agencies, associations and development partners",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets for corporate, cooperative, nonprofit and public institutional mandates. We also support regional bodies, pan-African organisations and institutions operating across multiple jurisdictions. Each engagement is adapted to the legal form, ownership structure, mandate and operating context of the institution.",
    why:
      "We connect integrity to decisions, not only to policy documents. Accountability, conflict management, transparency and decision quality must work together before stakeholders will extend trust. Credence Africa designs the governance response around the institution's purpose, scale, risk and the trust it needs to sustain.",
    faqs: [
      {
        q: "What governance integrity advisory services does Credence Africa provide?",
        a: "We provide board and decision quality reviews, conflicts of interest and ethics programme design, transparency and accountability systems, responsible business strategy, institutional assessments and leadership training.",
      },
      {
        q: "Can Credence Africa train our board on ethics and conflicts of interest?",
        a: "Yes. Credence Institute delivers board induction, ethics, conflicts of interest, accountability and committee effectiveness programmes.",
      },
      {
        q: "Do you work with cooperatives and nonprofits?",
        a: "Yes. We adapt governance integrity work to the ownership, membership, mission and accountability structure of the institution.",
      },
      {
        q: "Can you support governance work in Kenya, Nigeria and South Africa?",
        a: "Yes. We support country specific and regional governance integrity mandates across the three priority markets and wider Africa.",
      },
    ],
    closing: {
      heading: "Strengthen the integrity behind the strategy",
      body:
        "Credence Africa can help your board and leadership team clarify accountability, manage conflicts and build the decision systems that earn stakeholder trust.",
      label: "Book a Governance Integrity Consultation",
      consult: "institute",
    },
    links: serviceLinks("institute", "research", "publicAffairs", "engage", "capital"),
  },
  {
    slug: "gender",
    kind: "theme",
    name: "Gender and Women in Enterprise",
    scope:
      "Differences in ownership, finance, leadership, employment, procurement and market participation between women and men.",
    icon: UsersRound,
    seoTitle: "Gender and Women in Enterprise Advisory in Africa",
    metaDescription:
      "Gender and women in enterprise advisory, research and training across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "gender and enterprise consulting Africa",
      "women economic empowerment Africa",
      "women in business advisory Africa",
      "gender advisory Kenya",
      "women owned enterprise Nigeria",
      "gender inclusion South Africa",
      "inclusive finance consulting Africa",
    ],
    h1: "Gender and Women in Enterprise Advisory Across Africa",
    intro:
      "Credence Africa helps institutions understand and close the gaps between women and men in ownership, finance, leadership, employment, procurement and market participation. We design evidence based strategies, research, initiatives and institutional capability across African sectors.",
    actions: [
      { label: "Discuss a Gender and Enterprise Mandate", consult: "research" },
      { label: "Commission Women in Enterprise Research", consult: "research" },
    ],
    positioning: {
      heading: "Build women's economic participation into markets, institutions and investment",
      paragraphs: [
        "Gender gaps in enterprise cannot be reduced to participation targets. They show up in who owns the business, who can raise finance, who sits on the board, who is hired and promoted and who wins a procurement contract. Closing them depends on access to capital, markets, skills, assets, networks and leadership that respond to those lived differences.",
        "Credence Africa supports governments, companies, financial institutions, foundations and development partners that want to design serious strategies for women's economic participation. We connect gender outcomes to sector economics, enterprise growth, procurement, leadership pipelines, investment and policy.",
      ],
    },
    needs: {
      lead: "We help institutions answer the questions that shape a credible strategy:",
      items: [
        "Where do women fall behind in ownership, finance, leadership, employment, procurement or market participation?",
        "What market, policy or institutional change can close that gap?",
        "How should finance, procurement and enterprise support be designed to reach women-owned and women-led businesses?",
        "What evidence will show whether the intervention creates economic value?",
        "How can gender equity become part of core strategy, not a separate activity?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build capability for gender responsive strategy and women's leadership.",
        items: [
          "Gender responsive initiative and programme design training",
          "Inclusive finance and enterprise support programmes for women-led businesses",
          "Leadership and governance programmes for women executives and board members",
          "Women's entrepreneurship and market access academies",
          "Policy dialogues and investor forums on women's economic participation",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb: "Our research identifies gaps, market opportunities and institutional barriers.",
        items: [
          "Gender gap assessments in ownership, finance, leadership and employment",
          "Women-owned and women-led enterprise ecosystem mapping",
          "Access to finance, procurement and market participation studies",
          "Workplace, pay and leadership pipeline research",
          "Policy, institutional and stakeholder analysis",
          "Gender data frameworks and learning reports",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps institutions design and implement gender equity within core economic systems.",
        items: [
          "Gender and women in enterprise strategy",
          "Inclusive finance and investment initiative design",
          "Gender responsive procurement and market access programmes",
          "Leadership pipeline and board representation strategy",
          "Policy, public affairs and institutional reform support",
          "Partnership, funding and ecosystem development",
        ],
      },
    ],
    mandates: [
      "A bank designing a women's market or lending strategy",
      "A company building gender responsive procurement and supplier development",
      "A government developing policy on women's enterprise or labour force participation",
      "A foundation or development partner commissioning research and initiative design",
      "An investor integrating gender lens criteria into pipeline and portfolio support",
    ],
    audiences: [
      "Governments, public agencies and cities",
      "Banks, insurers, investors and financial institutions",
      "Corporations, SMEs and industry associations",
      "Foundations, nonprofits and development partners",
      "Universities, training institutions and women's business networks",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets because they combine active enterprise ecosystems, growing women-owned business segments and significant institutional demand for gender responsive growth. We can design country specific work or compare gaps and opportunities across the three markets. Regional initiatives can also be structured for wider African implementation.",
    why:
      "We connect gender equity to economics and institutional design. The work begins with evidence. It then identifies the market, finance, policy and capability changes that can create sustained participation. We avoid symbolic initiatives that sit outside the client's core strategy.",
    faqs: [
      {
        q: "What gender and women in enterprise services does Credence Africa provide?",
        a: "We provide research, strategy, initiative design, inclusive finance advisory, procurement and leadership programmes, policy support, capability building and stakeholder convening.",
      },
      {
        q: "Can Credence Africa design a fund or facility targeted at women-owned businesses?",
        a: "We can support the strategy, market assessment, target segment design, governance, pipeline development and investment readiness elements. Regulated fund management and legal structuring require appropriately licensed and qualified partners.",
      },
      {
        q: "How is this different from Youth and Intergenerational Opportunity?",
        a: "This theme addresses gaps between women and men in ownership, finance, leadership, employment, procurement and market participation. Youth and Intergenerational Opportunity addresses entry into work and enterprise, apprenticeship and leadership transition across age groups. A mandate can draw on both.",
      },
      {
        q: "Can you work in Kenya, Nigeria and South Africa?",
        a: "Yes. We can deliver country specific, comparative or regional mandates across the three priority markets and wider Africa.",
      },
    ],
    closing: {
      heading: "Design a strategy around real gaps in enterprise",
      body:
        "Credence Africa can help you identify where women fall behind, structure the intervention and connect them to finance, markets, leadership and institutions.",
      label: "Book a Gender and Enterprise Consultation",
      consult: "research",
    },
    links: serviceLinks("research", "institute", "capital", "publicAffairs", "engage"),
  },
  {
    slug: "workforce",
    kind: "theme",
    name: "Workforce Skills Leadership and Productivity",
    scope:
      "Capability, workforce readiness, leadership, learning application, job quality and productivity.",
    icon: BriefcaseBusiness,
    seoTitle: "Workforce Skills, Leadership and Productivity Consulting in Africa",
    metaDescription:
      "Workforce skills, leadership and productivity advisory across Africa, including executive education and sector academy design in Kenya, Nigeria and South Africa.",
    keywords: [
      "workforce skills consulting Africa",
      "executive training Africa",
      "workforce productivity consulting Africa",
      "workforce training Kenya",
      "skills programmes Nigeria",
      "executive education South Africa",
      "sector academy design Africa",
    ],
    h1: "Workforce Skills, Leadership and Productivity Advisory Across Africa",
    intro:
      "Credence Africa helps employers, governments and institutions build the capability, leadership and workforce systems that lift job quality and productivity across changing African industries. Through Credence Institute, we design executive education, sector academies, professional programmes and institutional capability initiatives.",
    actions: [
      { label: "Discuss a Workforce or Training Mandate", consult: "institute" },
      { label: "Commission a Skills Needs Assessment", consult: "research" },
    ],
    positioning: {
      heading: "Build capability around the work markets actually require",
      paragraphs: [
        "Workforce initiatives create value when they respond to real sector demand and when learning is actually applied on the job. Training must connect to job roles, enterprise needs, technology change, professional standards and institutional performance, and it must be measured against job quality and productivity, not attendance alone. Generic content produces limited results.",
        "Credence Africa combines labour market intelligence, sector knowledge, curriculum design, employer engagement and executive learning. We support institutions that need to strengthen leaders, prepare teams, build professional capability, improve how learning is applied at work or create employment and enterprise pathways.",
      ],
    },
    needs: {
      lead: "We help clients answer the questions that should shape workforce investment:",
      items: [
        "Which skills and roles are required now and over the next planning period?",
        "Where are the capability and leadership gaps inside the institution or sector?",
        "What training, credential or academy model fits the audience and outcome?",
        "How should employers, universities, professional bodies and funders participate?",
        "What evidence will demonstrate capability, job quality, productivity or employment outcomes?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Credence Institute designs and delivers practical learning for executives, professionals, institutions and sector ecosystems.",
        items: [
          "Executive education and leadership development",
          "Sector academies and professional credentials",
          "Board, governance and institutional capability programmes",
          "Workforce readiness, reskilling and upskilling programmes",
          "Employer linked learning, study tours and executive exchanges",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research establishes the demand, audience and institutional case for skills investment.",
        items: [
          "Labour market and skills needs assessments",
          "Sector capability and workforce studies",
          "Employer demand and occupational research",
          "Training ecosystem and provider mapping",
          "Future of work, AI and digital skills research",
          "Initiative evaluation and learning reports",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps institutions design sustainable workforce and capability systems.",
        items: [
          "Workforce and capability strategy",
          "Academy, curriculum and credential design",
          "Employer and institutional partnership development",
          "Job quality and productivity measurement frameworks",
          "Governance, delivery and evaluation frameworks",
          "Policy and ecosystem development for jobs and skills",
        ],
      },
    ],
    mandates: [
      "A company building leadership and functional capability",
      "An association developing a sector academy or credential",
      "A government designing an employer-linked workforce initiative",
      "A university or training institution aligning programmes to market demand",
      "An employer wanting to connect a learning investment to job quality and productivity",
    ],
    audiences: [
      "Corporations, SMEs and employers",
      "Governments, agencies and public institutions",
      "Industry associations and professional bodies",
      "Universities, colleges and training institutions",
      "Foundations, investors and development partners",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets for sector academies, employer partnerships, executive learning and workforce transition. We can also build regional programmes that serve institutions and professionals from multiple African countries. Delivery can be physical, virtual or blended.",
    why:
      "Our advantage is the connection between research and delivery. We first establish what the market and institution need. We then design the learning model, partnerships, content, governance and evaluation framework around that evidence, so the programme is judged on learning application, job quality and productivity rather than attendance. Credence Institute can deliver directly or coordinate specialist faculty and partners.",
    faqs: [
      {
        q: "What workforce skills and productivity services does Credence Africa provide?",
        a: "We provide skills needs assessments, workforce strategy, executive education, academy design, curriculum development, professional programmes, employer partnerships and evaluation against job quality and productivity.",
      },
      {
        q: "Can Credence Africa design a sector academy?",
        a: "Yes. We can define the audience, competencies, curriculum, faculty model, credential, delivery structure, partnerships, commercial model and measurement framework.",
      },
      {
        q: "Do you deliver custom executive training?",
        a: "Yes. Credence Institute designs custom programmes for boards, executives, managers, professionals and institutional teams.",
      },
      {
        q: "How is this different from Youth and Intergenerational Opportunity?",
        a: "This theme addresses capability, leadership, learning application, job quality and productivity for an employer's or sector's existing and incoming workforce generally. Youth and Intergenerational Opportunity addresses entry into work and enterprise, apprenticeship and leadership transition specifically across age groups. A workforce academy mandate can draw on both.",
      },
      {
        q: "Can programmes cover Kenya, Nigeria and South Africa?",
        a: "Yes. Programmes can be country specific, regional, hybrid or pan-African, depending on the audience, faculty and delivery model.",
      },
    ],
    closing: {
      heading: "Build capability that changes institutional performance",
      body:
        "Credence Africa can help you identify the skills requirement, design the learning system and deliver an initiative connected to real sector outcomes.",
      label: "Book a Workforce and Training Consultation",
      consult: "institute",
    },
    links: serviceLinks("institute", "research", "engage", "publicAffairs", "trade"),
  },
  {
    slug: "accessibility",
    kind: "theme",
    name: "Economic Inclusion and Accessibility",
    scope:
      "Affordability, disability inclusion, geographic access and participation in markets and essential services.",
    icon: Accessibility,
    seoTitle: "Economic Inclusion and Accessibility Advisory in Africa",
    metaDescription:
      "Economic inclusion, disability inclusion and accessible market advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "economic inclusion consulting Africa",
      "accessibility advisory Africa",
      "disability inclusion consulting Africa",
      "inclusive markets Kenya",
      "affordability advisory Nigeria",
      "accessibility consulting South Africa",
      "geographic access advisory Africa",
    ],
    h1: "Economic Inclusion and Accessibility Advisory Across Africa",
    intro:
      "Credence Africa helps institutions design markets, services and investments that reach underserved people and places. We support affordability, disability inclusion, geographic access and broader participation in markets and essential services.",
    actions: [
      { label: "Discuss an Economic Inclusion Mandate", consult: "research" },
      { label: "Commission an Access and Inclusion Study", consult: "research" },
    ],
    positioning: {
      heading: "Design affordability and access into the market and the institution",
      paragraphs: [
        "Economic growth can expand while access remains limited. People may still face barriers linked to affordability, disability, geography, infrastructure, language or technology. Inclusive markets and essential services require deliberate choices about products, channels, pricing, information and accountability.",
        "Credence Africa supports economic inclusion as the theme that addresses these wider access barriers, distinct from the specific gaps covered under Gender and Women in Enterprise or Youth and Intergenerational Opportunity. We work across finance, healthcare, technology, mobility, education, infrastructure and public services.",
      ],
    },
    needs: {
      lead: "We help institutions determine:",
      items: [
        "Who remains excluded from the market, service or initiative",
        "Which product, infrastructure, policy or process creates the barrier",
        "What accessible and affordable delivery model is commercially or institutionally viable",
        "How capital and partnerships can support broader access",
        "What measures will show whether participation and outcomes improve",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build inclusion and accessibility capability.",
        items: [
          "Inclusive design and accessibility awareness programmes",
          "Leadership training on inclusive markets and services",
          "Disability inclusion and institutional capability programmes",
          "Affordability, infrastructure and service delivery learning",
          "Policy dialogues and stakeholder forums on economic inclusion",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research identifies exclusion, access gaps and viable pathways for participation.",
        items: [
          "Access, affordability and inclusion studies",
          "Disability and underserved market research",
          "Rural, urban and regional service gap analysis",
          "Inclusive product, channel and infrastructure research",
          "Policy, institutional and stakeholder mapping",
          "Economic inclusion data frameworks",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps institutions redesign strategy, services and initiatives around access.",
        items: [
          "Inclusive growth and accessibility strategy",
          "Inclusive product, service and channel design",
          "Affordable service and market development strategy",
          "Inclusive infrastructure and digital access advisory",
          "Policy, initiative and partnership design",
          "Impact, measurement and institutional capability frameworks",
        ],
      },
    ],
    mandates: [
      "A company improving access to products and services",
      "A financial institution designing an inclusive customer strategy",
      "A public institution assessing barriers to essential services",
      "An investor integrating inclusion into an investment thesis",
      "A development partner designing disability, rural or affordability initiatives",
    ],
    audiences: [
      "Corporations, SMEs and service providers",
      "Banks, insurers, investors and financial institutions",
      "Governments, cities and public agencies",
      "Foundations, nonprofits and development partners",
      "Associations, disability organisations and community institutions",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets with distinct access, infrastructure and institutional conditions. We can assess one market, compare the three or design a regional initiative for wider African implementation. Local stakeholder participation is built into research and initiative design.",
    why:
      "We connect social purpose to market and institutional design. We identify the real barrier, the people affected and the operating changes required. This creates more credible initiatives and stronger commercial or public value than broad inclusion commitments without delivery systems.",
    faqs: [
      {
        q: "How is this theme different from Gender and Women in Enterprise, or Youth and Intergenerational Opportunity?",
        a: "Gender and Women in Enterprise addresses gaps between women and men. Youth and Intergenerational Opportunity addresses entry into work and enterprise across age groups. Economic Inclusion and Accessibility addresses the broader barriers linked to affordability, disability, geography and infrastructure that can affect any underserved group.",
      },
      {
        q: "Can Credence Africa conduct disability inclusion research?",
        a: "Yes. We can design research on access, service use, market barriers, institutional capability and policy. We engage relevant organisations and specialists to ensure the work is grounded and responsible.",
      },
      {
        q: "Do you support inclusive product and service design?",
        a: "We support market research, strategy, stakeholder engagement and institutional design. Technical design and accessibility testing can be delivered with specialist partners.",
      },
      {
        q: "Can you work in Kenya, Nigeria and South Africa?",
        a: "Yes. We can structure country specific, comparative or regional inclusion mandates across the three priority markets and wider Africa.",
      },
    ],
    closing: {
      heading: "Build access into strategy, investment and delivery",
      body:
        "Credence Africa can help you identify who is excluded, why the barrier exists and what institutional or market response can change the outcome.",
      label: "Book an Economic Inclusion Consultation",
      consult: "research",
    },
    links: serviceLinks("research", "institute", "capital", "engage", "publicAffairs"),
  },
  {
    slug: "consumer-trust",
    kind: "theme",
    name: "Consumer Protection and Digital Trust",
    scope:
      "Fair treatment, product responsibility, privacy, fraud, complaints, online harm and responsible automated decisions.",
    icon: ShieldAlert,
    seoTitle: "Consumer Protection and Digital Trust Consulting in Africa",
    metaDescription:
      "Consumer protection, data privacy and digital trust advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "consumer protection consulting Africa",
      "digital trust advisory Africa",
      "data privacy consulting Africa",
      "consumer protection advisory Kenya",
      "fraud prevention consulting Nigeria",
      "digital trust advisory South Africa",
      "responsible AI governance Africa",
    ],
    h1: "Consumer Protection and Digital Trust Advisory Across Africa",
    intro:
      "Credence Africa helps regulated institutions, digital platforms and public bodies earn and keep consumer trust. We support fair treatment, product responsibility, privacy, fraud prevention, complaints handling and responsible automated decision-making across African markets.",
    actions: [
      { label: "Discuss a Consumer Protection Mandate", consult: "public-affairs" },
      { label: "Commission a Digital Trust Assessment", consult: "research" },
    ],
    positioning: {
      heading: "Earn the trust that markets and regulators now expect",
      paragraphs: [
        "Consumer trust is a commercial asset as much as a compliance obligation. Customers, regulators and partners now expect fair treatment, honest product design, protected personal data, a workable route to complain and a credible account of how automated systems reach a decision. A single failure in any of these can undo years of brand investment.",
        "Credence Africa supports financial institutions, telecoms, digital platforms, consumer businesses, regulators and public bodies that need to strengthen this position. We connect fair treatment and product responsibility to privacy practice, fraud and online harm exposure, complaints handling and the governance of AI and other automated decisions.",
      ],
    },
    needs: {
      lead: "We help institutions determine:",
      items: [
        "Where product design, pricing or sales practice creates unfair outcomes for customers",
        "How personal data is collected, used, shared and protected across the institution",
        "What fraud, scam or online harm exposure customers actually face",
        "Whether complaints are heard, tracked and resolved in a way that rebuilds trust",
        "What governance an automated or AI-assisted decision needs before it reaches a customer",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build consumer protection and digital trust capability.",
        items: [
          "Fair treatment and product responsibility programmes",
          "Data privacy and protection training for executives and teams",
          "Fraud and online harm awareness and response programmes",
          "Complaints handling and customer redress training",
          "Responsible AI and automated decision governance programmes",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb: "Our research identifies where customer trust is weakest and why.",
        items: [
          "Consumer protection and fair treatment assessments",
          "Privacy and data handling practice reviews",
          "Fraud, scam and online harm exposure studies",
          "Complaints data and customer experience analysis",
          "Automated decision and AI governance reviews",
          "Policy, regulation and stakeholder analysis",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps institutions redesign products, policies and systems around trust.",
        items: [
          "Consumer protection and fair treatment strategy",
          "Privacy and data governance policy design",
          "Fraud and online harm prevention strategy",
          "Complaints handling and redress system design",
          "Responsible AI and automated decision governance frameworks",
          "Public affairs and regulatory engagement on consumer policy",
        ],
      },
    ],
    mandates: [
      "A bank or fintech reviewing fair treatment and fraud controls before a product launch",
      "A digital platform strengthening privacy practice and complaints handling",
      "A telecom or consumer business assessing online harm exposure",
      "A company designing governance for an AI-assisted customer decision",
      "A regulator or association developing consumer protection policy research",
    ],
    audiences: [
      "Banks, insurers, fintechs and payment companies",
      "Telecoms, digital platforms and e-commerce businesses",
      "Consumer goods and retail companies",
      "Regulators, governments and consumer protection agencies",
      "Associations, foundations and development partners",
    ],
    geography:
      "Kenya, Nigeria and South Africa each have an active and evolving data protection and consumer protection regime, with distinct regulators, enforcement priorities and customer expectations. We can deliver country specific, comparative or regional mandates across the three markets and the wider continent.",
    why:
      "We connect consumer protection and digital trust to commercial outcomes, not only to compliance. A credible response requires evidence of where trust actually breaks down, a design response and the governance to sustain it. Legal interpretation, data protection registration and technical security testing are delivered with qualified specialist partners.",
    faqs: [
      {
        q: "What consumer protection and digital trust services does Credence Africa provide?",
        a: "We provide fair treatment assessments, privacy and data governance advisory, fraud and online harm research, complaints system design, responsible AI governance frameworks and regulatory engagement.",
      },
      {
        q: "Does Credence Africa provide legal compliance certification or data protection registration?",
        a: "No. Our role is commercial, strategic, research and governance focused. Legal interpretation, regulatory registration and technical security or privacy certification are delivered by qualified legal and technical specialists.",
      },
      {
        q: "Can you help govern an AI-assisted decision that affects customers?",
        a: "Yes. We can help design the governance, oversight and documentation around an automated or AI-assisted decision, including how customers are informed and how a decision can be reviewed. Technical model validation is delivered with qualified specialists.",
      },
      {
        q: "Can you support work in Kenya, Nigeria and South Africa?",
        a: "Yes. We can deliver country specific, comparative or regional consumer protection and digital trust mandates across the three priority markets and wider Africa.",
      },
    ],
    closing: {
      heading: "Build the trust your customers and regulators expect",
      body:
        "Credence Africa can help you identify where trust is weakest, redesign the policy or product response and govern the systems that now make decisions on your behalf.",
      label: "Book a Consumer Protection Consultation",
      consult: "public-affairs",
    },
    links: serviceLinks("publicAffairs", "research", "institute", "capital", "engage"),
  },
  {
    slug: "youth",
    kind: "theme",
    name: "Youth and Intergenerational Opportunity",
    scope:
      "Entry into work and enterprise, apprenticeship, leadership transition and progression.",
    icon: TrendingUp,
    seoTitle: "Youth and Intergenerational Opportunity Advisory in Africa",
    metaDescription:
      "Youth employment, apprenticeship and intergenerational leadership transition advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "youth employment consulting Africa",
      "youth enterprise advisory Africa",
      "apprenticeship programme design Africa",
      "youth employment Kenya",
      "youth entrepreneurship Nigeria",
      "leadership succession South Africa",
      "intergenerational workforce Africa",
    ],
    h1: "Youth and Intergenerational Opportunity Advisory Across Africa",
    intro:
      "Credence Africa helps employers, governments and institutions open a credible route into work and enterprise for young people, and manage the leadership transition from one generation to the next. We support apprenticeship design, youth enterprise, succession planning and progression across African sectors.",
    actions: [
      { label: "Discuss a Youth Opportunity Mandate", consult: "institute" },
      { label: "Commission Youth Employment Research", consult: "research" },
    ],
    positioning: {
      heading: "Build the pathway from entry to leadership",
      paragraphs: [
        "Africa's youthful population is a commercial and institutional opportunity only where there is a credible route from education into a first job, an apprenticeship or a viable enterprise, and then a real path to progression. The same institutions often face the opposite problem at the top: founders, boards and senior leaders who have not planned how authority, knowledge and ownership pass to the next generation.",
        "Credence Africa works across both ends of this pathway. We help employers design entry and apprenticeship routes, support young entrepreneurs and enterprises, and help family businesses, boards and institutions plan leadership transition and succession so progression is managed rather than left to chance.",
      ],
    },
    needs: {
      lead: "We help institutions determine:",
      items: [
        "What a credible entry route into work or enterprise looks like for young people in this sector",
        "How an apprenticeship, internship or graduate programme should be designed and resourced",
        "What support a young entrepreneur or youth-led enterprise needs to become investable",
        "Where leadership, authority or ownership is concentrated in one generation with no transition plan",
        "What evidence will show whether entry, progression or succession is actually working",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build capability for youth entry, enterprise and leadership transition.",
        items: [
          "Apprenticeship and graduate programme design training",
          "Youth entrepreneurship and enterprise readiness academies",
          "Mentorship and leadership development for young professionals",
          "Succession and leadership transition programmes for boards and family businesses",
          "Youth employment forums and intergenerational leadership dialogues",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb: "Our research identifies where entry, progression and transition break down.",
        items: [
          "Youth labour market and skills transition research",
          "Apprenticeship and entry-level programme evaluation",
          "Youth enterprise and entrepreneurship ecosystem mapping",
          "Succession readiness and leadership pipeline assessments",
          "Policy, institutional and stakeholder analysis",
          "Intergenerational workforce and ownership data frameworks",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps institutions design credible entry routes and manage leadership transition.",
        items: [
          "Youth employment and apprenticeship strategy",
          "Youth enterprise and investment readiness support",
          "Succession planning and leadership transition design",
          "Board and ownership transition advisory for family businesses",
          "Policy and public affairs engagement on youth employment",
          "Partnership and funding development for youth initiatives",
        ],
      },
    ],
    mandates: [
      "An employer designing or scaling an apprenticeship or graduate programme",
      "A youth-led enterprise preparing for investment or market access",
      "A government developing youth employment or entrepreneurship policy",
      "A family business or institution planning a leadership or ownership transition",
      "A foundation or development partner commissioning youth employment research",
    ],
    audiences: [
      "Corporations, SMEs and employers",
      "Governments, agencies and public institutions",
      "Family businesses, boards and institutional founders",
      "Foundations, nonprofits and development partners",
      "Universities, training institutions and youth enterprise networks",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets because they combine large youth populations, active enterprise ecosystems and a growing number of founder-led institutions approaching a leadership transition. We can design country specific work or compare entry and succession conditions across the three markets, with regional initiatives structured for wider African implementation.",
    why:
      "We treat entry and succession as one pathway rather than two separate problems. The evidence on who is entering work or enterprise and the evidence on who is exiting leadership inform the same institutional response. This avoids youth initiatives that sit apart from the institution's actual succession risk.",
    faqs: [
      {
        q: "What youth and intergenerational opportunity services does Credence Africa provide?",
        a: "We provide apprenticeship and graduate programme design, youth enterprise advisory, succession and leadership transition planning, research and policy support.",
      },
      {
        q: "How is this different from Workforce Skills, Leadership and Productivity?",
        a: "Workforce Skills, Leadership and Productivity addresses capability and productivity across an employer's or sector's workforce generally. Youth and Intergenerational Opportunity addresses entry into work and enterprise and the transition of leadership across age groups specifically. A workforce academy mandate can draw on both.",
      },
      {
        q: "Can Credence Africa help plan a succession at a family business?",
        a: "Yes. We can support the governance, timeline, leadership development and stakeholder communication around a succession. Legal structuring, tax and estate planning require appropriately licensed and qualified partners.",
      },
      {
        q: "Can you work in Kenya, Nigeria and South Africa?",
        a: "Yes. We can deliver country specific, comparative or regional mandates across the three priority markets and wider Africa.",
      },
    ],
    closing: {
      heading: "Manage entry and succession as one pathway",
      body:
        "Credence Africa can help you design a credible route into work or enterprise for young people and a managed transition for the leaders they will eventually succeed.",
      label: "Book a Youth Opportunity Consultation",
      consult: "institute",
    },
    links: serviceLinks("institute", "research", "publicAffairs", "capital", "engage"),
  },
];

export const themesBySlug: Record<string, Theme> = Object.fromEntries(
  themeList.map((t) => [t.slug, t]),
);
