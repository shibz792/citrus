export type ContentBlock =
  | { type: 'heading'; text: string; level?: 'sub' }
  | { type: 'paragraph'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'stats'; items: { value: string; label: string }[]; title?: string };

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  client: string;
  summary: string;
  heroStats: { value: string; label: string }[];
  blocks: ContentBlock[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'global-automotive-logistics',
    title: '487 Data Entry Hours Saved for Global Automotive Logistics Company',
    industry: 'Automotive & Logistics',
    client: 'Global Automotive Logistics Provider',
    summary: 'Five manual, high-volume data entry processes were automated directly into CargoWise One, saving 487 hours and $3,433 a month — the equivalent of 12 extra resources, without hiring.',
    heroStats: [
      { value: '487 hrs', label: 'saved per month' },
      { value: '$3,433', label: 'saved per month' },
      { value: '12', label: 'extra resources, no hiring' },
    ],
    blocks: [
      { type: 'heading', text: 'Company Overview' },
      { type: 'paragraph', text: 'This group offers fully integrated services and serves a broad range of industries such as automotive, consumer goods and electronics, healthcare and pharmaceutical and aeronautics. Operating in three locations: Sydney, Brisbane, and Melbourne.' },

      { type: 'heading', text: 'The Problem' },
      { type: 'paragraph', text: 'This Global Supplier operating in three locations — Sydney, Brisbane, and Melbourne — found time wasted on manual processes as one of the biggest challenges faced by the organisation, and there was an immediate need to automate five processes that took the most amount of time to capture data.' },
      { type: 'paragraph', text: 'Too many manual data entry processes and not enough resources to increase productivity and service levels.' },
      { type: 'bullets', items: [
        '5 processes with an overflow of manual data entry required.',
        'CargoWise One is an integrated system which can be used to automate many of the company’s processes, but was limited when it came to automating manual data entry.',
      ] },
      { type: 'paragraph', text: 'It is in these situations, when you realise that technology can simplify processes but human intervention is still required to maintain the automation.' },

      { type: 'heading', text: 'The Solution' },
      { type: 'paragraph', text: 'The client was not in a position to hire more staff and add more operating expenses to the business, which can also lead to higher staff turnover if mundane tasks are kept within the company with the Great Resignation looming.' },
      { type: 'paragraph', text: 'The client started using CargoDoc and RPA through our Business Process Offshoring office with Citrus Global to automate their data entry into their CargoWise One system from January 2022.' },
      { type: 'paragraph', text: 'Their main goals in doing this were to save time, reduce costs, increase efficiency, and reallocate resources towards growth.' },

      { type: 'heading', text: 'Client Benefits' },
      { type: 'paragraph', text: 'The following is a monthly average of data entry lines automated, and we did a quick calculation to see how much the client has saved in terms of time and costs. Why invest when there is no return?' },

      { type: 'heading', text: 'The Monthly Results Speak for Itself' },
      { type: 'paragraph', text: 'Compiling — taking an average of 1 minute per line to be captured.' },
      { type: 'stats', items: [
        { value: '149 hrs', label: 'time saved' },
        { value: '8,923', label: 'lines / 60 seconds' },
        { value: '$1,490', label: 'cost saved (Data Entry Operator @ $10/hr)' },
      ] },
      { type: 'paragraph', text: 'Costing — RPA costing, taking an average of 2 minutes per line to be captured due to its complexity in nature. This is the costing that is captured into the CargoWise system using Robotic Process Automation.' },
      { type: 'stats', items: [
        { value: '286 hrs', label: 'time saved' },
        { value: '17,206 min', label: '(2,589 + 6,014 lines) × 2 minutes' },
        { value: '$1,433', label: 'cost saved (Data Entry Operator @ $5/hr)' },
      ] },

      { type: 'heading', text: 'PO Management' },
      { type: 'paragraph', text: 'With a purchase order system, the purchase orders are automatically created and synced with your accounting system. So there is no need to have a dedicated resource for data entry into your accounting system. As your company grows, you need better access controls — this allows you to control individual users or user group access.' },
      { type: 'bullets', items: [
        'Improves efficiency and reduces error rates',
        'Document management',
        'Improves delivery times',
        'Streamlines inventory management',
        'Enhances decision-making capabilities',
      ] },
      { type: 'stats', items: [
        { value: '52 hrs', label: 'time saved' },
        { value: '3,140 min', label: '314 jobs × 10 minutes' },
        { value: '$520', label: 'cost saved per month (Data Entry Operator @ $10/hr)' },
      ] },

      { type: 'heading', text: 'What Are the Advantages of Automated Purchase Orders?' },
      { type: 'paragraph', text: 'Humans are quite error-prone when it comes to entering purchase orders containing identical or near-identical information. An automated system can generate error-free purchase orders in a fraction of the time, freeing the humans up to do what they do best.' },

      { type: 'heading', text: 'Statistics of Savings' },
      { type: 'stats', items: [
        { value: '487 hrs', label: 'time saved per month' },
        { value: '12', label: 'additional resources, equivalent' },
        { value: '$3,433', label: 'cost saved per month' },
      ] },
    ],
  },
  {
    slug: 'bpo-robotic-process-automation',
    title: 'Robotic Process Automation Increasing Efficiency of BPO',
    industry: 'Business Process Outsourcing',
    client: 'Vehicle Logistics & Multimodal Supply Chain Group',
    summary: 'A hybrid Business Process Offshoring and RPA model cut customs and rate-and-tariff processing time, saving 432 hours a month and turning a 6-day cycle into 2 days.',
    heroStats: [
      { value: '266 hrs', label: 'saved / month, customs' },
      { value: '166 hrs', label: 'saved / month, rates' },
      { value: '6 → 2 days', label: 'rate & tariff turnaround' },
    ],
    blocks: [
      { type: 'heading', text: 'The Client' },
      { type: 'paragraph', text: 'A multinational company leading in European finished vehicle logistics and a top 10 global partner in multimodal supply chain solutions, the customer has 300 destinations across five continents.' },

      { type: 'heading', text: 'The Problem' },
      { type: 'paragraph', text: 'At their Australian office, the company sought to gain throughput from their staff. It was observed that staff were spending a large proportion of their time on clerical data entry and low value items. This was primarily around customs compilations that was running into hundreds of lines an invoice, and the company required a more efficient method of data entry without an increase in staff overheads.' },
      { type: 'paragraph', text: 'The company also had trouble auto-rating and auto-costing, as maintaining rate contracts of carriers — truckers, airlines and shipping lines — was not done on the system due to the manual entry and time taken to do so.' },

      { type: 'heading', text: 'The Solution' },
      { type: 'paragraph', text: 'With Citrus Global’s Business Process Offshoring service, Citrus Global was able to provide a back office process to maintain and update monthly tariffs, enabling the sales and operations teams the visibility to quote and auto rate.' },
      { type: 'paragraph', text: 'Citrus Global also took over the compilation of customs declaration forms and updated line items for the customs teams in the company. As the staff no longer needed to enter data, they were able to focus on more business critical tasks such as checking and submitting the forms, which also provided more accuracy to the process. Due to the time criticality of customs compilation required, Citrus Global provides 24/7, 365-day offshoring support including Sundays so that customs documents could be processed with speed.' },
      { type: 'paragraph', text: 'The next stage was to transition the rates and tariffs data entry from a manual back office processing facility to an automated solution, further increasing the speed and efficiency of the service. To accomplish this, Citrus Global introduced Robotic Process Automation on key carrier contracts, reducing the time taken to update the contracts and providing further accuracy on rates and tariffs.' },
      { type: 'paragraph', text: 'By fusing Robotic Process Automation with a traditional Business Process Offshoring service, Citrus Global was able to provide the customer with a significantly more efficient solution than their in-house capabilities while reducing cost, enabling the Australian office to focus on business criticality.' },

      { type: 'heading', text: 'Client Benefits' },
      { type: 'stats', title: 'Customs', items: [
        { value: '8,000', label: 'individual product line items entered per month' },
        { value: '266 hrs', label: 'saved per month' },
      ] },
      { type: 'stats', title: 'RPA', items: [
        { value: '10,000', label: 'rate lines entered per month' },
        { value: '6 → 2 days', label: 'processing time reduced per cycle' },
        { value: '166 hrs', label: 'saved per month' },
      ] },
    ],
  },
  {
    slug: 'frucor-suntory-lean-agile',
    title: 'Suntory: Lean-Agile Transformation & Supply Chain Optimization',
    industry: 'Beverage & FMCG',
    client: 'Frucor-Suntory',
    summary: 'Citrus Global embedded Lean-Agile principles across Frucor-Suntory, building an Agile PMO, a B2B/B2C digital strategy, and a streamlined factory-to-consumer supply chain.',
    heroStats: [],
    blocks: [
      { type: 'heading', text: 'The Client' },
      { type: 'paragraph', text: 'Frucor-Suntory, part of the global Suntory group, a leader in consumer packaged goods and beverages.' },

      { type: 'heading', text: 'The Challenge' },
      { type: 'paragraph', text: 'Frucor-Suntory sought to accelerate business value delivery, strengthen their digital presence across B2B and B2C channels, and optimise their supply chain from factory to consumer. With multiple teams operating across functions, the organisation needed a cohesive approach to drive agility, efficiency, and market responsiveness.' },

      { type: 'heading', text: 'The Solution' },
      { type: 'paragraph', text: 'KMC partnered with Frucor-Suntory to embed Lean-Agile principles throughout the organisation, enabling a more adaptive, value-driven way of working. Key initiatives included:' },
      { type: 'heading', level: 'sub', text: 'Agile PMO Development & Delivery' },
      { type: 'paragraph', text: 'Establishing a responsive Project Management Office aligned to Agile practices, ensuring faster decision-making and improved value realisation.' },
      { type: 'heading', level: 'sub', text: 'Digital Strategy Creation & Execution' },
      { type: 'paragraph', text: 'Designing and delivering a comprehensive digital strategy across Business-to-Business, Business-to-Consumer, and Marketing domains to strengthen market reach and engagement.' },
      { type: 'heading', level: 'sub', text: 'End-to-End Supply Chain Optimisation' },
      { type: 'paragraph', text: 'Streamlining the "Factory to Consumer" journey to improve efficiency, reduce waste, and enhance delivery performance.' },

      { type: 'heading', text: 'Impact' },
      { type: 'paragraph', text: 'By combining Lean-Agile transformation with strategic digital and supply chain improvements, Frucor-Suntory enhanced its operational agility, customer responsiveness, and ability to deliver business value at speed and scale.' },
      { type: 'paragraph', text: 'Client philosophy: "Yatte Minahare — Go for it" — a mindset that fuelled their commitment to continuous improvement and innovation.' },
    ],
  },
  {
    slug: 'healthalliance-transformation',
    title: 'healthAlliance Transformation',
    industry: 'Healthcare',
    client: 'healthAlliance',
    summary: 'New Zealand’s largest healthcare provider embedded Lean, Agile and DevOps practice across a 2,000+ application landscape, lifting delivery speed, collaboration and operational resilience.',
    heroStats: [
      { value: '1.9M', label: 'people covered' },
      { value: '2,000+', label: 'applications managed' },
      { value: '28,500', label: 'clinical staff' },
    ],
    blocks: [
      { type: 'heading', text: 'The Client' },
      { type: 'paragraph', text: 'healthAlliance is New Zealand’s largest healthcare provider, delivering services across a vast geographical area of nearly 20,000 square kilometers and serving almost 40% of the country’s population. The organisation plays a critical role in managing healthcare infrastructure and digital services for millions of New Zealanders.' },

      { type: 'heading', text: 'The Challenge' },
      { type: 'paragraph', text: 'healthAlliance was operating within traditional business and IT models that limited agility and responsiveness. The complexity of supporting over 2,000 applications, combined with the rapidly evolving demands of healthcare services, created pressure for a significant transformation in both mindset and operational practices. They needed to shift towards more flexible, collaborative, and efficient ways of working to enhance delivery speed, service quality, and adaptability.' },

      { type: 'heading', text: 'The Solution' },
      { type: 'paragraph', text: 'Citrus Global partnered with healthAlliance to facilitate a comprehensive business transformation focused on embedding Lean, Agile, and DevOps principles across the organisation.' },
      { type: 'heading', level: 'sub', text: 'Mindset Shift' },
      { type: 'paragraph', text: 'Citrus Global helped transition healthAlliance’s teams from conventional project management and operational silos into a culture that values continuous improvement, collaboration, and customer-centric delivery.' },
      { type: 'heading', level: 'sub', text: 'New Ways of Working' },
      { type: 'paragraph', text: 'Beginning with existing teams, Citrus Global introduced Lean and Agile methodologies tailored to the healthcare context, ensuring the approach supported both ongoing operations and new development activities. This included iterative delivery, cross-functional team collaboration, and faster feedback loops.' },
      { type: 'heading', level: 'sub', text: 'Scalable Agile Adoption' },
      { type: 'paragraph', text: 'Following initial successes, Citrus Global extended Agile frameworks to major projects, standardising Lean-Agile and DevOps practices to streamline workflows, reduce bottlenecks, and improve release cadence.' },
      { type: 'heading', level: 'sub', text: 'Sustained Support and Change Management' },
      { type: 'paragraph', text: 'Citrus Global worked alongside healthAlliance’s Digital and Mobility division, which supports the extensive application landscape and change requests, embedding agile tools and practices that enhanced transparency, issue resolution, and stakeholder engagement.' },

      { type: 'heading', text: 'Results' },
      { type: 'paragraph', text: 'This transformation not only modernised healthAlliance’s operational capabilities but also established a sustainable foundation for innovation and growth aligned with the evolving healthcare landscape.' },
      { type: 'heading', level: 'sub', text: 'Enhanced Delivery Efficiency' },
      { type: 'paragraph', text: 'Agile adoption accelerated project timelines and improved the predictability of releases, enabling healthAlliance to respond more rapidly to emerging healthcare needs.' },
      { type: 'heading', level: 'sub', text: 'Improved Collaboration' },
      { type: 'paragraph', text: 'Cross-functional teams became more cohesive and empowered, breaking down silos between development, operations, and support functions.' },
      { type: 'heading', level: 'sub', text: 'Operational Resilience' },
      { type: 'paragraph', text: 'The integration of DevOps practices reduced downtime and improved system reliability across the large portfolio of healthcare applications.' },
      { type: 'heading', level: 'sub', text: 'Culture of Continuous Improvement' },
      { type: 'paragraph', text: 'Lean principles fostered ongoing process optimisation and a proactive approach to quality and risk management.' },

      { type: 'heading', text: 'Key Statistics' },
      { type: 'stats', items: [
        { value: '18,683 km²', label: 'geographical coverage' },
        { value: '1.9 million', label: 'people, healthcare coverage' },
        { value: '14', label: 'hospitals' },
        { value: '6', label: 'emergency departments' },
        { value: '81', label: 'operating theatres' },
        { value: '155,000', label: 'procedures per annum' },
        { value: '3,100', label: 'beds' },
        { value: '1.1 million', label: 'bed-days per annum' },
        { value: '28,500', label: 'clinical staff' },
      ] },
    ],
  },
  {
    slug: 'pacific-trade-invest',
    title: 'Pacific Trade Invest: Connecting the Pacific in a Digitally Fragmented World',
    industry: 'Trade & Investment',
    client: 'Pacific Trade Invest',
    summary: 'Citrus Global designed a phased digital strategy that unified Pacific Trade Invest’s geographically scattered offices into one secure, China-compatible operating model.',
    heroStats: [],
    blocks: [
      { type: 'heading', text: 'The Client' },
      { type: 'paragraph', text: 'Pacific Trade Invest (PTI) is the leading trade, investment, and tourism promotion agency for the Pacific region, representing multiple trade commissioners and in-country offices. Their mission: to foster economic growth by connecting Pacific businesses with global markets, particularly in aid donor countries.' },

      { type: 'heading', text: 'The Challenge' },
      { type: 'paragraph', text: 'The Pacific region presents a unique mix of geographic isolation, time zone fragmentation, and varying technological maturity across member states.' },
      { type: 'paragraph', text: 'PTI needed a strategy that would unify operations, enable secure cross-border collaboration, and gradually build a more integrated and sophisticated digital ecosystem without disrupting existing operations. PTI’s challenge was multi-layered:' },
      { type: 'heading', level: 'sub', text: 'Geographic Spread' },
      { type: 'paragraph', text: 'Multiple offices across vast distances, requiring reliable collaboration and communication tools.' },
      { type: 'heading', level: 'sub', text: 'Time Zone Complexity' },
      { type: 'paragraph', text: 'Coordinating operations between offices in the Pacific, Asia, and donor countries.' },
      { type: 'heading', level: 'sub', text: 'Language Diversity' },
      { type: 'paragraph', text: 'Supporting operations in multiple languages while ensuring consistency of message and process.' },
      { type: 'heading', level: 'sub', text: 'China’s Digital Restrictions' },
      { type: 'paragraph', text: 'Operating effectively inside and outside China’s "Great Firewall" while maintaining a unified digital platform.' },
      { type: 'heading', level: 'sub', text: 'Process Alignment' },
      { type: 'paragraph', text: 'Disparate operational workflows between offices created inefficiencies and data silos.' },

      { type: 'heading', text: 'The Solution' },
      { type: 'paragraph', text: 'Citrus Global partnered with PTI to design and deliver a forward-looking digital strategy, built to handle both the technical and geopolitical challenges of the Pacific.' },
      { type: 'heading', level: 'sub', text: 'Digital Strategy Review' },
      { type: 'paragraph', text: 'Conducted a comprehensive audit of PTI’s existing systems, communication platforms, and operational processes, mapping the bottlenecks and inefficiencies caused by geographic, technical, and regulatory barriers.' },
      { type: 'heading', level: 'sub', text: 'Principle-Led Future State Design' },
      { type: 'paragraph', text: 'Established a set of guiding principles for a global operating model — scalable, secure, and adaptable to the Pacific’s diverse conditions.' },
      { type: 'heading', level: 'sub', text: 'Phased Transformation Roadmap' },
      { type: 'paragraph', text: 'Designed multiple transition stages that would each deliver measurable value while building toward a fully integrated future state. These phases allowed PTI to adopt new tools and processes at a manageable pace without operational disruption.' },
      { type: 'heading', level: 'sub', text: 'China-Compatible Infrastructure' },
      { type: 'paragraph', text: 'Developed a technology framework capable of operating both inside and outside China’s restricted internet environment, enabling seamless data sharing and communication across all offices.' },
      { type: 'heading', level: 'sub', text: 'Process Standardisation & Integration' },
      { type: 'paragraph', text: 'Created unified workflows, aligned operational policies, and introduced systems with API and cloud-based capabilities to bridge cross-border gaps.' },

      { type: 'heading', text: 'Results & Benefits' },
      { type: 'paragraph', text: 'Through strategic planning and carefully staged execution, Citrus Global helped PTI bridge the technological and geographic gaps of the Pacific, enabling the organisation to operate as a cohesive, digitally capable global network.' },
      { type: 'heading', level: 'sub', text: 'Integrated Global Operations' },
      { type: 'paragraph', text: 'PTI offices now operate on a shared platform that supports real-time collaboration across geographies, languages, and time zones.' },
      { type: 'heading', level: 'sub', text: 'Firewall-Resilient Connectivity' },
      { type: 'paragraph', text: 'A robust infrastructure ensures that collaboration with China-based offices remains uninterrupted.' },
      { type: 'heading', level: 'sub', text: 'Scalable Transformation' },
      { type: 'paragraph', text: 'The phased approach allows PTI to adopt new capabilities incrementally while maintaining service delivery.' },
      { type: 'heading', level: 'sub', text: 'Operational Consistency' },
      { type: 'paragraph', text: 'Standardised processes have reduced duplication, improved data accuracy, and enhanced efficiency.' },
      { type: 'heading', level: 'sub', text: 'Stronger Market Outreach' },
      { type: 'paragraph', text: 'The improved digital backbone has allowed PTI to respond faster to trade and investment opportunities.' },
    ],
  },
  {
    slug: 'cmi-transformation',
    title: 'The CMI Transformation Story',
    industry: 'Professional Association',
    client: 'Change Management Institute (CMI)',
    summary: 'A fixed-price, 6-week digital strategy gave the volunteer-run Change Management Institute a clear path to streamlined operations, global tax compliance, and a consistent member experience.',
    heroStats: [
      { value: '6 weeks', label: 'fixed-price engagement' },
    ],
    blocks: [
      { type: 'heading', text: 'The Client' },
      { type: 'paragraph', text: 'Change Management Institute (CMI) is a global, not-for-profit professional association operating across multiple countries, currencies, and tax jurisdictions — and all of this is managed by volunteers. This unique operating model creates both opportunities and operational complexities, particularly in delivering consistent, compliant, and engaging services to members worldwide.' },

      { type: 'heading', text: 'Challenge' },
      { type: 'paragraph', text: 'CMI’s volunteer-led structure meant that many core processes relied on manual intervention, disconnected systems, and regional variations.' },
      { type: 'paragraph', text: 'CMI required a digital strategy that could streamline operations, ensure global compliance, and enhance the overall member experience — without adding unsustainable workload to its volunteer teams. These challenges were amplified by:' },
      { type: 'heading', level: 'sub', text: 'Multi-Country Operations' },
      { type: 'paragraph', text: 'Different time zones, languages, and member requirements.' },
      { type: 'heading', level: 'sub', text: 'Multi-Currency and Taxation Complexity' },
      { type: 'paragraph', text: 'Need to comply with varying tax regulations and reporting standards across jurisdictions.' },
      { type: 'heading', level: 'sub', text: 'Fragmented Digital Tools' },
      { type: 'paragraph', text: 'Legacy systems lacked integration, limiting automation and increasing administrative workload.' },
      { type: 'heading', level: 'sub', text: 'Member Experience Gaps' },
      { type: 'paragraph', text: 'Limited personalisation, inconsistent communication channels, and slow processes hindered engagement.' },
      { type: 'heading', level: 'sub', text: 'Barriers to Scalability' },
      { type: 'paragraph', text: 'Technology constraints prevented the rollout of new services and hampered rapid adoption of new operational models.' },

      { type: 'heading', text: 'Solution' },
      { type: 'paragraph', text: 'Citrus Global was engaged on a fixed-price, 6-week transformation program to deliver a robust digital strategy that could address CMI’s current challenges while positioning them for future growth. Working closely with CMI’s global stakeholders, the Citrus Global team executed a rapid discovery and strategy design process, which included:' },
      { type: 'heading', level: 'sub', text: 'Stakeholder Engagement' },
      { type: 'paragraph', text: 'Conducted targeted interviews and workshops across continents to map current workflows, pain points, and regional variations in compliance and service delivery.' },
      { type: 'heading', level: 'sub', text: 'Technology Audit' },
      { type: 'paragraph', text: 'Reviewed CMI’s existing digital ecosystem, assessing CRM, CMS, finance, and communications platforms for scalability, integration potential, and automation readiness.' },
      { type: 'heading', level: 'sub', text: 'Process & Systems Alignment' },
      { type: 'paragraph', text: 'Identified opportunities to consolidate tools, integrate financial systems for real-time multi-currency reporting, and implement automated tax compliance workflows across jurisdictions.' },
      { type: 'heading', level: 'sub', text: 'Digital Member Experience Blueprint' },
      { type: 'paragraph', text: 'Designed a platform strategy to enable personalised member portals, automated communications, and self-service features.' },
      { type: 'heading', level: 'sub', text: 'Compliance Framework' },
      { type: 'paragraph', text: 'Mapped end-to-end financial and operational processes to ensure adherence to local tax laws, GDPR, and international data privacy regulations.' },
      { type: 'heading', level: 'sub', text: 'Scalability Roadmap' },
      { type: 'paragraph', text: 'Created a phased rollout plan to implement cloud-based systems, improve API connectivity between platforms, and support future AI-driven analytics for member engagement.' },

      { type: 'heading', text: 'Results & Benefits' },
      { type: 'paragraph', text: 'By translating a complex, multi-jurisdictional operating environment into a clear, technology-led strategy, Citrus Global equipped CMI to streamline operations, enhance compliance, and deliver a seamless, globally consistent member experience.' },
      { type: 'heading', level: 'sub', text: 'Improved Member Experience' },
      { type: 'paragraph', text: 'Roadmap for a unified, personalised portal delivering consistent communications and easy access to services.' },
      { type: 'heading', level: 'sub', text: 'Operational Efficiency' },
      { type: 'paragraph', text: 'Identified automation opportunities that could cut volunteer admin workload, freeing time for strategic initiatives.' },
      { type: 'heading', level: 'sub', text: 'Tax Compliance & Reporting' },
      { type: 'paragraph', text: 'Recommended integrated finance solutions enabling real-time, multi-currency reconciliation and automated compliance reporting per jurisdiction.' },
      { type: 'heading', level: 'sub', text: 'Technology Flexibility' },
      { type: 'paragraph', text: 'Shift towards a modular, API-first architecture for easier integration and future upgrades.' },
      { type: 'heading', level: 'sub', text: 'Scalability' },
      { type: 'paragraph', text: 'Future-proofed digital strategy supporting CMI’s global expansion without proportionally increasing volunteer effort.' },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
