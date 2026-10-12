// Generated from the 2026 design canvas copy. Edit freely; it is plain data.
import type { HeroProps } from "@/components/site/hero";

/** A section of a service page. `bg: "dark"` sets it on ink; anything else is white. */
export type ServiceBlock = {
  type: "text" | "list" | "cards" | "tags" | "steps" | "faq";
  bg?: string;
  id?: string;
  eyebrow?: string;
  h: string;
  intro?: string;
  paras?: string[];
  quote?: string;
  quoteBy?: string;
  btn?: string;
  min?: string;
  items?: string[];
  cards?: { tag?: string; t: string; sub?: string; b?: string; items?: string[]; best?: string; btn?: string }[];
  steps?: { num?: string; t: string; b: string }[];
  faqs?: { q: string; a: string }[];
};

export type ServicePage = {
  hero: HeroProps;
  /** Default kicker for blocks that do not set their own. */
  eyebrow: string;
  blocks: ServiceBlock[];
  cta: { h: string; p: string; btn1: string; btn2?: string };
};

export const servicePages: Record<string, ServicePage> = {
  "capital-raising": {
    "hero": {
      "title": "Capital, structured for the institutions building Africa",
      "intro": "Raise capital with stronger structure, clearer positioning and greater investor confidence across African markets.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Capital Raising and Investment Structuring"
        }
      ],
      "btn1": {
        "label": "Book a Capital Strategy Consultation",
        "href": "/consult"
      },
      "btn2": {
        "label": "Discuss a Capital Raising Mandate",
        "href": "/consult"
      }
    },
    "eyebrow": "Capital Raising and Investment Structuring",
    "blocks": [
      {
        "type": "text",
        "eyebrow": "Executive function",
        "h": "Capital raising shapes growth, timing and strategic flexibility",
        "paras": [
          "Institutions need a capital pathway matched to their business model, growth stage, funding goal, risk profile and transaction readiness, not just presentation materials.",
          "We help leadership define a funding strategy, improve investor readiness and approach capital with more control over outcomes."
        ],
        "btn": "Speak to the Team"
      },
      {
        "type": "list",
        "eyebrow": "Who it is for",
        "h": "Built for institutions raising capital",
        "intro": "For businesses, projects, funds and institutions that need to raise, structure or manage capital across Africa.",
        "btn": "Discuss Your Capital Objective",
        "items": [
          "Growth-stage businesses preparing for equity, debt or hybrid capital",
          "Companies seeking expansion capital for regional or international growth",
          "Project sponsors developing bankable infrastructure, energy, real-asset or large commercial projects",
          "Social enterprises and nonprofits seeking donor funding, grant readiness or blended finance",
          "Cooperatives and SACCOs seeking institutional capital, member capital or diversified investment structures",
          "Funds, investment platforms and portfolio companies needing investor relations, reporting or post-investment support",
          "Institutions preparing for mergers, acquisitions, strategic exits or secondary transactions"
        ]
      },
      {
        "type": "cards",
        "eyebrow": "The instruments",
        "h": "Capital raising pathways",
        "intro": "Choose the right capital pathway before committing time and resources to investor engagement.",
        "btn": "Explore the Right Capital Pathway",
        "min": "240px",
        "cards": [
          {
            "t": "Private Capital",
            "b": "Private equity, venture capital, angel, family office and strategic investment."
          },
          {
            "t": "Private Debt",
            "b": "Structured debt, working capital, trade finance, project finance and credit facilities."
          },
          {
            "t": "Development Finance",
            "b": "DFI-aligned, concessional, catalytic and development-focused structures."
          },
          {
            "t": "Grants and Donor Funding",
            "b": "Grants, technical assistance, donor-aligned capital and institutional fundraising."
          },
          {
            "t": "Blended Finance",
            "b": "Combining grants, concessional capital, debt, equity or public support."
          },
          {
            "t": "Alternative and Diaspora Capital",
            "b": "Crowdfunding, diaspora, community investment and other non-traditional pathways."
          },
          {
            "t": "Public and Institutional Capital",
            "b": "Alignment with sovereign, sub-sovereign, public or institutional financing."
          }
        ]
      },
      {
        "type": "cards",
        "bg": "dark",
        "eyebrow": "What we run",
        "h": "Capital raising advisory services",
        "intro": "",
        "btn": "Book a Capital Strategy Consultation",
        "min": "300px",
        "cards": [
          {
            "tag": "01",
            "t": "Investor Readiness and Capital Strategy",
            "b": "Strengthening the foundations for investor confidence.",
            "items": [
              "Capital strategy design by stage and goal",
              "Financial modelling, valuation logic and return frameworks",
              "Corporate structuring and governance alignment",
              "Investment memoranda, pitch materials and deal narrative",
              "Data room architecture and due diligence readiness",
              "Commercial model refinement and unit economics validation"
            ]
          },
          {
            "tag": "02",
            "t": "Capital Raising and Transaction Support",
            "b": "Engaging capital providers and moving into execution.",
            "items": [
              "Investor targeting across PE, VC, family offices, DFIs and banks",
              "Capital pipeline and investor mapping",
              "Lender and investor engagement strategy",
              "Term sheet support and negotiation preparation",
              "Transaction documentation readiness",
              "M&A support and strategic transaction positioning"
            ]
          },
          {
            "tag": "03",
            "t": "Capital Structuring and Blended Finance Design",
            "b": "Structures that reflect risk, return, impact and growth.",
            "items": [
              "Capital stack design across equity, debt, grants and concessional funding",
              "Blended finance structures for social enterprises and projects",
              "Donor capital integration and DFI positioning",
              "Risk allocation and financing optimisation",
              "Public-private capital alignment",
              "Structuring frameworks for scalable impact models"
            ]
          },
          {
            "tag": "04",
            "t": "Post-Investment Performance and Investor Relations",
            "b": "Maintaining credibility and readiness for follow-on capital.",
            "items": [
              "Investor reporting systems and governance support",
              "Performance tracking and KPI frameworks",
              "Donor compliance and reporting",
              "Shareholder and stakeholder communication",
              "Board reporting and governance documentation",
              "Follow-on funding readiness and capital planning"
            ]
          }
        ]
      },
      {
        "type": "cards",
        "eyebrow": "Specialised tracks",
        "h": "Fundraising pathways",
        "intro": "Specialised tracks matched to an institution's profile and readiness.",
        "min": "260px",
        "cards": [
          {
            "t": "Enterprise Growth Capital",
            "b": "For scale-ups and SMEs preparing for institutional capital.",
            "items": [
              "Growth Capital Readiness",
              "Debt and Structured Finance",
              "Investor Relations"
            ],
            "btn": "Discuss Enterprise Growth Capital"
          },
          {
            "t": "Grant-Ready",
            "b": "For impact institutions seeking donor or blended capital.",
            "items": [
              "Grant Funding and Donor Readiness",
              "Blended Finance Design",
              "Compliance and Reporting"
            ],
            "btn": "Explore Grant-Ready"
          },
          {
            "t": "Cooperative Finance",
            "b": "For SACCOs and cooperatives.",
            "items": [
              "Cooperative Growth Financing",
              "Blended Finance Access",
              "Diversified Investment"
            ],
            "best": "SACCOs, housing cooperatives, agricultural cooperatives",
            "btn": "Discuss Cooperative Finance"
          },
          {
            "t": "Project Finance",
            "b": "For infrastructure and real-asset projects requiring bankability.",
            "items": [
              "Project Bankability",
              "Capital Structuring",
              "Transaction Execution"
            ],
            "best": "Infrastructure developers, energy sponsors, industrial projects",
            "btn": "Discuss Project Finance Support"
          }
        ]
      },
      {
        "type": "list",
        "eyebrow": "Why institutions engage",
        "h": "Strategic approach to capital raising",
        "intro": "Institutions engage us when capital begins to shape strategic direction. We add structure to readiness, documentation and transaction preparation.",
        "btn": "See How Your Mandate Can Be Structured",
        "items": [
          "Choose the right capital pathway",
          "Add structure to documentation and preparation",
          "Improve visibility across funding instruments",
          "Connect capital strategy with governance",
          "Support stronger capital engagement",
          "Match support to the institution's stage in the capital cycle"
        ]
      },
      {
        "type": "tags",
        "eyebrow": "Where we operate",
        "h": "Capital raising mandates",
        "intro": "",
        "btn": "Discuss Your Mandate",
        "items": [
          "Growth capital raising",
          "Regional expansion and scale-up",
          "Debt and structured finance",
          "Project finance and bankability",
          "Blended finance structuring",
          "Donor-aligned funding",
          "Catalytic capital strategy",
          "Grant readiness systems",
          "Investor relations",
          "M&A and exit positioning",
          "Capital restructuring and refinancing support"
        ]
      },
      {
        "type": "steps",
        "bg": "dark",
        "eyebrow": "The sequence",
        "h": "How engagement works",
        "intro": "",
        "btn": "Book a Capital Strategy Consultation",
        "steps": [
          {
            "t": "Capital Consultation",
            "b": "Understand the funding objective, needs and transaction context."
          },
          {
            "t": "Mandate Structuring",
            "b": "Define the advisory pathway, scope and workplan."
          },
          {
            "t": "Readiness and Preparation",
            "b": "Strengthen financial, strategic and governance foundations."
          },
          {
            "t": "Engagement and Execution",
            "b": "Target investors and negotiate terms."
          },
          {
            "t": "Post-Investment Support",
            "b": "Ongoing reporting, governance and follow-on readiness."
          }
        ]
      },
      {
        "type": "faq",
        "bg": "cream",
        "h": "Capital raising FAQs",
        "faqs": [
          {
            "q": "What is the first step before raising capital in Africa?",
            "a": "The first step is to assess whether the institution is genuinely ready for capital. That means examining the business model, governance, financial clarity, transaction materials, capital objective and the type of funding that best fits the mandate."
          },
          {
            "q": "How do I know whether I need equity, debt, grant funding, or blended finance?",
            "a": "The right capital structure depends on growth stage, cash flow profile, repayment ability, project nature, investor expectations, impact objectives and institutional readiness. Credence Africa helps clients determine the most suitable capital pathway before engagement begins."
          },
          {
            "q": "What does investor readiness include?",
            "a": "Investor readiness includes financial modelling, governance alignment, capital structuring, diligence preparation, deal materials, management positioning, data room preparation and a capital narrative that makes commercial sense to the target capital provider."
          },
          {
            "q": "Do you support blended finance and development finance mandates?",
            "a": "Yes. Credence Africa supports blended finance design, DFI positioning, donor-aligned funding strategies, risk allocation frameworks and structures that combine grants, concessional capital, debt and equity."
          },
          {
            "q": "Can you support grant funding and donor readiness?",
            "a": "Yes. We support donor mapping, proposal systems, funding pipeline development, compliance preparation, grant positioning, blended finance integration and reporting structures."
          },
          {
            "q": "Can you support institutions after capital has been raised?",
            "a": "Yes. We support post-investment reporting, governance, donor compliance, stakeholder communication, follow on funding readiness and investor relations."
          },
          {
            "q": "Do you work only with startups?",
            "a": "No. This service supports growth-stage businesses, established enterprises, social enterprises, cooperatives, project sponsors, funds and other institutions with capital mandates."
          }
        ]
      }
    ],
    "cta": {
      "h": "Capital raising support",
      "p": "For institutions preparing to raise capital, structure a funding pathway or align donor and commercial capital.",
      "btn1": "Book a Capital Strategy Consultation",
      "btn2": "Discuss a Capital Raising Mandate"
    }
  },
  "public-affairs": {
    "hero": {
      "title": "Where policy shapes markets",
      "intro": "We help institutions handle regulation, policy and institutional complexity, including government engagement, regulatory exposure, approvals and policy positioning across African markets.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Public Affairs & Policy Advisory"
        }
      ],
      "btn1": {
        "label": "Book a Public Affairs Consultation",
        "href": "/consult"
      },
      "btn2": {
        "label": "Discuss a Regulatory Mandate",
        "href": "/consult"
      }
    },
    "eyebrow": "Public Affairs & Policy Advisory",
    "blocks": [
      {
        "type": "text",
        "eyebrow": "The platform",
        "h": "Public affairs, run as a discipline, not as fragmented engagement.",
        "paras": [
          "In African markets, regulation, institutional process and policy direction often shape commercial execution. Licensing affects speed to market, reform can change sector economics, and government engagement influences approvals, partnerships and long-term certainty.",
          "Credence offers a structured platform combining regulatory strategy, government relations, stakeholder mapping, policy analysis and execution support."
        ],
        "quote": "Licensing determines speed to market. Reform can alter sector economics.",
        "quoteBy": "The Credence Public Affairs Platform",
        "btn": "Speak to the Team"
      },
      {
        "type": "cards",
        "bg": "dark",
        "eyebrow": "Core advisory",
        "h": "Five disciplines that turn regulatory complexity into a deliberate, sequenced mandate.",
        "intro": "",
        "btn": "Book a Consultation",
        "min": "220px",
        "cards": [
          {
            "tag": "01",
            "t": "Government Relations and Institutional Engagement",
            "b": "Credible engagement with government bodies, covering stakeholder identification, engagement planning, positioning and issue framing."
          },
          {
            "tag": "02",
            "t": "Regulatory Navigation and Approvals",
            "b": "Licensing, approvals, compliance and multi-body coordination, covering scanning, sequencing and escalation."
          },
          {
            "tag": "03",
            "t": "Policy Advisory and Advocacy",
            "b": "Interpreting policy change, developing positions, and engaging in reform and consultation."
          },
          {
            "tag": "04",
            "t": "Stakeholder Mapping and Political Economy Insight",
            "b": "Who influences outcomes, where friction arises, and how interests shape decisions."
          },
          {
            "tag": "05",
            "t": "Public Sector Interface Management",
            "b": "Meeting preparation, submissions, follow-up, approvals tracking and escalation."
          }
        ]
      },
      {
        "type": "list",
        "eyebrow": "Strategic support",
        "h": "Strategic support across regulation, policy and institutional engagement",
        "intro": "We help leadership teams read the environment, choose an engagement pathway and act with confidence.",
        "btn": "Explore the Right Public Affairs Pathway",
        "items": [
          "Navigating complex licensing and approvals",
          "Structured government relations strategies",
          "Anticipating reform and legislative change",
          "Shaping policy positions and advocacy priorities",
          "Mapping stakeholder interests, influence and political-economy risk",
          "Coordinating across ministries, regulators, counties and agencies",
          "Assessing how upcoming regulation affects entry, operations, investment or growth"
        ]
      },
      {
        "type": "list",
        "eyebrow": "Who it is for",
        "h": "Built for executive teams, institutional platforms and regulated market participants",
        "intro": "For institutions whose commercial priorities are shaped by public systems, regulation or policy change.",
        "btn": "Discuss Your Public Affairs Objective",
        "items": [
          "Regulated businesses managing licensing, compliance and multi-agency interfaces",
          "Companies entering or expanding where approvals matter",
          "Investors, funds and project sponsors with public-sector interfaces",
          "Industry associations, chambers and sector platforms engaging on reform",
          "Development and ecosystem actors in policy-sensitive sectors",
          "Boards, founders and executive teams needing public affairs capability"
        ]
      },
      {
        "type": "cards",
        "eyebrow": "Product pathways",
        "h": "Product pathways",
        "intro": "Specialized tracks matching your institution's profile and strategic needs.",
        "min": "220px",
        "cards": [
          {
            "t": "Government Relations",
            "b": "Structured senior-level engagement with ministries, regulators, counties and agencies.",
            "btn": "Discuss Government Relations"
          },
          {
            "t": "Regulatory Navigator",
            "b": "Approvals, licensing pathways, regulatory change and compliance decisions.",
            "btn": "Explore Regulatory Navigator"
          },
          {
            "t": "Policy Advocacy",
            "b": "Reform participation, consultations, policy analysis and coalition engagement.",
            "btn": "Discuss Policy Advocacy"
          },
          {
            "t": "POLICY & MARKETS™",
            "b": "Executive briefings, regulatory outlook sessions and sector roundtables on emerging policy.",
            "btn": "Join POLICY & MARKETS™"
          },
          {
            "t": "Public Sector Interface",
            "b": "Execution support for live approvals, submissions, meetings and processes.",
            "btn": "Discuss Public Sector Interface"
          }
        ]
      },
      {
        "type": "text",
        "bg": "dark",
        "eyebrow": "Early visibility",
        "h": "Why POLICY & MARKETS™ matters",
        "paras": [
          "Institutions rarely struggle because policy changes. They struggle because they understand it, engage with it or respond to it too late, or without structure.",
          "POLICY & MARKETS™ gives leaders, sector platforms, investors and regulated businesses a forum to understand upcoming changes, why they matter and who is driving them, so they can identify risk earlier and build readiness before reform affects outcomes.",
          "Executive policy briefings · Regulatory outlook sessions · Sector-specific roundtables · Market implication discussions · Closed-door briefings · Strategic response planning"
        ],
        "quote": "Move policy discussion out of the abstract and into decision making.",
        "quoteBy": "POLICY & MARKETS™",
        "btn": "Join the Next Session"
      },
      {
        "type": "list",
        "eyebrow": "Why institutions engage",
        "h": "A more strategic approach to public affairs",
        "intro": "Institutions turn to us when fragmented communication with public bodies is no longer enough.",
        "btn": "See How Your Mandate Can Be Structured",
        "items": [
          "Turning complexity into strategic priorities",
          "Structuring government engagement and positioning",
          "Anticipating reform risk before operational disruption",
          "Linking stakeholder mapping with execution",
          "Interpreting change early through POLICY & MARKETS™"
        ]
      },
      {
        "type": "steps",
        "bg": "dark",
        "eyebrow": "The sequence",
        "h": "How engagement works",
        "intro": "",
        "btn": "Book a Public Affairs Consultation",
        "steps": [
          {
            "t": "Consultation",
            "b": "The issue, the context and the objective."
          },
          {
            "t": "Mandate Structuring",
            "b": "Pathway, scope, sequencing and delivery model."
          },
          {
            "t": "Mapping & Positioning",
            "b": "Institutions, decision pathways and reform signals."
          },
          {
            "t": "Execution",
            "b": "Meetings, submissions and advocacy."
          },
          {
            "t": "Ongoing Advisory",
            "b": "Issue monitoring, regulatory tracking and executive support."
          }
        ]
      },
      {
        "type": "faq",
        "bg": "cream",
        "h": "Public affairs FAQs",
        "faqs": [
          {
            "q": "What is the first step when facing a regulatory or policy issue?",
            "a": "The first step is to define the issue precisely. That includes understanding the relevant institutions, approval points, stakeholder interests, timing, commercial implications and likely reform pathway."
          },
          {
            "q": "Do you support both government relations and regulatory approvals?",
            "a": "Yes. Credence Africa supports strategic engagement with public institutions and the practical coordination required across approvals, submissions, follow-up and issue tracking."
          },
          {
            "q": "Can you support policy reform and advocacy?",
            "a": "Yes. We support policy interpretation, position development, consultation engagement, advocacy strategy and structured participation in reform environments."
          },
          {
            "q": "What is POLICY & MARKETS™?",
            "a": "POLICY & MARKETS™ is Credence Africa’s virtual and in person executive briefing platform focused on upcoming policy, regulation and the market implications of reform."
          },
          {
            "q": "Can POLICY & MARKETS™ be delivered for a sector, institution, or association?",
            "a": "Yes. It can be delivered as a public session, a private institutional briefing, a sector roundtable, an executive forum or a closed dialogue depending on the audience and issue."
          },
          {
            "q": "Do you support market entrants in regulated sectors?",
            "a": "Yes. We support market entrants through regulatory scanning, approvals planning, stakeholder mapping, public sector engagement and issue coordination."
          },
          {
            "q": "Can you provide ongoing public affairs support?",
            "a": "Yes. Ongoing support can be structured through retained advisory, issue monitoring, stakeholder engagement or recurring POLICY & MARKETS™ sessions."
          }
        ]
      }
    ],
    "cta": {
      "h": "Public affairs support for strategic control",
      "p": "Support for institutions dealing with approvals, government engagement, policy reform, stakeholder pressure or emerging regulation that affects growth, market access or investor confidence.",
      "btn1": "Book a Public Affairs Consultation",
      "btn2": "Join POLICY & MARKETS™"
    }
  },
  "trade-growth": {
    "hero": {
      "title": "Market entry and expansion across Africa and beyond",
      "intro": "We help institutions establish a presence, grow across regional blocs and build global growth paths, from first market interest to execution.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Trade and Growth Advisory"
        }
      ],
      "btn1": {
        "label": "Discuss Market Entry Strategy",
        "href": "/consult"
      },
      "btn2": {
        "label": "Plan Cross-Border Expansion",
        "href": "/consult"
      },
      "side": {
        "title": "Executive Positioning",
        "tag": "Into · Across · Beyond",
        "rows": [
          {
            "k": "Into",
            "v": "Enter African markets with clarity."
          },
          {
            "k": "Across",
            "v": "Expand across borders with structure."
          },
          {
            "k": "Beyond",
            "v": "Scale globally with commercial precision."
          }
        ]
      }
    },
    "eyebrow": "Trade and Growth Advisory",
    "blocks": [
      {
        "type": "text",
        "eyebrow": "Execution",
        "h": "Built for institutions ready to execute",
        "paras": [
          "Growth in Africa depends on regulatory access, market sequencing, route-to-market strategy, partner quality and operating model design.",
          "Credence links commercial strategy, compliance, ecosystem access and rollout, so expansion decisions rest on a complete picture."
        ],
        "quote": "Our advisory gives executive teams a clearer basis for market selection, faster decisions and tighter control of expansion risk.",
        "quoteBy": "Trade and Growth Advisory",
        "btn": "Speak to the Team"
      },
      {
        "type": "list",
        "eyebrow": "Who it is for",
        "h": "Into, across and beyond Africa",
        "intro": "For organisations whose growth depends on entering new markets or scaling across borders.",
        "btn": "Discuss Your Expansion Objective",
        "items": [
          "Foreign companies entering Africa",
          "Businesses expanding into more jurisdictions",
          "African companies building regional scale",
          "African enterprises preparing for global entry",
          "Investors assessing expansion",
          "Trade and market development actors",
          "Regulated businesses managing cross-border complexity"
        ]
      },
      {
        "type": "list",
        "eyebrow": "From ambition to execution",
        "h": "What Credence Africa helps you solve",
        "intro": "We answer the key leadership questions before capital is committed.",
        "btn": "Explore the Right Growth Pathway",
        "items": [
          "Market selection by opportunity, regulation, timing and fit",
          "Entry pathways across East, West, Central, Southern and North Africa",
          "Route-to-market, channel, distribution and partnership models",
          "Licensing, approvals and operating requirements",
          "Expansion across EAC, COMESA, ECOWAS and SADC",
          "Cross-border trade flows, supply chains and transaction pathways",
          "Access to intelligence, stakeholders, partners and networks",
          "African businesses pursuing exports and international growth",
          "Coordinating rollout across multiple jurisdictions"
        ]
      },
      {
        "type": "cards",
        "bg": "dark",
        "eyebrow": "Core advisory",
        "h": "Four mandates that move institutions across markets",
        "intro": "",
        "btn": "Discuss Market Entry Strategy",
        "min": "260px",
        "cards": [
          {
            "tag": "01",
            "t": "Market Entry Strategy in Africa",
            "b": "Assess markets, prioritise jurisdictions, map regulation and design entry.",
            "items": [
              "Jurisdiction selection",
              "Market sizing",
              "Licensing and approval mapping",
              "Entity setup and operating model",
              "Pricing and positioning",
              "Route to market",
              "Political economy and risk analysis"
            ]
          },
          {
            "tag": "02",
            "t": "Cross-Border Trade Facilitation",
            "items": [
              "Trade structuring",
              "Contracting and deal support",
              "Trade finance and payment alignment",
              "Cross-border compliance",
              "Logistics and supply chain planning",
              "Trade missions",
              "Buyer and seller engagement"
            ]
          },
          {
            "tag": "03",
            "t": "Regional Expansion Across Africa",
            "items": [
              "Expansion strategy and sequencing",
              "Multi-country operating models",
              "Distribution and partner ecosystems",
              "Regional compliance",
              "Cross-border tax and treasury",
              "Expansion dashboards",
              "Phased scaling"
            ]
          },
          {
            "tag": "04",
            "t": "Global expansion from Africa",
            "items": [
              "Global market selection",
              "Export readiness",
              "International compliance",
              "Distribution and buyer access",
              "Global payments",
              "International brand positioning",
              "Growth coordination"
            ]
          }
        ]
      },
      {
        "type": "cards",
        "eyebrow": "Product pathways",
        "h": "Productized systems built for outcomes",
        "intro": "Matched to where a client is in its growth cycle.",
        "min": "220px",
        "cards": [
          {
            "t": "ACCESS AFRICA™",
            "b": "Compliant, commercially viable entry into African markets.",
            "items": [
              "Market Entry Blueprint™",
              "Market Setup System™",
              "Market Launch Engine™",
              "Market Command™"
            ],
            "best": "Foreign companies, regulated businesses needing setup, investors assessing establishment",
            "btn": "Discuss ACCESS AFRICA™"
          },
          {
            "t": "SCALE AFRICA™",
            "b": "Coordinated execution across multiple African markets.",
            "items": [
              "Regional Scaling Blueprint™",
              "Multi-Market Expansion System™",
              "Market Development Engine™",
              "Growth Command™"
            ],
            "best": "Multi-country operators, regional system builders",
            "btn": "Explore SCALE AFRICA™"
          },
          {
            "t": "GO GLOBAL™",
            "b": "Structured expansion outside Africa.",
            "items": [
              "Global Markets Blueprint™",
              "Global Structuring Framework™",
              "Global Access Engine™",
              "Global Command™"
            ],
            "best": "African enterprises pursuing exports or international entry",
            "btn": "Discuss GO GLOBAL™"
          },
          {
            "t": "TRADE AFRICA™",
            "b": "Cross-border trade, transactions and supply chains.",
            "items": [
              "Trade Structuring Framework™",
              "Supply Chain System™",
              "Trade Activation Engine™",
              "Trade Command™"
            ],
            "best": "Importers, exporters, distributors, trade platforms, cross-border operators",
            "btn": "Discuss TRADE AFRICA™"
          },
          {
            "t": "AFRICA INTEL™",
            "b": "Intelligence and commercial visibility before entry.",
            "items": [
              "Intelligence Reports",
              "Ecosystem Access Engine™",
              "Capital Intelligence Framework™",
              "Intelligence Subscription"
            ],
            "best": "Investors, market entrants, growth teams",
            "btn": "Explore AFRICA INTEL™"
          }
        ]
      },
      {
        "type": "list",
        "eyebrow": "Why executive teams engage",
        "h": "A more strategic approach to expansion",
        "intro": "Clients engage us when route to market, regulatory timing, partner quality and operating design start to shape investment outcomes.",
        "btn": "See How Your Expansion Can Be Structured",
        "items": [
          "Choosing the right markets",
          "Structuring entry, scale, trade and channel strategy",
          "Better visibility of regulatory and execution risk",
          "Linking intelligence to commercial decisions",
          "Stronger rollout discipline across jurisdictions",
          "Product pathways matched to growth stage"
        ]
      },
      {
        "type": "tags",
        "eyebrow": "Sector focus",
        "h": "Where our expansion work concentrates",
        "intro": "",
        "btn": "Discuss Sector-Specific Expansion",
        "items": [
          "Financial services and fintech",
          "Digital services and technology",
          "Healthcare and health systems",
          "Agribusiness and food systems",
          "Manufacturing and industrial trade",
          "Logistics and mobility",
          "Education and skills platforms",
          "Creative economy and digital content",
          "Infrastructure-linked commercial platforms"
        ]
      },
      {
        "type": "steps",
        "bg": "dark",
        "eyebrow": "The sequence",
        "h": "How engagement works",
        "intro": "",
        "btn": "Plan Cross-Border Expansion",
        "steps": [
          {
            "t": "Expansion Consultation",
            "b": "Scope, sector and priorities."
          },
          {
            "t": "Mandate Structuring",
            "b": "Product track, sequencing, markets and delivery model."
          },
          {
            "t": "Market Readiness",
            "b": "Regulatory mapping, operating model and partner identification."
          },
          {
            "t": "Execution and Activation",
            "b": "Entry, launch, trade execution and commercial activation."
          },
          {
            "t": "Ongoing Growth",
            "b": "Scaling, performance and new-market rollout."
          }
        ]
      },
      {
        "type": "faq",
        "bg": "cream",
        "h": "Trade and growth FAQs",
        "faqs": [
          {
            "q": "What is the first step before entering a new African market?",
            "a": "The first step is to assess the market opportunity, regulatory environment, route-to-market options, operating implications and strategic fit with the institution’s business model and growth goals."
          },
          {
            "q": "Do you support entry into one market or multi-country expansion?",
            "a": "Yes. Credence Africa supports both single market entry and phased multi-country expansion across regional blocs."
          },
          {
            "q": "Do you help with regulatory and licensing issues?",
            "a": "Yes. We support licensing pathway mapping, regulatory approvals planning, compliance coordination and market setup considerations as part of entry and expansion."
          },
          {
            "q": "Can you support trade facilitation and cross-border transactions?",
            "a": "Yes. We support trade structuring, commercial contracting, payment pathway design, logistics alignment, supply chain coordination and transaction activation."
          },
          {
            "q": "Do you work with African businesses expanding globally?",
            "a": "Yes. GO GLOBAL™ supports export readiness, international market selection, cross-border structuring, partnership development and global market entry coordination."
          },
          {
            "q": "Do you provide market intelligence before expansion begins?",
            "a": "Yes. AFRICA INTEL™ supports sector analysis, opportunity mapping, competitor review, stakeholder mapping, partner identification and ongoing market monitoring."
          }
        ]
      }
    ],
    "cta": {
      "h": "Trade and growth support for institutions ready to expand across Africa",
      "p": "For institutions entering African markets, building cross-border trade paths or taking African products global.",
      "btn1": "Discuss Market Entry Strategy",
      "btn2": "Plan Cross-Border Expansion"
    }
  },
  "research": {
    "hero": {
      "title": "The evidence and the sight.",
      "intro": "We pair a defensible evidence base with commercial visibility, so institutions can make capital, market and governance decisions with confidence. This private, commissioned work is distinct from Credible Perspectives, our public media platform.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Research and Market Intelligence"
        }
      ],
      "btn1": {
        "label": "Commission a Study",
        "href": "/consult"
      },
      "btn2": {
        "label": "Scope a Market Scan",
        "href": "/consult"
      },
      "side": {
        "title": "Dossier",
        "tag": "Confidential",
        "rows": [
          {
            "k": "Object",
            "v": "An institutional decision"
          },
          {
            "k": "Output",
            "v": "Evidence plus a commercial read"
          },
          {
            "k": "Scope",
            "v": "Sector · Market · Policy · Capital"
          },
          {
            "k": "Reach",
            "v": "Across Africa's growth markets"
          }
        ]
      }
    },
    "eyebrow": "Research and Market Intelligence",
    "blocks": [
      {
        "type": "text",
        "eyebrow": "Two instruments",
        "h": "Evidence you can defend. Sight you can act on.",
        "paras": [
          "Some decisions need evidence that survives scrutiny. Others need fast commercial visibility. Most need both.",
          "Commissioned studies, market sizing, policy analysis and institutional diagnostics build the evidence. Ecosystem mapping, entry scans, capital intelligence and standing subscriptions give the read before deployment. We run a disciplined study, a field read, or both, sized to the decision.",
          "Every engagement answers a stated question and is built to withstand challenge."
        ]
      },
      {
        "type": "steps",
        "bg": "dark",
        "eyebrow": "The chain",
        "h": "It is a chain. We hold every link.",
        "intro": "From question to field to analysis to an actionable read.",
        "steps": [
          {
            "t": "Question",
            "b": "The decision, stated plainly."
          },
          {
            "t": "Field",
            "b": "Sources, data and people."
          },
          {
            "t": "Analysis",
            "b": "Tested, triangulated, weighted."
          },
          {
            "t": "Sight",
            "b": "Evidence and a commercial read."
          }
        ]
      },
      {
        "type": "cards",
        "eyebrow": "The evidence base · Research",
        "h": "What we run: Research",
        "intro": "Commissioned primary work for a specific question.",
        "min": "220px",
        "cards": [
          {
            "tag": "A",
            "t": "Sector and market studies",
            "b": "Players, value chains, economics, growth drivers and constraints."
          },
          {
            "tag": "B",
            "t": "Market sizing and demand assessment",
            "b": "Bottom-up and top-down sizing and addressable market."
          },
          {
            "tag": "C",
            "t": "Policy and regulatory analysis",
            "b": "The regulatory environment as it stands and as it may change."
          },
          {
            "tag": "D",
            "t": "Institutional and ecosystem diagnostics",
            "b": "Capability, structure, relationships and gaps."
          },
          {
            "tag": "E",
            "t": "Evidence and decision-support reporting",
            "b": "Findings tied explicitly to the choice at hand."
          }
        ]
      },
      {
        "type": "cards",
        "eyebrow": "Commercial visibility · Market Intelligence",
        "h": "What we run: Market Intelligence",
        "intro": "Fast, structured reads before you deploy.",
        "min": "240px",
        "cards": [
          {
            "tag": "F",
            "t": "Ecosystem and stakeholder mapping",
            "b": "Regulators, incumbents, capital, distribution and partners."
          },
          {
            "tag": "G",
            "t": "Opportunity and entry scans",
            "b": "A specific opportunity or entry route, with size, barriers and cost."
          },
          {
            "tag": "H",
            "t": "Capital and investment intelligence",
            "b": "Active investors, deal flow, valuation references and financing structures."
          },
          {
            "tag": "I",
            "t": "Ongoing intelligence subscriptions",
            "b": "Recurring briefs, monitoring and signal alerts."
          }
        ]
      },
      {
        "type": "steps",
        "bg": "white",
        "eyebrow": "The method",
        "h": "How an engagement runs",
        "intro": "Four steps in order, whatever the scope.",
        "steps": [
          {
            "t": "Frame the question",
            "b": "What is being decided, by whom, and on what evidence."
          },
          {
            "t": "Design the base",
            "b": "Method, sources and field plan."
          },
          {
            "t": "Gather and test",
            "b": "Collect, triangulate and discard weak findings."
          },
          {
            "t": "Deliver to the decision",
            "b": "Confidence-weighted findings, plus an ongoing read where useful."
          }
        ]
      },
      {
        "type": "list",
        "bg": "cream",
        "eyebrow": "Who commissions it",
        "h": "Who commissions it",
        "intro": "",
        "items": [
          "Investors and funds sizing a market before deploying",
          "Institutions entering unfamiliar jurisdictions or sectors",
          "Growth teams stress-testing an expansion thesis",
          "Public-sector and ecosystem actors needing a pre-reform diagnostic",
          "Boards needing an independent evidence base",
          "Corporates and platforms tracking deal flow and adjacent opportunities"
        ]
      }
    ],
    "cta": {
      "h": "Tell us the decision. We will build the evidence and the read.",
      "p": "Bring the decision, whether you need to size a market, read a sector, anticipate policy, diagnose an institution or monitor a landscape, and we will scope the work.",
      "btn1": "Commission a Study"
    }
  },
  "credence-engage": {
    "hero": {
      "title": "The rooms where markets move.",
      "intro": "One convening platform for capital, policy, markets and partnerships, built as institutional-grade environments.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Credence Engage"
        }
      ],
      "btn1": {
        "label": "Partner with Us",
        "href": "/consult"
      },
      "btn2": {
        "label": "View the Portfolio",
        "href": "/events"
      }
    },
    "eyebrow": "Credence Engage",
    "blocks": [
      {
        "type": "cards",
        "eyebrow": "One system, four arms",
        "h": "Four connected platforms",
        "intro": "From closed-door governance to open markets to standing communities.",
        "min": "220px",
        "cards": [
          {
            "tag": "01",
            "t": "Convene",
            "sub": "Formal & Policy Convenings",
            "b": "Corporate and institutional events designed as decision environments."
          },
          {
            "tag": "02",
            "t": "Events",
            "sub": "Owned Flagship Platforms",
            "b": "Proprietary events built as market infrastructure."
          },
          {
            "tag": "03",
            "t": "Engage",
            "sub": "Market Activation",
            "b": "Market-facing events built as conversion platforms."
          },
          {
            "tag": "04",
            "t": "Networks",
            "sub": "Credible Communities",
            "b": "Standing membership communities of leaders and institutions."
          }
        ]
      },
      {
        "type": "cards",
        "id": "convene",
        "bg": "dark",
        "eyebrow": "01 · Convene",
        "h": "Formal & Policy Convenings",
        "intro": "Corporate and institutional events designed as decision environments with governance credibility. We work with corporates and private companies, listed companies and issuers, financial institutions, SACCOs and cooperatives, associations, regulators and the public sector, development partners and professional networks.",
        "min": "260px",
        "cards": [
          {
            "t": "Conferences and Summits",
            "b": "Sector platforms for market visibility."
          },
          {
            "t": "Corporate AGMs and Shareholder Meetings",
            "b": "Accountability, reporting and shareholder communication."
          },
          {
            "t": "Board Meetings and Retreats",
            "b": "Discreet governance and strategy sessions."
          },
          {
            "t": "Investor Briefings and Analyst Sessions",
            "b": "High-stakes communication that builds confidence."
          },
          {
            "t": "SACCO Delegate and Member Meetings",
            "b": "Structured participation and agenda discipline."
          },
          {
            "t": "Policy Dialogue and Multistakeholder Forums",
            "b": "Regulators and sector actors working on reform."
          },
          {
            "t": "Executive Roundtables and High-Trust Forums",
            "b": "Invitation-only, curated for audience quality."
          }
        ]
      },
      {
        "type": "cards",
        "id": "events",
        "eyebrow": "02 · Credence Events™",
        "h": "Owned Flagship Platforms",
        "intro": "Proprietary events as market infrastructure for investors, policymakers and sector leaders. Designed for decision makers: audiences matched to decision authority, content tied to commercial and policy relevance, sponsors integrated into the core experience, and formats that support transactions and partnerships.",
        "min": "240px",
        "cards": [
          {
            "t": "Sector-Aligned Events",
            "b": "Built around investment themes and policy priorities."
          },
          {
            "t": "Audience Curation",
            "b": "Targeted investors, corporates, regulators and founders."
          },
          {
            "t": "Sponsorship Structuring",
            "b": "Brand integration into outcome-focused conversations."
          },
          {
            "t": "Exhibitions & Marketplaces",
            "b": "Commercial showcase spaces."
          },
          {
            "t": "Deal Rooms & Clinics",
            "b": "Private capital and transaction formats."
          },
          {
            "t": "Content Distribution",
            "b": "Extension into reports, interviews and thought leadership."
          }
        ]
      },
      {
        "type": "cards",
        "id": "portfolio",
        "bg": "cream",
        "eyebrow": "The Event Portfolio",
        "h": "Live and upcoming convenings across Kenya",
        "intro": "Plus Digital Conferences: year-round digital engagement for capital access, enterprise growth and regulatory insight.",
        "min": "300px",
        "cards": [
          {
            "t": "Capital Series™",
            "sub": "Financing Tracks (For Profit)",
            "items": [
              "Agribusiness",
              "Food Businesses",
              "Healthcare Businesses",
              "Creative Businesses",
              "Tourism and Hospitality Businesses",
              "Mobility (Infrastructure & Asset)",
              "Manufacturing Businesses",
              "Digital Infrastructure",
              "Renewable Energy",
              "e-Mobility"
            ]
          },
          {
            "t": "Capital Series™",
            "sub": "Funding Tracks (Non-Profit)",
            "items": [
              "Public Healthcare Systems",
              "Agri-Food Systems",
              "Gender Interventions",
              "Social Enterprises",
              "TVET Education",
              "Primary Education",
              "Childcare Services",
              "Mental Health Services",
              "Transport Systems",
              "Housing & Urban Regeneration"
            ]
          },
          {
            "t": "Growth and Scaling Series™",
            "items": [
              "Healthcare Businesses",
              "Beauty and Wellness",
              "Fitness Businesses",
              "Tourism and Travel",
              "Luxury Experience Businesses",
              "Manufacturing and Industrial",
              "Food Businesses"
            ]
          },
          {
            "t": "Policy and Markets Series™",
            "items": [
              "Healthcare Edition",
              "SACCO Regulation & Reform",
              "VASP & Digital Assets",
              "Capital Markets & Financial Regulation",
              "Trade & Industrial Policy",
              "Digital Economy & Data",
              "Energy & Infrastructure",
              "Housing & Urban Development",
              "Public Finance & Tax",
              "Gender Policy Frameworks"
            ]
          }
        ]
      },
      {
        "type": "cards",
        "id": "engage",
        "bg": "dark",
        "eyebrow": "03 · Engage",
        "h": "Market Activation",
        "intro": "Market-facing events built as conversion platforms in physical, hybrid and digital formats, run across three phases: pre-event (positioning, targeting, partnerships, campaigns), live event (activations, exhibitions, demos) and post-event (lead capture, analytics, conversion).",
        "min": "240px",
        "cards": [
          {
            "t": "Event Strategy and Audience Design"
          },
          {
            "t": "Brand Positioning and Experiential Activation"
          },
          {
            "t": "Product Launches and Market Entry Campaigns"
          },
          {
            "t": "Exhibitions and Trade Show Platforms"
          },
          {
            "t": "Marketplaces and Buyer-Seller Platforms"
          },
          {
            "t": "Deal Rooms and Transaction Environments"
          },
          {
            "t": "Audience Acquisition and Lead Generation"
          }
        ]
      },
      {
        "type": "cards",
        "id": "networks",
        "eyebrow": "04 · Credible Networks",
        "h": "Curated Communities",
        "intro": "Standing membership communities of leaders, experts and institutions. For institutional partners: direct access to decision makers, market entry and expansion, partnership and ecosystem engagement, product distribution and customer acquisition, and thought leadership.",
        "btn": "Apply for Membership",
        "min": "240px",
        "cards": [
          {
            "t": "Credible Business Network",
            "b": "Executives and founders."
          },
          {
            "t": "Credible Chamas Network",
            "b": "Investment groups and collective capital."
          },
          {
            "t": "Credible Cooperatives Network",
            "b": "Cooperative and SACCO ecosystems."
          },
          {
            "t": "Credible Experts Network",
            "b": "Specialists and advisory opportunities."
          },
          {
            "t": "Credible Faith Network",
            "b": "Faith leadership and social impact."
          },
          {
            "t": "Credible Life Network",
            "b": "Leadership and personal growth."
          },
          {
            "t": "Credible Women Network",
            "b": "Women's business, leadership and wealth."
          }
        ]
      },
      {
        "type": "cards",
        "bg": "cream",
        "eyebrow": "Sponsorship and partnership",
        "h": "Three tiers of integration",
        "intro": "",
        "min": "300px",
        "cards": [
          {
            "t": "Strategic Partner",
            "sub": "Brand leadership. Market activation",
            "b": "For institutions seeking scale and direct access.",
            "items": [
              "Keynote speaking",
              "Category leadership",
              "Lead partner branding",
              "Pavilion ownership",
              "Branded forums",
              "Lead capture and analytics",
              "Deal room participation"
            ],
            "btn": "Become a Partner"
          },
          {
            "t": "Influence Partner",
            "sub": "Thought leadership. Policy positioning",
            "b": "For advisory firms, development partners and sector shapers.",
            "items": [
              "Speaking and panels",
              "Authority positioning",
              "Publication inclusion",
              "Policy roundtables",
              "Executive briefings",
              "Institutional matching"
            ],
            "btn": "Become a Partner"
          },
          {
            "t": "Visibility Partner",
            "sub": "Market entry. Product engagement",
            "b": "For product launches and market entrants.",
            "items": [
              "Exhibition presence",
              "Product demos",
              "Launch support",
              "Direct buyer engagement",
              "Campaign visibility",
              "Lead capture"
            ],
            "btn": "Become a Partner"
          }
        ]
      }
    ],
    "cta": {
      "h": "Own the room where markets move.",
      "p": "Share your objective, whether you want to sponsor, partner, exhibit, speak or participate, and we will map the right environment, audience and engagement model.",
      "btn1": "Discuss Your Objectives"
    }
  }
};
