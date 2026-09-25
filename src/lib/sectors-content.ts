import { Sprout, Leaf, Waves, Palette, Landmark, GraduationCap, HeartPulse, Truck, Cpu, Factory } from "lucide-react";
import { HELP_HEADINGS, serviceLinks, type LandingPage } from "./landing-content";

/**
 * Sector landing pages.
 *
 * The first seven follow the 2026 SEO publication copy and use its short paths.
 * The remaining three keep their original slugs and are written to the same
 * template so the module reads as one set.
 */
export type Sector = LandingPage;

export const sectorList: Sector[] = [
  {
    slug: "finance",
    kind: "sector",
    name: "Financial Services and Capital Markets",
    scope:
      "Banking, fintech, payments, insurance, pensions, capital markets, SACCOs and financial inclusion across African markets.",
    icon: Landmark,
    seoTitle: "Financial Services Consulting in Africa",
    metaDescription:
      "Financial services consulting, market intelligence and executive training across Africa, with priority coverage in Kenya, Nigeria and South Africa.",
    keywords: [
      "financial services consulting Africa",
      "financial services advisory Africa",
      "fintech consulting Africa",
      "banking advisory Kenya",
      "financial services consulting Nigeria",
      "capital markets advisory South Africa",
      "financial sector research Africa",
    ],
    h1: "Financial Services and Capital Markets Advisory Across Africa",
    intro:
      "Credence Africa helps financial institutions, investors and market builders turn complex African financial markets into clear strategic decisions. We combine sector intelligence, executive capability and advisory support across banking, fintech, payments, insurance, pensions, capital markets, SACCOs and financial inclusion.",
    actions: [
      { label: "Discuss a Financial Services Mandate", consult: "capital" },
      { label: "Commission Financial Sector Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Strategy, intelligence and capability for stronger financial markets",
      paragraphs: [
        "Financial services institutions operate inside fast changing commercial, regulatory and technology environments. Growth requires disciplined market choices, credible governance, strong stakeholder relationships and a clear understanding of customer behaviour, capital needs and policy direction.",
        "Credence Africa supports established financial institutions, emerging financial technology businesses, investors, industry associations, development partners and public institutions. Our work converts market complexity into practical decisions, stronger institutions and investable growth pathways.",
      ],
    },
    needs: {
      lead: "We are engaged when leaders need grounded answers to questions such as:",
      items: [
        "Which financial market, product or customer segment offers the strongest growth case?",
        "What regulatory, competitive and stakeholder conditions will shape entry or expansion?",
        "How should an institution prepare for capital, partnership or transaction discussions?",
        "What evidence should guide a new financial inclusion, digital finance or market development initiative?",
        "What capability must boards, executives and teams build to execute the strategy responsibly?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build the leadership, commercial and institutional capability required to compete in African financial markets.",
        items: [
          "Executive education for banking, insurance, fintech, SACCO and investment leaders",
          "Board and governance programmes for regulated and member based financial institutions",
          "Digital finance, payments, financial inclusion and responsible innovation training",
          "Capital readiness and investor engagement programmes for financial services businesses",
          "Policy dialogues, industry roundtables and executive forums for market leaders",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research and intelligence work gives decision-makers a reliable view of markets, customers, competitors, regulation and investment activity.",
        items: [
          "Financial market assessments and sector outlooks",
          "Fintech, payments, banking, insurance and capital markets research",
          "Customer, channel and competitor intelligence",
          "Regulatory and policy monitoring",
          "Investment landscape, ecosystem and stakeholder mapping",
          "Commissioned publications, executive briefs and thought leadership",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work connects strategy to execution. We support growth, capital, market entry, investment facilitation and policy engagement.",
        items: [
          "Growth strategy and business model development",
          "Market entry and expansion across African jurisdictions",
          "Capital raising preparation and investment structuring",
          "Investor, partner and stakeholder engagement",
          "Public affairs, regulatory strategy and industry advocacy",
          "Institutional strategy, governance and operating model improvement",
        ],
      },
    ],
    mandates: [
      "A fintech assessing entry into Kenya, Nigeria or South Africa",
      "A bank or insurer developing a growth, distribution or partnership strategy",
      "A SACCO or cooperative strengthening governance, capital and member value",
      "An investor seeking commercial and regulatory intelligence on an African financial market",
      "An industry body developing a policy position, market study or executive forum",
    ],
    audiences: [
      "Banks, fintechs, payment companies and digital lenders",
      "Insurance companies, pension institutions and investment managers",
      "SACCOs, cooperatives and member based financial institutions",
      "Capital market institutions, private capital firms and development finance institutions",
      "Regulators, governments, associations, foundations and development partners",
    ],
    geography:
      "Kenya is central to our East African financial services work. Nigeria is a priority market for scale, innovation and West African expansion. South Africa is a priority market for capital markets, institutional finance, insurance and regional investment. We also support clients entering other African markets through local research, partner identification, stakeholder intelligence and market entry planning.",
    why:
      "A financial services decision often requires commercial research, regulatory intelligence, stakeholder engagement, capital planning and executive capability at the same time. Credence Africa brings these disciplines into one mandate. This creates a clearer decision process and a stronger route from strategy to execution.",
    faqs: [
      {
        q: "What financial services consulting does Credence Africa provide?",
        a: "We provide growth strategy, market entry, capital raising preparation, investment facilitation, regulatory strategy, policy advisory, market intelligence, institutional strengthening, executive training and sector convening.",
      },
      {
        q: "Can Credence Africa support fintech expansion into Kenya, Nigeria or South Africa?",
        a: "Yes. We can assess market attractiveness, regulation, competition, customer segments, partnership options and stakeholder requirements. We can also design the entry pathway and support partner and institutional engagement.",
      },
      {
        q: "Does Credence Africa conduct financial sector research?",
        a: "Yes. We conduct commissioned research, market assessments, competitor studies, policy analysis, stakeholder mapping, investment landscape reviews and sector intelligence.",
      },
      {
        q: "Can you help a financial services business raise capital?",
        a: "We help institutions prepare for capital by clarifying the strategy, investment case, financial requirements, governance, materials and investor engagement plan. Funding outcomes depend on the opportunity, market conditions and investor decisions. We do not guarantee capital.",
      },
    ],
    closing: {
      heading: "Build a stronger financial services strategy",
      body:
        "Whether you are entering a market, raising capital, responding to regulation, launching a product or building institutional capability, Credence Africa can structure the mandate around the decision you need to make.",
      label: "Book a Financial Services Consultation",
      consult: "capital",
    },
    links: serviceLinks("capital", "publicAffairs", "trade", "research", "institute", "engage"),
  },
  {
    slug: "healthcare",
    kind: "sector",
    name: "Healthcare and Life Sciences",
    scope:
      "Healthcare delivery, pharmaceuticals, diagnostics, medical technology, health financing, wellness and public health.",
    icon: HeartPulse,
    seoTitle: "Healthcare Consulting in Africa",
    metaDescription:
      "Healthcare consulting, market intelligence and executive training across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "healthcare consulting Africa",
      "healthcare advisory Africa",
      "healthcare market entry Africa",
      "healthcare consulting Kenya",
      "healthcare consulting Nigeria",
      "healthcare advisory South Africa",
      "healthcare market research Africa",
    ],
    h1: "Healthcare and Life Sciences Advisory Across Africa",
    intro:
      "Credence Africa helps healthcare institutions, life sciences businesses, investors and public interest actors make stronger decisions across African health markets. We support growth, capital, market entry, policy, research, institutional capability and sector collaboration.",
    actions: [
      { label: "Discuss a Healthcare Mandate", consult: "capital" },
      { label: "Commission Healthcare Market Research", consult: "research" },
    ],
    positioning: {
      heading: "Commercial growth and institutional strength for African healthcare",
      paragraphs: [
        "Healthcare organisations face a demanding combination of patient needs, workforce pressures, capital constraints, regulation, technology change and complex supply chains. Sound decisions require commercial evidence and a clear understanding of the institutions that influence market access and service delivery.",
        "Credence Africa works across healthcare delivery, pharmaceuticals, diagnostics, medical technology, health financing, health technology, wellness and public health. We support businesses and institutions that need to grow, enter new markets, attract capital, understand policy, strengthen leadership or build credible sector platforms.",
      ],
    },
    needs: {
      lead: "Our work addresses practical questions that affect healthcare growth and impact:",
      items: [
        "Where is the strongest commercial or service delivery opportunity?",
        "What market, regulatory and stakeholder conditions will shape the opportunity?",
        "How should a provider, health business or project prepare for investment?",
        "What partnerships are required for distribution, clinical access, technology adoption or public sector engagement?",
        "What evidence and capability will allow the institution to scale with discipline?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we strengthen leadership, governance, commercial capability and collaboration across the healthcare ecosystem.",
        items: [
          "Executive education for healthcare founders, facility leaders and senior managers",
          "Governance and board programmes for hospitals, health businesses and associations",
          "Commercial growth, investment readiness and market entry training",
          "Policy, regulatory and stakeholder engagement programmes",
          "Healthcare leadership forums, investor conversations and sector roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research gives healthcare decision-makers a commercially useful view of demand, competition, regulation, investment and service delivery conditions.",
        items: [
          "Healthcare market assessments and opportunity studies",
          "Facility, provider, product and ecosystem mapping",
          "Patient, consumer, purchaser and channel intelligence",
          "Pharmaceutical, diagnostics, medical device and health technology research",
          "Health financing, policy and regulatory analysis",
          "Commissioned reports, sector outlooks and executive intelligence",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work supports institutions from strategic choice through market engagement and execution planning.",
        items: [
          "Growth strategy for healthcare providers and health businesses",
          "Market entry and expansion in African health markets",
          "Capital readiness, investment structuring and investor engagement",
          "Trade, distribution and partnership strategy",
          "Policy, regulatory and public affairs advisory",
          "Institutional strategy, governance and operating model development",
        ],
      },
    ],
    mandates: [
      "A hospital group planning expansion into a new city or country",
      "A pharmaceutical, diagnostics or medical technology company entering an African market",
      "A health technology business preparing for investment and institutional partnerships",
      "An investor assessing a healthcare segment, company or project",
      "An association, government or development partner commissioning research or a sector initiative",
    ],
    audiences: [
      "Hospitals, clinics, laboratories and diagnostic networks",
      "Pharmaceutical, medical device and health technology companies",
      "Health insurers, investors and development finance institutions",
      "Government agencies, regulators and public health institutions",
      "Associations, universities, foundations and development partners",
    ],
    geography:
      "Kenya is a priority market for East African healthcare delivery, health technology and regional growth. Nigeria is a priority market for scale, distribution and healthcare investment. South Africa is a priority market for life sciences, institutional healthcare, private capital and regional partnerships. We support work in other African markets through targeted research, stakeholder mapping and locally grounded market entry strategy.",
    why:
      "Healthcare growth cannot be separated from capital, regulation, workforce, trust and market access. Credence Africa brings these elements into one decision framework. We assemble qualified clinical, scientific, legal and technical partners when a mandate requires specialist disciplines.",
    faqs: [
      {
        q: "What healthcare consulting services does Credence Africa provide?",
        a: "We provide growth strategy, market entry, capital readiness, investment facilitation, market research, policy and regulatory advisory, institutional strengthening, executive training and sector convening.",
      },
      {
        q: "Can Credence Africa help a healthcare company enter Kenya, Nigeria or South Africa?",
        a: "Yes. We can assess demand, competition, regulation, distribution, partnerships, investment conditions and stakeholder requirements. We then translate the findings into a practical market entry and engagement plan.",
      },
      {
        q: "Does Credence Africa conduct healthcare market research?",
        a: "Yes. Our work can cover market size, service demand, facility mapping, customer and purchaser behaviour, competitive positioning, regulation, supply chains, investment activity and ecosystem structure.",
      },
      {
        q: "Does Credence Africa provide clinical or medical advice?",
        a: "No. Our role is commercial, strategic, institutional, investment and policy focused. We work with qualified clinical, scientific and technical specialists when a mandate requires those disciplines.",
      },
    ],
    closing: {
      heading: "Turn a healthcare opportunity into an executable mandate",
      body:
        "Credence Africa can help you assess the opportunity, define the strategy, prepare the institution and engage the market with stronger evidence.",
      label: "Book a Healthcare Consultation",
      consult: "capital",
    },
    links: serviceLinks("capital", "trade", "publicAffairs", "research", "institute", "engage"),
  },
  {
    slug: "agriculture",
    kind: "sector",
    name: "Agriculture and Food Systems",
    scope:
      "Agricultural production, livestock, agritech, agricultural finance, food processing, cold chains, distribution, exports and food security.",
    icon: Sprout,
    seoTitle: "Agribusiness Consulting in Africa",
    metaDescription:
      "Agribusiness consulting, food systems research and executive training across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "agribusiness consulting Africa",
      "agriculture advisory Africa",
      "food systems consulting Africa",
      "agribusiness consulting Kenya",
      "agriculture consulting Nigeria",
      "agribusiness advisory South Africa",
      "agriculture market research Africa",
    ],
    h1: "Agriculture and Food Systems Advisory Across Africa",
    intro:
      "Credence Africa helps agribusinesses, food companies, cooperatives, investors and public institutions build stronger agricultural markets and enterprises. We support capital, trade, market entry, value chain growth, research, policy and institutional capability across Africa.",
    actions: [
      { label: "Discuss an Agribusiness Mandate", consult: "trade" },
      { label: "Commission Agriculture Market Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Stronger enterprises and value chains across African food systems",
      paragraphs: [
        "Agriculture is a connected system of production, finance, processing, storage, logistics, distribution, trade and consumption. Commercial success depends on the strength of the full value chain. It also depends on policy, infrastructure, climate resilience, market access and the institutions that organise producers and buyers.",
        "Credence Africa works across agricultural production, livestock, agritech, agricultural finance, food processing, cold chains, distribution, exports and food security. We help clients identify where value can be created, what capital and partnerships are required and how an enterprise or initiative can move from concept to execution.",
      ],
    },
    needs: {
      lead: "We support leaders who need answers to questions such as:",
      items: [
        "Which agricultural value chain or market offers the strongest commercial opportunity?",
        "Where are the constraints in production, aggregation, processing, storage, logistics or distribution?",
        "What will make an agribusiness, cooperative or food enterprise ready for capital?",
        "How can a product reach domestic, regional or international markets?",
        "What policy, institutional or capability intervention will improve market performance?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build enterprise, cooperative and institutional capability across agricultural value chains.",
        items: [
          "Agribusiness management and growth programmes",
          "Cooperative governance, leadership and member value training",
          "Investment readiness and financial management for agricultural enterprises",
          "Export readiness, trade and market access programmes",
          "Value chain forums, buyer conversations and sector roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research and intelligence work connects farm level realities to commercial demand, investment and policy decisions.",
        items: [
          "Agricultural value chain and market systems studies",
          "Demand, pricing, buyer and competitor intelligence",
          "Production, processing, storage and distribution mapping",
          "Trade, export and regional market analysis",
          "Agricultural finance, investment and policy research",
          "Sector publications, opportunity briefs and ecosystem intelligence",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps agricultural and food system actors structure growth, capital, trade and institutional partnerships.",
        items: [
          "Agribusiness and food enterprise growth strategy",
          "Capital readiness and investment structuring",
          "Trade, export and market access strategy",
          "Market entry and distribution development",
          "Value chain development and partnership design",
          "Policy, public affairs and institutional engagement",
        ],
      },
    ],
    mandates: [
      "A processor seeking supply, distribution and investment strategy",
      "A cooperative strengthening governance, finance and market access",
      "An investor assessing an agricultural value chain or food business",
      "An exporter planning entry into a regional or international market",
      "A government or development partner designing a market systems, enterprise or food security initiative",
    ],
    audiences: [
      "Agribusinesses, food processors, exporters and distributors",
      "Producer organisations, cooperatives and SACCOs",
      "Agritech and agricultural finance companies",
      "Investors, banks and development finance institutions",
      "Governments, associations, research institutions and development partners",
    ],
    geography:
      "Kenya is a priority market for East African value chains, horticulture, agritech, cooperatives and regional trade. Nigeria is a priority market for scale, food processing, distribution and agricultural investment. South Africa is a priority market for commercial agriculture, food manufacturing, finance and regional supply chains. We also support cross-border value chains and expansion into other African markets.",
    why:
      "We follow the economics of the value chain. We examine production, processing, finance, infrastructure, trade and consumer demand together. This allows clients to identify the binding constraints and direct capital and capability toward the highest-value interventions.",
    faqs: [
      {
        q: "What agribusiness consulting services does Credence Africa provide?",
        a: "We provide growth strategy, value chain analysis, capital readiness, investment facilitation, trade and export strategy, market entry, policy advisory, research, training and stakeholder convening.",
      },
      {
        q: "Can Credence Africa support food processing and manufacturing projects?",
        a: "Yes. Food processing sits within our Agriculture and Food Systems sector. We can support market analysis, value chain strategy, capital readiness, investment facilitation, distribution, trade and institutional engagement.",
      },
      {
        q: "Does Credence Africa work with cooperatives?",
        a: "Yes. We support cooperatives with governance, strategy, member value, enterprise growth, finance, market access, leadership development and institutional strengthening.",
      },
      {
        q: "Can Credence Africa help an agribusiness enter Kenya, Nigeria or South Africa?",
        a: "Yes. We assess demand, supply conditions, competition, regulation, trade requirements, distribution, partnerships and investment conditions. We then design a market entry and execution pathway.",
      },
    ],
    closing: {
      heading: "Build a more investable and market connected agriculture mandate",
      body:
        "Credence Africa can help you understand the value chain, structure the commercial case, prepare for capital and build the partnerships required for growth.",
      label: "Book an Agribusiness Consultation",
      consult: "trade",
    },
    links: serviceLinks("capital", "trade", "research", "publicAffairs", "institute", "engage"),
  },
  {
    slug: "energy",
    kind: "sector",
    name: "Energy, Climate and Natural Resources",
    scope:
      "Renewable energy, power, distributed energy, climate finance, carbon markets, water, waste, circular economy and environmental services.",
    icon: Leaf,
    seoTitle: "Energy and Climate Consulting in Africa",
    metaDescription:
      "Energy, climate finance and natural resources advisory across Africa, with priority coverage in Kenya, Nigeria and South Africa.",
    keywords: [
      "energy consulting Africa",
      "renewable energy advisory Africa",
      "climate finance consulting Africa",
      "energy consulting Kenya",
      "energy advisory Nigeria",
      "renewable energy consulting South Africa",
      "carbon market research Africa",
    ],
    h1: "Energy, Climate and Natural Resources Advisory Across Africa",
    intro:
      "Credence Africa supports energy companies, climate ventures, project developers, investors and public institutions across African energy and natural resource markets. We connect investment, policy, market intelligence and institutional capability to help clients move opportunities toward credible execution.",
    actions: [
      { label: "Discuss an Energy or Climate Mandate", consult: "capital" },
      { label: "Commission Energy Market Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Investment and institutional strategy for Africa's energy transition",
      paragraphs: [
        "Energy and climate opportunities sit inside complex systems. Projects depend on policy, infrastructure, finance, public institutions, land, technology, customers and long-term stakeholder confidence. Strong strategy must account for all of these conditions.",
        "Credence Africa works across renewable energy, power, distributed energy, climate finance, carbon markets, water, waste, circular economy, environmental services and selected natural resource value chains. We help clients evaluate opportunities, prepare projects and institutions, engage capital and navigate market and policy environments.",
      ],
    },
    needs: {
      lead: "We support clients when the central questions include:",
      items: [
        "Is the opportunity commercially and institutionally viable?",
        "What policy, licensing, stakeholder and market conditions will shape execution?",
        "How should a project, platform or company prepare for capital?",
        "Which partners, customers, investors and public institutions must be engaged?",
        "What research and capability will strengthen the investment or policy case?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build practical capability around energy investment, climate finance, policy and project leadership.",
        items: [
          "Executive education on energy markets, climate finance and investment",
          "Project preparation and capital readiness programmes",
          "Board, governance and stakeholder leadership programmes",
          "Policy and regulatory capability for energy and climate institutions",
          "Investor forums, policy dialogues and sector roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research helps investors, companies and institutions understand market structure, policy direction, project pipelines and commercial opportunity.",
        items: [
          "Energy market and opportunity assessments",
          "Renewable energy, distributed power and climate technology research",
          "Climate finance and investment landscape analysis",
          "Carbon market, water, waste and circular economy studies",
          "Policy, regulation and stakeholder intelligence",
          "Project pipeline, ecosystem and partner mapping",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work supports strategic choices, investment preparation, market entry and institutional engagement.",
        items: [
          "Growth and market entry strategy",
          "Capital readiness and investment structuring",
          "Project and investment facilitation",
          "Public affairs, policy and regulatory strategy",
          "Trade, technology and partnership strategy",
          "Institutional development and stakeholder engagement",
        ],
      },
    ],
    mandates: [
      "A renewable energy developer preparing a project or market entry strategy",
      "A climate venture seeking investment readiness and institutional partnerships",
      "An investor assessing an energy, carbon, water or circular economy opportunity",
      "A government or industry body developing policy research or stakeholder engagement",
      "A development institution designing a climate finance, resilience or market development initiative",
    ],
    audiences: [
      "Energy companies, utilities, project developers and technology providers",
      "Climate ventures, carbon market actors and environmental service companies",
      "Investors, banks, funds and development finance institutions",
      "Governments, regulators, municipalities and public agencies",
      "Associations, foundations, universities and development partners",
    ],
    geography:
      "Kenya is a priority market for renewable energy, distributed power, e-mobility links and climate innovation. Nigeria is a priority market for energy access, infrastructure, distributed energy and large-scale commercial demand. South Africa is a priority market for power reform, renewable energy, capital and industrial transition. Our work can extend to other African markets through targeted research, local partnerships and stakeholder strategy.",
    why:
      "We bring commercial, capital, policy and institutional analysis into one mandate. We focus on the decisions that determine whether an opportunity can attract support and move forward. Engineering, environmental science and other technical disciplines are delivered with qualified specialist partners when required.",
    faqs: [
      {
        q: "What energy and climate consulting services does Credence Africa provide?",
        a: "We provide market research, growth strategy, market entry, capital readiness, investment facilitation, policy and regulatory advisory, stakeholder engagement, executive training and sector convening.",
      },
      {
        q: "Can Credence Africa help an energy project raise capital?",
        a: "We can strengthen the investment case, clarify the capital strategy, coordinate investment materials, map suitable investors and support engagement. We do not guarantee financing. Technical and financial due diligence remains subject to investor and specialist review.",
      },
      {
        q: "Does Credence Africa support climate finance and carbon market work?",
        a: "Yes. We support climate finance research, investment landscape analysis, market strategy, policy engagement, institutional capability and initiative design. Technical validation and certification are handled by qualified specialists.",
      },
      {
        q: "Can you support market entry in Kenya, Nigeria or South Africa?",
        a: "Yes. We assess market structure, policy, customers, competition, partnerships, investment conditions and stakeholder requirements. The output is a practical entry and engagement plan.",
      },
    ],
    closing: {
      heading: "Move an energy or climate opportunity toward credible execution",
      body:
        "Credence Africa can help you test the market case, prepare for capital, understand policy and build the partnerships required for progress.",
      label: "Book an Energy and Climate Consultation",
      consult: "capital",
    },
    links: serviceLinks("capital", "publicAffairs", "trade", "research", "institute", "engage"),
  },
  {
    slug: "technology",
    kind: "sector",
    name: "Technology and Digital Economy",
    scope:
      "Software, artificial intelligence, digital platforms, telecommunications, cloud, data, cybersecurity, digital infrastructure and emerging technology.",
    icon: Cpu,
    seoTitle: "Technology and AI Consulting in Africa",
    metaDescription:
      "Technology, AI and digital economy consulting across Africa, including market entry, research and training in Kenya, Nigeria and South Africa.",
    keywords: [
      "technology consulting Africa",
      "AI consulting Africa",
      "digital economy advisory Africa",
      "technology consulting Kenya",
      "technology advisory Nigeria",
      "AI consulting South Africa",
      "technology market research Africa",
    ],
    h1: "Technology and Digital Economy Advisory Across Africa",
    intro:
      "Credence Africa helps technology companies, investors, corporations and public institutions make informed decisions in Africa's digital economy. We support market entry, growth, capital, policy, artificial intelligence, digital transformation, research and executive capability.",
    actions: [
      { label: "Discuss a Technology Mandate", consult: "trade" },
      { label: "Commission Digital Economy Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Commercial strategy and institutional capability for Africa's digital economy",
      paragraphs: [
        "Technology markets move quickly. Commercial opportunity can change faster than institutional readiness. Businesses must understand customer demand, regulation, infrastructure, competition, talent and capital before they commit to a product, partnership or new market.",
        "Credence Africa works across software, artificial intelligence, digital platforms, telecommunications, cloud, data, cybersecurity, digital infrastructure and emerging technology. We support technology businesses entering or scaling in Africa. We also help established institutions adopt technology with a clear strategic and governance framework.",
      ],
    },
    needs: {
      lead: "Our work is designed around questions such as:",
      items: [
        "Which African market, customer segment or use case should receive priority?",
        "What regulation, infrastructure and partnership conditions affect adoption?",
        "How should a technology company prepare for growth capital or strategic investment?",
        "What AI and digital transformation priorities will create measurable institutional value?",
        "How should leaders manage data, governance, risk and stakeholder trust?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we help leaders and teams build the capability required to use technology responsibly and commercially.",
        items: [
          "Executive AI literacy and responsible AI programmes",
          "Digital transformation and technology leadership training",
          "Capital readiness and market entry programmes for technology businesses",
          "Data governance, digital policy and cyber risk awareness",
          "Technology forums, innovation roundtables and executive communities",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our intelligence work gives clients a grounded view of technology demand, adoption, regulation, competition and investment.",
        items: [
          "Technology market and opportunity assessments",
          "AI adoption, digital transformation and enterprise technology studies",
          "Customer, competitor and channel intelligence",
          "Digital policy, data governance and regulatory analysis",
          "Technology investment, ecosystem and talent mapping",
          "Commissioned reports, executive briefs and media platforms",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work supports technology growth and institutional transformation from strategic choice through implementation planning.",
        items: [
          "Market entry and expansion strategy",
          "Growth, partnership and commercialisation strategy",
          "Capital readiness and investment structuring",
          "AI and digital transformation strategy",
          "Public affairs, policy and regulatory engagement",
          "Innovation ecosystem and institutional partnership development",
        ],
      },
    ],
    mandates: [
      "A global technology company assessing entry into an African market",
      "An African technology business preparing for capital and regional expansion",
      "A corporation developing an AI or digital transformation roadmap",
      "An investor evaluating a technology segment, company or ecosystem",
      "A government, association or development partner commissioning digital economy research or capability building",
    ],
    audiences: [
      "Technology companies, startups and scale businesses",
      "Telecommunications, digital infrastructure and platform companies",
      "Corporations and institutions pursuing digital transformation",
      "Investors, funds and development finance institutions",
      "Governments, regulators, associations, universities and development partners",
    ],
    geography:
      "Kenya is central to our East African technology and innovation work. Nigeria is a priority market for scale, digital commerce, financial technology and consumer platforms. South Africa is a priority market for enterprise technology, institutional adoption, capital and digital infrastructure. We support broader African expansion through country research, stakeholder intelligence and partner development.",
    why:
      "We connect technology strategy to commercial, policy and institutional realities. We focus on the decision, not the trend. This means identifying where technology creates value, what the market can support, what governance is required and how the institution will execute.",
    faqs: [
      {
        q: "What technology consulting services does Credence Africa provide?",
        a: "We provide market entry, growth strategy, AI and digital transformation advisory, capital readiness, investment facilitation, policy and regulatory support, market research, executive training and ecosystem convening.",
      },
      {
        q: "Can Credence Africa help a technology company enter Kenya, Nigeria or South Africa?",
        a: "Yes. We assess demand, competition, pricing, regulation, infrastructure, customers, partners and investment conditions. We then design the market entry and stakeholder engagement plan.",
      },
      {
        q: "Does Credence Africa provide technical software development?",
        a: "Our core role is strategy, market, investment, policy, governance and institutional capability. We work with technology implementation partners when a mandate requires software engineering, systems integration or technical delivery.",
      },
      {
        q: "Can you train boards and executives on artificial intelligence?",
        a: "Yes. Credence Institute develops executive AI literacy, responsible AI, governance, risk and sector-specific adoption programmes for boards, leadership teams and institutions.",
      },
    ],
    closing: {
      heading: "Make a clearer technology decision in Africa",
      body:
        "Credence Africa can help you identify the opportunity, test the market, prepare the institution and build a practical route to growth or transformation.",
      label: "Book a Technology Consultation",
      consult: "trade",
    },
    links: serviceLinks("trade", "capital", "publicAffairs", "research", "institute", "engage"),
  },
  {
    slug: "mobility",
    kind: "sector",
    name: "Mobility, Transport and Logistics",
    scope:
      "Road transport, rail, aviation, maritime systems, ports, freight, warehousing, supply chains, fleet services, urban mobility and e-mobility.",
    icon: Truck,
    seoTitle: "Transport and Logistics Consulting in Africa",
    metaDescription:
      "Transport, logistics and mobility consulting across Africa, with research and advisory support in Kenya, Nigeria and South Africa.",
    keywords: [
      "transport and logistics consulting Africa",
      "mobility consulting Africa",
      "logistics advisory Africa",
      "transport consulting Kenya",
      "logistics consulting Nigeria",
      "mobility advisory South Africa",
      "e-mobility consulting Africa",
    ],
    h1: "Mobility, Transport and Logistics Advisory Across Africa",
    intro:
      "Credence Africa supports transport operators, logistics companies, mobility ventures, infrastructure actors, investors and public institutions across African markets. We help clients understand demand, structure growth, prepare for capital, navigate policy and build the partnerships required for movement at scale.",
    actions: [
      { label: "Discuss a Mobility or Logistics Mandate", consult: "capital" },
      { label: "Commission Transport Market Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Strategy and intelligence for the systems that move Africa",
      paragraphs: [
        "Transport and logistics connect every productive sector. The commercial case depends on routes, customers, infrastructure, regulation, fleet economics, technology, energy and regional trade. Each decision affects the wider supply chain.",
        "Credence Africa works across road transport, rail, aviation, maritime systems, ports, freight, warehousing, supply chains, fleet services, urban mobility, e-mobility and transport infrastructure. We help businesses and institutions evaluate opportunities and design credible pathways for growth, investment and market development.",
      ],
    },
    needs: {
      lead: "We support clients when they need to understand:",
      items: [
        "Where demand, route economics and customer needs create a viable opportunity",
        "What infrastructure, energy, policy and licensing conditions affect execution",
        "How a transport or logistics business should prepare for capital and scale",
        "Which partners, fleet models, technologies and channels can improve performance",
        "What institutional and workforce capability is required for reliable delivery",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we strengthen leadership, operational thinking and sector collaboration.",
        items: [
          "Executive programmes for transport, logistics and supply chain leaders",
          "E-mobility, fleet transition and charging ecosystem learning programmes",
          "Capital readiness and project preparation training",
          "Policy, governance and stakeholder engagement programmes",
          "Transport forums, trade corridor roundtables and investor conversations",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research connects infrastructure and operational realities to commercial demand and investment decisions.",
        items: [
          "Transport, logistics and mobility market assessments",
          "Freight, route, corridor, warehousing and supply chain studies",
          "Fleet, customer and competitor intelligence",
          "E-mobility, charging and energy ecosystem research",
          "Transport policy, regulation and infrastructure analysis",
          "Project, investor, partner and stakeholder mapping",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work supports market entry, growth, investment and institutional engagement.",
        items: [
          "Growth and operating strategy",
          "Market entry and regional expansion",
          "Capital readiness and investment structuring",
          "Project and investment facilitation",
          "Trade corridor, logistics and partnership strategy",
          "Public affairs, policy and regulatory engagement",
        ],
      },
    ],
    mandates: [
      "A logistics company entering a new African market or corridor",
      "An e-mobility company assessing fleet, charging and partnership opportunities",
      "An investor evaluating transport infrastructure, fleet or logistics assets",
      "A public institution developing a transport, trade corridor or urban mobility initiative",
      "An industry association commissioning research, policy engagement or executive training",
    ],
    audiences: [
      "Transport operators, logistics companies and fleet businesses",
      "E-mobility, charging and mobility technology companies",
      "Ports, aviation, rail, warehousing and supply chain institutions",
      "Infrastructure investors, funds and development finance institutions",
      "Governments, regulators, cities, associations and development partners",
    ],
    geography:
      "Kenya is a priority market for East African logistics, regional corridors, urban mobility and e-mobility. Nigeria is a priority market for large-scale transport demand, ports, distribution and urban logistics. South Africa is a priority market for freight, fleet, infrastructure, advanced logistics and regional trade. Credence Africa also supports mandates involving other African markets and cross-border corridors.",
    why:
      "We link transport economics to trade, capital, policy, energy and infrastructure. Mobility decisions rarely sit inside one institution. Credence Africa helps clients map the full system, identify the critical dependencies and build a mandate that can move through commercial and institutional decision points.",
    faqs: [
      {
        q: "What transport and logistics consulting services does Credence Africa provide?",
        a: "We provide market research, growth strategy, market entry, capital readiness, investment facilitation, project support, trade and corridor strategy, policy advisory, executive training and sector convening.",
      },
      {
        q: "Can Credence Africa support an e-mobility business?",
        a: "Yes. We can assess market demand, fleet segments, charging models, energy relationships, regulation, partnerships, capital requirements and market entry options. Technical engineering work is delivered with specialist partners.",
      },
      {
        q: "Does Credence Africa advise on transport infrastructure projects?",
        a: "We support project strategy, market assessment, stakeholder engagement, investment readiness, capital strategy and institutional coordination. Engineering, design and technical due diligence remain the responsibility of qualified specialists.",
      },
      {
        q: "Can you support regional expansion across Kenya, Nigeria and South Africa?",
        a: "Yes. We can compare the markets, identify priority segments, assess regulation and partners and design an expansion pathway that reflects the operating conditions in each country.",
      },
    ],
    closing: {
      heading: "Build a stronger route to mobility and logistics growth",
      body:
        "Credence Africa can help you assess the market, structure the opportunity, prepare for investment and engage the institutions that determine execution.",
      label: "Book a Mobility and Logistics Consultation",
      consult: "capital",
    },
    links: serviceLinks("capital", "trade", "publicAffairs", "research", "institute", "engage"),
  },
  {
    slug: "consumer",
    kind: "sector",
    name: "Consumer, Creative and Services Economy",
    scope:
      "Retail, consumer goods, tourism, hospitality, media, entertainment, film, music, gaming, sports, fashion, cultural industries and professional services.",
    icon: Palette,
    seoTitle: "Consumer and Creative Economy Consulting in Africa",
    metaDescription:
      "Consumer, creative and services economy consulting across Africa, including market research in Kenya, Nigeria and South Africa.",
    keywords: [
      "consumer market consulting Africa",
      "creative economy consulting Africa",
      "consumer research Africa",
      "retail consulting Kenya",
      "creative industry advisory Nigeria",
      "consumer market advisory South Africa",
      "sports and entertainment consulting Africa",
    ],
    h1: "Consumer, Creative and Services Economy Advisory Across Africa",
    intro:
      "Credence Africa helps consumer businesses, creative enterprises, service companies, investors and public institutions understand African markets and build commercially disciplined growth. We support market entry, capital, consumer intelligence, policy, capability and ecosystem development.",
    actions: [
      { label: "Discuss a Consumer or Creative Economy Mandate", consult: "trade" },
      { label: "Commission Consumer Market Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Commercial intelligence for the markets shaping African demand and culture",
      paragraphs: [
        "Consumer and service markets are shaped by income, culture, distribution, trust, regulation, digital behaviour and changing expectations. Creative industries add intellectual property, audiences, talent, platforms and complex commercial models. Growth requires evidence, institutional discipline and a clear route to revenue.",
        "Credence Africa works across retail, consumer goods, tourism, hospitality, media, entertainment, film, music, gaming, sports, creator businesses, fashion, cultural industries and professional services. We help clients understand demand, structure growth, attract capital, enter markets and develop stronger industry institutions.",
      ],
    },
    needs: {
      lead: "We support leaders who need to determine:",
      items: [
        "Which market, customer segment, audience or channel offers the strongest opportunity",
        "How culture, pricing, regulation and distribution affect commercial performance",
        "What revenue, partnership and capital model will support sustainable growth",
        "How intellectual property, brand, talent and platforms can be commercialised",
        "What sector institutions and policy conditions are required for market development",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build management, commercialisation and institutional capability.",
        items: [
          "Executive education for consumer, hospitality and service business leaders",
          "Commercialisation, governance and investment readiness for creative enterprises",
          "Audience, sponsorship, media and sports business programmes",
          "Market entry, sales and distribution capability",
          "Industry forums, buyer conversations and creative economy roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research helps clients understand customers, audiences, demand, channels, competitors and market structure.",
        items: [
          "Consumer market and category studies",
          "Audience, culture, media and entertainment intelligence",
          "Retail, tourism, hospitality and service market assessments",
          "Gaming, sports and creator economy research",
          "Pricing, channel, competitor and distribution intelligence",
          "Sector mapping, investment analysis and commissioned publications",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps businesses and institutions convert market insight into growth and investment action.",
        items: [
          "Market entry and expansion strategy",
          "Growth, revenue and commercialisation strategy",
          "Capital readiness and investment structuring",
          "Trade, distribution and partnership development",
          "Public affairs, policy and regulatory strategy",
          "Industry platform and ecosystem development",
        ],
      },
    ],
    mandates: [
      "A consumer company entering Kenya, Nigeria, South Africa or another African market",
      "A media, gaming, sports or entertainment business developing a commercial strategy",
      "A tourism or hospitality company assessing growth and investment options",
      "An investor evaluating consumer demand or a creative industry opportunity",
      "A government, association or development partner building a sector platform or policy initiative",
    ],
    audiences: [
      "Consumer goods, retail, tourism and hospitality companies",
      "Media, entertainment, film, music, gaming and sports businesses",
      "Creator enterprises, cultural institutions and professional service firms",
      "Investors, brands, sponsors and distribution platforms",
      "Governments, associations, foundations, universities and development partners",
    ],
    geography:
      "Kenya is a priority market for East African consumer growth, tourism, media, technology enabled services and creative enterprise. Nigeria is a priority market for scale, culture, entertainment, consumer demand and distribution. South Africa is a priority market for retail, institutional services, media, sports, tourism and investment. We support broader African expansion through market research, partner development and locally grounded entry strategy.",
    why:
      "We combine consumer intelligence with business, capital, policy and institutional strategy. This is especially important in creative and service markets where strong ideas often outpace governance, revenue systems and investment readiness. We help build the commercial and institutional structure required for durable growth.",
    faqs: [
      {
        q: "What consumer and creative economy consulting services does Credence Africa provide?",
        a: "We provide consumer research, market entry, growth strategy, commercialisation, capital readiness, investment facilitation, policy advisory, executive training and ecosystem convening.",
      },
      {
        q: "Can Credence Africa support media, gaming, sports and entertainment businesses?",
        a: "Yes. We can support market intelligence, audience strategy, commercialisation, partnerships, sponsorship strategy, investment readiness, policy engagement and institutional development.",
      },
      {
        q: "Does Credence Africa conduct consumer market research in Kenya, Nigeria and South Africa?",
        a: "Yes. Research can cover demand, customer segments, pricing, distribution, competitors, cultural context, channels, regulation and investment conditions.",
      },
      {
        q: "Can you help a creative business raise capital?",
        a: "We help clarify the business model, revenue case, governance, capital requirement, investor materials and engagement plan. Funding decisions remain with investors and Credence Africa does not guarantee capital.",
      },
    ],
    closing: {
      heading: "Convert market attention into structured growth",
      body:
        "Credence Africa can help you understand the customer, strengthen the commercial model, prepare for capital and build the partnerships required to scale.",
      label: "Book a Consumer and Creative Economy Consultation",
      consult: "trade",
    },
    links: serviceLinks("trade", "capital", "publicAffairs", "research", "institute", "engage"),
  },
  {
    slug: "blue-economy",
    kind: "sector",
    name: "Blue Economy and Marine Resources",
    scope:
      "Fisheries, aquaculture, coastal economies, ports, maritime trade, ocean innovation and water-based industries.",
    icon: Waves,
    seoTitle: "Blue Economy Consulting in Africa",
    metaDescription:
      "Blue economy, fisheries and maritime advisory across Africa, with research and market entry support in Kenya, Nigeria and South Africa.",
    keywords: [
      "blue economy consulting Africa",
      "fisheries advisory Africa",
      "aquaculture consulting Africa",
      "blue economy Kenya",
      "maritime advisory Nigeria",
      "ocean economy consulting South Africa",
      "coastal market research Africa",
    ],
    h1: "Blue Economy and Marine Resources Advisory Across Africa",
    intro:
      "Credence Africa helps fisheries businesses, aquaculture producers, port and maritime operators, coastal enterprises, investors and public institutions build commercially viable ocean and freshwater economies. We support market intelligence, capital, trade, policy and institutional capability.",
    actions: [
      { label: "Discuss a Blue Economy Mandate", consult: "capital" },
      { label: "Commission Marine Market Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Commercial value from Africa's oceans, lakes and coastlines",
      paragraphs: [
        "Africa's oceans, lakes and rivers carry substantial unrealised commercial value. Realizing it depends on the full chain from harvest and production through landing sites, cold storage, processing, logistics and market access. It also depends on licensing, resource management, port infrastructure and the institutions that organise producers and buyers.",
        "Credence Africa works across capture fisheries, aquaculture and mariculture, coastal processing, ports and maritime trade, ocean innovation, marine biotechnology and coastal resilience. We help clients identify where value can be created, what capital and partnerships are required and how an enterprise or initiative moves from concept to execution.",
      ],
    },
    needs: {
      lead: "We support leaders who need answers to questions such as:",
      items: [
        "Which fishery, aquaculture segment or coastal value chain offers the strongest commercial case?",
        "Where are the constraints in production, landing, cold chain, processing or distribution?",
        "What will make a fisheries business, cooperative or port enterprise ready for capital?",
        "What licensing, resource management and trade conditions affect the opportunity?",
        "How can coastal products reach domestic, regional and export markets?",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build enterprise, cooperative and institutional capability across coastal and maritime value chains.",
        items: [
          "Fisheries and aquaculture enterprise management programmes",
          "Cooperative governance, leadership and member value training for fisher organisations",
          "Investment readiness and financial management for coastal enterprises",
          "Export readiness, quality standards and market access programmes",
          "Coastal value chain forums, buyer conversations and maritime roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research connects harvest and coastal realities to commercial demand, investment and policy decisions.",
        items: [
          "Fisheries, aquaculture and coastal market assessments",
          "Demand, pricing, buyer and competitor intelligence for marine products",
          "Landing site, cold chain, processing and distribution mapping",
          "Port, maritime trade and logistics corridor analysis",
          "Blue finance, investment and resource policy research",
          "Sector publications, opportunity briefs and ecosystem intelligence",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work helps marine and coastal actors structure growth, capital, trade and institutional partnerships.",
        items: [
          "Fisheries and aquaculture enterprise growth strategy",
          "Capital readiness and investment structuring",
          "Trade, export and market access strategy",
          "Port, maritime and coastal infrastructure project support",
          "Value chain development and partnership design",
          "Policy, public affairs and institutional engagement",
        ],
      },
    ],
    mandates: [
      "A processor or exporter structuring supply, cold chain and investment strategy",
      "An aquaculture business preparing for capital and market expansion",
      "A fisher cooperative strengthening governance, finance and market access",
      "An investor assessing a fisheries, aquaculture or coastal infrastructure opportunity",
      "A government or development partner designing a blue economy or coastal livelihoods initiative",
    ],
    audiences: [
      "Fisheries businesses, processors, exporters and distributors",
      "Aquaculture and mariculture producers and input suppliers",
      "Ports, maritime operators, logistics companies and coastal infrastructure developers",
      "Fisher cooperatives, producer organisations and SACCOs",
      "Investors, banks, governments, associations and development partners",
    ],
    geography:
      "Kenya is a priority market for East African coastal and lake fisheries, aquaculture growth and regional maritime trade. Nigeria is a priority market for scale, domestic demand, coastal processing and port-driven logistics. South Africa is a priority market for commercial fisheries, marine services, port infrastructure and export supply chains. We also support cross-border coastal value chains and landlocked markets connecting through regional ports.",
    why:
      "We follow the economics of the value chain rather than the resource alone. We examine production, cold chain, finance, infrastructure, trade and consumer demand together, so clients can identify the binding constraints and direct capital and capability toward the highest-value interventions. Marine science, stock assessment and environmental verification are delivered with qualified specialist partners.",
    faqs: [
      {
        q: "What blue economy consulting services does Credence Africa provide?",
        a: "We provide market research, value chain analysis, growth strategy, capital readiness, investment facilitation, trade and export strategy, policy advisory, executive training and sector convening.",
      },
      {
        q: "Can Credence Africa help an aquaculture or fisheries business raise capital?",
        a: "We help clarify the strategy, investment case, financial requirements, governance, materials and investor engagement plan. Funding outcomes depend on the opportunity, market conditions and investor decisions. We do not guarantee capital.",
      },
      {
        q: "Does Credence Africa provide marine science or stock assessment?",
        a: "No. Our role is commercial, strategic, institutional, investment and policy focused. We work with qualified marine scientists, fisheries specialists and environmental partners when a mandate requires those disciplines.",
      },
      {
        q: "Can you support port and maritime trade projects in Kenya, Nigeria or South Africa?",
        a: "Yes. We support market assessment, demand analysis, stakeholder engagement, investment readiness and institutional coordination. Engineering and technical due diligence remain with qualified specialists.",
      },
    ],
    closing: {
      heading: "Build a more investable blue economy mandate",
      body:
        "Credence Africa can help you understand the value chain, structure the commercial case, prepare for capital and build the partnerships required for growth.",
      label: "Book a Blue Economy Consultation",
      consult: "capital",
    },
    links: serviceLinks("capital", "trade", "research", "publicAffairs", "institute", "engage"),
  },
  {
    slug: "skills-workforce-development",
    kind: "sector",
    name: "Education, Skills and Workforce Development",
    scope:
      "Universities, colleges, technical and vocational institutions, edtech, corporate learning and professional training providers.",
    icon: GraduationCap,
    seoTitle: "Education and Training Sector Consulting in Africa",
    metaDescription:
      "Education, edtech and training provider advisory across Africa, including growth, capital and market entry support in Kenya, Nigeria and South Africa.",
    keywords: [
      "education consulting Africa",
      "edtech advisory Africa",
      "training provider consulting Africa",
      "education sector Kenya",
      "education investment Nigeria",
      "higher education advisory South Africa",
      "education market research Africa",
    ],
    h1: "Education, Skills and Workforce Development Advisory Across Africa",
    intro:
      "Credence Africa helps education institutions, training providers, edtech businesses, investors and public institutions build stronger, more commercially sustainable learning organisations. We support growth, capital, market entry, accreditation strategy, research and institutional capability.",
    actions: [
      { label: "Discuss an Education Sector Mandate", consult: "institute" },
      { label: "Commission Education Market Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Stronger institutions across Africa's education and training market",
      paragraphs: [
        "Education and training is a substantial commercial sector in its own right. Universities, colleges, technical and vocational institutions, edtech platforms and corporate learning businesses compete for learners, employers, faculty, accreditation and capital. Enrollment growth alone does not make an institution durable.",
        "Credence Africa works with the organisations that deliver learning. We support provider growth strategy, business model design, capital readiness, market entry, employer partnerships, quality and accreditation positioning, governance and leadership capability.",
      ],
    },
    needs: {
      lead: "We support education and training leaders who need to determine:",
      items: [
        "Which learner segments, programmes and delivery models offer the strongest growth case",
        "How the institution should price, position and differentiate against competing providers",
        "What is required to become ready for investment, expansion or a new campus",
        "How accreditation, regulation and quality frameworks shape the opportunity",
        "What governance, faculty and operating capability the institution must build",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we build leadership, governance and commercial capability inside education organisations.",
        items: [
          "Executive programmes for vice chancellors, principals, deans and provider founders",
          "Governance and board programmes for universities, colleges and training institutions",
          "Commercial growth, enrollment and investment readiness training",
          "Curriculum, faculty and quality assurance capability programmes",
          "Education leadership forums, employer conversations and sector roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research gives education decision-makers a commercially useful view of learners, employers, competitors, regulation and investment.",
        items: [
          "Education market and enrollment demand assessments",
          "Learner, parent and employer intelligence",
          "Provider, programme and campus landscape mapping",
          "Edtech adoption, delivery model and pricing research",
          "Accreditation, regulation and education policy analysis",
          "Commissioned reports, sector outlooks and executive briefs",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work supports education institutions from strategic choice through market engagement and execution planning.",
        items: [
          "Growth strategy and business model development for providers",
          "Market entry, new campus and programme expansion planning",
          "Capital readiness, investment structuring and investor engagement",
          "Employer, industry and institutional partnership development",
          "Accreditation, quality and regulatory positioning",
          "Institutional strategy, governance and operating model improvement",
        ],
      },
    ],
    mandates: [
      "A university or college planning a new campus, programme or market",
      "An edtech business preparing for growth capital and regional expansion",
      "A technical and vocational institution aligning provision to employer demand",
      "An investor assessing an education provider, platform or portfolio",
      "A government, association or development partner commissioning education sector research",
    ],
    audiences: [
      "Universities, colleges and technical and vocational institutions",
      "Edtech companies and digital learning platforms",
      "Corporate learning, professional training and certification businesses",
      "Investors, banks, foundations and development finance institutions",
      "Ministries, regulators, accreditation bodies, associations and development partners",
    ],
    geography:
      "Kenya is a priority market for East African private provision, technical and vocational reform and edtech growth. Nigeria is a priority market for scale, enrollment demand and private education investment. South Africa is a priority market for institutional higher education, corporate learning and regional partnerships. We also support providers expanding into other African markets through country research, regulatory review and partner identification.",
    why:
      "We treat education providers as institutions that must be commercially sound as well as academically credible. Credence Africa brings market evidence, capital planning, regulatory strategy, governance and leadership capability into one mandate. Where a mandate concerns workforce transformation across an industry rather than a provider's own growth, our Jobs, Skills and Workforce Transformation theme carries that work.",
    faqs: [
      {
        q: "What education sector consulting does Credence Africa provide?",
        a: "We provide growth strategy, business model development, market entry, capital readiness, investment facilitation, market research, accreditation and regulatory positioning, institutional strengthening and executive training for education organisations.",
      },
      {
        q: "How is this different from the Jobs, Skills and Workforce Transformation theme?",
        a: "This sector serves the organisations that deliver education and training as their core business. The workforce theme serves employers, governments and institutions in any sector that need to build skills, design academies or manage workforce transition.",
      },
      {
        q: "Can Credence Africa help an edtech business raise capital?",
        a: "We help clarify the strategy, unit economics, investment case, governance, materials and investor engagement plan. Funding decisions remain with investors and we do not guarantee capital.",
      },
      {
        q: "Can you support expansion across Kenya, Nigeria and South Africa?",
        a: "Yes. We compare enrollment demand, competition, pricing, regulation, accreditation requirements and partnership options, then design a practical entry and engagement plan.",
      },
    ],
    closing: {
      heading: "Build a stronger education institution",
      body:
        "Credence Africa can help you test the market, strengthen the model, prepare for capital and build the partnerships an education organisation needs to grow.",
      label: "Book an Education Sector Consultation",
      consult: "institute",
    },
    links: serviceLinks("institute", "research", "capital", "publicAffairs", "trade", "engage"),
  },
  {
    slug: "trade-infrastructure-industrial-development",
    kind: "sector",
    name: "Trade, Infrastructure and Industrial Development",
    scope:
      "Manufacturers, processors, construction and engineering firms, economic zones, industrial real estate and trade service businesses.",
    icon: Factory,
    seoTitle: "Industrial and Infrastructure Sector Consulting in Africa",
    metaDescription:
      "Advisory for manufacturers, industrial operators, construction firms and trade service businesses across Africa, including Kenya, Nigeria and South Africa.",
    keywords: [
      "industrial consulting Africa",
      "manufacturing sector advisory Africa",
      "construction consulting Africa",
      "industrial advisory Kenya",
      "manufacturing consulting Nigeria",
      "infrastructure sector advisory South Africa",
      "economic zone consulting Africa",
    ],
    h1: "Trade, Infrastructure and Industrial Development Advisory Across Africa",
    intro:
      "Credence Africa supports manufacturers, processors, construction and engineering businesses, economic zone operators, industrial developers and trade service companies. We help these businesses understand demand, structure growth, prepare for capital and build the partnerships required to compete.",
    actions: [
      { label: "Discuss an Industrial Sector Mandate", consult: "trade" },
      { label: "Commission Industrial Market Intelligence", consult: "research" },
    ],
    positioning: {
      heading: "Commercial strategy for the businesses that build and move African production",
      paragraphs: [
        "Industrial and trade businesses operate on thin margins and long capital cycles. Competitiveness depends on input costs, energy, logistics, order books, plant utilisation, working capital, standards and the regulatory conditions of every market they serve.",
        "Credence Africa works with the companies themselves. We support manufacturers, processors, construction and engineering firms, equipment suppliers, economic zone and industrial park operators, warehousing and industrial real estate businesses and the trade service companies that connect them to customers.",
      ],
    },
    needs: {
      lead: "We support industrial and trade businesses that need to determine:",
      items: [
        "Which products, customer segments and markets offer the strongest commercial return",
        "Where cost, energy, input supply, logistics or utilisation constrain competitiveness",
        "What the business needs to become ready for growth capital or project finance",
        "Which standards, certification and trade requirements govern market access",
        "What partnerships, plant investment or capacity decisions the growth plan requires",
      ],
    },
    helps: [
      {
        heading: HELP_HEADINGS.training,
        blurb:
          "Through Credence Institute and Credence Engage, we strengthen industrial leadership, commercial discipline and sector collaboration.",
        items: [
          "Executive programmes for manufacturing, construction and industrial leaders",
          "Commercial, pricing and productivity capability for industrial businesses",
          "Capital readiness and project preparation training",
          "Standards, certification and export compliance programmes",
          "Industrial forums, buyer supplier conversations and investor roundtables",
        ],
      },
      {
        heading: HELP_HEADINGS.research,
        blurb:
          "Our research gives industrial and trade businesses a grounded view of demand, competition, cost and market access conditions.",
        items: [
          "Industrial and manufacturing market assessments",
          "Demand, pricing, competitor and import substitution analysis",
          "Input, supplier, logistics and cost structure studies",
          "Construction, infrastructure and industrial property market research",
          "Standards, certification, tariff and trade requirement analysis",
          "Order pipeline, investor and partner mapping",
        ],
      },
      {
        heading: HELP_HEADINGS.advisory,
        blurb:
          "Our advisory work supports industrial and trade businesses from strategic choice through capital and market execution.",
        items: [
          "Growth, product and operating strategy",
          "Market entry and regional expansion",
          "Capital readiness, investment structuring and project finance preparation",
          "Export, distribution and market access strategy",
          "Plant, capacity and industrial property investment support",
          "Public affairs, incentives and regulatory engagement",
        ],
      },
    ],
    mandates: [
      "A manufacturer assessing new capacity, a new product line or a new market",
      "A construction or engineering firm building a pipeline and capital strategy",
      "An economic zone or industrial park operator developing an investor proposition",
      "An investor evaluating an industrial, logistics or industrial property asset",
      "A trade services business expanding across African corridors and markets",
    ],
    audiences: [
      "Manufacturers, processors and industrial service companies",
      "Construction, engineering and equipment supply businesses",
      "Economic zone, industrial park and warehousing operators",
      "Exporters, importers, freight and trade service companies",
      "Investors, banks, governments, investment agencies and development partners",
    ],
    geography:
      "Kenya is a priority market for regional manufacturing, light industry and East African distribution. Nigeria is a priority market for scale, domestic demand, industrial capacity and import substitution. South Africa is a priority market for advanced manufacturing, industrial finance, construction and supplier networks. We also support businesses serving value chains that connect these markets to the wider continent.",
    why:
      "We begin with the commercial system around the business. We examine demand, inputs, cost, logistics, capital and regulation together, so clients can direct investment toward the constraints that actually limit competitiveness. Where a mandate concerns national industrial policy, trade frameworks or project development rather than a single business, our Industrialisation, Trade and Infrastructure themes carry that work.",
    faqs: [
      {
        q: "What industrial sector consulting does Credence Africa provide?",
        a: "We provide growth strategy, market entry, capital readiness, project finance preparation, market and cost research, export and distribution strategy, incentives and regulatory engagement, executive training and sector convening.",
      },
      {
        q: "How is this different from the Industrialisation and Trade themes?",
        a: "This sector serves industrial and trade businesses directly, on their own growth, capital and market decisions. The themes address industrial policy, value chain development, trade frameworks and project development as cross-sector agendas for governments, investors and institutions.",
      },
      {
        q: "Does Credence Africa provide engineering or plant design?",
        a: "No. Our role is commercial, strategic, investment, policy and institutional. Engineering, plant design, technical feasibility and construction supervision are delivered by qualified specialist partners.",
      },
      {
        q: "Can you support industrial expansion across Kenya, Nigeria and South Africa?",
        a: "Yes. We compare demand, cost structures, competition, incentives, standards and logistics across the three markets, then design a practical expansion and engagement pathway.",
      },
    ],
    closing: {
      heading: "Build a more competitive industrial business",
      body:
        "Credence Africa can help you test the market, understand the cost position, prepare for capital and build the partnerships your growth plan requires.",
      label: "Book an Industrial Sector Consultation",
      consult: "trade",
    },
    links: serviceLinks("trade", "capital", "research", "publicAffairs", "institute", "engage"),
  },
];

export const sectorsBySlug: Record<string, Sector> = Object.fromEntries(
  sectorList.map((s) => [s.slug, s]),
);
