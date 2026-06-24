import type { LucideIcon } from "lucide-react";
import { Sprout, Leaf, Waves, Palette, Landmark, GraduationCap, HeartPulse, Truck, Cpu, Factory } from "lucide-react";

export type Sector = {
  slug: string;
  name: string;
  scope: string;
  icon: LucideIcon;
  approach: string[];
  interventions: string[];
  advisory: string[];
  impact: string[];
};

export const sectorList: Sector[] = [
  {
    slug: "agribusiness",
    name: "Agribusiness",
    scope: "Agricultural production, food value chains, agri processing, agri finance, distribution, market systems and food security.",
    icon: Sprout,
    approach: [
      "We build agribusiness systems that turn production into enterprise, linking farmers, processors, financiers and buyers into integrated value chains that are productive, profitable and resilient. Our work spans agricultural production, food value chains, agri processing, agri finance and the distribution networks that carry produce to market.",
      "By aligning these value chains with capital, technology, food-safety standards and regional trade frameworks, we strengthen market systems and food security, unlock investment and drive the shift from subsistence to commercially viable, climate-aligned agriculture."
],
    interventions: [
      "Agri-Finance Access Platforms — blended finance, input-credit lines, SACCO savings products and partial guarantees that move capital to farmers, processors and agri-SMEs.",
      "Value Chain Modernization Programs — aggregation centers, agro-processing hubs, cold storage and digital traceability that lift productivity from farm to shelf.",
      "Market Systems Strengthening — structured offtake arrangements, warehouse-receipt schemes, commodity exchange linkages and price-discovery tools that connect producers to reliable buyers.",
      "Climate-Smart Production Labs — regenerative practices, water-smart irrigation, drought-tolerant inputs and renewable-powered cold chains for resilient yields.",
      "Distribution & Logistics Networks — last-mile collection, transport pooling and route optimization that cut spoilage and widen rural market reach.",
      "Food Security & Resilience Initiatives — linking production with nutrition, strategic reserves, school feeding supply and social protection safety nets.",
      "AgriTech & Digital Extension Services — precision agronomy, mobile advisory, satellite-based monitoring and cooperative-level management information systems.",
      "Youth & Women in Agri-Enterprise — incubation and acceleration of gender- and youth-led ventures across production, processing and distribution."
],
    advisory: [
      "Agribusiness Structuring & Compliance — legal, tax and governance frameworks for cooperatives, processors, agri-SMEs and investors.",
      "Investment Readiness & Capital Raising — preparing agri-enterprises for debt, equity, blended finance and DFI engagement.",
      "Trade & Policy Advisory — navigating agricultural standards, tariffs, sanitary rules and market access across AfCFTA, EAC, COMESA and SADC.",
      "Agri Value Chain & Market Diagnostics — mapping production, processing and distribution gaps to design bankable upgrading strategies.",
      "Public-Private Partnership Structuring — designing PPPs for irrigation schemes, agro-processing zones, food parks and logistics corridors.",
      "Impact Measurement & ESG Integration — sector-specific ESG frameworks, food-safety compliance and impact dashboards for agribusiness portfolios."
],
    impact: [
      "Farmers and producers earning higher, more stable incomes through finance access and stronger market linkages.",
      "Reduced post-harvest losses via modern processing, cold storage and efficient distribution.",
      "Expanded access to regional and global markets, including AfCFTA-driven trade opportunities.",
      "More resilient, climate-aligned food systems that strengthen national and household food security.",
      "Empowered youth and women agripreneurs scaling competitive enterprises across the value chain.",
      "Agri processors and cooperatives anchoring inclusive rural economic transformation."
],
  },
  {
    slug: "green-economy",
    name: "Green Economy",
    scope: "Renewable energy, climate finance, green economy initiatives, sustainability, carbon markets, resilience and environmental transition systems.",
    icon: Leaf,
    approach: [
      "Africa holds the resources, demographic energy and natural capital to lead a global low-carbon transition yet it remains underserved by climate finance and exposed to mounting climate risk. We treat the green economy as an institution-building challenge: structuring the instruments, projects and partnerships that turn climate ambition into bankable, durable infrastructure.",
      "By connecting renewable energy, climate finance, carbon markets and resilience systems, we help governments, investors and enterprises build a transition that is both green and just. Our work blends concessional capital with private investment, aligns projects to regional frameworks and ensures that environmental outcomes translate into shared economic value."
],
    interventions: [
      "Renewable Energy Access Platforms — structuring mini-grids, solar home systems and productive-use energy financing for underserved communities and SMEs.",
      "Climate Finance Facilities — mobilizing blended finance, green bonds, DFI capital and concessional funding into bankable low-carbon projects.",
      "Carbon Markets Labs — developing high-integrity carbon credit pipelines, MRV systems and benchmarks aligned to Article 6 and voluntary market standards.",
      "Just Energy Transition Programs — managing coal-to-clean transitions, grid modernization and reskilling pathways for affected workers and regions.",
      "Climate Resilience & Adaptation Initiatives — water security, drought-resilient agriculture, flood defenses and nature-based infrastructure for vulnerable regions.",
      "Circular Economy Hubs — piloting waste-to-value enterprises, recycling networks, e-waste recovery and sustainable materials supply chains.",
      "Green SME & Cleantech Incubation — accelerating clean cooking, e-mobility, off-grid solar and climate-tech ventures into investment readiness.",
      "Nature & Biodiversity Programs — restoration, reforestation, blue carbon and conservation finance models that reward community stewardship."
],
    advisory: [
      "Climate Finance Structuring — designing green bonds, blended vehicles and concessional facilities to crowd in private and DFI capital.",
      "Carbon Project Advisory — feasibility, registration, MRV design and offtake strategy for compliance and voluntary carbon credits.",
      "Energy Transition & Policy Advisory — supporting NDC implementation, power-sector reform and regional energy integration across EAC, SADC and COMESA.",
      "ESG & Sustainability Integration — embedding ESG frameworks, climate risk disclosure and transition planning into corporate and investor strategy.",
      "Public-Private Partnership Structuring — designing PPPs for renewable generation, transmission, water and climate-resilient infrastructure.",
      "Impact Measurement & Green Taxonomy Alignment — building monitoring systems, taxonomies and reporting aligned to AfCFTA and global climate standards."
],
    impact: [
      "Communities and SMEs gaining reliable, affordable access to clean energy.",
      "Climate capital mobilized into bankable renewable and adaptation projects.",
      "High-integrity carbon markets channeling revenue to local stewards.",
      "Just transitions that protect workers and regions through reskilling and reinvestment.",
      "Resilient infrastructure and food systems that withstand climate shocks.",
      "Green enterprises scaling into competitive, investment-ready businesses."
],
  },
  {
    slug: "blue-economy",
    name: "Blue Economy",
    scope: "Fisheries, marine resources, coastal economies, water based industries, ocean innovation and maritime trade ecosystems.",
    icon: Waves,
    approach: [
      "We unlock the value of Africa’s oceans, lakes and rivers through cooperative enterprise, sustainable fisheries and blue infrastructure. Our work links fishers, processors, ports and markets into integrated value chains that are productive, profitable and ecologically resilient.",
      "By aligning marine resources with finance, technology and regional trade frameworks, we support the shift from subsistence harvesting to enterprise, mobilizing investment while safeguarding the coastal and aquatic ecosystems that communities depend on."
],
    interventions: [
      "Blue Finance Access Platforms — blended finance, SACCO-led savings pools, blue bonds and credit guarantees for fishers, cooperatives and coastal SMEs.",
      "Sustainable Fisheries Labs — piloting traceable catch documentation, stock recovery models, gear modernization and community-managed marine protected areas.",
      "Aquaculture & Mariculture Programs — building hatcheries, cage and pond systems, feed supply chains and cold-chain infrastructure for inland and coastal producers.",
      "Coastal Value Chain Modernization — landing-site upgrades, processing hubs, cold storage, aggregation centers and digital traceability from sea to market.",
      "Maritime Trade & Port Enablement — port community systems, blue corridor logistics and AfCFTA/EAC/COMESA-aligned facilitation for water-borne trade.",
      "Ocean Innovation & Marine Biotech Incubators — accelerating startups in seaweed, marine renewables, plastics circularity and ocean data and monitoring.",
      "Coastal Resilience & Conservation Initiatives — mangrove restoration, carbon credit structuring, shoreline protection and integrated coastal zone management.",
      "Women & Youth in Blue Enterprise — incubation, leadership tracks and financing for women fish processors, youth-led mariculture and small-scale operators."
],
    advisory: [
      "Blue Enterprise Structuring & Compliance — legal, tax and governance frameworks for fisher cooperatives, processors, port operators and investors.",
      "Investment Readiness & Capital Raising — preparing blue enterprises and projects for debt, equity, blue bonds and DFI-backed blended finance.",
      "Maritime Trade & Policy Advisory — navigating port regulation, fisheries licensing, IUU compliance and trade facilitation across AfCFTA, EAC and SADC.",
      "Marine Spatial Planning & Resource Use — advisory on coastal zoning, concessions, environmental compliance and climate adaptation planning.",
      "Public-Private Partnership Structuring — designing PPPs for ports, fishing harbors, aquaculture parks and blue infrastructure.",
      "Impact Measurement & ESG Integration — sector-specific ESG frameworks, ocean accounting and impact dashboards for blue economy projects."
],
    impact: [
      "Fishers and coastal communities earning higher, stable incomes through cooperative structuring and access to finance.",
      "Healthier fish stocks and restored marine habitats through sustainable, community-managed practices.",
      "Reduced post-harvest losses via modern processing, cold chains and efficient maritime logistics.",
      "Expanded access to regional and global markets, including AfCFTA-driven trade in fish and marine products.",
      "Resilient coastlines and blue carbon assets that protect livelihoods and attract climate finance.",
      "Empowered women and youth scaling competitive aquaculture and ocean-innovation enterprises."
],
  },
  {
    slug: "creative-economy",
    name: "Creative Economy",
    scope: "Media, entertainment, gaming, creator economies, sports business, cultural industries and digital content ecosystems.",
    icon: Palette,
    approach: [
      "Africa's creative economy spans media, entertainment, gaming, creator platforms, sports business, cultural industries and digital content ecosystems yet much of this value remains undercapitalized and informally organized. Musicians, filmmakers, designers, athletes, studios and digital creators generate immense cultural influence but often lack the ownership structures, financing and protections to monetize it sustainably.",
      "At Credence Africa, we transform creative talent into enterprise by integrating IP protection, capital mobilization, market access and policy advocacy. We move creators beyond hustle economics into structured, investor-ready businesses while keeping cultural authenticity, inclusivity and African ownership at the center of how the sector grows."
],
    interventions: [
      "Creator Capital Platforms — blended finance, cooperative funds, revenue-advance facilities and investor-ready vehicles tailored to musicians, filmmakers, designers and digital creators.",
      "IP & Royalty Systems — licensing frameworks, collective management organizations, rights registries and royalty-tracking tools that secure long-term income for rights holders.",
      "Creative Enterprise Structuring — legal, financial and governance models that formalize talent and informal collectives into scalable, investable businesses.",
      "Content Commercialization Labs — streaming, syndication, brand partnership and platform strategies that monetize African media and content across global markets.",
      "Gaming & Esports Ecosystems — incubation for studios, esports leagues, interactive media and digital-content ventures, with publishing and infrastructure support.",
      "Sports Business Programs — club governance, athlete representation, sponsorship structuring and event commercialization that build durable sports enterprises.",
      "Cultural Industries & Market Access — festivals, heritage enterprises, fashion and craft value chains positioned for AfCFTA-enabled cross-border trade and distribution.",
      "Skills & Enterprise Academies — entrepreneurial, legal, financial and production training that links creators with the capabilities to run sustainable ventures."
],
    advisory: [
      "IP & Rights Advisory — counsel on copyright, trademarks, licensing, contracts and royalty structures that protect creators and unlock recurring income.",
      "Investment Readiness & Capital Raising — preparing studios, labels, leagues and creative SMEs for debt, equity and blended-finance access.",
      "Trade & Distribution Advisory — navigating AfCFTA, EAC and COMESA frameworks to scale content, events and cultural goods into regional and international markets.",
      "Sports & Entertainment Governance — structuring clubs, federations, talent agencies and rights bodies for transparency, compliance and commercial growth.",
      "Public-Private Partnership Structuring — designing PPPs for studios, creative hubs, stadiums and digital-content infrastructure.",
      "Impact Measurement & ESG Integration — building sector-specific ESG frameworks and impact dashboards for creative, media and sports ventures."
],
    impact: [
      "African creators retain ownership of their intellectual property and capture fair value from their work.",
      "Globally competitive African media, gaming and cultural brands gain visibility and reach in international markets.",
      "Youth employment expands through the creator economy, esports, content production and sports business.",
      "Informal survival models are replaced with structured, investor-ready creative enterprises.",
      "Africa's cultural and digital voice is amplified across global culture, technology and trade.",
      "Capital flows into the creative economy through tailored investment vehicles and aligned policy."
],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    scope: "Banking, fintech, digital finance, SACCOs, payments, insurance, investment platforms, capital markets and financial inclusion ecosystems.",
    icon: Landmark,
    approach: [
      "We build financial systems that are inclusive, well-governed and connected across African markets. Our work links banks, fintechs, SACCOs, insurers and capital markets into ecosystems that move money safely, extend services to the excluded and channel savings into productive investment.",
      "By aligning innovation with sound regulation, blended capital and regional trade frameworks, we help financial institutions modernize, scale and de-risk lending, turning financial inclusion from an aspiration into durable economic infrastructure."
],
    interventions: [
      "Financial Inclusion Platforms — agent banking, mobile money interoperability and low-cost accounts that extend services to unbanked and rural populations.",
      "Fintech Acceleration Labs — incubation, regulatory sandbox readiness and partnership models for payments, lending and insurtech startups.",
      "SACCO Modernization Programs — digital core banking, governance reform and shared-services platforms that strengthen cooperative financial institutions.",
      "Digital Payments & Rails Integration — instant payment systems, cross-border remittance corridors and AfCFTA-aligned interoperability frameworks.",
      "Blended Finance Facilities — pooling DFI, philanthropic and commercial capital to de-risk lending to MSMEs, women and youth borrowers.",
      "Inclusive Insurance Programs — micro-insurance, weather-indexed cover and embedded protection products distributed through digital and cooperative channels.",
      "Capital Markets Deepening Initiatives — SME boards, green and diaspora bond structuring and retail investment platforms that broaden market participation.",
      "Financial Literacy & Consumer Protection Drives — community education, digital-finance safeguarding and responsible-lending standards for first-time users."
],
    advisory: [
      "Regulatory & Licensing Advisory — guiding banks, fintechs and payment providers through central bank authorization, sandbox entry and compliance.",
      "Capital Raising & Investment Readiness — structuring debt, equity and blended finance for financial institutions, SACCOs and fintech ventures.",
      "Risk, Governance & AML/CFT Compliance — designing controls, board frameworks and anti-money-laundering systems aligned with FATF and regional standards.",
      "Digital Transformation Strategy — core banking modernization, open finance integration and data-driven product design for incumbents and challengers.",
      "Cross-Border & Trade Finance Advisory — enabling settlement, correspondent banking and AfCFTA-driven trade finance across EAC, COMESA and SADC markets.",
      "ESG & Sustainable Finance Integration — building green-finance frameworks, impact measurement and climate-risk disclosure for lenders and investors."
],
    impact: [
      "Millions of previously excluded households and enterprises gaining access to affordable, reliable financial services.",
      "Stronger, better-governed SACCOs and cooperative banks serving members at scale.",
      "Fintech ventures scaling responsibly within clear, supportive regulatory frameworks.",
      "Deeper capital markets channeling domestic and diaspora savings into productive investment.",
      "MSMEs, women and youth accessing credit, insurance and growth finance on fair terms.",
      "Resilient financial systems that are inclusive, well-regulated and integrated across African markets."
],
  },
  {
    slug: "skills-workforce-development",
    name: "Skills & Workforce Development",
    scope: "Education systems, executive education, skills development, workforce readiness, digital learning and institutional training.",
    icon: GraduationCap,
    approach: [
      "Africa’s fast-growing, youthful workforce is its greatest asset yet too many learners pass through systems that are misaligned with the labor market, underfunded and slow to adopt digital delivery. The result is a persistent gap between the skills people hold and the skills economies need.",
      "At Credence Africa, we close the distance between learning and livelihoods. We align education systems, executive education and institutional training with employer demand, enterprise growth and national priorities. Working with governments, training institutions and the private sector, we drive curriculum innovation, digital learning and workforce readiness to build a capable, future-ready workforce that competes locally, regionally and globally."
],
    interventions: [
      "Competency-Based Curriculum Labs — co-designing industry-aligned, modular curricula with TVETs, universities and employers to connect classrooms to real labor markets.",
      "Digital Learning Platforms — deploying scalable edtech, learning management systems and offline-first content for schools, colleges and remote learners across the continent.",
      "Executive Education Academies — delivering leadership, finance and strategy programs for managers, public officials and enterprise founders in African institutions.",
      "Workforce Readiness Programs — embedding work-based learning, internships and employability skills that bridge graduates into employment and self-employment.",
      "Teacher & Trainer Professionalization — continuous upskilling in modern pedagogy, assessment and digital fluency for educators and facilitators.",
      "Regional Skills Harmonization Initiatives — aligning qualifications, credentials and training standards across EAC, COMESA, SADC and AfCFTA to enable labor mobility.",
      "Digital & Green Skills Academies — training in data, AI, cybersecurity and clean-energy trades that match emerging demand in growth sectors.",
      "Institutional Training Systems — building corporate academies, public-service training units and SACCO capability hubs that institutionalize learning at scale."
],
    advisory: [
      "Education Systems & Reform Advisory — supporting ministries to design competency frameworks, financing models and PPPs for resilient learning systems.",
      "Skills Demand & Labor Market Analytics — mapping employer needs, skills gaps and occupation pathways to align training supply with real demand.",
      "Workforce Strategy & Talent Development — helping organizations build capability frameworks, learning roadmaps and succession pipelines.",
      "Digital Learning Transformation — guiding institutions through edtech selection, platform integration and blended-delivery design.",
      "Accreditation & Quality Assurance Advisory — establishing standards, credentialing and qualification recognition aligned with national and regional frameworks.",
      "Training Finance & Investment Readiness — structuring blended finance, DFI funding and outcome-based models that make skilling affordable and sustainable."
],
    impact: [
      "Young people equipped with market-relevant skills and clear entry routes into work and enterprise.",
      "Education and training institutions digitally enabled to scale access and improve learning outcomes.",
      "Employers and public agencies supplied with a job-ready, continuously upskilled workforce.",
      "Qualifications and credentials recognized across African markets, enabling regional labor mobility.",
      "Affordable skilling expanded through innovative financing and institution-led training systems.",
      "A regionally competitive workforce that reduces underemployment and skills mismatch across the continent."
],
  },
  {
    slug: "healthcare-wellness",
    name: "Healthcare & Wellness",
    scope: "Healthcare systems, pharmaceuticals, medical innovation, health financing, wellness industries and public health ecosystems.",
    icon: HeartPulse,
    approach: [
      "We strengthen Africa’s healthcare ecosystem by combining professionalism with entrepreneurial and digital models. Our approach recognizes that healthcare in Africa is not only a service but also a cornerstone of economic and social stability. We link hospitals, clinics, policymakers, insurers and private investors to design systems that are financially viable, accessible and patient-centered.",
      "By addressing financing gaps, fragmented supply chains, workforce shortages and slow adoption of digital health solutions, we enable healthcare institutions to transition from fragile and donor-dependent models to sustainable, scalable systems of care. We also integrate healthcare with broader development goals, including climate resilience, gender equity and cooperative-led service delivery."
],
    interventions: [
      "Healthcare Finance Platforms — Blended finance, risk guarantees and insurance-backed solutions for health facilities.",
      "Digital Health & Telemedicine — Leveraging mobile platforms and AI diagnostics to expand access to remote populations.",
      "Healthcare Supply Chain Programs — Modernizing procurement and distribution to improve access to medicines.",
      "Patient Safety & Quality Standards — Building systems for ethics, accreditation and continuous compliance.",
      "Workforce Skilling & Entrepreneurship — Equipping health professionals with clinical, managerial and enterprise skills.",
      "Healthcare Infrastructure Solutions — Supporting facility expansion, PPP models and climate-smart hospitals.",
      "Community Health & Preventive Care — Advancing grassroots initiatives for early detection and primary care.",
      "Health Data & Insights Platforms — Enabling real-time monitoring of health outcomes and disease surveillance."
],
    advisory: [
      "Health Financing & Investment Structuring — designing blended finance, insurance schemes and PPP models that make facilities bankable and resilient.",
      "Regulatory & Accreditation Advisory — navigating licensing, clinical standards, accreditation and compliance across national and regional health systems.",
      "Digital Health Strategy — advising on telemedicine, health information systems, AI diagnostics and data governance for safe, scalable adoption.",
      "Supply Chain & Procurement Advisory — strengthening pharmaceutical procurement, cold-chain logistics and distribution integrity for essential medicines.",
      "Public-Private Partnership Structuring — designing PPPs for hospitals, diagnostics, climate-smart facilities and community health infrastructure.",
      "Impact Measurement & ESG Integration — building health-outcome metrics, equity frameworks and ESG dashboards for health portfolios."
    ],
    impact: [
      "Expanded healthcare access and affordability for underserved populations.",
      "Digitally enabled health systems reducing barriers to timely and quality care.",
      "Financially resilient health institutions ready for investment.",
      "Empowered health workers as professionals, entrepreneurs and cooperative leaders.",
      "Improved supply chain integrity for essential drugs and technologies.",
      "Restored public trust in healthcare through accountability and quality assurance."
    ],
  },
  {
    slug: "mobility-transport-logistics",
    name: "Mobility, Transport & Logistics",
    scope: "Transport systems, logistics, supply chains, electric mobility, infrastructure mobility, fleet ecosystems and smart transport solutions.",
    icon: Truck,
    approach: [
      "We build the systems that move people and goods across Africa, linking operators, financiers, technology providers and governments into integrated networks that are efficient, inclusive and future-ready. Our work spans transport systems, logistics, supply chains, electric mobility, mobility infrastructure, fleet ecosystems and the smart transport solutions that connect them.",
      "By aligning these networks with capital, clean-energy technology, regional trade frameworks and progressive policy, we lower the cost of movement, decarbonize fleets, formalize informal operators and unlock investment in the infrastructure that drives competitive, connected economies."
],
    interventions: [
      "Electric Mobility Deployment Programs — EV fleet conversion, charging-infrastructure rollout, battery-swap networks and e-bus financing that decarbonize transport at scale.",
      "Logistics & Supply Chain Platforms — freight aggregation, warehousing hubs, cold-chain corridors and digital traceability that cut delays and lower the cost of moving goods.",
      "Smart Transport Systems Labs — intelligent traffic management, digital ticketing, fleet telematics and route-optimization tools that modernize urban and intercity movement.",
      "Trade Corridor & Cross-Border Programs — one-stop border posts, dry ports and corridor coordination that ease the flow of goods across AfCFTA, EAC, COMESA and SADC markets.",
      "Fleet Ecosystem Development — asset-financing pools, predictive maintenance hubs, telematics platforms and shared-fleet models for operators and SMEs.",
      "Informal Transport Formalization — structuring matatu, boda-boda and minibus operators into SACCOs and cooperatives with digital payments, shared assets and asset finance.",
      "Mobility Infrastructure Delivery — non-motorized transport networks, transit-oriented urban design, interchange hubs and last-mile connectivity that integrate the transport system.",
      "Workforce & Operator Skilling — TVET-linked driver training, fleet-management apprenticeships and leadership pathways for youth and women across the mobility economy."
],
    advisory: [
      "Transport Sector Structuring & Compliance — legal, tax and governance frameworks for operators, logistics SMEs, cooperatives and infrastructure investors.",
      "Investment Readiness & Capital Raising — preparing mobility and logistics ventures for debt, equity, blended finance and DFI engagement.",
      "Trade & Logistics Policy Advisory — navigating customs, transit regimes, vehicle standards and corridor agreements across AfCFTA, EAC, COMESA and SADC.",
      "Mobility & Supply Chain Diagnostics — mapping freight flows, network bottlenecks and modal gaps to design bankable upgrading strategies.",
      "Public-Private Partnership Structuring — designing PPPs for roads, rail, ports, mass transit, charging networks and logistics parks.",
      "Impact Measurement & ESG Integration — sector-specific ESG frameworks, emissions tracking and impact dashboards for transport and logistics portfolios."
],
    impact: [
      "Cleaner, quieter cities as electric mobility and shared transport displace high-emission fleets.",
      "Lower logistics costs and faster supply chains that strengthen the competitiveness of African enterprises.",
      "Smoother regional trade through efficient corridors, ports and integrated cross-border systems.",
      "A formalized transport sector with cooperative-led operators accessing finance, assets and digital tools.",
      "Smarter, safer transport systems that reduce congestion, accidents and travel times for commuters.",
      "Empowered youth and women building enterprises and careers across the mobility economy."
],
  },
  {
    slug: "technology-ai-digital-economy",
    name: "Technology, AI & Digital Economy",
    scope: "Technology businesses, artificial intelligence, emerging technologies, enterprise systems, digital infrastructure, data ecosystems and digital transformation.",
    icon: Cpu,
    approach: [
      "We treat technology as economic infrastructure rather than a series of hype cycles. Our work spans technology businesses, artificial intelligence, emerging technologies, enterprise systems, digital infrastructure and the data ecosystems that connect them, helping African institutions move off legacy tools into integrated, intelligent digital operations.",
      "By aligning applied AI, sound data governance and patient capital with enabling regulation, we help enterprises modernize, ventures scale and public systems digitize. The goal is durable digital infrastructure that solves real problems, builds local talent and serves Africa's social and economic priorities rather than becoming extractive or exclusionary."
],
    interventions: [
      "Applied AI Labs — domain-specific models for agriculture, health, finance and public service built on local datasets and responsible-AI safeguards.",
      "Digital Infrastructure Programs — data centers, cloud capacity, fiber backbone and edge connectivity that anchor the continent's compute and storage base.",
      "Enterprise Systems Modernization — ERP, core platform and cloud-migration programs that move institutions off legacy systems into integrated digital operations.",
      "Data Ecosystem Platforms — interoperable data exchanges, governance frameworks and trusted-sharing models that turn fragmented data into shared infrastructure.",
      "Emerging Technology Pilots — structured testbeds for blockchain, IoT and automation applied to land registries, supply chains and climate finance.",
      "Tech Venture Acceleration — incubation, investment readiness and go-to-market support for African startups scaling AI, SaaS and platform businesses.",
      "Digital Skills & AI Talent Programs — bootcamps, apprenticeships and university partnerships building engineering, data and machine-learning capacity.",
      "Digital Public Infrastructure Initiatives — identity, payments and data-exchange rails that enable inclusive, AfCFTA-aligned cross-border digital services."
],
    advisory: [
      "AI & Data Strategy Advisory — defining use cases, model governance and adoption roadmaps that tie artificial intelligence to measurable business outcomes.",
      "Digital Transformation Advisory — operating-model redesign, technology architecture and change management for enterprises and public institutions.",
      "Technology Capital Raising — structuring venture, growth and blended finance for technology businesses, infrastructure and deep-tech ventures.",
      "Digital Policy & Regulation Advisory — shaping data protection, AI governance and cross-border digital trade frameworks for regulators and operators.",
      "Cybersecurity & Data Governance — risk assessment, resilience architecture and compliance with regional and global data-protection standards.",
      "Cloud, Infrastructure & Systems Advisory — guiding cloud adoption, enterprise systems selection and infrastructure investment for scale and reliability."
],
    impact: [
      "African enterprises and institutions running on modern, integrated digital systems rather than fragmented legacy tools.",
      "Responsible, locally relevant AI deployed across agriculture, health, finance and governance.",
      "Resilient digital infrastructure and trusted data ecosystems serving as shared continental backbone.",
      "Technology ventures scaling responsibly within clear data, AI and cross-border regulatory frameworks.",
      "A deeper pool of African engineering, data and AI talent powering homegrown innovation.",
      "Technology positioned as foundational infrastructure for inclusive transformation, not an end in itself."
],
  },
  {
    slug: "trade-infrastructure-industrial-development",
    name: "Trade, Infrastructure & Industrial Development",
    scope: "Regional trade, industrialization, infrastructure development, manufacturing, processing, export ecosystems, economic zones and market expansion.",
    icon: Factory,
    approach: [
      "We help Africa move from exporting raw commodities toward building competitive industries, integrated trade systems and the infrastructure that connects them. Our work links manufacturers, processors and exporters to finance, markets and the regional frameworks of AfCFTA, the EAC, COMESA and SADC.",
      "By structuring economic zones, industrial financing platforms and bankable infrastructure alongside trade policy and PPP advisory, we support the shift toward value addition, deeper market access and durable, climate-aligned industrial growth."
],
    interventions: [
      "AfCFTA Trade Readiness Programs — preparing manufacturers, processors and exporters for rules of origin, standards harmonization and cross-border market entry across the continental market.",
      "Special Economic Zone Development — structuring industrial parks, export processing zones and agro-industrial hubs with anchor tenants, shared infrastructure and incentive frameworks.",
      "Industrial Financing Platforms — blended finance, DFI co-investment and credit guarantee facilities for plant expansion, machinery acquisition and working capital.",
      "Local Value Addition Labs — designing processing and assembly clusters that move economies up the value chain from raw commodity export toward finished and intermediate goods.",
      "Trade Corridor & Logistics Programs — improving freight reliability along EAC, COMESA and SADC corridors through digital cargo tracking, one-stop border posts and warehousing networks.",
      "Manufacturing Competitiveness Initiatives — productivity diagnostics, lean operations support, quality certification and supplier development for industrial SMEs.",
      "Infrastructure Investment Pipelines — preparing bankable energy, ports, rail and digital infrastructure projects for PPP and institutional capital.",
      "Export Acceleration Platforms — market intelligence, trade-fair access, buyer matchmaking and export credit support for high-potential industrial enterprises."
],
    advisory: [
      "Trade Policy & AfCFTA Advisory — guiding clients through tariff schedules, non-tariff barriers, rules of origin and regional integration commitments.",
      "Industrial Strategy & Investment Promotion — designing sector master plans, value-chain strategies and investor propositions for governments and industrial groups.",
      "PPP & Infrastructure Structuring — transaction advisory for concessions, build-operate-transfer arrangements and economic zone partnerships.",
      "Capital Raising & Project Finance — preparing industrial and infrastructure projects for debt, equity, DFI and blended finance.",
      "Standards, Certification & Trade Compliance — advisory on product standards, customs procedures and conformity assessment for regional and global markets.",
      "ESG & Sustainable Industrialization — embedding environmental safeguards, climate alignment and social impact frameworks into industrial and infrastructure projects."
],
    impact: [
      "Manufacturers and processors capturing greater value through local beneficiation and finished-goods production.",
      "Industrial enterprises accessing patient capital and project finance to expand capacity.",
      "Exporters entering new regional and continental markets under AfCFTA and regional trade blocs.",
      "More reliable, lower-cost trade corridors and logistics networks linking producers to markets.",
      "Special economic zones attracting anchor investment and generating quality industrial jobs.",
      "Bankable, climate-aligned infrastructure unlocking institutional and private capital."
],
  },
];

export const sectorsBySlug: Record<string, Sector> = Object.fromEntries(
  sectorList.map((s) => [s.slug, s]),
);
