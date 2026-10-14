// Generated from the 2026 design canvas copy. Edit freely; it is plain data.
import type { SitePage } from "@/components/site/copy-sections";

/**
 * The five service pages and their product pages, keyed by path under /services
 * ("capital-raising", "capital-raising/grant-ready"). `name` is the navigation and sitemap label.
 */
export type ServicePage = SitePage & { name: string };

export const servicePages: Record<string, ServicePage> = {
  "capital-raising": {
    "name": "Capital Raising and Investment Structuring",
    "title": "Capital Raising Advisory in Kenya | Credence Africa",
    "description": "Capital strategy, investment readiness, grant preparation, project bankability and investor reporting for businesses, cooperatives and institutions in Kenya.",
    "hero": {
      "title": "Capital raising and investment structuring in Kenya",
      "intro": "Capital decisions affect how an institution grows, what it can commit to and the evidence it must provide. Credence Africa helps leadership teams connect a funding requirement with a credible business case, a suitable capital strategy and an organized preparation process. Our advisory work covers investment readiness, capital raising preparation, transaction support, blended finance design and post-investment reporting.",
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
        "href": "/consult?consult=capital"
      },
      "btn2": {
        "label": "Request an institutional training proposal",
        "href": "/consult?consult=capital"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "We work with growth-stage businesses, project sponsors, cooperatives, nonprofits and investment platforms.",
        "rest": "Kenya provides the starting context for mandates involving local operations and regional expansion. The engagement is built around your institution, funding objective and decision timetable, with clear responsibilities and agreed outputs."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Choose a capital pathway before approaching funders",
        "paras": [
          "An expansion plan may require equity, borrowing, grants or a combination of instruments. The appropriate route depends on revenue, cash flow, ownership preferences, assets, repayment capacity and the purpose of the funding. We help teams compare private capital, private debt, development finance, grants and donor funding, blended finance and relevant institutional or community capital pathways.",
          "The work starts with the requirement: how much is needed, when it is needed and what it will finance. We then examine the commercial assumptions and information needed to support that requirement. A clear preparation plan identifies gaps before management invests time in funder conversations."
        ],
        "img": {
          "src": "/partners-handshake.jpg",
          "alt": "Two professionals shaking hands"
        }
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "02",
        "h2": "Four advisory services across the capital cycle",
        "paras": [
          "Investor Readiness and Capital Strategy brings together the funding objective, financial assumptions, commercial model, governance information, investment narrative and data room. Leadership receives an organized view of the work required to make its proposition assessable.",
          "Capital Raising and Transaction Support covers funder mapping, engagement preparation, information coordination, transaction work plans and management preparation for discussions. The agreed mandate identifies the information Credence will prepare and the decisions that remain with the institution and its counterparties.",
          "Capital Structuring and Blended Finance Design examines how grants, concessional funding, debt and equity could fit together. We assess use of proceeds, sequencing, risk allocation, co-funding and reporting obligations against the actual project and prospective funding requirements.",
          "Post-Investment Performance and Investor Relations establishes reporting systems, performance indicators, board information and stakeholder communication. Consistent information helps management explain progress, identify variances and prepare for subsequent funding decisions."
        ]
      },
      {
        "type": "split",
        "pad": "128px 0 0",
        "eb": "03",
        "h2": "Specialized pathways for different institutions",
        "paras": [
          "Enterprise Growth Capital addresses expansion requirements and preparation for institutional funding. Grant Ready supports opportunity assessment, proposal preparation and donor reporting. Cooperative Finance addresses member interests, governance and financing proposals. Project Finance focuses on project readiness, bankability evidence and the financing preparation process.",
          "Investors and development programs can also commission deal origination and pipeline screening against their own purchasing criteria. That is a separate buyer-defined search mandate. Businesses seeking funding can choose readiness support rather than entering a pipeline search intended for an investor."
        ],
        "chips": [
          {
            "label": "Grant Ready",
            "href": "/services/capital-raising/grant-ready"
          },
          {
            "label": "Cooperative Finance",
            "href": "/services/capital-raising/cooperative-finance"
          },
          {
            "label": "Investment Readiness",
            "href": "/services/capital-raising/investment-readiness"
          },
          {
            "label": "Investor Reporting",
            "href": "/services/capital-raising/investor-reporting"
          },
          {
            "label": "Transaction Support",
            "href": "/services/capital-raising/transaction-support"
          },
          {
            "label": "Capital Structuring and Blended Finance",
            "href": "/services/capital-raising/blended-finance"
          },
          {
            "label": "Project Finance and Bankability",
            "href": "/services/capital-raising/project-finance"
          },
          {
            "label": "Deal Origination and Pipeline Screening",
            "href": "/services/capital-raising/deal-origination"
          }
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "Build institutional capability alongside the mandate",
        "paras": [
          "Credence Institute offers practical training in grant readiness, cooperative finance, investment readiness, investor reporting and project bankability. Employers, associations and development programs can request a team cohort with stated learning outcomes and assessment. Credence Engage provides relevant forums and can produce a commissioned funding or investment convening. Research and market intelligence provide evidence for capital, sector and market decisions.",
          "Choose the service that answers the immediate need. An advisory assignment, training cohort, event and research commission each has its own scope, purchase route and accountable delivery lead."
        ],
        "links": [
          {
            "label": "Request an institutional training proposal",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Explore funding events",
            "href": "/events"
          },
          {
            "label": "Commission capital intelligence",
            "href": "/services/research"
          }
        ]
      },
      {
        "type": "split",
        "eb": "05",
        "h2": "How an engagement is agreed",
        "paras": [
          "We begin with the institution's objective, current information and deadline. The proposal sets out deliverables, information responsibilities, review stages, specialist inputs, fees and the basis for accepting the work. The preparation sequence may include a readiness review, evidence development, management workshops and a final decision briefing. Continuing support is defined by its reporting cycle and agreed workload."
        ],
        "chips": [
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          },
          {
            "label": "Credence Engage",
            "href": "/services/credence-engage"
          },
          {
            "label": "Research and Market Intelligence",
            "href": "/services/research"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Capital advisory FAQs",
        "faqs": [
          {
            "q": "What should we prepare for the first consultation",
            "a": "Share the organization profile, funding purpose, amount or range, desired timetable and available financial information. Identify any existing funder discussions and the management decision you need to make. This allows the discussion to focus on the actual mandate."
          },
          {
            "q": "Can you help us determine whether debt or equity is appropriate",
            "a": "We can compare the implications for cash flow, ownership, repayment and future funding. The assessment uses your business information and proposed use of funds. It produces decision criteria and preparation priorities rather than an assumption that every business needs the same instrument."
          },
          {
            "q": "Can a nonprofit purchase grant preparation support",
            "a": "Yes. A scope can cover opportunity fit, concept development, proposal review, budget preparation and reporting readiness. The applicant must meet the funder's eligibility requirements. We identify the evidence and approvals required for the particular opportunity."
          },
          {
            "q": "Do you support cooperatives and SACCOs",
            "a": "Cooperative mandates can examine growth financing, governance information, member approvals and project preparation. Board learning can be commissioned through Credence Institute. The scope reflects the institution's structure and the decision its members or leadership need to take."
          },
          {
            "q": "What does project bankability work include",
            "a": "It can include a review of the revenue model, financial assumptions, project documents, sponsor contribution, implementation dependencies and financing questions. The output identifies what is supported, what is missing and what further specialist work is required before approaching funders."
          },
          {
            "q": "Can our team buy training instead of an advisory mandate",
            "a": "Yes. A team cohort develops the capability to perform recurring preparation and reporting tasks. An advisory mandate completes agreed work for your institution. The proposal makes the learning outcomes or engagement outputs clear so you can choose the appropriate purchase."
          },
          {
            "q": "Will you guarantee that we obtain funding",
            "a": "Funding depends on the institution's proposition, evidence, market conditions and the funder's decision. Credence agrees the preparation work and deliverables it will complete. A proposal should be assessed against those outputs and the competence required to deliver them."
          },
          {
            "q": "Can investors commission a pipeline rather than seek funding",
            "a": "Yes. Buyer-funded origination begins with sectors, geography, enterprise stage, ticket range and screening criteria. The commissioned output can include a search record, candidate profiles and a briefing for the buyer's further assessment. Explore Deal Origination and Pipeline Screening."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Book a Capital Strategy Consultation",
        "links": [
          {
            "label": "Book a Capital Strategy Consultation",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Request an institutional training proposal",
            "href": "/consult?consult=capital"
          }
        ]
      }
    ]
  },
  "public-affairs": {
    "name": "Public Affairs and Policy Advisory",
    "title": "Public Affairs and Policy Advisory Kenya | Credence Africa",
    "description": "Policy analysis, regulatory intelligence, stakeholder mapping and institutional engagement support for companies, associations and development organizations in Kenya.",
    "hero": {
      "title": "Public affairs and policy advisory in Kenya",
      "intro": "Policy, regulation and institutional relationships shape how organizations enter markets, deliver programs and manage change. Credence Africa helps leadership teams understand that environment and organize a considered response. Our public affairs and policy work connects research, regulatory intelligence, stakeholder analysis and defined institutional engagement support.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Public Affairs and Policy Advisory"
        }
      ],
      "btn1": {
        "label": "Discuss a Public Affairs or Policy Mandate",
        "href": "/consult?consult=public-affairs"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The service is relevant to companies, industry associations, investors, public institutions and development organizations.",
        "rest": "A mandate starts with the decision at stake: a market entry, proposed reform, operating requirement, sector issue or institutional engagement objective. The work is scoped to the questions management needs answered and the evidence it must use."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Understand the policy and institutional environment",
        "paras": [
          "Policy analysis can examine an existing framework, a proposed change or the direction of a sector. The scope identifies the jurisdiction, subject, sources and decision timetable. A useful brief explains what the available evidence shows, which developments need monitoring and how the issue may affect the institution's plans.",
          "Regulatory intelligence organizes relevant operating requirements and institutional developments for commercial planning. It can support market selection, investment preparation or management awareness. The output distinguishes confirmed requirements, proposals and unresolved questions so leaders can decide what further professional input or institutional clarification they need."
        ],
        "img": {
          "src": "/partners-handshake.jpg",
          "alt": "Two professionals shaking hands"
        }
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Map stakeholders and engagement priorities",
        "paras": [
          "Stakeholder mapping identifies the institutions, associations, market participants and affected groups relevant to a defined issue. It examines responsibilities, interests and relationships using documented sources and agreed consultations. The result helps management plan a purposeful engagement sequence.",
          "An engagement strategy can clarify objectives, messages, evidence, responsible representatives and follow-up. The scope can include brief preparation, meeting coordination and a record of discussions where agreed. Credence does not imply that an engagement guarantees an approval or a preferred policy outcome."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Prepare institutional submissions and sector evidence",
        "paras": [
          "Companies and associations may need a position paper, consultation response or evidence brief. A defined assignment can organize the issue, assess available information, develop the analysis and prepare a document for the institution's review. The client confirms the position, commitments and factual claims before it is submitted or published.",
          "Development programs can commission policy or ecosystem research to inform implementation and dialogue. The research question determines the method, consultation plan, evidence standard and final outputs. A report can include findings, options and an implementation discussion without presenting contested assumptions as settled facts."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "04",
        "h2": "Policy and Regulatory Literacy Program",
        "paras": [
          "Credence Institute offers practical learning for management teams, associations and program staff. Modules can cover how to read a policy or regulatory development, distinguish enacted requirements from proposals, map institutions and prepare an evidence-based response. Exercises can use a relevant sector issue and agreed case material.",
          "An institutional cohort is scoped by participant role, baseline understanding, delivery format, assessment and management reporting. Sector-specific professional inputs are identified in the proposal. The program builds literacy and decision capability; a client-specific advisory opinion or formal submission is a separate agreed output."
        ],
        "links": [
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "split",
        "pad": "128px 0",
        "eb": "05",
        "h2": "Convening and research that support the discussion",
        "paras": [
          "Credence Engage can produce policy roundtables, sector dialogues and commissioned stakeholder events. The event brief sets objectives, participants, agenda, speaker approach, production and reporting. Credible Perspectives provides public editorial content, while the research service can deliver private commissioned evidence for the buyer's decision.",
          "Advisory, training, events and research remain separate complete purchases. The right route depends on whether the institution needs work completed, staff capability, a defined convening or an evidence product. Start with the objective so the proposal can identify an appropriate scope."
        ],
        "chips": [
          {
            "label": "Research and Market Intelligence",
            "href": "/services/research"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          },
          {
            "label": "Credence Engage",
            "href": "/services/credence-engage"
          },
          {
            "label": "Industry Associations and Ecosystem Actors",
            "href": "/who-we-work-with/industry-associations"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Public affairs FAQs",
        "faqs": [
          {
            "q": "Which institutions can commission this service",
            "a": "The service can be scoped for corporations, industry associations, investors, public institutions and development organizations. The brief should identify the policy or operating issue and the decision it affects. Delivery depends on the research and professional capability needed for that subject."
          },
          {
            "q": "Can you monitor policy developments for our sector",
            "a": "A recurring intelligence scope can cover agreed subjects, sources, jurisdictions and briefing frequency. It should identify what counts as a material development and the format of the update. Confirmed changes, proposed measures and unresolved questions are reported distinctly."
          },
          {
            "q": "What does stakeholder mapping provide",
            "a": "It identifies relevant actors, their responsibilities and documented interests around the issue. The scope can include a map, profiles and engagement priorities. It should state the information sources and consultation method, with evidence limitations acknowledged in the output."
          },
          {
            "q": "Can you prepare a consultation response or position paper",
            "a": "Yes. A defined assignment can develop an evidence brief or institutional response for client review. The client confirms its position and factual commitments. The proposal states the research, drafting, review rounds and final document included."
          },
          {
            "q": "Do you organize meetings and policy roundtables",
            "a": "Meeting coordination or a commissioned roundtable can be included in an agreed scope. Credence Engage can handle the event's production and participant journey. The proposal distinguishes the engagement objective from venue, speaker, production and reporting responsibilities."
          },
          {
            "q": "Can staff learn policy and regulatory literacy",
            "a": "Credence Institute can provide a cohort matched to the team's responsibilities. It can cover source reading, institution mapping, issue analysis and preparation of a response. The proposal identifies subject matter expertise, exercises, assessment and intended learning outcomes."
          },
          {
            "q": "Does engagement support guarantee an institutional approval",
            "a": "No. Institutions make their own decisions and policy processes involve multiple participants and considerations. Credence agrees the analysis, preparation and coordination it will complete. The scope should be evaluated against those outputs and the required expertise."
          },
          {
            "q": "Can the research remain confidential",
            "a": "Yes, where the commission provides for private use and the agreed information handling. The contract states access, publication rights and source permissions. Public editorial material and private client research are managed according to their respective purposes and approvals."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Discuss a Public Affairs or Policy Mandate",
        "links": [
          {
            "label": "Discuss a Public Affairs or Policy Mandate",
            "href": "/consult?consult=public-affairs"
          },
          {
            "label": "Email connect@credence.africa",
            "href": "mailto:connect@credence.africa"
          }
        ]
      }
    ]
  },
  "trade-growth": {
    "name": "Trade and Growth Advisory",
    "title": "Kenya Market Entry and Africa Expansion | Credence Africa",
    "description": "Market entry, regional expansion, export readiness and trade advisory from Kenya, with market research, setup coordination and institutional training.",
    "hero": {
      "title": "Market entry, trade and regional growth from Kenya",
      "intro": "Credence Africa helps institutions turn a market opportunity into an informed entry and growth plan. Our trade and growth advisory connects market research, commercial strategy, operating requirements, partner assessment and defined implementation support. Kenya is the starting point for international organizations assessing local opportunity and for African businesses preparing regional or global expansion.",
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
        "label": "Discuss Your Market Entry or Expansion Objective",
        "href": "/consult?consult=trade"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "A market should be selected for its customers, commercial conditions and fit with the organization.",
        "rest": "We help leadership examine that fit before committing to an operating presence or expansion program. The engagement can cover one market or a sequenced regional plan, with country-specific work clearly identified."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Into, across and beyond African markets",
        "paras": [
          "Market Entry Strategy examines demand, competition, customer segments, pricing, channels and the operating conditions relevant to a proposed entry. The scope can produce a market assessment, entry options and a phased work plan. The Kenya starting proposition is tested against the buyer's sector and objectives rather than presented as the only possible route into Africa.",
          "Cross-Border Trade Facilitation organizes the commercial preparation for import, export and supply-chain activity. Regional Expansion assesses market sequencing, partner models and management requirements across selected African jurisdictions. Global Expansion supports African enterprises evaluating international customers, distribution and readiness outside the continent."
        ],
        "img": {
          "src": "/partners-handshake.jpg",
          "alt": "Two professionals shaking hands"
        }
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "02",
        "h2": "ACCESS AFRICA for entering the market",
        "paras": [
          "ACCESS AFRICA gives foreign companies and investors a defined path from market assessment to an agreed setup or launch scope. Its tracks are Market Entry Blueprint, Market Setup System, Market Launch Engine and Market Command. The buyer selects the work needed for its stage, with a clear statement of outputs and third-party dependencies.",
          "Kenya market research can address customers, sector structure, competition and route to market. Setup coordination can organize specified registration, location, recruitment or provider tasks where included. Launch support can coordinate agreed testing, partner discussions and commercial activation. Each is scoped so the institution knows what it will receive."
        ],
        "links": [
          {
            "label": "ACCESS AFRICA",
            "href": "/services/trade-growth/access-africa"
          }
        ]
      },
      {
        "type": "split",
        "pad": "128px 0 0",
        "eb": "03",
        "h2": "SCALE AFRICA for regional expansion",
        "paras": [
          "SCALE AFRICA supports institutions extending operations into additional African markets. Regional Scaling Blueprint, Multi-Market Expansion System, Market Development Engine and Growth Command address market selection, operating design, partner development and continuing oversight. The proposal names each covered country and the work allocated to it.",
          "Kenya can serve as a practical operating base for relevant regional models. The expansion plan still tests market demand, local partners, operating conditions and management capacity in each destination. A regional label does not substitute for country-level evidence."
        ],
        "links": [
          {
            "label": "SCALE AFRICA",
            "href": "/services/trade-growth/scale-africa"
          }
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "TRADE AFRICA and GO GLOBAL",
        "paras": [
          "TRADE AFRICA supports importers, exporters, distributors and trade-development institutions. Trade Structuring Framework, Supply Chain System, Trade Activation Engine and Trade Command organize the commercial pathway, provider requirements and execution responsibilities for agreed trade activity.",
          "GO GLOBAL supports African enterprises entering markets outside Africa. Global Markets Blueprint, Global Structuring Framework, Global Access Engine and Global Command cover market selection, export readiness, distribution and ongoing coordination. The starting question is which overseas customer and route to market the business can serve credibly."
        ],
        "links": [
          {
            "label": "TRADE AFRICA",
            "href": "/services/trade-growth/trade-africa"
          },
          {
            "label": "GO GLOBAL",
            "href": "/services/trade-growth/go-global"
          }
        ]
      },
      {
        "type": "split",
        "eb": "05",
        "h2": "Intelligence, learning and convening alongside advisory",
        "paras": [
          "AFRICA INTEL provides a route to defined intelligence reports, ecosystem mapping, capital intelligence and recurring briefings. The research hub explains commissioning and usage rights. Credence Institute offers market entry, regional expansion, export and global market access training. Credence Engage can produce trade missions, buyer forums, market-access events and corporate launches.",
          "Advisory completes agreed institution-specific work. Training develops capability. Events deliver a specified convening or production. Research answers an agreed question. Each is a complete purchase, with the objective, deliverables, timetable and responsibilities stated in its proposal."
        ],
        "links": [
          {
            "label": "AFRICA INTEL",
            "href": "/services/research/market-intelligence"
          }
        ],
        "chips": [
          {
            "label": "Foreign Investors",
            "href": "/who-we-work-with/foreign-investors"
          },
          {
            "label": "Growth-Stage SMEs and Enterprises",
            "href": "/who-we-work-with/growth-stage-smes"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          },
          {
            "label": "Credence Engage",
            "href": "/services/credence-engage"
          },
          {
            "label": "Research and Market Intelligence",
            "href": "/services/research"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Trade and growth FAQs",
        "faqs": [
          {
            "q": "Why start with Kenya",
            "a": "Kenya can offer a useful market and operating base for relevant regional businesses. The right choice depends on the sector, customers, operating requirements and strategy. A market entry assessment tests those factors rather than assuming every organization should follow the same route."
          },
          {
            "q": "How does ACCESS AFRICA support market entry",
            "a": "ACCESS AFRICA supports foreign companies and investors from market assessment to an agreed setup or launch scope. Its four tracks address research, setup coordination, launch support and continuing oversight. The proposal states the outputs, responsibilities and provider dependencies for the stage you choose."
          },
          {
            "q": "Can you support one country or several countries",
            "a": "The engagement can cover either, where the required capability is available. A multi-country proposal names the jurisdictions, evidence requirements and activities in each. Regional strategy sets the sequence; local assessment addresses the conditions that affect implementation."
          },
          {
            "q": "Can the scope include registrations and recruitment",
            "a": "Specified setup tasks can be coordinated where agreed. The proposal lists the registrations, provider inputs, location or recruitment requirements and responsibilities. Third-party decisions and fees are identified so the buyer can assess the complete scope and dependencies."
          },
          {
            "q": "Can you identify distributors or commercial partners",
            "a": "A scope can research partner categories, map candidates and organize agreed screening or discussions. The criteria and evidence standard are set with the buyer. A candidate list is distinguished from a concluded partnership or a guarantee of sales."
          },
          {
            "q": "Do you support African businesses entering global markets",
            "a": "GO GLOBAL is intended for that direction of expansion. The work can cover market research, readiness, channel strategy and agreed coordination. The proposal identifies the target markets and professional or provider inputs required for the selected route."
          },
          {
            "q": "Can our staff buy training before commissioning implementation",
            "a": "Yes. Credence Institute can deliver a team cohort on market entry, regional expansion or trade readiness. The learning outcomes and exercises are specified. Training can be purchased on its own and does not commit the institution to a subsequent advisory mandate."
          },
          {
            "q": "Can a development organization commission a trade program",
            "a": "Yes. A program can combine defined research, learning, buyer convening and agreed coordination with one accountable lead. The scope states beneficiaries, outcomes, delivery outputs and reporting. The buyer can also commission any one of those products separately."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Discuss Your Market Entry or Expansion Objective",
        "links": [
          {
            "label": "Discuss Your Market Entry or Expansion Objective",
            "href": "/consult?consult=trade"
          },
          {
            "label": "Email connect@credence.africa",
            "href": "mailto:connect@credence.africa"
          }
        ]
      }
    ]
  },
  "research": {
    "name": "Research and Market Intelligence",
    "title": "Market Research and Intelligence Kenya | Credence Africa",
    "description": "Commission market research, sector studies, demand assessment, policy analysis and commercial intelligence for investors, companies and institutions in Kenya.",
    "hero": {
      "title": "Research and market intelligence in Kenya",
      "intro": "Important institutional decisions need evidence that can be examined and used. Credence Africa provides commissioned research and market intelligence for companies, investors, development organizations and public institutions. We help buyers define the question, gather and test relevant information and connect findings with the decision in front of them.",
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
        "label": "Commission a Study or Request a Market Intelligence Brief",
        "href": "/consult?consult=research"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "Research develops an evidence base for a stated question.",
        "rest": "Market intelligence provides a structured view of an opportunity, ecosystem or capital landscape. A commission can combine both where the buyer needs detailed analysis and a commercial interpretation. The scope defines Kenya coverage and any additional markets required."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Research built around the institutional decision",
        "paras": [
          "Sector and market studies examine how a market works: participants, value chains, commercial conditions, drivers and constraints. Market sizing and demand assessment examine the scale and nature of an opportunity using an agreed method. The proposal states the sources, assumptions and research depth rather than presenting every estimate as a precise market fact.",
          "Policy and regulatory analysis can examine current requirements, proposed developments and institutional context. Institutional and ecosystem diagnostics can address capabilities, relationships and gaps. Evidence and decision-support reporting brings findings into a format suitable for the people responsible for the decision."
        ],
        "img": {
          "src": "/partners-handshake.jpg",
          "alt": "Two professionals shaking hands"
        }
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Market intelligence for entry, investment and growth",
        "paras": [
          "Ecosystem and stakeholder mapping identifies the actors relevant to a commercial or program question. Opportunity and entry scans examine a selected market pathway before the buyer commits to deeper work. Capital intelligence can map funder categories, published mandates and documented financing conditions.",
          "A recurring intelligence scope can provide scheduled briefs on agreed subjects. The agreement identifies covered markets, sources, update frequency and the intended use. A subscription should explain what the buyer receives and how often, rather than imply a continuous view of every market development."
        ],
        "links": [
          {
            "label": "Market Intelligence",
            "href": "/services/research/market-intelligence"
          }
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "03",
        "h2": "A clear method from question to decision",
        "paras": [
          "The work begins by framing the decision and the evidence needed to inform it. Research design then sets the method, sources, fieldwork and standards for accepting information. Collection and analysis test findings across appropriate sources and identify where evidence remains limited or conflicting.",
          "The final output explains findings, confidence, implications and unresolved questions. Depending on the commission, it can include a report, source record, data tables, presentation and management briefing. Review stages allow the buyer to check factual context without replacing independent findings with an unsupported preferred conclusion."
        ]
      },
      {
        "type": "split",
        "pad": "128px 0 0",
        "eb": "04",
        "h2": "Commissioned, licensed and public material",
        "paras": [
          "A private study is produced for the purchasing institution under agreed confidentiality and usage terms. A licensed report can be sold to several purchasers where the source rights and publication model permit. The proposal distinguishes exclusivity, internal circulation, publication rights and updates.",
          "Credible Perspectives is the public research, editorial and media platform. It provides a route to published insights and approved research products. Private client information is not republished without agreement. Commissioned corporate media production has its own brief, editorial approvals and rights, with details on the corporate podcast child page."
        ]
      },
      {
        "type": "split",
        "eb": "05",
        "h2": "Institutional programs and practical application",
        "paras": [
          "An NGO or donor-funded implementer can commission baseline, market, ecosystem or program research against a defined question and procurement brief. A company can commission a market assessment or a decision briefing. An investor can purchase sector intelligence or buyer-defined pipeline screening for further assessment.",
          "Credence Institute can provide relevant research literacy and market-entry learning. Credence Engage can produce a commissioned findings launch, roundtable or sector convening. These are complete outputs with their own scope; the research commission remains accountable for the evidence products agreed with its buyer."
        ],
        "chips": [
          {
            "label": "Corporate Podcast Production",
            "href": "/services/research/corporate-podcasts"
          },
          {
            "label": "Deal Origination and Pipeline Screening",
            "href": "/services/capital-raising/deal-origination"
          },
          {
            "label": "Trade and Growth Advisory",
            "href": "/services/trade-growth"
          },
          {
            "label": "Credible Perspectives",
            "href": "https://perspectives.credence.africa"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Research and intelligence FAQs",
        "faqs": [
          {
            "q": "What should a research brief include",
            "a": "State the decision, questions, geography, sector, intended users and deadline. Identify available information and any required method or reporting format. Credence can then propose coverage, sources, fieldwork, deliverables, review stages and a fee basis matched to the question."
          },
          {
            "q": "Can you conduct primary research",
            "a": "Primary research can be included where the proposal specifies the sample, methods, permissions and resources. It may involve interviews, surveys or fieldwork suited to the question. The scope identifies access dependencies and limitations rather than promising unsupported representativeness."
          },
          {
            "q": "Can we commission Kenya market sizing",
            "a": "Yes. The assignment defines the market, segments, method, available sources and assumptions. The output should explain its basis and uncertainty. A market estimate is most useful when the buyer can understand how it was constructed and where further evidence is needed."
          },
          {
            "q": "Can the report remain exclusive and confidential",
            "a": "Yes, under the agreed commission and rights. The contract specifies access, circulation, publication and information handling. Source licensing or participant permissions may impose additional conditions. Public Perspectives content is distinct from a private client study."
          },
          {
            "q": "Can several buyers purchase the same report",
            "a": "A licensed edition can serve multiple purchasers where the underlying rights allow. The product should state its issue date, coverage, contents, update terms and permitted use. Confidential commissioned material is not converted into a shared product without the necessary agreement."
          },
          {
            "q": "Can investors commission pipeline research",
            "a": "Yes. The buyer defines criteria and the decision that follows screening. The output can include a documented search, candidate profiles and readiness notes. Explore Deal Origination and Pipeline Screening for the complete buyer-funded search scope and its assessment limits."
          },
          {
            "q": "Can you produce a public report launch or media series",
            "a": "An agreed event or corporate podcast scope can support publication and communication of findings. The brief sets objectives, audiences, approvals, production and usage rights. Research, event and media deliverables should be explicit in the complete commissioned proposal."
          },
          {
            "q": "How is research quality reviewed",
            "a": "The proposal identifies methods, source standards and review stages. The output distinguishes findings from assumptions and records limitations. Factual review, analytical challenge and a decision briefing can be included so the buyer understands both the evidence and its practical limits."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Commission a Study or Request a Market Intelligence Brief",
        "links": [
          {
            "label": "Commission a Study or Request a Market Intelligence Brief",
            "href": "/consult?consult=research"
          },
          {
            "label": "Email connect@credence.africa",
            "href": "mailto:connect@credence.africa"
          }
        ]
      }
    ]
  },
  "credence-engage": {
    "name": "Credence Engage",
    "title": "Credence Engage | Corporate Event Planning and Conferences in Kenya",
    "description": "Commission corporate events, conferences, MICE programs, launches, exhibitions and institutional convenings with Credence Engage. Explore our event platform.",
    "hero": {
      "title": "Events and convenings built around your objective",
      "intro": "Credence Engage plans and delivers events for organizations that need a clear purpose, the right audience and coordinated execution. Commission a corporate conference, meeting, product launch, exhibition, entertainment event or institutional forum. We shape the event brief around the people attending, the experience you want to create and the work required before, during and after the event.",
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
        "label": "Commission an event",
        "href": "/consult?consult=engage"
      },
      "btn2": {
        "label": "Explore events",
        "href": "https://engage.credence.africa"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "Alongside client commissions, our own event platforms create opportunities to participate, sponsor, exhibit and connect with relevant audiences.",
        "rest": "Choose the route that fits your objective: hire us to manage your event or explore a published event and its participation arrangements."
      },
      {
        "type": "split",
        "id": "client-events",
        "eb": "01",
        "h2": "Commission an event for your organization",
        "paras": [
          "An event should serve a defined institutional or commercial purpose. A corporation may be launching a product or meeting shareholders. An NGO may be convening partners around a funded program. An industry association may need a conference and exhibition. An investor platform may be organizing a briefing or a closed discussion.",
          "Share the purpose, date, location, audience, expected attendance, budget and services required. We will discuss the planning and production scope, client responsibilities and delivery arrangements. You retain a clear view of what is included, what needs separate approval and how the event will be measured."
        ],
        "chips": [
          {
            "label": "Corporate Event Planning",
            "href": "/services/credence-engage/corporate-events"
          }
        ],
        "img": {
          "src": "/partners-handshake.jpg",
          "alt": "Two professionals shaking hands"
        }
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Convene formal and institutional audiences",
        "paras": [
          "The Convene arm supports conferences, summits, AGMs, shareholder meetings, board retreats, investor briefings, cooperative member meetings and policy dialogues. These formats require agenda discipline, speaker coordination, participant management and appropriate protocol.",
          "For formal meetings, the event plan should identify the institution's governance requirements and the responsibilities it retains for notices, resolutions, records and decisions. For a policy or stakeholder forum, define the subject, participants and intended outputs before designing the program. Operational coordination should support the meeting's purpose without replacing the institution's decision-making role."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Plan MICE programs and corporate experiences",
        "paras": [
          "Meetings, incentives, conferences and exhibitions bring together travel, venues, schedules and participant experience. A MICE commission can combine venue coordination, accommodation and transport arrangements, delegate registration, meeting production and programmed activities within the agreed brief.",
          "An executive retreat, a regional sales meeting and a multi-day conference need different operating plans. Agree the geography, participant profile, accessibility needs, supplier responsibilities and contingency arrangements at the planning stage. Where travel or accommodation is included, its booking terms and costs should be visible in the proposal."
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "Launch products and activate audiences",
        "paras": [
          "The Engage arm connects event production with audience experience. Product launches, brand activations, trade shows, exhibitions and buyer-seller formats can be designed around the product, target customer and commercial objective.",
          "The scope may include event positioning, demonstrations, exhibition layouts, registration, permitted lead capture and post-event reporting. Decide how enquiries will be passed to your team and what follow-up the organization will undertake. Attendance, engagement and qualified enquiries can be measured; commercial results depend on the offer, audience and follow-through."
        ]
      },
      {
        "type": "split",
        "eb": "05",
        "h2": "Produce entertainment and public events",
        "paras": [
          "Entertainment programs, celebrations and public-facing events require a production plan that fits the audience and venue. A commission can cover program coordination, artist and supplier liaison, staging, sound, lighting, registration and on-site operations, with responsibilities agreed in advance.",
          "Neutral political-event logistics can also be scoped as an operational service: venue and stage planning, schedules, transport coordination, registration and event-day delivery. The brief must define the event's operational requirements, permissions and safety arrangements. The commission is for event organization and logistics."
        ]
      },
      {
        "type": "split",
        "id": "owned-events",
        "eb": "06",
        "h2": "Credence Events and participation opportunities",
        "paras": [
          "Credence Events brings together our owned event formats and flagship platforms. Explore the event platform for the specific program, date, location, participation options and current terms. A listed event may offer tickets, sponsorship, exhibition or partnership opportunities, depending on its format.",
          "Organizations considering sponsorship should review the actual package, audience definition, deliverables, branding rights and reporting arrangements. Event-specific commitments should be documented so the sponsor and organizer have the same understanding of the purchase."
        ],
        "chips": [
          {
            "label": "Events",
            "href": "/events"
          }
        ]
      },
      {
        "type": "split",
        "eb": "07",
        "h2": "Credible Networks and continuing engagement",
        "paras": [
          "Community and network formats can sustain discussion and relationships beyond a single event. Where a relevant network is available, discuss its purpose, membership arrangements and participation terms. An institution can also commission a sequence of meetings or an ongoing engagement program around its own audience and objectives."
        ]
      },
      {
        "type": "split",
        "eb": "08",
        "h2": "What your event commission can include",
        "paras": [
          "Agree the required components: concept and program design, venue and supplier coordination, speaker or performer management, delegate registration, event communications, technical production, on-site staffing and post-event reporting. An assignment may include all of these or a selected set.",
          "The proposal should separate management fees, supplier budgets and optional services and set out deposits, approval deadlines and change arrangements. Confirm who owns the event assets, participant records and publication rights. This allows your organization to manage the event as an accountable project."
        ]
      },
      {
        "type": "split",
        "eb": "09",
        "h2": "From event brief to delivery",
        "paras": [
          "We begin with the brief and a discussion of scope. A proposal sets out the operating plan, responsibilities, costs and milestones. Once approved, planning proceeds through documented decisions on venue, program, suppliers and production. Event-day delivery follows the agreed running order. Reporting then reviews the outputs and measures defined in the brief."
        ]
      },
      {
        "type": "faq",
        "h2": "Frequently asked questions",
        "faqs": [
          {
            "q": "Can you manage an event under our organization's brand",
            "a": "Yes. Client-owned event planning and delivery is a commercial service. The scope can be tailored to the event and the support your organization requires."
          },
          {
            "q": "Do you support conferences and MICE programs",
            "a": "Yes. Share the meeting or conference purpose, location, delegate profile and travel requirements so the relevant arrangements can be scoped."
          },
          {
            "q": "Can we commission a product launch",
            "a": "Yes. Explain the product, target audience, desired experience and commercial objectives. Agree demonstrations, production and enquiry handling in the event plan."
          },
          {
            "q": "Can an NGO commission a stakeholder forum",
            "a": "Yes. Include the program objective, participants, funder requirements and reporting needs so the convening is designed around the institution's brief."
          },
          {
            "q": "Do you handle entertainment events",
            "a": "Entertainment production can be included in an agreed commission. Program, venue, performer, technical, permission and safety responsibilities must be specified."
          },
          {
            "q": "What does neutral political event logistics include",
            "a": "It concerns operational event work such as venue arrangements, production, schedules, registration and coordination. The specific services and responsibilities belong in the event brief."
          },
          {
            "q": "How do we attend or sponsor your own events",
            "a": "Visit the event platform and the individual event page. Review its current date, program, ticket options and sponsorship or exhibition arrangements."
          },
          {
            "q": "How are event management fees quoted",
            "a": "Fees depend on the planning and delivery scope. The proposal should distinguish the management fee, supplier budget and optional components, with approved payment terms."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Discuss your event",
        "p": "Tell us the event purpose, audience, date, location, attendance estimate and budget. We will discuss the operating scope and the information needed for a proposal.",
        "links": [
          {
            "label": "Send an event brief",
            "href": "/consult?consult=engage"
          },
          {
            "label": "Email connect@credence.africa",
            "href": "mailto:connect@credence.africa"
          },
          {
            "label": "View the event platform",
            "href": "https://engage.credence.africa"
          }
        ]
      }
    ]
  },
  "capital-raising/blended-finance": {
    "name": "Capital Structuring and Blended Finance",
    "title": "Capital Structuring and Blended Finance Kenya | Credence",
    "description": "Assess funding structures combining grants, concessional funding, debt and equity, with financial scenarios, funder requirements and practical training.",
    "hero": {
      "title": "Capital structuring and blended finance design in Kenya",
      "intro": "Different sources of capital carry different expectations about returns, repayment, use of funds and reporting. Credence Africa helps institutions examine how those requirements fit their business or project. Capital structuring brings the funding need, cash flow, implementation sequence and stakeholder commitments into one decision framework.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Capital Raising and Investment Structuring",
          "href": "/services/capital-raising"
        },
        {
          "label": "Capital Structuring and Blended Finance"
        }
      ],
      "btn1": {
        "label": "Request a Capital Structuring Discussion",
        "href": "/consult?consult=capital"
      },
      "btn2": {
        "label": "Request Blended Finance Training",
        "href": "/consult?consult=capital"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "Blended finance work is relevant where commercial and development objectives meet and where an actual funding structure may combine grants, concessional capital, debt or equity.",
        "rest": "The assessment begins with the institution's proposed activity and prospective funding requirements. It does not assume that concessional capital is available or appropriate for every project."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Start with the financing purpose and commercial model",
        "paras": [
          "A structuring scope can examine the amount required, timing, eligible uses, revenue assumptions, investment period and expected repayment or return profile. It identifies which parts of the activity need development support and which may support commercial funding. Management receives a clearer view of the financing questions and the assumptions that must be tested.",
          "The capital structure should be consistent with the operating model. A project with long development periods may have different needs from an enterprise funding working capital. The analysis considers cash generation, sponsor contribution, funding sequence and the consequences of delayed implementation."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Compare the proposed capital stack",
        "paras": [
          "Scenario work can examine alternative combinations of grant support, debt, equity and concessional funding. The output explains how the structure affects cost, repayment, ownership, risk allocation and reporting. It records the source assumptions and highlights constraints that may require a different approach.",
          "Where a prospective funder has published requirements, the assessment can map relevant eligibility, contribution and documentation conditions. The work distinguishes a possible funding architecture from a confirmed offer. Proposed instruments should be evaluated against the actual parties and terms rather than presented as available financing."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Connect development objectives with evidence and delivery",
        "paras": [
          "A development finance proposition needs a credible explanation of the activity, intended beneficiaries, commercial viability and expected development results. The preparation may address impact logic, implementation responsibilities, monitoring, environmental or social information and the evidence needed for a funder's assessment.",
          "For a donor-supported component, the scope can examine permitted expenditure, co-funding, partner roles and reporting dependencies. The institution must understand how different sources of funds can be used and what records are required. A clear structure should help management avoid commitments that the delivery model cannot support."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "04",
        "h2": "Blended finance and capital strategy training",
        "paras": [
          "Credence Institute can deliver practical training for enterprise teams, project sponsors, cooperative leaders and development-program staff. Modules can cover funding instruments, capital stack scenarios, risk questions, development finance requirements and preparation of a funding proposition. Exercises help participants examine a case rather than memorize a list of instruments.",
          "An institutional cohort can include a management briefing, workshops and agreed coaching. The proposal states the participant profile, outcomes, examples, assessment and reporting. A live institutional structure is completed only where a separate advisory scope expressly includes that work."
        ],
        "links": [
          {
            "label": "Request Blended Finance Training",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "split",
        "pad": "128px 0",
        "eb": "05",
        "h2": "Research and convening around financing conditions",
        "paras": [
          "Commissioned research can examine a sector's financing landscape, funder mandates or barriers to investment. A report provides a documented evidence base with dated sources and stated limitations. Credence Engage can organize a focused roundtable that brings the relevant institutions into a defined discussion about financing and implementation.",
          "The buyer can select a capital structuring engagement, a learning program, a convening or a research product. Each purchase has a clear question or outcome and an agreed scope. Where several outputs form one commissioned program, the contract identifies one accountable delivery lead for the complete work."
        ],
        "chips": [
          {
            "label": "Capital Raising and Investment Structuring",
            "href": "/services/capital-raising"
          },
          {
            "label": "Project Finance and Bankability",
            "href": "/services/capital-raising/project-finance"
          },
          {
            "label": "Grant Ready",
            "href": "/services/capital-raising/grant-ready"
          },
          {
            "label": "Investment Readiness",
            "href": "/services/capital-raising/investment-readiness"
          },
          {
            "label": "Research and Market Intelligence",
            "href": "/services/research"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Capital structuring FAQs",
        "faqs": [
          {
            "q": "What does capital structuring mean in this service",
            "a": "It means examining how proposed funding sources fit the institution's financing purpose, cash flow and commitments. The work can compare scenarios and preparation requirements. The scope states the analytical outputs and the information required from management and prospective counterparties."
          },
          {
            "q": "When is blended finance relevant",
            "a": "It may be relevant where development objectives and commercial funding needs meet and eligible concessional or grant support addresses a defined constraint. The assessment considers the project and actual funder requirements. It should not begin with an assumption that subsidized capital will be available."
          },
          {
            "q": "Can you review an existing proposed funding structure",
            "a": "Yes. A review can examine assumptions, use of funds, sequencing, repayment, ownership implications and reporting requirements. The output can identify questions for management and counterparties. Any missing financial or specialist information is recorded in the agreed review."
          },
          {
            "q": "Do you help prepare for development finance institutions",
            "a": "A defined assignment can map published requirements, organize project information and strengthen the commercial and development proposition. The relevant institution controls its assessment and financing decision. The proposal states which preparation and evidence outputs Credence will deliver."
          },
          {
            "q": "Can this support a cooperative or nonprofit project",
            "a": "Yes, where the institution has a defined financing question and appropriate information. The analysis reflects member interests, grant conditions or development objectives as relevant. It identifies governance approvals and professional dependencies rather than applying a generic enterprise structure."
          },
          {
            "q": "Can you provide financial scenario analysis",
            "a": "The scope can include scenarios built around agreed project or business assumptions. Management confirms the source information. The output explains the effect of changing costs, revenue, timing or financing conditions and identifies which assumptions need further evidence."
          },
          {
            "q": "Can our team buy blended finance training",
            "a": "Credence Institute can scope a practical program for the participant group and its level of experience. The program can cover instruments, financing requirements, risk allocation and case analysis. Training develops capability and is distinct from completing the buyer's institution-specific structuring assignment."
          },
          {
            "q": "Can we commission research before designing a structure",
            "a": "Yes. A financing landscape or sector study can help identify relevant institutions, conditions and evidence gaps. Agree the question, geography, sources and intended decision. The research output informs further assessment without presenting a landscape scan as a funding commitment."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request a Capital Structuring Discussion",
        "links": [
          {
            "label": "Request a Capital Structuring Discussion",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Request Blended Finance Training",
            "href": "/consult?consult=capital"
          }
        ]
      }
    ]
  },
  "capital-raising/cooperative-finance": {
    "name": "Cooperative Finance",
    "title": "Cooperative Finance and SACCO Board Training Kenya | Credence",
    "description": "Cooperative finance advisory, SACCO board development, governance training and financing readiness for member-owned institutions in Kenya.",
    "hero": {
      "title": "Cooperative finance and board development in Kenya",
      "intro": "Cooperatives must connect commercial decisions with member interests, governance responsibilities and the institution's financial position. Credence Africa supports SACCOs, agricultural cooperatives, housing cooperatives and federations with finance advisory, board development and practical learning. The work helps leadership examine growth proposals, prepare financing information and strengthen oversight of the decisions members depend on.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Capital Raising and Investment Structuring",
          "href": "/services/capital-raising"
        },
        {
          "label": "Cooperative Finance"
        }
      ],
      "btn1": {
        "label": "Discuss Your Cooperative Finance or Board Development Needs",
        "href": "/consult?consult=capital"
      },
      "btn2": {
        "label": "Request a Board Training Proposal",
        "href": "/consult?consult=capital"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "A mandate may concern institutional capital, a new project, diversification, board capability or the quality of management reporting.",
        "rest": "We begin with the cooperative's objective and existing information, then agree the advisory, training or research output needed to move that decision forward."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Examine a growth proposal before committing member resources",
        "paras": [
          "A cooperative financing assignment can review the purpose of the investment, expected cash flows, funding requirement, member contribution assumptions and repayment implications. It considers how the proposed activity fits the cooperative's strategy and what information the board needs before seeking approval.",
          "For a housing, agricultural or other development project, preparation can include an evidence checklist, project assumptions, financial analysis and a financing work plan. The output distinguishes supported information from assumptions that need testing. Specialist studies and professional inputs are identified in the agreed scope rather than implied within a broad promise."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Build a financing strategy the board can explain",
        "paras": [
          "Funding options may include member capital, institutional borrowing, project finance or eligible development support. We help leadership compare the implications for liquidity, cost, timing, security, member participation and governance. Where concessional or blended finance is relevant, the assessment starts with the proposed use and the actual requirements of prospective funders.",
          "The board needs a decision record it can use: the objective, options considered, financial assumptions, principal dependencies and next actions. Management reporting can then track performance against that basis. This supports a more disciplined discussion of growth, rather than treating a funding application as an isolated task."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "03",
        "h2": "Cooperative Finance and Board Development Program",
        "paras": [
          "Credence Institute offers institutional training for boards, supervisory committees, managers and cooperative networks. Modules can cover financial statement interpretation, strategy oversight, investment proposals, governance roles, risk questions, member communication and board reporting. The selected modules reflect the participants' responsibilities and the institution's capability gaps.",
          "Learning uses practical exercises such as reading a management report, questioning a project budget or evaluating financing options. A cohort proposal identifies outcomes, facilitator requirements, format, assessment and management reporting. Federation or donor-supported programs can combine common materials with locally relevant cases and coaching clinics."
        ],
        "links": [
          {
            "label": "Request a Board Training Proposal",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "split",
        "pad": "128px 0 0",
        "eb": "04",
        "h2": "Evidence, policy and convening for the cooperative sector",
        "paras": [
          "A commissioned study can examine a cooperative's market, member needs, financing landscape or proposed diversification. Sector research can support a federation, development program or public institution considering cooperative policy reforms and capability development. The research question, sample, sources, usage rights and expected report are agreed before work begins.",
          "Credence Engage can produce a cooperative finance forum, board conference or member-focused convening. A commissioned event combines the agenda, speakers, participant journey, production and reporting in a defined scope. Credence's own events are advertised only when dates, venue and participation terms are confirmed."
        ]
      },
      {
        "type": "split",
        "eb": "05",
        "h2": "Choose a complete purchase",
        "paras": [
          "An advisory engagement prepares agreed institution-specific work. A training cohort builds participants' capability. An event produces a specified convening. A report supplies defined evidence. Each has its own deliverables and acceptance criteria, with one accountable Credence lead. The buyer can purchase the appropriate product without being required to buy the others."
        ],
        "chips": [
          {
            "label": "Capital Raising and Investment Structuring",
            "href": "/services/capital-raising"
          },
          {
            "label": "Cooperatives",
            "href": "/who-we-work-with/cooperatives"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          },
          {
            "label": "Public Affairs and Policy Advisory",
            "href": "/services/public-affairs"
          },
          {
            "label": "Credence Engage",
            "href": "/services/credence-engage"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Cooperative finance FAQs",
        "faqs": [
          {
            "q": "Which types of cooperatives can commission support",
            "a": "The service can be scoped for SACCOs, agricultural, housing and other member-owned institutions, as well as federations. The brief should identify the institution's structure, decision-making responsibilities and proposed activity so the work reflects its actual needs."
          },
          {
            "q": "Can you train a newly elected board",
            "a": "Yes. An induction or development cohort can cover governance roles, financial oversight, strategy, reporting and decision processes. We agree the participants, baseline knowledge and practical outcomes before customizing the program. The proposed faculty must fit the selected subjects."
          },
          {
            "q": "Can training use our own financial statements",
            "a": "It can where the institution authorizes their use and the scope provides appropriate handling. Anonymized exercises may be more suitable for mixed cohorts. The proposal should identify which materials are supplied, who can access them and whether they remain confidential."
          },
          {
            "q": "Do you help prepare a cooperative financing proposal",
            "a": "A defined assignment can organize the funding requirement, project information, financial assumptions and board decision material. It identifies gaps requiring further work. Financing approval remains with the relevant institution and the proposal specifies what Credence will complete."
          },
          {
            "q": "Can a federation purchase training for several cooperatives",
            "a": "Yes. A network program can use a shared curriculum, local examples, scheduled cohorts and management reporting. Agree participant selection, delivery locations, customization, assessment and payment arrangements. Additional coaching or diagnostics are stated components of the commissioned scope."
          },
          {
            "q": "Can you research cooperative policy or financing gaps",
            "a": "A research commission can examine governance practice, member needs, financing conditions or reform questions. The buyer defines the decision the study must inform. The research proposal states the methodology, sample, evidence limitations, consultation approach and final deliverables."
          },
          {
            "q": "Can you organize our cooperative conference",
            "a": "Credence Engage can scope the conference from agenda development through production and reporting. The brief should identify objectives, participants, venue requirements, sponsorship expectations and budget. Supplier costs, production responsibilities and approval stages are agreed in advance."
          },
          {
            "q": "How are fees and delivery dates determined",
            "a": "They depend on the institution's required output, participant numbers, preparation, research, delivery format and specialist inputs. The proposal sets a fee basis, schedule and buyer responsibilities. A standard cohort may need less customization than a complex financing or research mandate."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Discuss Your Cooperative Finance or Board Development Needs",
        "links": [
          {
            "label": "Discuss Your Cooperative Finance or Board Development Needs",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Request a Board Training Proposal",
            "href": "/consult?consult=capital"
          }
        ]
      }
    ]
  },
  "capital-raising/deal-origination": {
    "name": "Deal Origination and Pipeline Screening",
    "title": "Deal Origination and Pipeline Screening Kenya | Credence",
    "description": "Commission Kenya deal sourcing, enterprise and project pipeline screening, evidence profiles and buyer briefings against your investment or program criteria.",
    "hero": {
      "title": "Deal origination and pipeline screening in Kenya",
      "intro": "Investors and development programs need a pipeline that fits their mandate and contains enough information for the next assessment. Credence Africa provides buyer-funded deal origination and pipeline screening in Kenya, with regional coverage scoped to the purchasing institution's requirements. We organize the search, document screening and present evidence profiles against agreed criteria.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Capital Raising and Investment Structuring",
          "href": "/services/capital-raising"
        },
        {
          "label": "Deal Origination and Pipeline Screening"
        }
      ],
      "btn1": {
        "label": "Request a Deal Origination Brief",
        "href": "/consult?consult=capital"
      },
      "btn2": {
        "label": "Request Pipeline Development Training",
        "href": "/consult?consult=capital"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "This service is purchased by the institution commissioning the search.",
        "rest": "The buyer may be an investor, fund, development implementer, enterprise support organization or institution seeking a project or supplier pipeline. The work begins with the buyer's decision and the evidence it needs, rather than with an unqualified list of enterprises."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Define the mandate before starting the search",
        "paras": [
          "The brief sets geography, sectors, enterprise or project stage, size, proposed ticket range and eligibility criteria. It also identifies exclusions, evidence requirements and the decision that follows screening. We agree the search period, candidate limits, profile depth and briefing format before delivery begins.",
          "A useful mandate is specific about fit. An investor examining growth companies needs different information from an NGO selecting enterprises for capacity building. A project search may focus on development stage and counterparties. The screening rubric should reflect those differences so the buyer receives a usable output."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Build a documented search and screening process",
        "paras": [
          "The search scope can combine desk research, ecosystem mapping, outreach and agreed interviews. A search record explains sources, contacts, inclusion decisions and limitations. Candidate information is checked against the screening rubric, with unverified enterprise claims and missing evidence identified rather than treated as established facts.",
          "The output can include a longlist, selected profiles, readiness notes and a buyer briefing. A profile should explain why the candidate fits the criteria, which information supports that view and what requires further assessment. The proposal states the number of profiles and the depth of work instead of promising unlimited deal flow."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Add depth where the buyer needs it",
        "paras": [
          "An extension can include additional interviews, document requests, site visits, sector research or management discussions. Each extension specifies the candidate numbers, information access, consent, fee and expected output. The buyer decides whether to move a candidate into its own due diligence or selection process.",
          "For recurring needs, a retained pipeline can be refreshed on an agreed schedule. The scope defines coverage, update frequency, profile limits, access rights and briefing responsibilities. A paid pilot can test the relevance and usability of the output before committing to a larger program."
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "Enterprise and project selection for development programs",
        "paras": [
          "An NGO or entrepreneur support organization may need a documented approach to beneficiary recruitment and selection. The assignment can establish eligibility criteria, screening questions, a review rubric and a record of selection decisions. The buyer specifies its program objectives and the reporting required for its own accountability.",
          "Readiness support can follow selection through a separately defined program. Credence Institute offers training and coaching in investment readiness, grant readiness, investor reporting and project bankability. A combined commissioned program has one accountable lead and explicit deliverables for both screening and capability development."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "05",
        "h2": "Deal Origination and Pipeline Development Training",
        "paras": [
          "Teams that need to run their own search process can commission practical training. Modules can cover mandate definition, ecosystem research, outreach design, screening rubrics, evidence profiles and pipeline management. Exercises help staff apply consistent criteria and distinguish missing information from a negative result.",
          "The training proposal identifies participants, outcomes, delivery format, case materials, assessment and reporting. The learning program does not automatically include a completed live pipeline. Investors purchasing a search should use the origination brief so the required commercial output is scoped directly."
        ],
        "links": [
          {
            "label": "Request Pipeline Development Training",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ],
        "chips": [
          {
            "label": "Capital Raising and Investment Structuring",
            "href": "/services/capital-raising"
          },
          {
            "label": "Research and Market Intelligence",
            "href": "/services/research"
          },
          {
            "label": "Investment Readiness",
            "href": "/services/capital-raising/investment-readiness"
          },
          {
            "label": "Project Finance and Bankability",
            "href": "/services/capital-raising/project-finance"
          },
          {
            "label": "Investors and Capital Platforms",
            "href": "/who-we-work-with/investors-and-capital-platforms"
          },
          {
            "label": "Nonprofits and Development Organisations",
            "href": "/who-we-work-with/non-profits"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Deal origination FAQs",
        "faqs": [
          {
            "q": "Who pays for the pipeline search",
            "a": "The institution commissioning the search pays for the defined assignment. The proposal sets the coverage, profile limits and deliverables. An enterprise seeking its own readiness support purchases a separate service; it is not assumed to be the buyer of an investor's origination mandate."
          },
          {
            "q": "Can we set detailed investment criteria",
            "a": "Yes. The brief should state sector, geography, stage, size, ticket range, exclusions and information standards. We translate those requirements into a screening rubric and search plan. Changes to the criteria after work begins may require an agreed scope update."
          },
          {
            "q": "What will each profile contain",
            "a": "Profile fields are agreed with the buyer. They can cover the business or project, fit with criteria, available commercial information, management contact permissions, readiness gaps and next assessment questions. The profile distinguishes verified evidence from supplied claims and missing information."
          },
          {
            "q": "Does screening replace due diligence",
            "a": "Screening supports the next decision about which candidates to assess. Its depth is defined in the proposal and should not be treated as an unrestricted assurance conclusion. The buyer retains responsibility for its subsequent due diligence, selection and investment process."
          },
          {
            "q": "Can an NGO use this for beneficiary selection",
            "a": "Yes. A scope can cover enterprise outreach, eligibility screening, selection records and a management report. The program's objectives and criteria guide the work. The proposal identifies participant communications, data handling and the buyer's responsibilities for final selection."
          },
          {
            "q": "Can you refresh a pipeline regularly",
            "a": "A recurring scope can provide scheduled updates, new profiles and briefings within agreed limits. It should state the covered markets and sectors, update frequency, evidence standard and access rights. A pilot helps assess usefulness before expansion."
          },
          {
            "q": "Can our analysts buy pipeline development training",
            "a": "Credence Institute can deliver a practical program covering research, mandate definition, outreach, screening and reporting. The exercises are matched to the team's role. Training builds internal capability; a completed buyer-specific search is purchased through its own scope."
          },
          {
            "q": "Can the search cover markets beyond Kenya",
            "a": "Regional coverage can be scoped where the required research and delivery capability is available. Kenya is the starting market for this offer. The proposal identifies each covered geography, information sources and limitations instead of implying uniform access across all African countries."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request a Deal Origination Brief",
        "links": [
          {
            "label": "Request a Deal Origination Brief",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Request Pipeline Development Training",
            "href": "/consult?consult=capital"
          }
        ]
      }
    ]
  },
  "capital-raising/grant-ready": {
    "name": "Grant Ready",
    "title": "Grant Readiness and Proposal Writing Kenya | Credence",
    "description": "Strengthen grant applications with readiness reviews, proposal and budget support, donor reporting training and institutional cohorts in Kenya.",
    "hero": {
      "title": "Grant readiness and proposal writing support in Kenya",
      "intro": "A credible grant application connects a funder's objectives with an institution's delivery capacity, evidence and budget. Credence Africa helps nonprofits, social enterprises, associations and development programs prepare that connection. Grant Ready combines defined advisory support with practical training for teams that need to develop stronger proposals and manage the requirements that follow an award.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Capital Raising and Investment Structuring",
          "href": "/services/capital-raising"
        },
        {
          "label": "Grant Ready"
        }
      ],
      "btn1": {
        "label": "Request a Grant Readiness Assessment",
        "href": "/consult?consult=capital"
      },
      "btn2": {
        "label": "Request a Proposal Writing Cohort",
        "href": "/consult?consult=capital"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The starting point is the funding opportunity and the decision to apply.",
        "rest": "We examine eligibility, strategic fit, the proposed intervention, delivery partners and available evidence before recommending a preparation scope. This gives management a basis for committing staff time and resources to an application."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Prepare the institution before polishing the proposal",
        "paras": [
          "An organization can have a worthwhile idea and still lack the records, delivery plan or financial information a funder requires. A readiness review examines the organization profile, governance records, implementation experience, financial controls, supporting documents and responsibilities for the application. The output identifies gaps, priority actions and the information needed from your team.",
          "Opportunity assessment considers the applicant criteria, geography, thematic fit, allowable activities, co-funding requirements and submission timetable. Where a call requires a consortium, the preparation plan identifies partner contributions and the evidence needed from each participant. The application process is organized around the actual funder guidance."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Proposal development with a clear line from problem to results",
        "paras": [
          "A defined proposal assignment can cover a concept note, problem analysis, theory of change, results framework, activity plan and supporting narrative. We help teams distinguish the intended outcomes from the activities and outputs they can deliver. The work also examines how the intervention will be monitored and what evidence will support its claims.",
          "Budget support connects costs with activities, implementation periods and responsibilities. Depending on the brief, it can include a budget narrative, unit-cost assumptions, staffing and partner costs, co-funding schedules and a check against the call's cost rules. Management retains responsibility for approving the figures and confirming organizational commitments."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "03",
        "h2": "Grant Readiness and Proposal Writing Program",
        "paras": [
          "Credence Institute offers team training and coaching for organizations that need to repeat the process across several opportunities. Participants work through eligibility assessment, proposal logic, results frameworks, budgeting and application review using agreed exercises. An institutional cohort can use an anonymized case or a live opportunity where permissions and the training scope allow.",
          "For NGOs supporting local organizations or entrepreneurs, the program can combine a needs assessment, workshops, coaching clinics, submission-readiness exercises and a management report. The proposal states participant numbers, delivery format, assessment, reporting and customization. Virtual, in-person and hybrid delivery can be scoped to the buyer's requirements."
        ],
        "links": [
          {
            "label": "Request a Proposal Writing Cohort",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "split",
        "pad": "128px 0 0",
        "eb": "04",
        "h2": "Develop reporting capability before an award creates pressure",
        "paras": [
          "Grant preparation should consider implementation as well as selection. Training or an advisory scope can address reporting calendars, indicator records, expenditure documentation, partner reporting and management review. The objective is to help the organization understand the information it must produce and the responsibilities needed to maintain it.",
          "Funding Opportunities Forums and grant outlook research provide separate ways to examine the funding landscape. A forum is purchased for its agenda and participation value; a report is purchased for defined coverage and evidence. Neither substitutes for checking the eligibility and current status of a specific call."
        ]
      },
      {
        "type": "split",
        "eb": "05",
        "h2": "Agree the assignment and the applicant's responsibilities",
        "paras": [
          "We scope the work around your opportunity, starting materials and deadline. The proposal lists deliverables, review rounds, required documents, staff availability, fee and completion criteria. For a consortium or a complex application, it also identifies the information dependencies that could affect delivery. A training proposal uses learning outcomes and assessment rather than implying that course attendance completes the application."
        ],
        "chips": [
          {
            "label": "Capital Raising and Investment Structuring",
            "href": "/services/capital-raising"
          },
          {
            "label": "Investor Reporting",
            "href": "/services/capital-raising/investor-reporting"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Grant Ready FAQs",
        "faqs": [
          {
            "q": "Can you write a proposal for our organization",
            "a": "A defined assignment can include proposal development or review. We first assess the call, applicant fit, starting material and deadline. Your organization supplies accurate records, confirms its commitments and approves the final submission. The scope identifies exactly which documents Credence will prepare."
          },
          {
            "q": "Can you help us find suitable grant opportunities",
            "a": "An opportunity scan can identify calls against agreed geography, themes and applicant criteria. The output records source links, status and fit considerations. It is distinct from a completed application and every opportunity must be checked against the funder's current requirements."
          },
          {
            "q": "Do you work with for profit social enterprises",
            "a": "Yes, where the proposed scope suits the enterprise and the funding route. Some calls accept businesses; others require nonprofit applicants or implementing partners. We examine the published eligibility rules before recommending that the enterprise invests in an application."
          },
          {
            "q": "What is included in an institutional training cohort",
            "a": "The proposal defines modules, participant profile, exercises, delivery format, assessment and management reporting. Coaching and live-application review can be included as stated components. The cohort can support NGO staff, implementing partners or an entrepreneur support organization's beneficiaries."
          },
          {
            "q": "Can you review a proposal we have already written",
            "a": "Yes. A review can assess fit with the call, clarity of the intervention, evidence, results logic, budget consistency and missing information. The agreed output may be annotated documents, a review report and a management discussion, with specified review rounds."
          },
          {
            "q": "Do you support expressions of interest and concept notes",
            "a": "A scope can address an expression of interest, capability statement or concept note as well as a full application. The work is matched to the buyer's stage in the process. It should present verifiable experience and a relevant response to the opportunity."
          },
          {
            "q": "Can donor reporting be included after funding is awarded",
            "a": "Yes. Reporting systems, staff training or periodic preparation support can be separately scoped. The actual grant agreement determines the reporting requirements. The proposal identifies the documents, review cycle and responsibilities Credence will support."
          },
          {
            "q": "Does buying support guarantee a grant",
            "a": "No. The funder controls selection and may have limited resources or competing priorities. Credence's proposal specifies the readiness, writing, review or training outputs it will deliver. Buyers should assess that scope and the evidence of delivery capability before purchase."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request a Grant Readiness Assessment",
        "links": [
          {
            "label": "Request a Grant Readiness Assessment",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Request a Proposal Writing Cohort",
            "href": "/consult?consult=capital"
          }
        ]
      }
    ]
  },
  "capital-raising/investment-readiness": {
    "name": "Investment Readiness",
    "title": "Investment Readiness and Capital Strategy Kenya | Credence",
    "description": "Prepare your business for investor discussions with readiness assessment, financial models, investment materials, data room support and team training.",
    "hero": {
      "title": "Investment readiness and capital strategy for growth businesses",
      "intro": "An investor needs to understand how a business creates value, what the proposed funding will achieve and which assumptions support the plan. Credence Africa helps founders and leadership teams prepare that investment case. We connect capital strategy with commercial analysis, financial information, governance records and the materials used in funder discussions.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Capital Raising and Investment Structuring",
          "href": "/services/capital-raising"
        },
        {
          "label": "Investment Readiness"
        }
      ],
      "btn1": {
        "label": "Request an Investment Readiness Assessment",
        "href": "/consult?consult=capital"
      },
      "btn2": {
        "label": "Request an Investment Readiness Cohort",
        "href": "/consult?consult=capital"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The work is relevant to growing enterprises, scale-ups, portfolio companies and entrepreneur support programs in Kenya.",
        "rest": "It can address a specific financing round or strengthen the preparation process across a cohort of businesses. The scope begins with the funding objective and the evidence currently available."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Identify the gaps that matter to the funding decision",
        "paras": [
          "A readiness assessment reviews the business model, customer proposition, revenue evidence, operating assumptions, funding requirement and management information. It also examines the ownership and governance records that a prospective funder may ask to see. The result is a prioritized preparation plan with responsibilities and information gaps.",
          "Readiness is more than presentation quality. A persuasive narrative must be consistent with the financial model, commercial evidence and proposed use of funds. We help management identify where a claim needs better support and where the business should test an assumption before treating it as a forecast."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Develop a capital strategy around the business",
        "paras": [
          "Capital strategy considers how much is needed, when it is needed and what the institution can reasonably commit to. The analysis can compare equity, borrowing, eligible grants and other relevant routes against cash flow, growth stage, ownership preferences and the financing purpose.",
          "Financial modeling can bring together revenue drivers, operating costs, working capital, investment requirements and financing assumptions. Scenario analysis helps management examine the effect of changes in growth, pricing, costs or timing. Where valuation or return assumptions form part of the mandate, their basis and limitations are stated clearly."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Prepare investment materials that tell one consistent story",
        "paras": [
          "A defined assignment can include a pitch presentation, investment memorandum, management narrative, funding brief and organized data room. The scope identifies the intended audience and the level of detail needed. Credence helps coordinate the information so the materials describe the same strategy, numbers and funding requirement.",
          "A data room work plan identifies documents, owners, version control and outstanding items. Management preparation can include a question session on unit economics, risks, use of funds and performance reporting. These outputs support a more efficient discussion with prospective capital providers without assuming that materials alone secure a transaction."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "04",
        "h2": "Investment Readiness and Investor Reporting Program",
        "paras": [
          "Credence Institute offers practical learning for founders, finance teams and enterprise support organizations. Participants can work through funding strategy, financial assumptions, investment narratives, data room preparation and investor reporting. An institutional cohort can combine workshops, exercises and agreed coaching to help businesses apply the learning.",
          "For an accelerator, NGO or bank enterprise-support program, the proposal specifies participant selection, baseline assessment, modules, coaching allocation, reporting and completion criteria. A learning program builds the participants' capability; a separate advisory engagement completes the institution-specific materials listed in its scope."
        ],
        "links": [
          {
            "label": "Request an Investment Readiness Cohort",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "split",
        "pad": "128px 0",
        "eb": "05",
        "h2": "Evidence and relationships around the funding journey",
        "paras": [
          "Enterprise funding research can help an organization understand the financing landscape, sector trends and the questions investors are examining. Relevant Credence Engage events can provide a focused setting for discussion and learning. Each report or event has its own coverage or agenda and published purchase terms.",
          "If the immediate need is preparation, the right starting point is an assessment or a clearly scoped engagement. If an investor is buying a search for potential investments, explore Deal Origination and Pipeline Screening instead. The distinction keeps the work matched to the purchasing institution's decision."
        ],
        "chips": [
          {
            "label": "Capital Raising and Investment Structuring",
            "href": "/services/capital-raising"
          },
          {
            "label": "Investor Reporting",
            "href": "/services/capital-raising/investor-reporting"
          },
          {
            "label": "Transaction Support",
            "href": "/services/capital-raising/transaction-support"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          },
          {
            "label": "Growth-Stage SMEs and Enterprises",
            "href": "/who-we-work-with/growth-stage-smes"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Investment readiness FAQs",
        "faqs": [
          {
            "q": "At what stage should a business seek readiness support",
            "a": "Consider it when management has a defined funding purpose and needs to assess its preparation. An early review can identify missing evidence before approaching funders. The scope may be narrower for a business still testing demand than for an established enterprise preparing a financing round."
          },
          {
            "q": "Can you review an existing pitch deck",
            "a": "Yes. A review can examine the investment narrative, business evidence, financial consistency, funding requirement and unanswered questions. It should specify whether the output is feedback, revisions or a wider readiness assessment. Your team provides the supporting information needed to assess the claims."
          },
          {
            "q": "Can you build or review a financial model",
            "a": "A scope can cover model development or review against agreed business drivers and information. Management must confirm the source figures and assumptions. The output can include scenarios, explanatory notes and identified gaps, with the model's purpose and limits stated in the engagement."
          },
          {
            "q": "What is a fundraising data room",
            "a": "It is an organized set of information for the preparation and assessment process. Depending on the business, it may include financial, commercial, ownership, governance and operating records. The work plan identifies required documents, responsible owners and items needing further professional input."
          },
          {
            "q": "Can an entrepreneur support organization buy a cohort",
            "a": "Yes. A cohort can combine practical training, business exercises and an agreed coaching allocation. The buyer specifies participants, objectives and reporting needs. The proposal distinguishes common learning content from any individual advisory outputs required for participating businesses."
          },
          {
            "q": "Do you introduce us to investors",
            "a": "Investor mapping or engagement preparation can be included where expressly agreed. A readiness assignment does not automatically include introductions or transaction execution. The proposal states the work to be completed and the responsibilities for any subsequent funder engagement."
          },
          {
            "q": "Can the work include investor reporting after funding",
            "a": "Yes. Reporting design or continuing support can be separately scoped around the investor's information requirements and management's reporting cycle. It may include indicators, templates, data responsibilities and review processes. Explore the Investor Reporting and Post-Investment Support page."
          },
          {
            "q": "How do we choose between training and advisory",
            "a": "Buy training when your team needs to learn and repeat the preparation process. Buy advisory when you need specified work completed for the business. A proposal should make the learning outcomes or deliverables, review stages and buyer responsibilities clear before you commit."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request an Investment Readiness Assessment",
        "links": [
          {
            "label": "Request an Investment Readiness Assessment",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Request an Investment Readiness Cohort",
            "href": "/consult?consult=capital"
          }
        ]
      }
    ]
  },
  "capital-raising/investor-reporting": {
    "name": "Investor Reporting",
    "title": "Investor Reporting and Investor Relations Kenya | Credence",
    "description": "Build clear investor, board and donor reporting with KPI frameworks, reporting templates, management review and practical team training in Kenya.",
    "hero": {
      "title": "Investor reporting and post-investment support in Kenya",
      "intro": "After funding, management must explain what changed, how the business is performing and which decisions require attention. Credence Africa helps enterprises, investment platforms and funded institutions establish investor reporting and stakeholder communication around reliable information. The work connects financial performance, operating indicators, governance records and the commitments made during the funding process.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Capital Raising and Investment Structuring",
          "href": "/services/capital-raising"
        },
        {
          "label": "Investor Reporting"
        }
      ],
      "btn1": {
        "label": "Request an Investor Reporting Review",
        "href": "/consult?consult=capital"
      },
      "btn2": {
        "label": "Request Reporting Training",
        "href": "/consult?consult=capital"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The starting point is the reporting requirement and the decision the information must support.",
        "rest": "We review the existing reporting cycle, source data, templates and responsibilities before proposing a system or a defined support assignment."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Make the reporting cycle usable for management and investors",
        "paras": [
          "A reporting design assignment can establish the reporting calendar, information owners, review stages and escalation points. It identifies which data is available, how it is checked and where the institution needs a more consistent record. The output can include a reporting framework, templates, a responsibility schedule and a practical implementation plan.",
          "The emphasis is consistency. A monthly management report, quarterly investor update and board paper should use reconciled definitions and figures. We help teams avoid competing versions of performance while allowing each audience to receive the detail appropriate to its role."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Explain performance and the decisions behind it",
        "paras": [
          "A report should connect numbers with the business model and operating priorities. Depending on the institution, the framework may cover revenue, costs, cash position, working capital, customer performance, project milestones or agreed impact indicators. It should explain material variances, corrective actions and decisions that need approval.",
          "Board reporting can organize the strategic issues, performance evidence and management recommendations needed for oversight. Investor communication can set a regular update format and a documented process for information requests. The scope identifies the materials Credence prepares and the review that remains with management."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Donor and development program reporting",
        "paras": [
          "For a funded program, reporting requirements follow the grant or implementation agreement. A defined assignment can review reporting calendars, indicator records, expenditure narratives, partner contributions and supporting documentation. We help the institution connect activities and costs with the results it has committed to report.",
          "The program team remains responsible for confirming the information and maintaining its records. Where financial assurance or another specialist service is required, the engagement identifies that dependency. Reporting preparation should not imply that an independently required assurance opinion is included."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "04",
        "h2": "Build reporting capability through practical training",
        "paras": [
          "Credence Institute can deliver investor reporting, board reporting and donor reporting workshops for management and program teams. Participants practice defining indicators, analyzing variances, preparing a decision-focused narrative and reviewing a report against its intended audience. A cohort can use approved institutional materials or anonymized examples.",
          "An employer, fund or entrepreneur support organization can commission a network program for portfolio companies or beneficiaries. The proposal states learning outcomes, preparation, exercises, assessment, coaching and management reporting. This helps the buyer distinguish capability development from outsourced report preparation."
        ],
        "links": [
          {
            "label": "Request Reporting Training",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "split",
        "pad": "128px 0",
        "eb": "05",
        "h2": "Continuing support with a defined workload",
        "paras": [
          "Recurring support can be scoped around a reporting timetable, templates and agreed review rounds. It may include preparation coordination, editorial review, management briefings and updates to the reporting framework. The agreement identifies the expected information deadlines and the consequences of missing or incomplete inputs.",
          "Good reporting also supports future capital preparation. A consistent performance record makes it easier for management to explain progress and assemble information for subsequent funder discussions. Where a new funding requirement arises, capital strategy or investment readiness is scoped as a separate decision rather than assumed within the reporting retainer."
        ],
        "chips": [
          {
            "label": "Capital Raising and Investment Structuring",
            "href": "/services/capital-raising"
          },
          {
            "label": "Investment Readiness",
            "href": "/services/capital-raising/investment-readiness"
          },
          {
            "label": "Grant Ready",
            "href": "/services/capital-raising/grant-ready"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Investor reporting FAQs",
        "faqs": [
          {
            "q": "Can you improve our existing investor report",
            "a": "Yes. A review can examine its structure, indicator definitions, financial consistency, narrative and usefulness to the audience. The agreed output may be annotated feedback, revised templates and a management discussion. Your team provides the underlying information and confirms its accuracy."
          },
          {
            "q": "Do you prepare recurring reports for clients",
            "a": "Recurring preparation or review can be agreed against a stated reporting cycle and workload. The scope specifies deadlines, source information, review rounds and approval responsibilities. It should also identify additional charges or re-scoping where the reporting requirement changes materially."
          },
          {
            "q": "Can board and investor reports use the same data",
            "a": "They should use reconciled source information, although the content and level of detail can differ. The framework can establish common definitions and reporting periods while giving the board the decisions it must oversee and investors the updates agreed with them."
          },
          {
            "q": "Can you support donor reporting",
            "a": "Yes. A mandate can address results reporting, expenditure narratives, partner information and reporting calendars against the actual agreement. The institution must retain accurate records and approve the submission. Specialist assurance requirements are identified separately where they apply."
          },
          {
            "q": "Which KPIs should we use",
            "a": "The indicators should reflect the business model, management priorities and funder commitments. The review examines what each indicator means, how it is calculated, who supplies it and what decision it informs. A long list of unmaintainable measures is rarely useful."
          },
          {
            "q": "Can our staff learn to prepare reports themselves",
            "a": "Credence Institute can deliver a practical cohort using reporting exercises and agreed learning outcomes. Training can cover templates, variance analysis, narrative and review. Coaching may be included where expressly scoped to support application to the institution's reporting cycle."
          },
          {
            "q": "Can a fund commission support for portfolio companies",
            "a": "Yes. A portfolio program can establish common reporting principles while recognizing differences between businesses. The scope should define participating companies, templates, coaching or review allocation, data access and the information the commissioning fund will receive."
          },
          {
            "q": "Will the work include an audit opinion",
            "a": "Report design, preparation and management review are the outputs described here. If the institution needs an audit or another independent assurance service, that requirement should be identified when scoping the work and assigned to the appropriately engaged specialist."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request an Investor Reporting Review",
        "links": [
          {
            "label": "Request an Investor Reporting Review",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Request Reporting Training",
            "href": "/consult?consult=capital"
          }
        ]
      }
    ]
  },
  "capital-raising/project-finance": {
    "name": "Project Finance and Bankability",
    "title": "Project Finance and Bankability Kenya | Credence Africa",
    "description": "Project finance readiness, bankability assessment, funding preparation and practical training for sponsors, investors and development programs in Kenya.",
    "hero": {
      "title": "Project finance readiness and bankability in Kenya",
      "intro": "A project needs more than a funding requirement. A prospective funder must be able to examine its revenue, implementation plan, counterparties, risks and sponsor commitments. Credence Africa helps project sponsors organize that evidence and identify the preparation needed before financing discussions. Our work connects project bankability, financial assumptions and a defined capital preparation plan.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Capital Raising and Investment Structuring",
          "href": "/services/capital-raising"
        },
        {
          "label": "Project Finance and Bankability"
        }
      ],
      "btn1": {
        "label": "Request a Project Bankability Review",
        "href": "/consult?consult=capital"
      },
      "btn2": {
        "label": "Request Project Finance Training",
        "href": "/consult?consult=capital"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The service can be scoped for infrastructure, energy, industrial and other real-asset or commercial projects.",
        "rest": "Investors and development programs can commission readiness reviews or pipeline preparation against their own criteria. The engagement begins with the project, its current stage and the decision the buyer needs to make."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Understand the project's current readiness",
        "paras": [
          "A bankability review can examine the project concept, development stage, revenue arrangements, market evidence, implementation dependencies and available documents. It asks whether the information is sufficient for the next financing discussion and where further work is required. The output identifies strengths, missing evidence and priority preparation actions.",
          "Preparation should be staged. An early concept may need stronger demand evidence and project definition. A more advanced proposal may require financial assumptions, counterparties and implementation arrangements to be documented consistently. The scope should match the project's actual state rather than label every project ready for finance."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Test the financial and commercial assumptions",
        "paras": [
          "Financial work can bring together capital expenditure, operating costs, revenue drivers, implementation timing, working capital and proposed funding. Scenario analysis examines what changes when costs increase, development is delayed or revenue differs from expectations. The source and basis of material assumptions are recorded.",
          "Commercial preparation can examine customers, offtake or payment arrangements, sponsor capacity and operational responsibilities. The objective is to make the financing proposition assessable. Where technical, environmental or other specialist studies are required, the preparation plan identifies them and the responsibilities for obtaining them."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Organize a project financing work plan",
        "paras": [
          "A defined assignment can produce a readiness matrix, document register, financial analysis, funding brief and preparation roadmap. Capital structuring work can compare potential funding routes against project cash flow, development needs and prospective funder requirements. Management receives a clear record of actions, owners and dependencies.",
          "For institutions assembling a project portfolio, the work can establish a common screening framework and readiness classification. A buyer-funded pipeline assignment identifies the number and type of projects to review, evidence standards and the output required for further assessment. It does not present preliminary screening as completed investment due diligence."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "04",
        "h2": "Project Finance and Bankability Training",
        "paras": [
          "Credence Institute offers practical training for sponsors, finance teams, public institutions, investors and development-program staff. Modules can cover project definition, revenue models, financial assumptions, risk allocation, financing requirements and preparation of the funding proposition. Exercises help participants identify gaps in a project case and plan the next stage of work.",
          "An institutional program can combine workshops, project clinics and an agreed coaching allocation. The proposal defines participant profiles, delivery format, learning outcomes, assessment and management reporting. A live project review is included only when its scope, information requirements and deliverables are stated."
        ],
        "links": [
          {
            "label": "Request Project Finance Training",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "split",
        "pad": "128px 0",
        "eb": "05",
        "h2": "Convening and intelligence around project opportunities",
        "paras": [
          "Credence Engage can organize a Project Finance Roundtable or a commissioned investor-sponsor convening. The event brief defines the agenda, participants, speaker approach, production and reporting. Research can examine project financing conditions, sector demand or a defined pipeline of opportunities, with dated evidence and limitations.",
          "Choose a review when the immediate need is to understand readiness; training when the team needs capability; an event when the objective is a defined convening; and research when the decision requires additional evidence. Each purchase is scoped as a complete output."
        ],
        "chips": [
          {
            "label": "Capital Raising and Investment Structuring",
            "href": "/services/capital-raising"
          },
          {
            "label": "Capital Structuring and Blended Finance",
            "href": "/services/capital-raising/blended-finance"
          },
          {
            "label": "Deal Origination and Pipeline Screening",
            "href": "/services/capital-raising/deal-origination"
          },
          {
            "label": "Energy and Natural Resources",
            "href": "/sectors/energy"
          },
          {
            "label": "Mobility, Transport and Logistics",
            "href": "/sectors/mobility"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Project finance FAQs",
        "faqs": [
          {
            "q": "What does a bankability review produce",
            "a": "The agreed output can include a readiness matrix, evidence gaps, financial questions and a preparation roadmap. It explains which assumptions are supported and which require further work. The proposal defines the depth of review and specialist inputs included."
          },
          {
            "q": "Can an early stage project purchase this service",
            "a": "Yes. An early-stage scope can focus on project definition, demand, revenue logic and a development work plan. A mature project may need a deeper review of documents and financing assumptions. The assignment is matched to the stage and available information."
          },
          {
            "q": "Do you prepare project financial models",
            "a": "Model development or review can be included in the scope. The sponsor supplies accurate source information and confirms assumptions. The model's purpose, scenarios and limitations are stated and gaps requiring technical or other specialist evidence are identified."
          },
          {
            "q": "Which sectors can commission project support",
            "a": "The scope can cover energy, infrastructure, industrial and other substantial commercial projects where Credence can assemble the required capability. The brief should describe the project and needed expertise. Sector-specific technical work is included only when expressly agreed."
          },
          {
            "q": "Can an NGO or public institution buy a training program",
            "a": "Yes. An institutional cohort can develop project preparation and bankability skills across staff or beneficiaries. The proposal identifies participants, modules, exercises, coaching, assessment and reporting. The buyer can select virtual, in-person or hybrid delivery."
          },
          {
            "q": "Can investors commission project pipeline screening",
            "a": "Yes. The buyer specifies geography, sectors, project stage, size and screening criteria. The output may include a documented search, profiles and readiness notes. Further technical assessment and investment decisions follow the buyer's own process."
          },
          {
            "q": "Does a bankability assessment guarantee financing",
            "a": "No. It identifies readiness and preparation requirements against the agreed scope. Funders determine whether a project meets their mandate and risk criteria. The proposal should be evaluated against the quality and completeness of its analytical outputs."
          },
          {
            "q": "Can you organize a project finance roundtable",
            "a": "Credence Engage can produce a commissioned roundtable with a defined agenda, participant profile, venue or online format and reporting. Sponsorship, buyer meetings or media outputs are specified separately where included. Confirm the event's objective before selecting the production scope."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request a Project Bankability Review",
        "links": [
          {
            "label": "Request a Project Bankability Review",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Request Project Finance Training",
            "href": "/consult?consult=capital"
          }
        ]
      }
    ]
  },
  "capital-raising/transaction-support": {
    "name": "Transaction Support",
    "title": "Capital Raising and Transaction Support Kenya | Credence",
    "description": "Prepare capital transactions with funder mapping, information coordination, data room readiness, management briefings and a defined execution work plan.",
    "hero": {
      "title": "Capital raising and transaction support in Kenya",
      "intro": "A financing process requires management to keep the investment case, information requests and transaction timetable aligned. Credence Africa supports businesses, project sponsors and institutions with the preparation and coordination needed to move an agreed capital mandate forward. We help teams organize funder targeting, investment information, management responses and the work plan around the transaction.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Capital Raising and Investment Structuring",
          "href": "/services/capital-raising"
        },
        {
          "label": "Transaction Support"
        }
      ],
      "btn1": {
        "label": "Discuss a Capital Raising Support Mandate",
        "href": "/consult?consult=capital"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The engagement begins with the financing objective, current stage and responsibilities already assigned.",
        "rest": "It can support an institution preparing for initial discussions or one that needs greater discipline around an active process. The proposal identifies the work Credence will complete and the professional inputs the transaction requires."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Prepare a focused funder engagement strategy",
        "paras": [
          "Funder mapping considers the institution's sector, stage, geography, funding purpose and proposed amount. A defined scope can research relevant capital provider categories and documented mandate criteria, then prepare an engagement plan and information requirements. The institution can use that work to prioritize discussions rather than circulate inconsistent materials widely.",
          "The plan should explain why a prospective funding route fits and what remains uncertain. It can identify the documents to prepare, management questions to address and the sequence of outreach. Introductions or direct engagement activity are included only when the agreed mandate expressly provides for them."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Coordinate information and due diligence preparation",
        "paras": [
          "Information coordination can cover a document request list, data room structure, document owners, version control and an issues register. Management receives a clear view of outstanding items and the dependencies that could affect timing. Commercial and financial materials are checked for consistency with the investment narrative.",
          "Due diligence preparation is an organized response process. It can identify which questions management can answer, where evidence is missing and which matters require further specialist analysis. The assignment does not treat an incomplete data room as complete simply because files have been uploaded."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Give management a clear view of the process",
        "paras": [
          "A transaction work plan records milestones, information responsibilities, decision points and counterparties. Preparation sessions can help management explain the business model, funding requirement, risk questions and use of proceeds. Where proposed terms require commercial analysis, the scope can organize management's questions and compare their business implications.",
          "The institution appoints the professional advisers needed for the transaction. Credence's responsibilities are set out in the engagement so the buyer knows which preparation and coordination outputs it is purchasing. Changes to the process, parties or workload are reflected in an agreed scope update."
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "Support growth project and strategic transactions",
        "paras": [
          "The preparation needs differ between an enterprise funding round, project financing, refinancing or a strategic transaction. Enterprise work may focus on commercial evidence and growth assumptions. A project may need stronger documentation of implementation, counterparties and revenue arrangements. A strategic transaction may require a coordinated information response and a clear record of management decisions.",
          "Our capital advisory service provides the wider strategy context. Investment readiness, project bankability and capital structuring address the specific preparation disciplines. A buyer can commission the complete support mandate it needs without treating every adjacent subject as an additional mandatory purchase."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "05",
        "h2": "Build internal capability and retain useful evidence",
        "paras": [
          "Credence Institute can train finance and leadership teams on transaction preparation, data rooms and investor communication. Credence Engage can organize a relevant investment forum or an institution's commissioned convening. Research and intelligence can examine the sector or funding landscape where evidence is needed for the decision.",
          "These services support different buying objectives. Training builds capability, an event creates a defined convening and research answers an agreed question. The transaction support engagement remains accountable for the deliverables listed in its own proposal."
        ],
        "chips": [
          {
            "label": "Capital Raising and Investment Structuring",
            "href": "/services/capital-raising"
          },
          {
            "label": "Investment Readiness",
            "href": "/services/capital-raising/investment-readiness"
          },
          {
            "label": "Investor Reporting",
            "href": "/services/capital-raising/investor-reporting"
          },
          {
            "label": "Project Finance and Bankability",
            "href": "/services/capital-raising/project-finance"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Transaction support FAQs",
        "faqs": [
          {
            "q": "When should we involve Credence in a financing process",
            "a": "Consider support when management needs help preparing its information, organizing funder engagement or coordinating an active process. Share the current stage, target timetable and existing professional responsibilities. The first discussion identifies whether the proposed scope suits the actual requirement."
          },
          {
            "q": "Can you identify potential funder categories",
            "a": "A funder mapping scope can research relevant institutions and published mandate criteria against the business or project's needs. The output explains fit considerations and information gaps. It is not a promise that the listed institutions will invest or extend credit."
          },
          {
            "q": "Does the assignment include introductions",
            "a": "Only where expressly agreed. Some assignments end with a researched engagement plan and prepared materials; others include specified engagement support. The proposal distinguishes the preparation outputs from any introductions, meetings or continuing coordination the buyer is purchasing."
          },
          {
            "q": "What is included in data room support",
            "a": "It can include a document structure, request register, owners, version control and a readiness review. The institution provides accurate documents and appoints relevant professional advisers. The scope identifies whether Credence prepares materials, coordinates collection or reviews the organization of existing information."
          },
          {
            "q": "Can you help with an active due diligence process",
            "a": "A defined mandate can organize requests, management responses, deadlines and outstanding issues. It can also identify gaps and professional dependencies. The work is coordinated with the institution's existing advisers and the responsibilities agreed for each part of the process."
          },
          {
            "q": "Can the work support refinancing or a strategic transaction",
            "a": "Yes, where the engagement is scoped to the particular process and preparation need. The institution supplies current facilities or transaction information. The proposal sets the outputs, timetable and specialist inputs instead of assuming one standard work plan fits every transaction."
          },
          {
            "q": "Can our finance team buy transaction preparation training",
            "a": "Credence Institute can scope a workshop or cohort on information readiness, investment narrative, management questions and process coordination. The buyer specifies participants and learning needs. Training can use approved examples and does not automatically include completing a live transaction mandate."
          },
          {
            "q": "How are delays and additional information requests handled",
            "a": "The proposal identifies buyer information deadlines and the anticipated review workload. If the process changes or counterparties request substantial additional work, the parties agree an updated scope and schedule. A clear work plan makes those dependencies visible early."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Discuss a Capital Raising Support Mandate",
        "links": [
          {
            "label": "Discuss a Capital Raising Support Mandate",
            "href": "/consult?consult=capital"
          },
          {
            "label": "Email connect@credence.africa",
            "href": "mailto:connect@credence.africa"
          }
        ]
      }
    ]
  },
  "credence-engage/corporate-events": {
    "name": "Corporate Event Planning",
    "title": "Corporate Event Planning and MICE Nairobi | Credence Engage",
    "description": "Plan corporate events, conferences, product launches, MICE and entertainment productions in Kenya with Credence Engage's defined event management scope.",
    "hero": {
      "title": "Corporate event planning, MICE and event production in Kenya",
      "intro": "An event should serve an organization's objective and give participants a well-managed experience. Credence Engage offers commissioned event planning and production for companies, associations, institutions and development organizations. We connect the brief, agenda, participant journey, suppliers and production schedule within a defined event scope.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Credence Engage",
          "href": "/services/credence-engage"
        },
        {
          "label": "Corporate Event Planning"
        }
      ],
      "btn1": {
        "label": "Request an Event Planning and Production Proposal",
        "href": "/consult?consult=engage"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The work can cover conferences, meetings, incentives, exhibitions, product launches, corporate celebrations, entertainment productions and institutional convenings.",
        "rest": "Kenya is the starting location, with additional destinations assessed for the commission. The proposal makes the planning responsibilities, production requirements and budget basis clear before delivery begins."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Corporate conferences and MICE",
        "paras": [
          "A conference or business meeting needs a clear objective, agenda and audience. Planning can include concept development, session structure, speaker coordination, venue assessment, registration, branding and a production work plan. Exhibition and sponsor components are included where specified, with responsibilities and approval stages agreed.",
          "For incentives and multi-day programs, the scope identifies the participant journey, activities, accommodation or travel coordination where included and provider dependencies. The buyer can assess the complete event plan rather than receive an unexplained collection of supplier quotations."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Product launches and brand events",
        "paras": [
          "A product launch should make the proposition understandable and create the appropriate setting for its audience. The brief can identify customers, partners, media or staff, then define the format, program and production requirements. The scope may include presentation planning, staging, guest management and agreed content capture.",
          "Corporate celebrations and entertainment productions need their own run of show, technical requirements and supplier coordination. Artists, presenters, licenses or other specialist inputs are included only as listed. The proposal identifies who approves the creative concept and how changes affect the budget or schedule."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Institutional and public convenings",
        "paras": [
          "NGOs, public institutions and associations can commission report launches, stakeholder dialogues, member events and program conferences. Planning connects the purpose with the agenda, invitations, access needs and reporting. The event can include hybrid participation and agreed recording or media outputs.",
          "Where a commission concerns a political or civic gathering, the event scope can address neutral production and logistics: venue, staging, registration, technical coordination and the participant journey. The brief and advertising review identify the applicable requirements. Event production is scoped separately from partisan messaging or persuasion activity."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "04",
        "h2": "One coordinated event production process",
        "paras": [
          "We begin with the objective, participants, dates, format and available budget. The event plan then sets milestones, supplier responsibilities, approvals and a run of show. Production can include venue coordination, audio and visual requirements, staging, registration, staffing, rehearsals and agreed on-site management.",
          "The budget distinguishes planning or management fees, supplier costs, contingency and items paid directly by the buyer. The scope identifies cancellation and change arrangements, permissions and information dependencies. A complete production lead coordinates the purchased output, while the client approves the agreed key decisions."
        ]
      },
      {
        "type": "split",
        "pad": "128px 0",
        "eb": "05",
        "h2": "Content, reporting and continued use",
        "paras": [
          "Event capture can provide photography, recordings, interviews or short media assets where expressly included. Credible Perspectives can produce a commissioned podcast or interview series under a defined media brief. Rights, guest permissions, editing and publication responsibilities are agreed before capture.",
          "Post-event outputs can include participation records, a delivery report, agreed feedback and sponsor or program reporting. Credence's own forums remain separately advertised products with confirmed dates and registration terms. A buyer hiring Engage to produce an event purchases a commissioned service, without being required to sponsor an owned forum."
        ],
        "chips": [
          {
            "label": "Credence Engage",
            "href": "/services/credence-engage"
          },
          {
            "label": "Credence Engage events",
            "href": "https://engage.credence.africa"
          },
          {
            "label": "Corporate Podcast Production",
            "href": "/services/research/corporate-podcasts"
          },
          {
            "label": "Corporations",
            "href": "/who-we-work-with/corporations"
          },
          {
            "label": "Governments and Public Institutions",
            "href": "/who-we-work-with/governments-and-public-institutions"
          },
          {
            "label": "Industry Associations and Ecosystem Actors",
            "href": "/who-we-work-with/industry-associations"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Event planning FAQs",
        "faqs": [
          {
            "q": "Which types of events can we commission",
            "a": "The service can be scoped for corporate conferences, MICE, product launches, exhibitions, institutional convenings, celebrations and entertainment productions. The brief should state objectives, participants, location and date. Delivery depends on the approved scope, suppliers and production resources required."
          },
          {
            "q": "Can you handle the event from concept to delivery",
            "a": "A complete scope can include concept, agenda, venue coordination, registration, suppliers, production and reporting. The proposal states the included responsibilities and client approvals. Additional creative, travel or media requirements are listed so the end-to-end purchase is clear."
          },
          {
            "q": "Can you organize a corporate product launch",
            "a": "Yes. The brief identifies the product, audience, message, format and desired outputs. The proposal can cover planning, staging, guest management and production. Content capture and distribution are included only where expressly agreed, with rights and review responsibilities stated."
          },
          {
            "q": "Can you produce hybrid or virtual events",
            "a": "The format can be assessed for the participant experience and technical requirements. The scope identifies platforms, production, speaker preparation, support and recording. The buyer receives an agreed run of show and tested participation route for the selected setup."
          },
          {
            "q": "Do you organize civic or political gatherings",
            "a": "Neutral event production and logistics can be considered as a defined commission. The scope and acceptance review identify venue, production, permissions and applicable requirements. Partisan messaging, political persuasion and political advertising are not assumed within an ordinary event-management purchase."
          },
          {
            "q": "How are management fees and supplier costs presented",
            "a": "The proposal should distinguish the planning or production fee, supplier costs, contingency, taxes and direct client payments where relevant. It identifies deposits and payment stages. Changes to participant numbers, format or supplier requirements are assessed against the agreed budget."
          },
          {
            "q": "Can you provide recordings and media assets",
            "a": "Photography, recording, interviews, editing and clips can be included with stated quantities and rights. The buyer confirms guest permissions and publication use. A separate podcast season or extensive media campaign is expressly scoped rather than implied by basic event capture."
          },
          {
            "q": "How early should we request an event proposal",
            "a": "Share the brief as soon as dates, objectives and an initial budget are available. Lead time depends on venue availability, speakers, production and procurement. The proposal identifies the preparation schedule and decisions the client must make to support delivery."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request an Event Planning and Production Proposal",
        "links": [
          {
            "label": "Request an Event Planning and Production Proposal",
            "href": "/consult?consult=engage"
          },
          {
            "label": "Email connect@credence.africa",
            "href": "mailto:connect@credence.africa"
          }
        ]
      }
    ]
  },
  "research/corporate-podcasts": {
    "name": "Corporate Podcast Production",
    "title": "Corporate Podcast Production Nairobi | Credence Africa",
    "description": "Produce corporate video podcasts and owned media in Nairobi with editorial planning, interviews, recording, editing, clips and agreed publication support.",
    "hero": {
      "title": "Corporate podcast and owned media production in Nairobi",
      "intro": "A useful corporate podcast gives an organization a considered way to explain its work, share expertise and sustain a relationship with its audience. Credible Perspectives offers commissioned podcast and owned media production for companies, institutions and development organizations. We connect editorial planning, interviews, recording, editing and agreed publication support in a complete production scope.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Research and Market Intelligence",
          "href": "/services/research"
        },
        {
          "label": "Corporate Podcast Production"
        }
      ],
      "btn1": {
        "label": "Request a Corporate Podcast Production Proposal",
        "href": "/consult?consult=research"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The buyer may be a communications team, chief executive, professional association or program manager.",
        "rest": "The work starts with the audience and the purpose of the series: leadership insight, customer education, institutional stories or evidence from a program. The proposal defines the episodes and assets the organization will receive."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Develop an editorial concept worth following",
        "paras": [
          "The concept identifies who the series is for, what the organization can usefully explain and how each episode serves that audience. Editorial planning can include a series structure, episode themes, guest profiles, interview briefs and a production schedule. The plan should reflect the organization's expertise and the evidence it can support.",
          "A chief executive interview, staff conversation or external guest episode needs more than a list of talking points. Preparation can clarify the subject, develop questions and brief speakers on the intended audience. The scope states whether Credence provides a host, interview preparation or guest coordination."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "02",
        "h2": "Produce a complete season",
        "paras": [
          "A ten-episode season is one possible package, with episode length, guest numbers and production requirements agreed in the proposal. Recording can use a suitable hired studio or an approved on-location setup. The production scope identifies equipment, crew, sound, lighting and the responsibilities for securing a location.",
          "Editing can include audio and video assembly, titles, captions, approved branding and agreed review rounds. The deliverables can include full episodes, short clips, thumbnails, show notes and transcript files. Asset quantities and formats are stated so the buyer can evaluate the complete package and avoid unclear expectations."
        ]
      },
      {
        "type": "split",
        "pad": "128px 0 0",
        "eb": "03",
        "h2": "Turn the recording into usable institutional media",
        "paras": [
          "A series can support the organization's website, newsletter and social channels where publication support is included. The plan can identify how full episodes and short extracts are scheduled for the intended audience. The buyer's own accounts and approvals govern publication access.",
          "Paid promotion, social account management and extensive campaign production are separate components unless listed in the scope. Distribution support should explain the tasks performed and the assets supplied. Audience reach and commercial results depend on the content, distribution and market response; they are not guaranteed by recording a season."
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "Research-led stories and public editorial work",
        "paras": [
          "Development organizations can commission a series explaining a program, documenting learning or presenting institutional evidence. The production brief addresses participant permissions, claims, attribution and review. Interviews should represent speakers accurately and distinguish supported findings from personal views.",
          "Credible Perspectives also develops its own editorial and research content. Commissioned corporate media is identified according to the agreed publication and disclosure terms. Client confidentiality and the rights to research, music, images and recorded contributions are considered before public release."
        ]
      },
      {
        "type": "split",
        "eb": "05",
        "h2": "Agree the production responsibilities",
        "paras": [
          "The proposal lists the season concept, episodes, recording sessions, locations, crew, editing, review rounds, assets and publication tasks. It identifies guest recruitment, speaker availability, buyer approvals and the fee basis. Rights to final files, source material and further reuse are stated in the contract.",
          "Start with an approved concept and a scoped pilot where useful. A recurring series can then reuse a reliable editorial and production process. The buyer receives a clear schedule and acceptance criteria for each output, with one accountable lead coordinating the complete production."
        ],
        "chips": [
          {
            "label": "Research and Market Intelligence",
            "href": "/services/research"
          },
          {
            "label": "Credible Perspectives",
            "href": "https://perspectives.credence.africa"
          },
          {
            "label": "Corporate Event Planning",
            "href": "/services/credence-engage/corporate-events"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Corporate podcast FAQs",
        "faqs": [
          {
            "q": "Can you produce a podcast for our company",
            "a": "Yes, subject to an agreed production scope and delivery capacity. The brief identifies your audience, objectives, speakers and preferred format. The proposal then defines editorial planning, recording, editing, review, asset quantities and publication support included."
          },
          {
            "q": "Can we commission a ten episode season",
            "a": "A season can be scoped with ten episodes or another agreed number. Specify episode length, guests, recording format and desired assets. The proposal states sessions, production schedule, review rounds and fees so the complete purchase is clear."
          },
          {
            "q": "Do you provide a host and interview questions",
            "a": "Hosting, interview preparation and guest briefing can be included. The scope identifies the host's role and the editorial approvals required. The buyer supplies accurate organizational context and helps confirm speakers so interviews can be prepared properly."
          },
          {
            "q": "Do you already have a recording studio",
            "a": "Recording arrangements are specified for the commission and can use a suitable hired studio or approved location. The proposal identifies the facility and production resources. Buyers should assess the actual setup offered rather than assume a permanent Credence studio is available."
          },
          {
            "q": "What files and clips will we receive",
            "a": "The proposal lists full episodes and any short clips, captions, thumbnails, show notes or transcripts. It states quantities, formats and review rounds. Additional versions and assets are agreed as scope changes where they exceed the package."
          },
          {
            "q": "Who owns the recordings and final assets",
            "a": "The contract specifies rights to final outputs, source files and reuse. Guest releases and licenses for music or other material may set conditions. Confirm your intended publication and editing use before production so the rights can support it."
          },
          {
            "q": "Can you publish the series on our channels",
            "a": "Agreed publication support can use the buyer's authorized accounts and approvals. The proposal identifies scheduling, uploads and formats. Ongoing social management or paid promotion is included only where expressly stated; account access should be assigned to approved roles."
          },
          {
            "q": "Can NGOs commission program stories or interviews",
            "a": "Yes. The scope can cover a research-led or program series with participant permissions, factual review and agreed attribution. The production plan identifies sensitive information and publication rights. The outputs should serve the program's audience and reporting purpose without overstating impact."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request a Corporate Podcast Production Proposal",
        "links": [
          {
            "label": "Request a Corporate Podcast Production Proposal",
            "href": "/consult?consult=research"
          },
          {
            "label": "Email connect@credence.africa",
            "href": "mailto:connect@credence.africa"
          }
        ]
      }
    ]
  },
  "research/market-intelligence": {
    "name": "Market Intelligence",
    "title": "Kenya Market Intelligence and Sector Reports | Credence",
    "description": "Buy or commission Kenya market intelligence, sector and funding reports, ecosystem maps and recurring briefings with clear sources and usage rights.",
    "hero": {
      "title": "Market intelligence and research reports for Kenya decisions",
      "intro": "Before entering a market, allocating resources or developing a program, an institution needs a clear view of the conditions that matter. Credence Africa offers market intelligence and defined research products for companies, investors and development organizations. The purchase is an evidence product with stated coverage, sources, issue date and usage rights.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Research and Market Intelligence",
          "href": "/services/research"
        },
        {
          "label": "Market Intelligence"
        }
      ],
      "btn1": {
        "label": "Request a Market Intelligence Scope",
        "href": "/consult?consult=research"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "Kenya is the starting market.",
        "rest": "Additional country or regional coverage is identified in the product or commission. The buyer can request a focused market scan, commission a deeper report or purchase an available licensed edition. A recurring briefing can be scoped where the decision requires continuing updates."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Choose the question the product must answer",
        "paras": [
          "A market entry report can examine customers, competition, channels and operating considerations. A sector report can assess value chains, participants, commercial drivers and constraints. A financing landscape can map funder categories, mandate criteria and documented conditions. The report's contents should match the decision its buyer is considering.",
          "A focused scan can be useful before a larger commission. It identifies what the available sources show and where deeper research is justified. The scope states its limits so a preliminary view is not mistaken for a comprehensive market study."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "02",
        "h2": "AFRICA INTEL product pathways",
        "paras": [
          "Intelligence Reports provide defined evidence on a sector, market or capital question. Ecosystem Access Engine can map relevant stakeholders and partner categories with an agreed depth of research. Capital Intelligence Framework examines documented funding conditions and institutions relevant to the buyer's criteria.",
          "Intelligence Subscription provides recurring briefs within a stated coverage and update cycle. The buyer should know the subjects monitored, issue frequency, access rights and briefing format. These products support market entry, sector assessment and funding decisions with evidence matched to the buyer's needs."
        ]
      },
      {
        "type": "split",
        "pad": "128px 0 0",
        "eb": "03",
        "h2": "Commission a report or buy an available edition",
        "paras": [
          "A commissioned report begins with the buyer's questions, geography, audience and timetable. The proposal sets methods, sources, interviews where included, review stages and deliverables. Exclusivity and publication rights are agreed before work starts. The final output explains findings, assumptions, confidence and limitations.",
          "A licensed edition is a different purchase. Its product record should show the contents, issue date, sample, covered markets, price or quote basis and terms for internal use or wider circulation. Buyers should be able to assess relevance before paying. A report that has not been produced should be offered as a commission rather than presented as available for download."
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "Evidence that remains useful after the first reading",
        "paras": [
          "An intelligence product should identify the sources behind material conclusions and distinguish observed facts from interpretation. It can include a source register, comparative tables, visual summaries and a management briefing where specified. Dates and definitions matter when comparing market or funding information.",
          "For investors, a sector report can inform the next research or screening step. For a foreign company, an entry report can help assess customers and operating options. For a development program, a landscape study can support intervention design and procurement. The product's value comes from answering that specific question clearly."
        ]
      },
      {
        "type": "split",
        "eb": "05",
        "h2": "Research, learning, events and media",
        "paras": [
          "Credence Institute can provide practical learning in using market and funding evidence. Credence Engage can produce a findings roundtable or commissioned report launch. Credible Perspectives publishes approved research and editorial material and can produce institutional media under a separate brief.",
          "The buyer can purchase the report independently. Additional learning, convening or media work is expressly scoped, with one accountable lead where the outputs form a complete commissioned program. Confidential evidence is not converted into public content without the required rights and approvals."
        ],
        "chips": [
          {
            "label": "Research and Market Intelligence",
            "href": "/services/research"
          },
          {
            "label": "Corporate Podcast Production",
            "href": "/services/research/corporate-podcasts"
          },
          {
            "label": "Trade and Growth Advisory",
            "href": "/services/trade-growth"
          },
          {
            "label": "Deal Origination and Pipeline Screening",
            "href": "/services/capital-raising/deal-origination"
          },
          {
            "label": "Credible Perspectives",
            "href": "https://perspectives.credence.africa"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Market intelligence FAQs",
        "faqs": [
          {
            "q": "How do we know whether a report is relevant",
            "a": "Review its contents, covered markets, issue date, methods and sample. The product record should identify the decisions it can support and its limitations. For a commission, state your questions so the proposed coverage can be assessed before purchase."
          },
          {
            "q": "Can a report be tailored to our institution",
            "a": "Yes. A commissioned scope can address your sector, geography, customer or funding question. The proposal sets depth, sources, interview work, review stages and deliverables. Tailoring should produce a defined evidence product rather than an open-ended promise of all market information."
          },
          {
            "q": "Can we buy an exclusive report",
            "a": "Exclusivity can be agreed in the commission, subject to source and participant rights. The contract identifies who can use or publish the output. A licensed shared edition has different rights and should not be represented as exclusive client research."
          },
          {
            "q": "What does a subscription include",
            "a": "It includes the subjects, markets, update frequency and formats stated in the subscription scope. It may include scheduled reports or briefings within agreed limits. The buyer should understand how updates are sourced and when a new question requires a separate commission."
          },
          {
            "q": "Can you map investors or funding opportunities",
            "a": "A funding landscape can research relevant institutions and published criteria against agreed requirements. It records sources and status. The output does not imply that a listed institution will fund the buyer or that every opportunity is open to every applicant."
          },
          {
            "q": "Can you cover markets outside Kenya",
            "a": "Yes, where coverage is expressly defined and delivery capability is available. The scope names countries and sources and states limitations. A regional report should contain substantive country evidence rather than repeat a generic Kenya assessment under different destination headings."
          },
          {
            "q": "Can we publish the findings",
            "a": "Publication depends on the agreed rights, source licenses, participant permissions and confidentiality obligations. Confirm intended use when commissioning. A public report may require additional editorial, design and permissions work beyond an internal decision brief."
          },
          {
            "q": "Can research be combined with an event or podcast",
            "a": "Yes, within an explicitly defined commission. The proposal separates the report, event or media outputs, review responsibilities and rights. One accountable lead manages the complete purchased scope, while each output remains clear enough for the buyer to accept."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request a Market Intelligence Scope",
        "links": [
          {
            "label": "Request a Market Intelligence Scope",
            "href": "/consult?consult=research"
          },
          {
            "label": "Email connect@credence.africa",
            "href": "mailto:connect@credence.africa"
          }
        ]
      }
    ]
  },
  "trade-growth/access-africa": {
    "name": "ACCESS AFRICA",
    "title": "Kenya Market Entry Services and Research | Credence Africa",
    "description": "Assess and enter Kenya with ACCESS AFRICA market research, entry strategy, setup coordination, partner screening and a defined launch plan.",
    "hero": {
      "title": "ACCESS AFRICA for Kenya market entry",
      "intro": "For a foreign company, Kenya is both a market to examine and a potential base for regional business. ACCESS AFRICA helps leadership evaluate customers, competition, operating requirements and the route to a commercial presence. Credence Africa connects the evidence needed for the entry decision with an agreed setup or launch scope.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Trade and Growth Advisory",
          "href": "/services/trade-growth"
        },
        {
          "label": "ACCESS AFRICA"
        }
      ],
      "btn1": {
        "label": "Request a Kenya Market Entry Brief",
        "href": "/consult?consult=trade"
      },
      "btn2": {
        "label": "Request Market Entry Training",
        "href": "/consult?consult=trade"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The work is intended for international companies, investors and institutions entering African markets.",
        "rest": "Kenya is the initial context, with regional work defined where required. The buyer can commission a market assessment, specified setup coordination or an implementation package that matches its stage."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Market Entry Blueprint",
        "paras": [
          "The Blueprint answers the questions that should precede establishment. Who is the customer? What demand is evidenced? Which competitors and channels matter? What would an entry require? A commissioned scope can include market sizing, customer interviews, competitor mapping, pricing analysis, channel assessment and entry-option comparison.",
          "The output connects findings with the management decision. It records sources, assumptions and limitations, then identifies options and next actions. The research proposal states geography, sector, interview numbers, source access, report format and usage rights so the buyer knows the depth of work being purchased."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Market Setup System",
        "paras": [
          "Once the institution chooses to proceed, the Setup System coordinates the specified tasks needed for its proposed presence. These can include administrative registration coordination, provider selection, location search, recruitment support and an operating setup schedule where agreed. The proposal lists each task, responsibility and third-party dependency.",
          "The setup plan distinguishes work Credence completes from applications decided by authorities and services delivered by specialists. Third-party fees, buyer approvals and required documents are stated. One accountable lead coordinates the complete purchased scope so the buyer can track progress and unresolved issues."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Market Launch Engine and Market Command",
        "paras": [
          "The Launch Engine organizes agreed commercial activation. It can cover partner research, candidate screening, customer testing, launch planning and coordination of specific meetings or activities. Product launches and commissioned business events can be produced by Credence Engage within an expressly defined scope.",
          "Market Command provides continuing coordination or commercial intelligence around agreed priorities. A recurring scope states the workload, reporting cycle, covered activities and response responsibilities. It helps management keep the entry work connected to the commercial plan without implying unlimited operational services."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "04",
        "h2": "Africa Market Entry Program",
        "paras": [
          "Credence Institute can train leadership, business-development and operating teams on market selection, customer research, entry models, channels and implementation sequencing. An institutional cohort uses practical exercises relevant to the buyer's sector and role. The proposal identifies modules, format, assessment and management reporting.",
          "Foreign companies can purchase a team program before making an entry decision. Development and trade-support institutions can commission learning for participating enterprises. Training is a complete capability product; a market report or setup engagement is separately scoped where the buyer needs work completed."
        ],
        "links": [
          {
            "label": "Request Market Entry Training",
            "href": "/consult?consult=trade"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "split",
        "pad": "128px 0",
        "eb": "05",
        "h2": "Research and market access convening",
        "paras": [
          "A Country and Sector Market Entry Report provides defined evidence for a purchasing institution. A licensed report edition can serve several purchasers where its sources and usage rights allow. Confidential commissioned research remains subject to the buyer's agreement and publication permissions.",
          "Credence Engage can organize a Kenya market-access forum, trade mission or private business convening. The buyer specifies its audience and commercial objective. The event scope states participant approach, agenda, production, meeting coordination where included and reporting. Access to a forum does not imply a concluded commercial partnership."
        ],
        "chips": [
          {
            "label": "Trade and Growth Advisory",
            "href": "/services/trade-growth"
          },
          {
            "label": "SCALE AFRICA",
            "href": "/services/trade-growth/scale-africa"
          },
          {
            "label": "Market Intelligence",
            "href": "/services/research/market-intelligence"
          },
          {
            "label": "Corporate Event Planning",
            "href": "/services/credence-engage/corporate-events"
          },
          {
            "label": "Foreign Investors",
            "href": "/who-we-work-with/foreign-investors"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Kenya market entry FAQs",
        "faqs": [
          {
            "q": "What does ACCESS AFRICA cover",
            "a": "ACCESS AFRICA covers market research, entry strategy, setup coordination, launch support and continuing oversight for foreign companies and investors. The proposal specifies the track, deliverables and provider responsibilities for your stage. Regional expansion, trade and global market access are available through separate product scopes."
          },
          {
            "q": "Must every organization begin in Kenya",
            "a": "No. Kenya is the starting market for this offer and can suit relevant regional models. The assessment tests customer demand, operating requirements and strategic fit. Where another market better fits the institution's objective, the analysis should make that clear."
          },
          {
            "q": "Can we purchase research without implementation",
            "a": "Yes. A market assessment or report can be a complete commission with agreed coverage, methods and usage rights. The buyer can decide its next step after reviewing the findings. Purchasing the report does not oblige it to buy setup or launch support."
          },
          {
            "q": "What registrations can the setup scope include",
            "a": "The proposal lists the administrative registrations or coordination tasks appropriate to the chosen presence. It also identifies responsible providers, required documents, fees and authority decisions. The initial brief should describe the sector and operating model so those requirements can be assessed."
          },
          {
            "q": "Can you help find a location and recruit staff",
            "a": "Location research or recruitment coordination can be included with specific requirements and responsibilities. The scope should identify property criteria, roles, candidate process and buyer approvals. Specialized provider work and final selection responsibilities are stated rather than assumed."
          },
          {
            "q": "Can you research potential distributors or partners",
            "a": "Yes. The assignment can map candidates, screen agreed information and coordinate specified discussions. The buyer sets the selection criteria. The report distinguishes a potential partner from a verified commercial fit or an executed distribution arrangement."
          },
          {
            "q": "Can you organize a launch or market access event",
            "a": "Credence Engage can produce an agreed corporate launch or convening. The brief sets the objective, audience, production needs and budget. Speaker, invitation, media and meeting components are included only as stated in the complete event scope."
          },
          {
            "q": "How do we request a proposal",
            "a": "Share the company profile, origin country, sector, Kenya objective, stage and timetable. Identify whether you need research, setup, launch or training. Credence can then clarify the information required and propose deliverables, responsibilities, fee basis and review stages."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request a Kenya Market Entry Brief",
        "links": [
          {
            "label": "Request a Kenya Market Entry Brief",
            "href": "/consult?consult=trade"
          },
          {
            "label": "Request Market Entry Training",
            "href": "/consult?consult=trade"
          }
        ]
      }
    ]
  },
  "trade-growth/go-global": {
    "name": "GO GLOBAL",
    "title": "Global Market Access for African Businesses | Credence",
    "description": "Prepare international expansion with market research, export readiness, buyer and channel strategy, operating coordination and team training from Kenya.",
    "hero": {
      "title": "GO GLOBAL for African businesses entering international markets",
      "intro": "An overseas opportunity becomes more useful when a business can identify its customer, explain its commercial advantage and organize the route to market. GO GLOBAL helps African enterprises assess international markets and prepare a defined expansion plan. Credence Africa starts from the business's Kenyan or regional operating context and scopes the destination work required for the selected market.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Trade and Growth Advisory",
          "href": "/services/trade-growth"
        },
        {
          "label": "GO GLOBAL"
        }
      ],
      "btn1": {
        "label": "Discuss Your Global Market Access Plan",
        "href": "/consult?consult=trade"
      },
      "btn2": {
        "label": "Request Global Market Access Training",
        "href": "/consult?consult=trade"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The service is intended for enterprises pursuing export growth, international customers or an operating presence outside Africa.",
        "rest": "The engagement begins with the product or service, commercial evidence and expansion objective. The proposal identifies the research, readiness and coordination outputs needed for the next decision."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Global Markets Blueprint",
        "paras": [
          "The Blueprint examines potential destinations against demand, competition, customer requirements, channels and the enterprise's capacity to serve them. A scope can include market comparison, buyer categories, pricing considerations, competitor analysis and entry options. The report explains the evidence behind the proposed priorities.",
          "The business should understand what must change for the destination. Product positioning, service delivery, documentation or distribution may require adaptation. The assessment identifies those questions and the information needed before treating an overseas market as a viable expansion route."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Global Structuring Framework",
        "paras": [
          "The Framework organizes the operating and commercial questions around the proposed route. Work can compare an export model, distribution arrangement, partnership or specified establishment approach. The scope identifies responsibilities, professional inputs and the tasks needed to implement the chosen model.",
          "Registration or setup coordination is included only where expressly listed. The proposal identifies the destination, appointed providers, required documents, third-party decisions and fees. One accountable lead coordinates the complete purchased scope, with client approvals recorded at the agreed stages."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Global Access Engine",
        "paras": [
          "Access work can research buyer categories, map candidates, prepare selection criteria and coordinate specified commercial discussions. It can support management's presentation of the product, service or partnership proposition. The output is matched to the buyer's sector, stage and intended route to market.",
          "Commercial candidates require further assessment. The scope states screening depth and meeting activity and distinguishes potential customers from confirmed orders. Credence Engage can produce a defined showcase, trade mission or launch where an event is the appropriate part of the market-access plan."
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "Global Command",
        "paras": [
          "Continuing support can provide a scheduled view of market developments, expansion tasks and agreed commercial priorities. It identifies the destination coverage, reporting cycle, workload and information responsibilities. The institution retains control of its operating and commercial decisions.",
          "The purpose is disciplined coordination of a specified plan. Additional countries, provider services and major implementation tasks require their own assessment and agreed scope. This keeps the recurring service connected to resources the business and delivery team can actually support."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "05",
        "h2": "Global Market Access Program",
        "paras": [
          "Credence Institute offers practical training for enterprise leaders, business-development teams and export-support programs. Modules can address market selection, readiness, customer and channel research, operating options and implementation sequencing. Exercises help participants connect an international opportunity with their own business evidence.",
          "A donor, association or entrepreneur support organization can commission a cohort with defined participants, coaching, assessment and management reporting. Research can provide a Global Market Opportunities Report, while Engage can organize an appropriate convening. Each product is a complete purchase rather than a compulsory step in an advisory sales sequence."
        ],
        "links": [
          {
            "label": "Request Global Market Access Training",
            "href": "/consult?consult=trade"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ],
        "chips": [
          {
            "label": "Trade and Growth Advisory",
            "href": "/services/trade-growth"
          },
          {
            "label": "TRADE AFRICA",
            "href": "/services/trade-growth/trade-africa"
          },
          {
            "label": "SCALE AFRICA",
            "href": "/services/trade-growth/scale-africa"
          },
          {
            "label": "Market Intelligence",
            "href": "/services/research/market-intelligence"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          },
          {
            "label": "Growth-Stage SMEs and Enterprises",
            "href": "/who-we-work-with/growth-stage-smes"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Global market access FAQs",
        "faqs": [
          {
            "q": "Who is GO GLOBAL intended for",
            "a": "It is intended for African businesses pursuing markets outside Africa, including exporters, service firms and enterprises assessing an overseas presence. The brief identifies the sector, product or service, current commercial evidence and intended destination so the work can be scoped appropriately."
          },
          {
            "q": "Can we compare several overseas markets",
            "a": "Yes. A research scope can compare selected destinations against agreed criteria. The proposal states the markets, source depth and questions to be answered. The output records evidence limitations and identifies which destinations merit more detailed assessment."
          },
          {
            "q": "Does international expansion require an overseas company",
            "a": "The appropriate route depends on the product, customer, distribution model and operating requirements. The assessment can compare relevant options. Any establishment coordination is separately specified, with destination professional inputs and third-party requirements identified in the proposal."
          },
          {
            "q": "Can you help research overseas distributors or buyers",
            "a": "A scope can map buyer categories, research candidates and coordinate agreed screening or discussions. The buyer sets the criteria. The output distinguishes candidate information from a concluded relationship and the proposal states the numbers and depth of activities included."
          },
          {
            "q": "Can you coordinate registrations and setup tasks",
            "a": "Specified tasks can be coordinated where the delivery capability and appropriate providers are available. The proposal names the tasks, fees, client documents and external decisions. It does not imply that a general expansion package includes every registration or approval in a destination."
          },
          {
            "q": "Can our team buy training instead of implementation",
            "a": "Yes. Credence Institute can deliver a Global Market Access Program with practical exercises and stated learning outcomes. A cohort develops capability; a commissioned assessment or setup scope completes agreed work. The buyer can choose the product that fits the immediate need."
          },
          {
            "q": "Can a development organization support participating enterprises",
            "a": "Yes. A commissioned program can include defined readiness assessment, learning, coaching, research or convening with one accountable lead. The scope identifies beneficiaries, outputs, reporting and payment arrangements. The organization's funding and procurement requirements govern the commission."
          },
          {
            "q": "How are destination-specific limitations addressed",
            "a": "The proposal identifies covered markets, information access, professional dependencies and responsibilities. The report distinguishes supported findings from questions needing further work. Regional or global branding does not substitute for checking the conditions that apply to the selected destination."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Discuss Your Global Market Access Plan",
        "links": [
          {
            "label": "Discuss Your Global Market Access Plan",
            "href": "/consult?consult=trade"
          },
          {
            "label": "Request Global Market Access Training",
            "href": "/consult?consult=trade"
          }
        ]
      }
    ]
  },
  "trade-growth/scale-africa": {
    "name": "SCALE AFRICA",
    "title": "Africa Regional Expansion Strategy | Credence Africa",
    "description": "Plan African regional expansion from Kenya with market selection, country research, distribution strategy, partner assessment and implementation coordination.",
    "hero": {
      "title": "SCALE AFRICA for regional market expansion",
      "intro": "Regional growth requires decisions about where to expand, how to serve customers and what the organization can manage across borders. SCALE AFRICA helps institutions connect those decisions with country-level evidence and an implementation sequence. Credence Africa supports businesses growing from Kenya and international organizations using Kenya as a potential regional base.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Trade and Growth Advisory",
          "href": "/services/trade-growth"
        },
        {
          "label": "SCALE AFRICA"
        }
      ],
      "btn1": {
        "label": "Discuss Your Regional Expansion Plan",
        "href": "/consult?consult=trade"
      },
      "btn2": {
        "label": "Request a Regional Expansion Cohort",
        "href": "/consult?consult=trade"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The engagement starts with the existing business model and the purpose of expansion.",
        "rest": "The proposal identifies the target countries, research depth, operating questions and agreed coordination work. Regional ambition is translated into a plan that management can assess and resource."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Regional Scaling Blueprint",
        "paras": [
          "The Blueprint compares selected markets against customer opportunity, competition, channels, operating conditions and strategic fit. It can examine where the organization has an advantage, what adaptation is required and how entry timing affects the plan. The output records the evidence and assumptions behind the recommended sequence.",
          "Country research is essential. A regional market label does not establish that demand, pricing, operating requirements or partner quality are the same across jurisdictions. The scope names each covered market and the questions to be answered there, with limitations and information gaps stated clearly."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Multi-Market Expansion System",
        "paras": [
          "The System organizes the operating model for the chosen sequence. Work can address local presence options, management responsibilities, distribution, provider categories and a country-by-country task register. The proposal distinguishes common regional elements from tasks that require local professional or administrative input.",
          "Implementation coordination can track documents, approvals, partners and milestones where expressly agreed. The buyer receives a work plan with owners and dependencies. Third-party decisions and costs are identified so the complete scope can be evaluated before commitment."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Market Development Engine",
        "paras": [
          "Market development focuses on customers and commercial channels in the selected destinations. A defined assignment can research distributor candidates, assess route-to-market options, prepare partner criteria and coordinate agreed discussions or testing. It connects the expansion plan with evidence from the intended commercial pathway.",
          "The scope states candidate numbers, screening depth and the activities to be completed. Partner research is distinguished from a concluded agreement or proven sales performance. Management retains responsibility for choosing counterparties and approving commercial commitments with the required professional support."
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "Growth Command",
        "paras": [
          "Continuing support can provide an agreed management view of expansion milestones, market developments and performance questions. A recurring scope identifies reporting frequency, countries covered, available information and the coordination workload. It can help leadership notice gaps and adjust sequencing before those gaps grow into larger operating problems.",
          "The purpose is to keep regional management connected to local evidence. The agreement should state what Credence monitors and what the operating teams supply, rather than imply that one reporting service performs every country function."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "05",
        "h2": "Regional Expansion Program and intelligence",
        "paras": [
          "Credence Institute can deliver training on market selection, expansion sequencing, partner assessment and cross-border operating design. Institutional cohorts can serve leadership, business-development and program teams. Exercises use relevant market-entry cases and agreed participant objectives, with assessment and management reporting.",
          "Research can supply a Regional Market Opportunities Report or a commissioned country comparison. Credence Engage can organize a regional growth forum, trade mission or business convening. These are separately scoped products. The buyer can purchase the evidence, capability, event or institution-specific advisory work that answers its immediate decision."
        ],
        "links": [
          {
            "label": "Request a Regional Expansion Cohort",
            "href": "/consult?consult=trade"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ],
        "chips": [
          {
            "label": "Trade and Growth Advisory",
            "href": "/services/trade-growth"
          },
          {
            "label": "ACCESS AFRICA",
            "href": "/services/trade-growth/access-africa"
          },
          {
            "label": "TRADE AFRICA",
            "href": "/services/trade-growth/trade-africa"
          },
          {
            "label": "GO GLOBAL",
            "href": "/services/trade-growth/go-global"
          },
          {
            "label": "Market Intelligence",
            "href": "/services/research/market-intelligence"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Regional expansion FAQs",
        "faqs": [
          {
            "q": "Can this support a foreign company expanding from Kenya",
            "a": "Yes. The brief can examine Kenya as a regional base and selected destination markets. The analysis tests the business model, customers and operating requirements. The proposal identifies the countries and evidence required rather than treating Kenya establishment as proof of regional readiness."
          },
          {
            "q": "Do you cover every African country",
            "a": "Coverage is agreed for the mandate and depends on the required capability and information access. The proposal names covered countries, methods and limitations. A staged assignment may examine a shortlist before committing to detailed work in each selected destination."
          },
          {
            "q": "How are priority markets selected",
            "a": "The criteria can include demand, competition, channels, operating conditions, management capacity and strategic fit. The buyer agrees the comparison framework. The output explains the evidence supporting the sequence and identifies assumptions that still require testing."
          },
          {
            "q": "Can you help develop a distribution network",
            "a": "A scope can map distributor categories and candidates, establish selection criteria and coordinate agreed screening or meetings. It specifies the depth and numbers. The work provides a basis for further commercial assessment without guaranteeing partner performance or sales."
          },
          {
            "q": "Can the work include setup coordination",
            "a": "Specified setup tasks can be coordinated within the agreed country work plan. The proposal identifies local provider responsibilities, required documents, fees and external decisions. Country-specific professional requirements are assigned explicitly rather than assumed within a generic regional package."
          },
          {
            "q": "Can our leadership team buy expansion training",
            "a": "Credence Institute can scope a Regional Expansion Program for the team's responsibilities and experience. It can cover evidence assessment, sequencing, channels, management design and cases. The proposal states learning outcomes and separates training from completed implementation work."
          },
          {
            "q": "Can we buy a report before an advisory engagement",
            "a": "Yes. A market comparison or regional opportunities report can be a complete purchase. Agree the question, coverage, source depth and usage rights. The buyer can use the findings to decide whether further research or an implementation mandate is worthwhile."
          },
          {
            "q": "How does continuing regional support work",
            "a": "A recurring scope states countries, monitoring questions, reporting cycle and coordination limits. The institution supplies the agreed operating information. Any additional country or major implementation activity is assessed as a scope change with its own resources and fee basis."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Discuss Your Regional Expansion Plan",
        "links": [
          {
            "label": "Discuss Your Regional Expansion Plan",
            "href": "/consult?consult=trade"
          },
          {
            "label": "Request a Regional Expansion Cohort",
            "href": "/consult?consult=trade"
          }
        ]
      }
    ]
  },
  "trade-growth/trade-africa": {
    "name": "TRADE AFRICA",
    "title": "Export Readiness and Trade Advisory Kenya | Credence Africa",
    "description": "Prepare cross-border trade from Kenya with export readiness, market and buyer research, supply-chain planning, trade coordination and practical training.",
    "hero": {
      "title": "TRADE AFRICA for export and cross-border trade readiness",
      "intro": "Successful trade depends on more than finding a market. An enterprise must understand the buyer, product requirements, route to market, commercial terms and delivery responsibilities. TRADE AFRICA helps importers, exporters, distributors and trade-support institutions organize those questions into a defined plan. Credence Africa starts from Kenya, with destination-market work scoped to the proposed trade activity.",
      "crumbs": [
        {
          "label": "Services",
          "href": "/services"
        },
        {
          "label": "Trade and Growth Advisory",
          "href": "/services/trade-growth"
        },
        {
          "label": "TRADE AFRICA"
        }
      ],
      "btn1": {
        "label": "Request a Trade or Export Readiness Brief",
        "href": "/consult?consult=trade"
      },
      "btn2": {
        "label": "Request Export Readiness Training",
        "href": "/consult?consult=trade"
      }
    },
    "sections": [
      {
        "type": "statement",
        "lead": "The service can address a first export, a new regional customer base, a distribution model or a supply-chain decision.",
        "rest": "The engagement identifies the goods or services, target markets, current stage and commercial objective. The proposal then states the research, preparation and coordination outputs the buyer is purchasing."
      },
      {
        "type": "split",
        "eb": "01",
        "h2": "Trade Structuring Framework",
        "paras": [
          "The Framework examines the proposed trade pathway: product, customer, market, channel, pricing and transaction requirements. A defined scope can review export readiness, identify information gaps and prepare a commercial work plan. It helps management understand what must be confirmed before committing to a buyer or delivery arrangement.",
          "The work can organize questions about product standards, documentation, payment, distribution and provider responsibilities. Actual destination requirements and professional inputs are identified for the relevant market. The preparation plan does not imply that a generic checklist settles every product or country requirement."
        ]
      },
      {
        "type": "split",
        "eb": "02",
        "h2": "Supply Chain System",
        "paras": [
          "Supply-chain planning examines the proposed movement of goods, provider categories, lead times, information needs and commercial dependencies. Research can map logistics options, distributor structures and the factors affecting service reliability. The buyer receives a documented basis for further provider selection and planning.",
          "The scope distinguishes analysis and coordination from freight carriage, customs representation or other provider services. If those inputs are needed, the proposal identifies the responsible provider and the buyer's approvals. This makes the complete purchased output and third-party costs clearer."
        ]
      },
      {
        "type": "split",
        "eb": "03",
        "h2": "Trade Activation Engine",
        "paras": [
          "Activation can include buyer research, candidate screening, commercial preparation and agreed meeting coordination. The brief sets the intended customer profile, products, geography and evidence standard. It also specifies the number and type of activities included, rather than promising unrestricted buyer access.",
          "Credence Engage can organize a trade mission, buyer forum, product showcase or commissioned launch. The event proposal defines participant approach, agenda, production, meeting arrangements where included and reporting. The event creates an agreed commercial setting; sales and partner commitments remain subject to the parties' decisions."
        ]
      },
      {
        "type": "split",
        "eb": "04",
        "h2": "Trade Command",
        "paras": [
          "Continuing coordination can provide a scheduled view of agreed trade priorities, outstanding tasks and market developments. The scope states the workload, markets, reporting cycle and information supplied by the business or its providers. Additional transactions and destinations are assessed as scope changes.",
          "A clear commercial record supports that work. The institution should be able to track buyer discussions, readiness actions, provider responsibilities and decisions. Credence's deliverables are tied to that record rather than an open-ended promise to manage all trade activity."
        ]
      },
      {
        "type": "split",
        "dark": true,
        "pad": "128px 0",
        "eb": "05",
        "h2": "Export Readiness and Trade Program",
        "paras": [
          "Credence Institute can train enterprise teams and trade-support beneficiaries on market assessment, export readiness, buyer preparation, distribution and supply-chain questions. Exercises help participants examine a product-market case and identify the evidence needed for their next step. The proposal specifies outcomes, format, assessment, coaching and management reporting.",
          "Research products can examine trade flows, buyer categories and supply-chain conditions for an agreed market. Development organizations and associations can commission a complete capability or research program. Advisory, training, events and reports each remain independently purchasable, with one accountable lead for the chosen scope."
        ],
        "links": [
          {
            "label": "Request Export Readiness Training",
            "href": "/consult?consult=trade"
          },
          {
            "label": "Explore Credence Institute",
            "href": "https://institute.credence.africa"
          }
        ],
        "chips": [
          {
            "label": "Trade and Growth Advisory",
            "href": "/services/trade-growth"
          },
          {
            "label": "GO GLOBAL",
            "href": "/services/trade-growth/go-global"
          },
          {
            "label": "ACCESS AFRICA",
            "href": "/services/trade-growth/access-africa"
          },
          {
            "label": "Credence Engage",
            "href": "/services/credence-engage"
          },
          {
            "label": "Credence Institute",
            "href": "https://institute.credence.africa"
          },
          {
            "label": "Research and Market Intelligence",
            "href": "/services/research"
          }
        ]
      },
      {
        "type": "faq",
        "h2": "Export and trade FAQs",
        "faqs": [
          {
            "q": "Can you help a business preparing its first export",
            "a": "Yes. A readiness scope can examine the product, target customer, channel and information required for the proposed market. It identifies preparation gaps and provider dependencies. The proposal states the work to be completed and the buyer's responsibilities before any trade commitment."
          },
          {
            "q": "Do you find overseas buyers",
            "a": "Buyer research and agreed screening can be included. The buyer specifies the customer criteria and products. The output distinguishes researched candidates and coordinated discussions from confirmed orders or completed sales. Any meeting activity is stated expressly in the scope."
          },
          {
            "q": "Can you support imports as well as exports",
            "a": "The service can be scoped for importers, exporters and distributors where the required capability is available. The brief identifies the commercial pathway and market. Analysis and coordination responsibilities are separated from the services of carriers, clearing agents and other appointed providers."
          },
          {
            "q": "Can you advise on supply chain options",
            "a": "A research or planning scope can examine provider categories, routes, lead times and commercial dependencies. The proposal identifies sources and the depth of assessment. It does not substitute for obtaining current quotations and confirming the provider's actual service obligations."
          },
          {
            "q": "Can an NGO commission export training for enterprises",
            "a": "Yes. A program can combine baseline assessment, practical workshops, coaching and reporting within a defined scope. The buyer states sectors, participant numbers and objectives. The learning material is matched to the beneficiaries and the intended trade-readiness outcome."
          },
          {
            "q": "Can you organize a trade mission or buyer forum",
            "a": "Credence Engage can produce the agreed event and participant journey. The brief specifies target audiences, locations, agenda, meetings where included, production and reporting. Travel and supplier costs are identified so the buyer can assess the complete budget."
          },
          {
            "q": "Can we purchase a trade intelligence report alone",
            "a": "Yes. A commissioned or licensed report is a complete evidence product with stated coverage, sources, date and usage rights. The buyer can use it to assess its next action without committing to an advisory or event purchase."
          },
          {
            "q": "How do we request a trade proposal",
            "a": "Share the product or service, origin and destination, intended buyer, current stage and timetable. Identify the output needed: assessment, research, training, event or coordination. Credence can then define the required information, deliverables, fee basis and responsibilities."
          }
        ]
      },
      {
        "type": "cta",
        "h2": "Request a Trade or Export Readiness Brief",
        "links": [
          {
            "label": "Request a Trade or Export Readiness Brief",
            "href": "/consult?consult=trade"
          },
          {
            "label": "Request Export Readiness Training",
            "href": "/consult?consult=trade"
          }
        ]
      }
    ]
  }
};
