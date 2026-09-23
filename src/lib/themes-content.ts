import {
  Accessibility,
  Banknote,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CloudSun,
  Cog,
  Globe,
  HardHat,
  Lightbulb,
  Rocket,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { HELP_HEADINGS, serviceLinks, type LandingPage } from "./landing-content";

/**
 * Cross sector theme landing pages, following the 2026 SEO publication copy.
 *
 * Themes carry the agendas that run across every sector: capital, trade,
 * industrialization, infrastructure, technology, climate, policy, governance,
 * inclusion, skills, enterprise, innovation, accessibility and urbanization.
 */
export type Theme = LandingPage;

export const themeList: Theme[] = [
  {
    slug: "investment",
    kind: "theme",
    name: "Capital, Finance and Investment",
    scope:
      "Capital strategy, investment readiness, investor intelligence, transaction preparation and investment facilitation.",
    icon: Banknote,
    seoTitle: "Capital Raising and Investment Advisory in Africa",
    metaDescription:
      "Capital raising preparation, investment structuring and investor intelligence across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "capital raising advisory Africa",
      "investment advisory Africa",
      "investment facilitation Africa",
      "capital raising Kenya",
      "investment readiness Nigeria",
      "investment structuring South Africa",
      "blended finance advisory Africa",
    ],
    h1: "Capital Raising and Investment Advisory Across Africa",
    intro:
      "Credence Africa helps enterprises, institutions and projects become capital ready and engage investors with a stronger strategic and commercial case. We support capital strategy, investment structuring, investor intelligence, transaction preparation and investment facilitation across African markets.",
    actions: [
      { label: "Discuss a Capital Mandate", consult: "capital" },
      { label: "Request an Investment Readiness Review", consult: "capital" },
    ],
    positioning: {
      heading: "From capital ambition to an investable case",
      paragraphs: [
        "Capital does not solve an unclear strategy, weak governance or an unproven commercial model. Investors need a coherent case. They need to understand the opportunity, the market, the team, the risks, the use of funds and the route to returns or impact.",
        "Credence Africa works with enterprises, institutions and projects that need to prepare for equity, debt, blended finance, development finance or strategic investment. We help clients define the capital requirement, strengthen readiness, structure the engagement process and connect the investment case to credible market evidence.",
      ],
    },
    needs: {
      lead: "Our work addresses the questions that determine capital readiness:",
      items: [
        "What type of capital is appropriate for the strategy and stage?",
        "Is the business, institution or project ready for investor scrutiny?",
        "What market evidence and financial logic support the investment case?",
        "Which investors or capital providers are relevant to the opportunity?",
        "What governance, risk and transaction work must be completed before engagement?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute, we prepare founders, executives, project sponsors and institutional leaders for capital conversations.",
        items: [
          "Investment readiness programs for enterprises and projects",
          "Executive training on capital strategy and investor engagement",
          "Board programs on governance, risk and investment oversight",
          "Fundraising preparation for SMEs, startups and growth institutions",
          "Investor forums and curated capital conversations",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our intelligence work identifies the capital landscape and tests the assumptions behind the investment case.",
        items: [
          "Investor, fund and capital provider mapping",
          "Sector and market opportunity research",
          "Transaction, valuation and comparable market intelligence",
          "Funding pipeline and development finance research",
          "Investment ecosystem and policy analysis",
          "Investor briefs and opportunity memoranda",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb: "Our advisory work structures the route from capital need to investor engagement.",
        items: [
          "Capital strategy and funding pathway design",
          "Investment readiness assessment and improvement plan",
          "Financial model coordination and investment case development",
          "Investor materials and data room preparation",
          "Investor identification, engagement planning and facilitation",
          "Transaction coordination with legal, tax, financial and technical advisers",
        ],
      },
    ],
    mandates: [
      "A growth company preparing for equity or debt capital",
      "A project sponsor developing an investment case and funding strategy",
      "An institution seeking blended or development finance",
      "An investor seeking pipeline, market or transaction intelligence",
      "A government or ecosystem partner designing an investment facilitation platform",
    ],
    audiences: [
      "Startups, SMEs, growth companies and corporations",
      "Projects, cooperatives, nonprofits and public interest institutions",
      "Private equity, venture capital, banks and investment funds",
      "Development finance institutions, foundations and impact investors",
      "Governments, investment agencies, accelerators and industry platforms",
    ],
    geography:
      "Kenya provides access to East African enterprises and investment networks. Nigeria offers a substantial pipeline of businesses, projects and sector opportunities. South Africa provides deep institutional capital, corporate networks and regional investment capabilities. We also map investors and opportunities across other African and global markets.",
    why:
      "Our role is to improve the quality of the opportunity and the discipline of the process. We connect strategy, market evidence, governance, financial requirements and investor engagement. We work with appropriately qualified legal, tax, accounting, technical and regulated financial partners where the mandate requires them.",
    faqs: [
      {
        q: "Can Credence Africa guarantee that we will raise capital?",
        a: "No. No credible adviser can guarantee an investment decision. We improve readiness, structure the process, strengthen the case and support engagement. Investors retain full discretion.",
      },
      {
        q: "What types of capital can Credence Africa help us prepare for?",
        a: "We support preparation for equity, debt, project finance, blended finance, development finance, impact capital and strategic investment. The appropriate route depends on the institution, stage, cash flows, risk and purpose.",
      },
      {
        q: "Does Credence Africa introduce clients to investors?",
        a: "Investor engagement can form part of a mandate when the opportunity is ready and suitable. Introductions are based on relevance, relationship context and investor interest. We do not operate as an unlicensed broker.",
      },
      {
        q: "Can you support capital raising in Kenya, Nigeria and South Africa?",
        a: "Yes. We can structure country specific or regional capital strategies, map relevant investors and institutions and support the preparation and engagement process.",
      },
    ],
    closing: {
      heading: "Prepare for capital with a stronger case",
      body:
        "Credence Africa can assess your readiness, clarify the capital pathway and structure the work required before investor engagement.",
      label: "Book an Investment Readiness Consultation",
      consult: "capital",
    },
    links: serviceLinks("capital", "research", "trade", "publicAffairs", "institute"),
  },
  {
    slug: "trade",
    kind: "theme",
    name: "Trade, Market Access and Regional Integration",
    scope:
      "Market selection, entry strategy, partner development, trade and distribution pathways across African markets.",
    icon: Globe,
    seoTitle: "Africa Market Entry and Trade Advisory",
    metaDescription:
      "Africa market entry, trade and expansion advisory for Kenya, Nigeria, South Africa and regional African markets.",
    keywords: [
      "Africa market entry consulting",
      "trade advisory Africa",
      "market access consulting Africa",
      "market entry Kenya",
      "market entry Nigeria",
      "market entry South Africa",
      "Africa expansion strategy",
    ],
    h1: "Africa Market Entry, Trade and Regional Expansion Advisory",
    intro:
      "Credence Africa helps companies, investors and institutions enter African markets, expand across borders and build credible trade and distribution pathways. We combine market intelligence, stakeholder strategy, partner development, policy navigation and commercial execution planning.",
    actions: [
      { label: "Discuss an Africa Market Entry Mandate", consult: "trade" },
      { label: "Request a Market Opportunity Assessment", consult: "research" },
    ],
    positioning: {
      heading: "Enter and expand across African markets with evidence",
      paragraphs: [
        "Africa is not one market. Each country has distinct customers, regulations, institutions, distribution systems, competitive conditions and business cultures. A credible expansion strategy must begin with market selection and local evidence.",
        "Credence Africa supports foreign companies entering Africa and African businesses expanding across the continent. We help clients compare markets, understand demand, identify partners, navigate institutional requirements and design a practical route to market. Our work covers goods, services, investment, digital trade and regional value chains.",
      ],
    },
    needs: {
      lead: "We help leadership teams answer the core market entry questions:",
      items: [
        "Which country or city should receive priority?",
        "Who are the customers, competitors, partners and gatekeepers?",
        "What regulatory, tax, trade and institutional conditions affect entry?",
        "Which distribution, partnership or operating model is most credible?",
        "What should happen before investment, launch or regional expansion?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we prepare teams and partners to execute trade and market entry plans.",
        items: [
          "Africa market entry and regional expansion programs",
          "Export readiness and trade capability training",
          "Partner, distributor and stakeholder engagement workshops",
          "AfCFTA and regional integration executive education",
          "Trade missions, investment missions and buyer forums",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research provides the country, sector and customer intelligence required for market selection and entry decisions.",
        items: [
          "Country and sector opportunity assessments",
          "Market size, demand, pricing and customer research",
          "Competitor, channel and distribution analysis",
          "Regulatory, policy and stakeholder intelligence",
          "Partner, buyer, supplier and investor mapping",
          "Trade flow, value chain and regional integration studies",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work turns market intelligence into an executable entry or expansion plan.",
        items: [
          "Market selection and prioritization",
          "Entry strategy and operating model design",
          "Partner, distributor and institutional engagement",
          "Trade, export and market access strategy",
          "Public affairs and regulatory navigation",
          "Launch, expansion and post entry support planning",
        ],
      },
    ],
    mandates: [
      "A global company selecting its first or next African market",
      "An African business expanding from one region into another",
      "An exporter seeking buyers, distributors or institutional access",
      "An investor assessing market conditions before committing capital",
      "A government or association organizing a trade mission or market access initiative",
    ],
    audiences: [
      "International companies and foreign investors",
      "African corporations, SMEs and growth businesses",
      "Exporters, manufacturers, service providers and technology companies",
      "Trade agencies, investment promotion institutions and associations",
      "Banks, development institutions, embassies and business networks",
    ],
    geography:
      "Kenya provides a strategic base for East African expansion. Nigeria offers scale and access to major West African commercial networks. South Africa offers established corporate, financial and regional distribution capabilities. We compare these markets against the client's sector, objectives, resources and risk appetite. We also support entry into other African jurisdictions.",
    why:
      "We combine commercial intelligence with policy, stakeholder and institutional execution. We do not stop at a country report. We help clients decide where to enter, how to enter, who to engage and what must be true before resources are committed.",
    faqs: [
      {
        q: "What does an Africa market entry consulting mandate include?",
        a: "A mandate can include market comparison, demand analysis, competitor research, regulatory review, stakeholder mapping, partner identification, entry model design and an implementation roadmap.",
      },
      {
        q: "Can Credence Africa find distributors or local partners?",
        a: "Yes. We can define partner criteria, map candidates, conduct initial screening and support engagement. Legal, financial and technical due diligence should be completed by appropriately qualified advisers before appointment.",
      },
      {
        q: "Do you support both foreign and African companies?",
        a: "Yes. We support foreign companies entering Africa and African companies expanding into new countries or regions.",
      },
      {
        q: "Can you compare Kenya, Nigeria and South Africa for market entry?",
        a: "Yes. We can compare commercial demand, regulation, competition, cost, partnerships, institutional conditions and route to market options for the client's specific sector and offer.",
      },
    ],
    closing: {
      heading: "Choose the right African market and enter it with discipline",
      body:
        "Credence Africa can help you move from a broad Africa ambition to a focused market choice, a grounded entry strategy and a clear execution plan.",
      label: "Book an Africa Market Entry Consultation",
      consult: "trade",
    },
    links: serviceLinks("trade", "research", "publicAffairs", "capital", "engage"),
  },
  {
    slug: "industrialization",
    kind: "theme",
    name: "Industrialization, Manufacturing and Value Chains",
    scope:
      "Industrial strategy, value chain development, local production, processing, local content and industrial policy.",
    icon: Cog,
    seoTitle: "Manufacturing and Industrial Development Advisory in Africa",
    metaDescription:
      "Manufacturing, industrial development and value chain advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "manufacturing consulting Africa",
      "industrial development advisory Africa",
      "value chain consulting Africa",
      "manufacturing advisory Kenya",
      "industrialization consulting Nigeria",
      "manufacturing consulting South Africa",
      "local content advisory Africa",
    ],
    h1: "Manufacturing, Industrial Development and Value Chain Advisory Across Africa",
    intro:
      "Credence Africa helps companies, investors and public institutions build competitive manufacturing and value chain opportunities across African sectors. We support market intelligence, investment preparation, trade, local production, processing, industrial policy and institutional capability.",
    actions: [
      { label: "Discuss an Industrial Development Mandate", consult: "trade" },
      { label: "Commission a Value Chain Study", consult: "research" },
    ],
    positioning: {
      heading: "Build productive capacity around real markets and investable demand",
      paragraphs: [
        "Industrial development succeeds when production is connected to demand, inputs, infrastructure, skills, finance, trade and policy. A factory, processing facility or industrial zone requires a full commercial system. The investment case must account for supply, customers, cost, logistics and institutional execution.",
        "Credence Africa treats manufacturing and processing as cross sector economic capabilities. We support food processing, pharmaceuticals, mobility, energy equipment, consumer goods, technology hardware and other productive sectors. This approach preserves sector expertise while allowing value chain and industrial strategy to operate across the economy.",
      ],
    },
    needs: {
      lead: "We help clients answer the questions that determine industrial viability:",
      items: [
        "What product, value chain or processing opportunity is commercially justified?",
        "Are inputs, skills, infrastructure, customers and logistics available at the required scale?",
        "What capital, incentives and partnerships will support execution?",
        "How can local production connect to regional and global trade?",
        "What policy and institutional changes are required for competitiveness?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we strengthen industrial leadership, supplier capability and institutional coordination.",
        items: [
          "Manufacturing leadership and productivity programs",
          "Supplier development and local content training",
          "Investment readiness for manufacturers and processors",
          "Trade, export and value chain capability programs",
          "Industrial forums, buyer supplier conversations and policy roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb: "Our research tests the market and maps the full value chain before capital is committed.",
        items: [
          "Industrial and manufacturing opportunity studies",
          "Value chain, input, supplier and buyer mapping",
          "Demand, pricing, competition and import substitution analysis",
          "Trade, logistics and regional market research",
          "Industrial policy, incentives and economic zone analysis",
          "Investment pipeline and ecosystem intelligence",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work supports industrial strategy, investment preparation and market connection.",
        items: [
          "Manufacturing and processing growth strategy",
          "Capital readiness and investment structuring",
          "Industrial project and investment facilitation",
          "Trade, export and regional value chain strategy",
          "Local content and supplier development strategy",
          "Policy, public affairs and institutional engagement",
        ],
      },
    ],
    mandates: [
      "A company assessing local production or processing in an African market",
      "An investor evaluating a manufacturing or value addition opportunity",
      "A government developing an industrial, local content or economic zone strategy",
      "An association building supplier capability and sector competitiveness",
      "A development partner supporting value chains, jobs or productive enterprise",
    ],
    audiences: [
      "Manufacturers, processors and industrial service companies",
      "Agribusiness, healthcare, energy, mobility and consumer companies",
      "Investors, banks and development finance institutions",
      "Governments, economic zones and investment agencies",
      "Associations, universities, suppliers and development partners",
    ],
    geography:
      "Kenya is a priority market for regional manufacturing, food processing, pharmaceuticals and East African value chains. Nigeria is a priority market for scale, domestic demand, industrial capacity and import substitution. South Africa is a priority market for advanced manufacturing, industrial finance, supplier networks and regional trade. We also support value chains that connect these markets to the wider continent.",
    why:
      "We begin with the commercial system. We examine the market, inputs, logistics, policy, infrastructure, capital and institutional capacity together. This helps clients avoid isolated investments and build industrial opportunities that can compete, scale and connect to demand.",
    faqs: [
      {
        q: "Why is manufacturing a theme rather than one Credence Africa sector?",
        a: "Manufacturing occurs inside many sectors. Food processing belongs to agriculture. Pharmaceutical manufacturing belongs to healthcare. Vehicle assembly belongs to mobility. The cross sector theme allows Credence Africa to apply industrial expertise without losing sector specific knowledge.",
      },
      {
        q: "Can Credence Africa assess a manufacturing investment opportunity?",
        a: "Yes. We can assess demand, competition, inputs, supply chains, trade, policy, incentives, partners and capital requirements. Engineering and technical feasibility are delivered with qualified specialists.",
      },
      {
        q: "Do you support local content and supplier development?",
        a: "Yes. We can map suppliers, assess capability gaps, design supplier development programs and connect local content objectives to commercial performance.",
      },
      {
        q: "Can you support projects in Kenya, Nigeria and South Africa?",
        a: "Yes. We can conduct country specific or comparative work across the three markets and support wider African value chain strategies.",
      },
    ],
    closing: {
      heading: "Build an industrial opportunity around evidence",
      body:
        "Credence Africa can help you test the market, map the value chain, structure the investment case and build the institutional pathway for execution.",
      label: "Book an Industrial Development Consultation",
      consult: "trade",
    },
    links: serviceLinks("trade", "capital", "research", "publicAffairs", "institute"),
  },
  {
    slug: "infrastructure",
    kind: "theme",
    name: "Infrastructure and Project Development",
    scope:
      "Project preparation, strategic case development, capital pathway design and institutional coordination for infrastructure.",
    icon: HardHat,
    seoTitle: "Infrastructure and Project Development Advisory in Africa",
    metaDescription:
      "Infrastructure advisory, project preparation and investment facilitation across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "infrastructure advisory Africa",
      "project development consulting Africa",
      "project preparation Africa",
      "infrastructure advisory Kenya",
      "infrastructure consulting Nigeria",
      "project finance advisory South Africa",
      "public private partnership advisory Africa",
    ],
    h1: "Infrastructure and Project Development Advisory Across Africa",
    intro:
      "Credence Africa helps project sponsors, investors and public institutions move infrastructure opportunities from broad concepts toward credible, investable and institutionally supported mandates. We work across transport, energy, digital, healthcare, agricultural, urban and industrial infrastructure.",
    actions: [
      { label: "Discuss an Infrastructure Mandate", consult: "capital" },
      { label: "Request a Project Readiness Review", consult: "capital" },
    ],
    positioning: {
      heading: "Prepare projects for institutions, capital and execution",
      paragraphs: [
        "Infrastructure projects fail early when the commercial case, institutional ownership, stakeholder environment or capital pathway is unclear. Strong project development begins before technical design. It requires a defined need, credible demand, a delivery structure and disciplined coordination.",
        "Credence Africa supports the strategic, market, investment, policy and institutional dimensions of project development. We help clients clarify the concept, assess demand, map stakeholders, prepare the investment case and coordinate the specialist work required for progress.",
      ],
    },
    needs: {
      lead: "We support projects that need clarity on:",
      items: [
        "The economic and commercial case for the infrastructure",
        "The role of public institutions, private partners and users",
        "The project structure, revenue logic and capital pathway",
        "The policy, land, stakeholder and approval environment",
        "The specialist studies and decisions required before procurement or investment",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build project preparation, governance and stakeholder capability.",
        items: [
          "Project preparation and investment readiness programs",
          "Public private partnership and infrastructure finance training",
          "Governance and oversight programs for project sponsors",
          "Stakeholder engagement and institutional coordination workshops",
          "Project forums, investor roundtables and public private dialogues",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research establishes whether the project responds to real demand and fits the wider market and policy environment.",
        items: [
          "Infrastructure demand and market assessments",
          "Project pipeline and investment landscape research",
          "User, customer and willingness to pay studies",
          "Policy, institutional and stakeholder analysis",
          "Economic, sector and regional context research",
          "Partner, investor and specialist mapping",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work organizes the strategic and institutional pathway from concept to execution.",
        items: [
          "Project concept and strategic case development",
          "Project readiness and gap assessment",
          "Capital strategy and investment facilitation",
          "Stakeholder, government and partner engagement",
          "Public private partnership strategy and coordination",
          "Specialist adviser procurement and mandate coordination",
        ],
      },
    ],
    mandates: [
      "A sponsor preparing an energy, transport, digital or social infrastructure project",
      "A public institution structuring a project pipeline or investor engagement process",
      "An investor assessing demand, policy and stakeholder conditions",
      "A developer seeking a market, capital and institutional pathway",
      "A development partner building project preparation capability",
    ],
    audiences: [
      "Project sponsors, developers and operating companies",
      "Governments, cities, agencies and public institutions",
      "Investors, banks and development finance institutions",
      "Contractors, technology providers and specialist advisers",
      "Associations, universities and development partners",
    ],
    geography:
      "Kenya, Nigeria and South Africa present distinct infrastructure pipelines, institutional structures and capital environments. We design country specific approaches and support regional infrastructure, trade corridor and cross border projects where the opportunity requires it. Our work can extend to other African markets through local research and qualified project partners.",
    why:
      "Our role is to create strategic and institutional coherence. We do not replace engineers, quantity surveyors, environmental specialists, legal advisers or technical consultants. We coordinate the commercial, capital, policy and stakeholder dimensions and bring qualified specialists into the mandate as required.",
    faqs: [
      {
        q: "Does Credence Africa provide engineering services?",
        a: "No. Credence Africa provides strategy, market research, capital preparation, investment facilitation, policy and stakeholder advisory. Engineering and technical design are delivered by qualified specialist partners.",
      },
      {
        q: "What is a project readiness review?",
        a: "It assesses the strategic case, demand, institutional ownership, governance, approvals, technical studies, revenue model, capital pathway, risks and next decisions required for progress.",
      },
      {
        q: "Can Credence Africa support public private partnerships?",
        a: "Yes. We can support early strategy, market assessment, stakeholder engagement, project readiness, investor intelligence and institutional coordination. Legal, financial and technical transaction advice is provided by appropriately qualified specialists.",
      },
      {
        q: "Can you support infrastructure projects in Kenya, Nigeria and South Africa?",
        a: "Yes. We can structure country specific or comparative mandates and support projects with regional or pan African relevance.",
      },
    ],
    closing: {
      heading: "Turn an infrastructure concept into a structured project mandate",
      body:
        "Credence Africa can help you define the case, assess readiness, organize the stakeholders and build the pathway toward capital and execution.",
      label: "Book an Infrastructure Consultation",
      consult: "capital",
    },
    links: serviceLinks("capital", "research", "publicAffairs", "trade", "institute"),
  },
  {
    slug: "transformation",
    kind: "theme",
    name: "Technology, AI and Digital Transformation",
    scope:
      "AI strategy, use case prioritization, data governance, operating model design and responsible technology adoption.",
    icon: BrainCircuit,
    seoTitle: "AI and Digital Transformation Consulting in Africa",
    metaDescription:
      "AI strategy, digital transformation and responsible technology advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "AI consulting Africa",
      "digital transformation consulting Africa",
      "AI strategy Africa",
      "AI consulting Kenya",
      "digital transformation Nigeria",
      "AI advisory South Africa",
      "responsible AI training Africa",
    ],
    h1: "AI and Digital Transformation Advisory Across Africa",
    intro:
      "Credence Africa helps boards, executives and institutions make disciplined decisions about artificial intelligence, data and digital transformation. We connect technology choices to strategy, governance, people, policy and measurable institutional value.",
    actions: [
      { label: "Discuss an AI or Digital Transformation Mandate", consult: "institute" },
      { label: "Book an Executive AI Briefing", consult: "institute" },
    ],
    positioning: {
      heading: "Move from technology interest to institutional value",
      paragraphs: [
        "Artificial intelligence and digital systems create opportunities across every sector. Adoption also introduces governance, data, workforce, procurement, security and accountability questions. Institutions need a clear business case and a practical operating model.",
        "Credence Africa supports technology adoption as a cross sector transformation theme. We work with financial institutions, healthcare organizations, agribusinesses, transport companies, public institutions, consumer businesses and development actors. Our focus is the strategic decision, the institutional readiness and the path to responsible execution.",
      ],
    },
    needs: {
      lead: "We help leaders answer the questions that should come before adoption:",
      items: [
        "Which use cases align with the institution's strategy and operating reality?",
        "What data, systems, skills and governance are required?",
        "How should leaders assess value, risk and implementation priority?",
        "What policy, ethical and stakeholder obligations must be addressed?",
        "How should the organization prepare its people and operating model?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute, we build executive and institutional capability for responsible technology adoption.",
        items: [
          "Executive AI literacy for boards and senior leadership",
          "AI strategy and responsible adoption programs",
          "Digital transformation leadership and operating model training",
          "Data governance, procurement and risk awareness",
          "Sector specific learning for finance, health, agriculture, mobility and public institutions",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research gives institutions an evidence base for technology and transformation decisions.",
        items: [
          "AI adoption and readiness assessments",
          "Digital maturity and institutional capability studies",
          "Technology landscape, vendor and ecosystem research",
          "Sector use case and value analysis",
          "Policy, governance, data and risk intelligence",
          "Digital economy publications and executive briefs",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work converts technology ambition into a focused strategy and implementation pathway.",
        items: [
          "AI and digital transformation strategy",
          "Use case prioritization and business case development",
          "Governance, policy and accountability frameworks",
          "Operating model, workforce and capability planning",
          "Technology partner and procurement strategy",
          "Public affairs and digital policy engagement",
        ],
      },
    ],
    mandates: [
      "A board seeking a clear AI strategy and governance position",
      "A company identifying practical use cases and transformation priorities",
      "A public institution developing a digital or AI capability initiative",
      "An investor or association assessing technology adoption in a sector",
      "A development partner designing responsible digital transformation support",
    ],
    audiences: [
      "Corporations, SMEs and growth businesses",
      "Banks, insurers, healthcare providers and agribusinesses",
      "Governments, agencies and public institutions",
      "Investors, associations and development institutions",
      "Universities, professional bodies and ecosystem platforms",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets because they combine active technology ecosystems with substantial institutional demand. Our work can compare adoption conditions across the three markets or focus on one institution, sector or country. We also support regional and pan African transformation initiatives.",
    why:
      "We start with institutional value. Technology selection follows the strategy, use case, data, governance and capability assessment. We work with implementation and technical partners when the mandate moves into software, systems integration, cybersecurity or engineering.",
    faqs: [
      {
        q: "What is the difference between AI strategy and technology implementation?",
        a: "AI strategy defines the institutional objectives, use cases, value, governance, data, capability and operating requirements. Implementation configures or builds the systems. Credence Africa leads the strategic and institutional work and engages technical partners where required.",
      },
      {
        q: "Can Credence Africa train our board on AI?",
        a: "Yes. We design executive AI briefings and board programs focused on strategy, governance, risk, accountability and sector relevant use cases.",
      },
      {
        q: "Do you support public institutions?",
        a: "Yes. We support public institutions with AI and digital strategy, policy research, capability building, governance frameworks and stakeholder engagement.",
      },
      {
        q: "Can you work across Kenya, Nigeria and South Africa?",
        a: "Yes. We can deliver country specific work or comparative research and strategy across the three priority markets.",
      },
    ],
    closing: {
      heading: "Build an AI and digital strategy grounded in institutional reality",
      body:
        "Credence Africa can help you identify the right use cases, establish governance and prepare the organization for responsible execution.",
      label: "Book an AI and Digital Transformation Consultation",
      consult: "institute",
    },
    links: serviceLinks("institute", "research", "publicAffairs", "engage", "capital"),
  },
  {
    slug: "climate",
    kind: "theme",
    name: "Climate, Sustainability and Resilience",
    scope:
      "Climate finance, energy transition, adaptation, resilience, carbon markets, circular economy and institutional sustainability.",
    icon: CloudSun,
    seoTitle: "Climate and Sustainability Consulting in Africa",
    metaDescription:
      "Climate strategy, sustainability, resilience and climate finance advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "climate consulting Africa",
      "sustainability advisory Africa",
      "climate finance advisory Africa",
      "climate consulting Kenya",
      "sustainability consulting Nigeria",
      "climate advisory South Africa",
      "resilience strategy Africa",
    ],
    h1: "Climate, Sustainability and Resilience Advisory Across Africa",
    intro:
      "Credence Africa helps businesses, investors and institutions integrate climate, sustainability and resilience into strategy, investment and market development. We support climate finance, policy, research, institutional capability and commercially grounded transition planning.",
    actions: [
      { label: "Discuss a Climate or Sustainability Mandate", consult: "capital" },
      { label: "Commission Climate Market Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Turn climate responsibility into strategic and institutional action",
      paragraphs: [
        "Climate risk affects capital, supply chains, infrastructure, operations, communities and market access. Sustainability expectations also influence investors, customers, regulators and partners. Institutions need a clear response that connects environmental priorities to commercial and public interest outcomes.",
        "Credence Africa works across climate finance, energy transition, adaptation, resilience, carbon markets, circular economy, sustainable infrastructure and institutional sustainability. We support clients that need to understand the opportunity, assess exposure, build capability or structure a credible initiative.",
      ],
    },
    needs: {
      lead: "We help institutions determine:",
      items: [
        "Which climate and sustainability issues are financially and operationally material?",
        "What transition, adaptation or resilience priorities require action?",
        "What capital and partnerships can support the strategy?",
        "What policy, reporting and stakeholder expectations must be addressed?",
        "How should climate commitments translate into programs, governance and measurable decisions?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build climate, sustainability and resilience capability.",
        items: [
          "Executive education on climate risk and sustainability strategy",
          "Climate finance and investment readiness programs",
          "Board and governance programs for climate oversight",
          "Carbon market, circular economy and resilience learning programs",
          "Climate policy dialogues, investor forums and sector roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb: "Our research helps clients understand risk, opportunity, policy and investment conditions.",
        items: [
          "Climate and sustainability market assessments",
          "Climate finance and investment landscape research",
          "Transition, adaptation and resilience studies",
          "Carbon market and circular economy intelligence",
          "Policy, regulation and stakeholder analysis",
          "Sector reports, opportunity briefs and commissioned publications",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work turns climate priorities into strategic, capital and institutional action.",
        items: [
          "Climate and sustainability strategy",
          "Climate finance and investment preparation",
          "Resilience and adaptation initiative design",
          "Stakeholder, policy and public affairs strategy",
          "Sustainable market and partnership development",
          "Governance, capability and implementation planning",
        ],
      },
    ],
    mandates: [
      "A company integrating climate risk into growth and investment decisions",
      "A climate venture preparing for capital and market entry",
      "An investor assessing climate opportunity or transition exposure",
      "A government or association developing policy research and stakeholder engagement",
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
      "Kenya is a priority market for climate innovation, renewable energy, agriculture and resilience. Nigeria is a priority market for energy access, infrastructure, cities and large scale transition needs. South Africa is a priority market for industrial transition, power, finance and sustainability governance. We can also structure regional and pan African work.",
    why:
      "We connect climate ambition to capital, policy, markets and institutional execution. We avoid generic commitments. Our work defines the decision, the evidence, the governance and the route to implementation. Technical climate science, verification and certification are delivered with qualified specialists.",
    faqs: [
      {
        q: "What climate consulting services does Credence Africa provide?",
        a: "We provide climate strategy, sustainability advisory, climate finance preparation, market research, policy analysis, stakeholder engagement, capability building and initiative design.",
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
        a: "Yes. We can deliver country specific, comparative or regional climate and sustainability mandates across the three priority markets and the wider continent.",
      },
    ],
    closing: {
      heading: "Build a climate strategy that can be governed and financed",
      body:
        "Credence Africa can help you define the priority, establish the evidence and organize the capital, policy and capability required for action.",
      label: "Book a Climate and Sustainability Consultation",
      consult: "capital",
    },
    links: serviceLinks("capital", "publicAffairs", "research", "institute", "trade"),
  },
  {
    slug: "policy",
    kind: "theme",
    name: "Policy, Regulation and Public Affairs",
    scope:
      "Regulatory intelligence, policy research, stakeholder strategy, government engagement and evidence led convening.",
    icon: Scale,
    seoTitle: "Public Affairs and Policy Advisory in Africa",
    metaDescription:
      "Public affairs, regulatory strategy and policy advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "public affairs consulting Africa",
      "policy advisory Africa",
      "regulatory strategy Africa",
      "public affairs Kenya",
      "government relations Nigeria",
      "policy consulting South Africa",
      "stakeholder engagement Africa",
    ],
    h1: "Public Affairs, Policy and Regulatory Advisory Across Africa",
    intro:
      "Credence Africa helps organizations understand policy environments, navigate regulation and engage public institutions with credibility. We combine regulatory intelligence, policy research, stakeholder strategy, public affairs and evidence led convening across African markets.",
    actions: [
      { label: "Discuss a Public Affairs Mandate", consult: "public-affairs" },
      { label: "Request a Policy and Regulatory Brief", consult: "research" },
    ],
    positioning: {
      heading: "Navigate policy and regulation with evidence and institutional judgment",
      paragraphs: [
        "Policy and regulation shape market access, investment, competition, consumer protection and institutional legitimacy. A weak response can delay growth, increase risk and damage trust. Effective public affairs requires evidence, ethical engagement and a clear understanding of government, industry and public interest concerns.",
        "Credence Africa supports companies, investors, associations, governments and development institutions. We help clients interpret policy, anticipate regulatory change, develop credible positions and engage stakeholders around practical solutions.",
      ],
    },
    needs: {
      lead: "We are engaged when leaders need to understand:",
      items: [
        "Which policy and regulatory issues materially affect the strategy",
        "Who holds formal authority, influence, expertise and public legitimacy",
        "What evidence supports a credible institutional position",
        "How stakeholders should be engaged lawfully and transparently",
        "What forum, coalition or policy process can move the issue forward",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build public affairs capability and create structured spaces for institutional dialogue.",
        items: [
          "Executive education on public affairs and regulatory strategy",
          "Government relations and stakeholder engagement training",
          "Policy writing, advocacy and issues management programs",
          "Board briefings on political and regulatory risk",
          "Policy roundtables, closed door dialogues and public forums",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our intelligence work gives clients a current view of policy, institutions, stakeholders and emerging issues.",
        items: [
          "Policy and regulatory research",
          "Political economy and institutional analysis",
          "Stakeholder mapping and influence assessment",
          "Regulatory monitoring and executive briefs",
          "Industry position papers and public interest studies",
          "Media, narrative and issue intelligence",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work structures the organization's response to policy and regulatory change.",
        items: [
          "Public affairs and government engagement strategy",
          "Regulatory navigation and market access support",
          "Policy position and advocacy strategy",
          "Coalition, association and stakeholder strategy",
          "Issues management and institutional communications",
          "Policy initiative and convening design",
        ],
      },
    ],
    mandates: [
      "A company preparing for regulatory change or market entry",
      "An industry association developing a common policy position",
      "An investor assessing political and regulatory conditions",
      "A public institution seeking research and stakeholder consultation",
      "A development partner building a policy reform or public interest initiative",
    ],
    audiences: [
      "Corporations, SMEs and foreign investors",
      "Industry associations and professional bodies",
      "Governments, regulators and public institutions",
      "Foundations, nonprofits and development partners",
      "Investors, universities, media and research institutions",
    ],
    geography:
      "We support public affairs and policy mandates across Africa, with priority market coverage in Kenya, Nigeria and South Africa. Each market has distinct institutions, policy processes and stakeholder expectations. Regional and continental mandates can include the African Union, regional economic communities and pan African industry institutions.",
    why:
      "Our approach is evidence led, lawful and institutionally responsible. We do not treat public affairs as access alone. We build the policy case, map the stakeholder system, define the engagement purpose and create a process that can withstand public and institutional scrutiny.",
    faqs: [
      {
        q: "What public affairs services does Credence Africa provide?",
        a: "We provide policy research, regulatory intelligence, stakeholder mapping, government engagement strategy, advocacy planning, issues management, coalition support, executive training and policy convening.",
      },
      {
        q: "Does Credence Africa lobby governments?",
        a: "We support lawful and transparent public affairs, policy advocacy and stakeholder engagement. The scope depends on the jurisdiction, issue and applicable legal and ethical requirements.",
      },
      {
        q: "Can Credence Africa monitor regulatory developments?",
        a: "Yes. We can provide ongoing regulatory monitoring, issue briefs, stakeholder intelligence and executive analysis for selected sectors and markets.",
      },
      {
        q: "Can you support policy work in Kenya, Nigeria and South Africa?",
        a: "Yes. We can structure country specific, comparative or regional mandates across the three markets and wider Africa.",
      },
    ],
    closing: {
      heading: "Build a credible response to policy and regulatory change",
      body:
        "Credence Africa can help you understand the issue, develop the evidence, align the institution and engage the right stakeholders.",
      label: "Book a Public Affairs Consultation",
      consult: "public-affairs",
    },
    links: serviceLinks("publicAffairs", "research", "engage", "trade", "institute"),
  },
  {
    slug: "governance",
    kind: "theme",
    name: "Governance, Institutions and Leadership",
    scope:
      "Board effectiveness, governance frameworks, institutional strategy, operating models and leadership capability.",
    icon: ShieldCheck,
    seoTitle: "Corporate Governance and Institutional Strengthening in Africa",
    metaDescription:
      "Corporate governance, board effectiveness and institutional strengthening across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "corporate governance advisory Africa",
      "institutional strengthening Africa",
      "board training Africa",
      "governance advisory Kenya",
      "corporate governance Nigeria",
      "board effectiveness South Africa",
      "leadership development Africa",
    ],
    h1: "Governance, Institutional Strengthening and Leadership Across Africa",
    intro:
      "Credence Africa helps boards, executives and institutions build the governance, strategy and leadership systems required for durable performance. We support corporations, cooperatives, nonprofits, public institutions and sector bodies across African markets.",
    actions: [
      { label: "Discuss a Governance Mandate", consult: "institute" },
      { label: "Book a Board and Leadership Review", consult: "institute" },
    ],
    positioning: {
      heading: "Build institutions that can govern, decide and execute",
      paragraphs: [
        "Strong institutions convert ambition into consistent decisions. They define authority, allocate resources, manage risk and hold leadership accountable. Weak governance creates delay, confusion, unmanaged exposure and dependence on individuals.",
        "Credence Africa supports governance and institutional development as a cross sector theme. We help clients clarify mandates, strengthen boards, align strategy, improve operating structures and build leadership capability. Our work focuses on how the institution actually makes decisions and delivers results.",
      ],
    },
    needs: {
      lead: "We support institutions that need clarity on:",
      items: [
        "The role, composition and effectiveness of the board",
        "The relationship between governance, management and ownership",
        "The strategy, operating model and decision rights of the institution",
        "The policies, controls and accountability systems required for growth",
        "The leadership and capability required for execution and succession",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute, we build board, executive and institutional leadership capability.",
        items: [
          "Board induction and governance education",
          "Board effectiveness and committee programs",
          "Executive leadership and strategy execution",
          "Governance for cooperatives, nonprofits and public institutions",
          "Risk, accountability and institutional stewardship programs",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research and assessment work establishes the evidence for institutional improvement.",
        items: [
          "Governance and institutional assessments",
          "Board effectiveness reviews",
          "Strategy, operating model and capability analysis",
          "Policy, process and accountability reviews",
          "Institutional benchmarking and stakeholder research",
          "Leadership, workforce and organizational intelligence",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps institutions redesign governance and align leadership with strategy.",
        items: [
          "Governance framework and board structure design",
          "Institutional strategy and operating model development",
          "Decision rights, policy and accountability systems",
          "Board and executive alignment",
          "Risk, compliance and institutional resilience strategy",
          "Leadership succession and capability planning",
        ],
      },
    ],
    mandates: [
      "A company strengthening governance before capital or expansion",
      "A board reviewing its structure, committees and effectiveness",
      "A cooperative improving member governance and institutional performance",
      "A nonprofit or public institution aligning strategy, mandate and operating systems",
      "A development partner designing an institutional strengthening initiative",
    ],
    audiences: [
      "Corporations, SMEs and family businesses",
      "Boards, investors and holding companies",
      "Cooperatives, SACCOs and member institutions",
      "Nonprofits, foundations and faith institutions",
      "Governments, agencies, associations and development partners",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets for corporate, cooperative, nonprofit and public institutional mandates. We also support regional bodies, pan African organizations and institutions operating across multiple jurisdictions. Each engagement is adapted to the legal form, ownership structure, mandate and operating context of the institution.",
    why:
      "We connect governance to strategy and execution. Policies alone do not strengthen an institution. The board, leadership, structure, information, incentives and accountability system must work together. Credence Africa designs governance around the institution's purpose, scale, risk and growth direction.",
    faqs: [
      {
        q: "What governance advisory services does Credence Africa provide?",
        a: "We provide board reviews, governance framework design, institutional strategy, operating model development, accountability systems, leadership programs, policy reviews and institutional strengthening.",
      },
      {
        q: "Can Credence Africa train our board?",
        a: "Yes. Credence Institute delivers board induction, governance, strategy, risk, committee effectiveness and sector specific board programs.",
      },
      {
        q: "Do you work with cooperatives and nonprofits?",
        a: "Yes. We adapt governance and institutional strengthening work to the ownership, membership, mission and accountability structure of the institution.",
      },
      {
        q: "Can you support governance work in Kenya, Nigeria and South Africa?",
        a: "Yes. We support country specific and regional governance mandates across the three priority markets and wider Africa.",
      },
    ],
    closing: {
      heading: "Strengthen the institution behind the strategy",
      body:
        "Credence Africa can help your board and leadership team clarify authority, improve decisions and build the systems required for sustainable performance.",
      label: "Book a Governance Consultation",
      consult: "institute",
    },
    links: serviceLinks("institute", "research", "publicAffairs", "engage", "capital"),
  },
  {
    slug: "gender",
    kind: "theme",
    name: "Gender, Youth and Economic Inclusion",
    scope:
      "Economic participation for women and young people through policy, finance, enterprise, skills and market systems.",
    icon: UsersRound,
    seoTitle: "Gender and Youth Economic Inclusion Advisory in Africa",
    metaDescription:
      "Gender, youth and economic inclusion advisory, research and training across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "gender and youth inclusion Africa",
      "women economic empowerment Africa",
      "youth employment consulting Africa",
      "gender advisory Kenya",
      "youth enterprise Nigeria",
      "economic inclusion South Africa",
      "inclusive finance consulting Africa",
    ],
    h1: "Gender, Youth and Economic Inclusion Advisory Across Africa",
    intro:
      "Credence Africa helps institutions expand economic participation for women and young people through better policy, finance, enterprise, skills and market systems. We design evidence based strategies, research, initiatives and institutional capability across African sectors.",
    actions: [
      { label: "Discuss an Inclusion Mandate", consult: "research" },
      { label: "Commission Gender or Youth Research", consult: "research" },
    ],
    positioning: {
      heading: "Build inclusion into markets, institutions and investment",
      paragraphs: [
        "Gender and youth inclusion cannot be reduced to participation targets. Economic opportunity depends on access to capital, markets, skills, technology, assets, networks, leadership and institutions that respond to lived barriers.",
        "Credence Africa supports governments, companies, financial institutions, foundations and development partners that want to design serious inclusion strategies. We connect gender and youth outcomes to sector economics, enterprise growth, workforce systems, procurement, investment and policy.",
      ],
    },
    needs: {
      lead: "We help institutions answer the questions that shape credible inclusion:",
      items: [
        "Which barriers prevent women and young people from participating and progressing?",
        "What market, policy or institutional change can remove those barriers?",
        "How should finance, procurement, skills and enterprise support be designed?",
        "What evidence will show whether the intervention creates economic value?",
        "How can inclusion become part of core strategy, not a separate activity?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build capability for inclusive initiative design and leadership.",
        items: [
          "Gender responsive and youth focused initiative design training",
          "Inclusive finance and enterprise support programs",
          "Leadership and governance programs for women and young leaders",
          "Youth employment, entrepreneurship and market access academies",
          "Policy dialogues and investor forums on economic inclusion",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb: "Our research identifies barriers, market opportunities and institutional gaps.",
        items: [
          "Gender and youth market assessments",
          "Women and youth enterprise ecosystem mapping",
          "Access to finance, procurement and market participation studies",
          "Youth employment, skills and transition research",
          "Policy, institutional and stakeholder analysis",
          "Inclusion data frameworks and learning reports",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps institutions design and implement inclusion within core economic systems.",
        items: [
          "Gender and youth inclusion strategy",
          "Inclusive finance and investment initiative design",
          "Enterprise, procurement and market access programs",
          "Youth employment and workforce transition strategy",
          "Policy, public affairs and institutional reform support",
          "Partnership, funding and ecosystem development",
        ],
      },
    ],
    mandates: [
      "A bank designing a women or youth market strategy",
      "A company building inclusive procurement and enterprise development",
      "A government developing youth employment or entrepreneurship policy",
      "A foundation or development partner commissioning research and initiative design",
      "An investor integrating inclusion into pipeline and portfolio support",
    ],
    audiences: [
      "Governments, public agencies and cities",
      "Banks, insurers, investors and financial institutions",
      "Corporations, SMEs and industry associations",
      "Foundations, nonprofits and development partners",
      "Universities, training institutions and youth or women networks",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets because they combine large youth populations, active enterprise ecosystems and significant institutional demand for inclusive growth. We can design country specific work or compare barriers and opportunities across the three markets. Regional initiatives can also be structured for wider African implementation.",
    why:
      "We connect inclusion to economics and institutional design. The work begins with evidence. It then identifies the market, finance, policy and capability changes that can create sustained participation. We avoid symbolic initiatives that sit outside the client's core strategy.",
    faqs: [
      {
        q: "What gender and youth inclusion services does Credence Africa provide?",
        a: "We provide research, strategy, initiative design, inclusive finance advisory, enterprise and workforce programs, policy support, capability building and stakeholder convening.",
      },
      {
        q: "Can Credence Africa design a women or youth fund?",
        a: "We can support the strategy, market assessment, target segment design, governance, pipeline development, capability initiative and investment readiness elements. Regulated fund management and legal structuring require appropriately licensed and qualified partners.",
      },
      {
        q: "Do you support youth employment programs?",
        a: "Yes. We can conduct labor market research, identify sector demand, design employer linked training and transition programs and build partnerships around jobs and enterprise.",
      },
      {
        q: "Can you work in Kenya, Nigeria and South Africa?",
        a: "Yes. We can deliver country specific, comparative or regional inclusion mandates across the three priority markets and wider Africa.",
      },
    ],
    closing: {
      heading: "Design inclusion around real economic opportunity",
      body:
        "Credence Africa can help you identify the barriers, structure the intervention and connect women and young people to finance, markets, skills and institutions.",
      label: "Book an Economic Inclusion Consultation",
      consult: "research",
    },
    links: serviceLinks("research", "institute", "capital", "publicAffairs", "engage"),
  },
  {
    slug: "workforce",
    kind: "theme",
    name: "Jobs, Skills and Workforce Transformation",
    scope:
      "Skills needs assessment, executive education, sector academies, professional programs and workforce systems.",
    icon: BriefcaseBusiness,
    seoTitle: "Workforce Development and Executive Training in Africa",
    metaDescription:
      "Workforce development, executive education and sector academy design across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "workforce development consulting Africa",
      "executive training Africa",
      "skills development consulting Africa",
      "workforce training Kenya",
      "skills programs Nigeria",
      "executive education South Africa",
      "sector academy design Africa",
    ],
    h1: "Jobs, Skills and Workforce Transformation Across Africa",
    intro:
      "Credence Africa helps employers, governments and institutions build the skills, leadership and workforce systems required for changing African industries. Through Credence Institute, we design executive education, sector academies, professional programs and institutional capability initiatives.",
    actions: [
      { label: "Discuss a Workforce or Training Mandate", consult: "institute" },
      { label: "Commission a Skills Needs Assessment", consult: "research" },
    ],
    positioning: {
      heading: "Build capability around the work markets actually require",
      paragraphs: [
        "Workforce initiatives create value when they respond to real sector demand. Training must connect to job roles, enterprise needs, technology change, professional standards and institutional performance. Generic content produces limited results.",
        "Credence Africa combines labor market intelligence, sector knowledge, curriculum design, employer engagement and executive learning. We support institutions that need to strengthen leaders, prepare teams, build professional capability or create employment and enterprise pathways.",
      ],
    },
    needs: {
      lead: "We help clients answer the questions that should shape workforce investment:",
      items: [
        "Which skills and roles are required now and over the next planning period?",
        "Where are the capability gaps inside the institution or sector?",
        "What training, credential or academy model fits the audience and outcome?",
        "How should employers, universities, professional bodies and funders participate?",
        "What evidence will demonstrate capability, employment or performance outcomes?",
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
          "Board, governance and institutional capability programs",
          "Workforce readiness, reskilling and upskilling programs",
          "Employer linked learning, study tours and executive exchanges",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research establishes the demand, audience and institutional case for skills investment.",
        items: [
          "Labor market and skills needs assessments",
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
          "Initiative funding and sponsorship strategy",
          "Governance, delivery and measurement frameworks",
          "Policy and ecosystem development for jobs and skills",
        ],
      },
    ],
    mandates: [
      "A company building leadership and functional capability",
      "An association developing a sector academy or credential",
      "A government designing an employer linked workforce initiative",
      "A university or training institution aligning programs to market demand",
      "A development partner funding jobs, skills or institutional capability",
    ],
    audiences: [
      "Corporations, SMEs and employers",
      "Governments, agencies and public institutions",
      "Industry associations and professional bodies",
      "Universities, colleges and training institutions",
      "Foundations, investors and development partners",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets for sector academies, employer partnerships, executive learning and workforce transition. We can also build regional programs that serve institutions and professionals from multiple African countries. Delivery can be physical, virtual or blended.",
    why:
      "Our advantage is the connection between research and delivery. We first establish what the market and institution need. We then design the learning model, partnerships, content, governance and measurement framework around that evidence. Credence Institute can deliver directly or coordinate specialist faculty and partners.",
    faqs: [
      {
        q: "What workforce development services does Credence Africa provide?",
        a: "We provide skills needs assessments, workforce strategy, executive education, academy design, curriculum development, professional programs, employer partnerships and initiative evaluation.",
      },
      {
        q: "Can Credence Africa design a sector academy?",
        a: "Yes. We can define the audience, competencies, curriculum, faculty model, credential, delivery structure, partnerships, commercial model and measurement framework.",
      },
      {
        q: "Do you deliver custom executive training?",
        a: "Yes. Credence Institute designs custom programs for boards, executives, managers, professionals and institutional teams.",
      },
      {
        q: "Can programs cover Kenya, Nigeria and South Africa?",
        a: "Yes. Programs can be country specific, regional, hybrid or pan African, depending on the audience, faculty and delivery model.",
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
    slug: "enterprise",
    kind: "theme",
    name: "Entrepreneurship, SMEs and Enterprise Growth",
    scope:
      "Enterprise growth strategy, governance, capital readiness, market access and enterprise development initiatives.",
    icon: Rocket,
    seoTitle: "SME and Enterprise Growth Advisory in Africa",
    metaDescription:
      "SME growth, investment readiness and enterprise development across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "SME consulting Africa",
      "enterprise growth advisory Africa",
      "SME investment readiness Africa",
      "SME consulting Kenya",
      "enterprise development Nigeria",
      "SME advisory South Africa",
      "entrepreneurship initiative design Africa",
    ],
    h1: "Entrepreneurship, SME and Enterprise Growth Advisory Across Africa",
    intro:
      "Credence Africa helps entrepreneurs, SMEs and growth businesses build stronger strategy, governance, capital readiness and market access. We also design enterprise development initiatives for financial institutions, corporations, governments and development partners.",
    actions: [
      { label: "Discuss an Enterprise Growth Mandate", consult: "trade" },
      { label: "Request an SME Readiness Review", consult: "capital" },
    ],
    positioning: {
      heading: "Build enterprises that can govern, finance and scale growth",
      paragraphs: [
        "Many enterprises begin with market energy and founder commitment. Growth introduces a different requirement. The business needs systems, management discipline, capital planning, customer intelligence, governance and a repeatable route to market.",
        "Credence Africa supports individual enterprises and the institutions that serve them. We work across strategy, finance, market entry, trade, governance, leadership and investment readiness. We also design accelerators, supplier development programs, sector academies and enterprise platforms.",
      ],
    },
    needs: {
      lead: "We help enterprises and initiative sponsors answer:",
      items: [
        "What is the most credible growth strategy for the business?",
        "Which customers, products, channels and markets should receive priority?",
        "Is the enterprise ready for capital, partnerships or regional expansion?",
        "What governance, financial and management systems are missing?",
        "How should an enterprise support initiative produce measurable commercial outcomes?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb: "Through Credence Institute, we build practical enterprise and leadership capability.",
        items: [
          "Founder and SME growth programs",
          "Investment readiness and financial management training",
          "Governance, leadership and operating systems programs",
          "Sales, market entry, export and partnership capability",
          "Accelerators, supplier development and sector academies",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research helps enterprises and initiative sponsors understand markets, constraints and growth pathways.",
        items: [
          "SME and entrepreneurship ecosystem research",
          "Customer, competitor and market opportunity studies",
          "Access to finance and investment landscape analysis",
          "Enterprise capability and constraint assessments",
          "Sector, value chain and supplier mapping",
          "Initiative evaluation and learning reports",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work supports enterprises from strategic review through capital and market execution.",
        items: [
          "Growth strategy and business model development",
          "Market entry, trade and expansion planning",
          "Capital readiness and investment structuring",
          "Governance and operating model development",
          "Partnership, distribution and customer strategy",
          "Enterprise initiative and ecosystem design",
        ],
      },
    ],
    mandates: [
      "An SME preparing for capital or a major growth decision",
      "A founder building governance and management systems",
      "A company developing suppliers or distributors",
      "A financial institution designing an SME support platform",
      "A government or development partner building an enterprise development initiative",
    ],
    audiences: [
      "Entrepreneurs, SMEs and growth companies",
      "Corporations and supplier development programs",
      "Banks, investors and development finance institutions",
      "Accelerators, hubs and industry associations",
      "Governments, foundations and development partners",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets for our enterprise growth work. Each market offers distinct customer, capital and institutional conditions. We support businesses entering or expanding across these markets and institutions designing enterprise initiatives at country, regional or pan African level.",
    why:
      "We connect enterprise support to commercial performance. Training alone is insufficient when strategy, governance, finance and market access remain weak. Our mandates combine capability with advisory, intelligence and institutional partnerships so that the enterprise can make and execute better decisions.",
    faqs: [
      {
        q: "What SME consulting services does Credence Africa provide?",
        a: "We provide growth strategy, governance, market entry, capital readiness, investment preparation, customer and market research, executive training and enterprise initiative design.",
      },
      {
        q: "Can Credence Africa help an SME raise capital?",
        a: "We can assess readiness, strengthen the strategy and investment case, prepare materials and support investor engagement. Investment decisions remain with capital providers.",
      },
      {
        q: "Do you design accelerators and enterprise initiatives?",
        a: "Yes. We can design the target segment, curriculum, advisory model, partner structure, funding model, delivery process and measurement framework.",
      },
      {
        q: "Can you support SMEs across Kenya, Nigeria and South Africa?",
        a: "Yes. We can deliver country specific, comparative or regional enterprise growth mandates across the three priority markets and wider Africa.",
      },
    ],
    closing: {
      heading: "Move the enterprise from activity to structured growth",
      body:
        "Credence Africa can help you clarify the strategy, strengthen the institution, prepare for capital and build a route to market.",
      label: "Book an Enterprise Growth Consultation",
      consult: "capital",
    },
    links: serviceLinks("trade", "capital", "institute", "research", "engage"),
  },
  {
    slug: "innovation",
    kind: "theme",
    name: "Innovation and Ecosystem Development",
    scope:
      "Ecosystem strategy, mapping, accelerators, platforms, partnerships and sector communities.",
    icon: Lightbulb,
    seoTitle: "Innovation and Ecosystem Development Consulting in Africa",
    metaDescription:
      "Innovation ecosystem strategy, mapping and initiative design across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "innovation ecosystem consulting Africa",
      "ecosystem development Africa",
      "innovation strategy Africa",
      "innovation consulting Kenya",
      "startup ecosystem Nigeria",
      "innovation advisory South Africa",
      "accelerator design Africa",
    ],
    h1: "Innovation and Ecosystem Development Advisory Across Africa",
    intro:
      "Credence Africa helps governments, corporations, investors, universities and development institutions build the systems that allow innovation and enterprise to grow. We design ecosystem strategies, research, platforms, accelerators, partnerships and sector communities.",
    actions: [
      { label: "Discuss an Ecosystem Mandate", consult: "engage" },
      { label: "Commission an Ecosystem Mapping Study", consult: "research" },
    ],
    positioning: {
      heading: "Build the institutions and networks behind innovation",
      paragraphs: [
        "Innovation ecosystems are more than collections of startups and events. They depend on capital, talent, research, markets, policy, infrastructure, customers and institutions that can coordinate action. Weak ecosystems create activity without sustained commercial outcomes.",
        "Credence Africa supports ecosystem development across sectors. We help clients understand the actors, gaps, incentives and market opportunities. We then design platforms, partnerships and initiatives that connect enterprise, capital, knowledge and public institutions.",
      ],
    },
    needs: {
      lead: "We help ecosystem leaders answer:",
      items: [
        "Which institutions and actors shape the sector or geography?",
        "Where are the gaps in capital, talent, research, market access or policy?",
        "What platform or initiative can create measurable value?",
        "How should corporate, public, academic and investor partners participate?",
        "What governance and funding model can sustain the ecosystem?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build ecosystem capability and convene the relationships required for action.",
        items: [
          "Innovation leadership and ecosystem management programs",
          "Accelerator, incubator and cluster capability building",
          "Corporate innovation and partnership programs",
          "Investor, founder and institutional learning forums",
          "Sector communities, policy dialogues and innovation challenges",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research establishes the structure, performance and opportunities within the ecosystem.",
        items: [
          "Ecosystem and stakeholder mapping",
          "Innovation, startup and investment landscape research",
          "Sector cluster and value chain studies",
          "Policy, institution and infrastructure analysis",
          "Benchmarking and comparative market research",
          "Initiative evaluation and ecosystem intelligence",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps clients design the ecosystem intervention and operating model.",
        items: [
          "Innovation and ecosystem strategy",
          "Accelerator, incubator and sector platform design",
          "Corporate innovation and partnership strategy",
          "Capital, pipeline and investor engagement design",
          "Policy and institutional development",
          "Governance, funding and sustainability models",
        ],
      },
    ],
    mandates: [
      "A government developing a national or city innovation strategy",
      "A corporation building an open innovation or supplier platform",
      "An investor or foundation mapping a sector ecosystem",
      "A university building commercialization and industry partnerships",
      "A development partner designing an accelerator or ecosystem initiative",
    ],
    audiences: [
      "Governments, cities and public agencies",
      "Corporations and corporate innovation teams",
      "Investors, funds and development finance institutions",
      "Universities, research institutions and technology transfer offices",
      "Hubs, accelerators, associations, foundations and development partners",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets for innovation and ecosystem work. Each combines active enterprise communities with distinct capital, institutional and policy conditions. We can design country specific ecosystems or build regional platforms that connect the three markets and wider Africa.",
    why:
      "We focus on ecosystem function. We identify who creates value, where coordination fails and what institution or platform can change the outcome. Research, convening, training and advisory are integrated so the ecosystem moves beyond mapping into execution.",
    faqs: [
      {
        q: "What is innovation ecosystem consulting?",
        a: "It is the research, strategy and institutional design required to strengthen the relationships among enterprises, investors, universities, corporations, government, talent and markets.",
      },
      {
        q: "Can Credence Africa design an accelerator or innovation hub initiative?",
        a: "Yes. We can define the target sector, pipeline, curriculum, advisory model, partners, capital pathway, governance, funding model and measurement framework.",
      },
      {
        q: "Do you conduct ecosystem mapping?",
        a: "Yes. We map actors, relationships, capital, initiatives, infrastructure, policy, gaps and opportunities. The output can support strategy, investment or initiative design.",
      },
      {
        q: "Can you work across Kenya, Nigeria and South Africa?",
        a: "Yes. We can deliver comparative ecosystem research, regional platforms or country specific mandates across the three priority markets.",
      },
    ],
    closing: {
      heading: "Build an ecosystem that produces real institutional and commercial value",
      body:
        "Credence Africa can help you map the system, define the intervention and organize the partnerships, capital and capability required for progress.",
      label: "Book an Innovation Ecosystem Consultation",
      consult: "engage",
    },
    links: serviceLinks("research", "engage", "institute", "capital", "trade"),
  },
  {
    slug: "accessibility",
    kind: "theme",
    name: "Inclusion, Accessibility and Shared Prosperity",
    scope:
      "Disability inclusion, rural access, affordable services, inclusive infrastructure and broader economic participation.",
    icon: Accessibility,
    seoTitle: "Inclusive Growth and Accessibility Advisory in Africa",
    metaDescription:
      "Inclusive growth, disability inclusion and accessible market advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "inclusive growth consulting Africa",
      "accessibility advisory Africa",
      "disability inclusion consulting Africa",
      "inclusive markets Kenya",
      "shared prosperity Nigeria",
      "accessibility consulting South Africa",
      "social impact advisory Africa",
    ],
    h1: "Inclusion, Accessibility and Shared Prosperity Advisory Across Africa",
    intro:
      "Credence Africa helps institutions design markets, services and investments that reach underserved people and places. We support disability inclusion, rural access, affordable services, inclusive infrastructure, social impact and broader economic participation.",
    actions: [
      { label: "Discuss an Inclusive Growth Mandate", consult: "research" },
      { label: "Commission an Access and Inclusion Study", consult: "research" },
    ],
    positioning: {
      heading: "Design access into the market and the institution",
      paragraphs: [
        "Economic growth can expand while access remains limited. People may still face barriers linked to disability, geography, income, infrastructure, language, technology or institutional design. Inclusive markets require deliberate choices about products, channels, pricing, information and accountability.",
        "Credence Africa supports inclusion beyond gender and youth. This theme addresses the wider systems that determine who can use services, participate in markets and benefit from investment. We work across finance, healthcare, technology, mobility, education, infrastructure and public services.",
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
          "Inclusive design and accessibility awareness programs",
          "Leadership training on inclusive markets and services",
          "Disability inclusion and institutional capability programs",
          "Inclusive finance, infrastructure and service delivery learning",
          "Policy dialogues and stakeholder forums on access and shared prosperity",
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
          "Social impact and shared prosperity frameworks",
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
      "Associations, disability organizations and community institutions",
    ],
    geography:
      "Kenya, Nigeria and South Africa are priority markets with distinct access, infrastructure and institutional conditions. We can assess one market, compare the three or design a regional initiative for wider African implementation. Local stakeholder participation is built into research and initiative design.",
    why:
      "We connect social purpose to market and institutional design. We identify the real barrier, the people affected and the operating changes required. This creates more credible initiatives and stronger commercial or public value than broad inclusion commitments without delivery systems.",
    faqs: [
      {
        q: "How is this theme different from Gender, Youth and Economic Inclusion?",
        a: "Gender, Youth and Economic Inclusion focuses on the economic participation of women and young people. Inclusion, Accessibility and Shared Prosperity addresses broader barriers linked to disability, geography, income, infrastructure and access to services.",
      },
      {
        q: "Can Credence Africa conduct disability inclusion research?",
        a: "Yes. We can design research on access, service use, market barriers, institutional capability and policy. We engage relevant organizations and specialists to ensure the work is grounded and responsible.",
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
      label: "Book an Inclusive Growth Consultation",
      consult: "research",
    },
    links: serviceLinks("research", "institute", "capital", "engage", "publicAffairs"),
  },
  {
    slug: "urbanization",
    kind: "theme",
    name: "Africa's Demographic and Urban Transformation",
    scope:
      "Urban strategy, city investment, demographic research, municipal finance and infrastructure intelligence.",
    icon: Building2,
    seoTitle: "Urban Development and Demographic Advisory in Africa",
    metaDescription:
      "Urban development, demographic research and city investment advisory across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "urban development consulting Africa",
      "demographic research Africa",
      "city strategy Africa",
      "urban development Kenya",
      "urban planning advisory Nigeria",
      "city investment South Africa",
      "municipal finance consulting Africa",
    ],
    h1: "Africa's Demographic and Urban Transformation",
    intro:
      "Credence Africa helps cities, governments, investors and businesses understand how population growth, urbanization and changing consumer patterns reshape markets and public systems. We support urban strategy, city investment, infrastructure, research and institutional capability.",
    actions: [
      { label: "Discuss an Urban Transformation Mandate", consult: "research" },
      { label: "Commission City and Demographic Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Plan for the people, markets and institutions shaping Africa's cities",
      paragraphs: [
        "Demographic change affects demand for housing, mobility, healthcare, education, finance, energy, food, jobs and public services. Urban growth also changes where businesses invest, how consumers behave and how governments finance and manage infrastructure.",
        "Credence Africa supports institutions that need to interpret these changes and act on them. We combine demographic and city intelligence with investment, policy, market entry and institutional strategy. Our work can focus on a city, corridor, country, sector or regional urban system.",
      ],
    },
    needs: {
      lead: "We help leaders answer:",
      items: [
        "How will population and urban growth change demand?",
        "Which cities, corridors and consumer markets should receive priority?",
        "What infrastructure and public services require investment?",
        "How can cities and institutions structure finance and partnerships?",
        "What governance and capability will support urban execution?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build urban leadership and institutional capability.",
        items: [
          "Executive programs for city and municipal leaders",
          "Urban investment and municipal finance learning",
          "Demographic, consumer and market strategy programs",
          "Urban mobility, infrastructure and service delivery forums",
          "City investor roundtables and public private dialogues",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research provides the demographic, market and institutional evidence required for city decisions.",
        items: [
          "City and urban market assessments",
          "Demographic, consumer and household research",
          "Urban infrastructure and service gap studies",
          "Housing, mobility, finance and local economy intelligence",
          "Municipal finance, governance and policy analysis",
          "City investment, stakeholder and project mapping",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb: "Our advisory work helps public and private institutions respond to urban change.",
        items: [
          "Urban and city strategy",
          "City investment and project pipeline development",
          "Municipal finance and partnership strategy",
          "Market entry and city prioritization for businesses",
          "Urban policy and stakeholder engagement",
          "Institutional strengthening and implementation planning",
        ],
      },
    ],
    mandates: [
      "A company selecting priority African cities for expansion",
      "A city developing an investment or economic development strategy",
      "An investor assessing urban infrastructure or consumer demand",
      "A public institution commissioning demographic and service research",
      "A development partner designing an urban resilience or jobs initiative",
    ],
    audiences: [
      "Cities, municipalities and national governments",
      "Infrastructure developers, utilities and service providers",
      "Investors, banks and development finance institutions",
      "Consumer, mobility, housing, healthcare and technology companies",
      "Universities, associations, foundations and development partners",
    ],
    geography:
      "Kenyan cities shape East African commerce and service demand. Nigerian cities present major questions of scale, infrastructure, jobs and consumer markets. South African cities combine established institutions with significant transition and inclusion challenges. We can compare cities across the three markets or support wider African city strategies.",
    why:
      "We connect demographic evidence to capital, markets, policy and institutional execution. We help clients move from broad population narratives to specific choices about cities, infrastructure, services, customers, projects and partnerships.",
    faqs: [
      {
        q: "What urban development consulting services does Credence Africa provide?",
        a: "We provide city and demographic research, urban strategy, city investment support, municipal finance strategy, infrastructure intelligence, market entry analysis, policy advisory and institutional capability building.",
      },
      {
        q: "Can Credence Africa help a company choose African cities for expansion?",
        a: "Yes. We can compare cities based on customer demand, income, sector fit, competition, regulation, infrastructure, distribution, talent and operating conditions.",
      },
      {
        q: "Do you provide technical urban planning?",
        a: "Our core role is strategy, research, investment, policy and institutional development. Spatial planning, engineering and technical design are delivered with qualified specialist partners.",
      },
      {
        q: "Can you compare Kenya, Nigeria and South Africa?",
        a: "Yes. We can compare cities, demographic trends, market conditions, infrastructure needs and institutional environments across the three priority markets.",
      },
    ],
    closing: {
      heading: "Turn demographic change into a focused city or market strategy",
      body:
        "Credence Africa can help you identify where demand is moving, what investment is required and which institutions must act.",
      label: "Book an Urban Transformation Consultation",
      consult: "capital",
    },
    links: serviceLinks("research", "capital", "publicAffairs", "trade", "institute"),
  },
];

export const themesBySlug: Record<string, Theme> = Object.fromEntries(
  themeList.map((t) => [t.slug, t]),
);
