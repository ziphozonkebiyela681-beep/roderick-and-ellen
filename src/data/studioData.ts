export type ServiceId = 'weddings' | 'logos' | 'agents' | 'websites';

export interface ServiceDefinition {
  id: ServiceId;
  index: string;
  shortTitle: string;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  turnaround: string;
  idealFor: string;
  outcomeMetric: string;
}

export interface BrandAssetItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  aspect: 'portrait' | 'square';
}

export interface WeddingGalleryFrame {
  id: string;
  title: string;
  moment: string;
  location: string;
  focalTone: 'ivory' | 'butter' | 'plum';
  aspectLabel: string;
  motif: 'ceremony' | 'portrait' | 'toast' | 'estate' | 'ring' | 'table';
}

export interface AgentScenario {
  id: string;
  companyName: string;
  industry: string;
  roleTitle: string;
  greeting: string;
  quickPrompts: {
    label: string;
    userMessage: string;
    toolCall: string;
    agentReply: string;
  }[];
}

export interface WebsiteBlueprint {
  id: string;
  clientName: string;
  sector: string;
  headline: string;
  subheadline: string;
  primaryAction: string;
  navigation: string[];
  sections: {
    label: string;
    title: string;
    detail: string;
  }[];
  performance: {
    loadTime: string;
    accessibility: string;
    conversionLift: string;
  };
}

export const BRAND_ASSETS: BrandAssetItem[] = [
  {
    id: 'flatlay-envelope',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_12.58.12_AM_be779393.jpg',
    title: 'Signature Sealed Envelope',
    caption: 'Cotton-textured cream envelope sealed with our royal plum R|E crest on signature butter yellow.',
    aspect: 'square',
  },
  {
    id: 'macro-wax-seal',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_12.49.53_AM__1__a4bad071.jpg',
    title: 'Crowned Laurel Wax Crest',
    caption: 'Deep aubergine wax impression featuring the crowned R|E shield and dual laurel wreath.',
    aspect: 'square',
  },
  {
    id: 'angled-dispatch',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_12.49.53_AM_6650e350.jpg',
    title: 'Editorial Correspondence',
    caption: 'Tactile correspondence framing that inspires our digital unsealing animations and spacing.',
    aspect: 'square',
  },
  {
    id: 'brand-poster',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_12.43.28_AM_8b45411b.jpg',
    title: 'Roderick & Ellen Wordmark Sheet',
    caption: 'Primary serif typography in deep plum anchored against warm sunlit parchment.',
    aspect: 'portrait',
  },
];

export const SERVICES: ServiceDefinition[] = [
  {
    id: 'weddings',
    index: '01',
    shortTitle: 'Wedding Invitations & Gallery',
    title: 'Personalized Digital Wedding Invitations & Photo Galleries',
    tagline: 'Tactile wax-seal reveals, private RSVPs, and archival guest galleries.',
    summary:
      'Every celebration begins with an unforgettable opening moment. We design bespoke digital invitations modeled after fine cotton stationery—complete with interactive wax-seal opening, tailored ceremony schedules, guest RSVP tracking, and private high-resolution photo galleries.',
    deliverables: [
      'Interactive sealed-envelope opening sequence',
      'Custom couple monogram & stationery typography',
      'Guest RSVP capture with meal & song preferences',
      'Curated, password-protected wedding photo gallery',
    ],
    turnaround: '7–14 days',
    idealFor: 'Couples & Luxury Planners',
    outcomeMetric: '98% guest RSVP completion within 10 days',
  },
  {
    id: 'logos',
    index: '02',
    shortTitle: 'Logos & Brand Identity',
    title: 'Logo Creation & Signature Brand Identity Systems',
    tagline: 'Heraldic crests, timeless wordmarks, and cohesive visual rules.',
    summary:
      'From our own crowned R|E wax seal to modern corporate emblems, we craft distinctive marks built to hold authority across physical packaging, embossed stationery, social avatars, and digital interfaces.',
    deliverables: [
      'Primary wordmark, monogram & emblem suite',
      'Print-ready vector files & wax/foil stamp prep',
      'Curated color architecture & font pairing rules',
      'Comprehensive brand usage & layout specification',
    ],
    turnaround: '2–3 weeks',
    idealFor: 'Founders, Boutiques & Estates',
    outcomeMetric: 'Tested from 16px favicons to physical seals',
  },
  {
    id: 'agents',
    index: '03',
    shortTitle: 'Chatbots & AI Agents',
    title: 'Custom Chatbots & AI Agents for Companies',
    tagline: 'Grounded virtual assistants that book, qualify, and resolve inquiries.',
    summary:
      'We engineer bespoke conversational chatbots and autonomous AI agents tailored to your company’s knowledge base, tone of voice, and internal workflows—automating client onboarding, appointment scheduling, and customer support around the clock.',
    deliverables: [
      'Company-grounded knowledge & policy retrieval',
      'CRM, calendar & ticketing workflow integrations',
      'Web widget, WhatsApp & Slack channel deployment',
      'Human-handoff transcripts & accuracy guardrails',
    ],
    turnaround: '2–4 weeks',
    idealFor: 'Service Businesses & Teams',
    outcomeMetric: '68% reduction in repetitive support tickets',
  },
  {
    id: 'websites',
    index: '04',
    shortTitle: 'Company Websites',
    title: 'Bespoke Websites Built for Other Companies',
    tagline: 'Fast, editorial-grade web architecture engineered for conversion.',
    summary:
      'We design and build custom websites for ambitious companies—combining editorial restraint, responsive engineering, clean search structure, and seamless lead capture so your online presence commands immediate trust.',
    deliverables: [
      'Custom interface design & responsive engineering',
      'Structured SEO, schema & sub-second load speeds',
      'Booking, client portal & payment integrations',
      'Accessible WCAG AA typography & clean CMS handoff',
    ],
    turnaround: '3–5 weeks',
    idealFor: 'SMEs, Agencies & Hospitality',
    outcomeMetric: '99+ Lighthouse performance & clean conversion flow',
  },
];

export const WEDDING_GALLERY_FRAMES: WeddingGalleryFrame[] = [
  {
    id: 'frame-1',
    title: 'The Morning Vows',
    moment: 'Ceremony Courtyard',
    location: '11:30 AM · Garden Pavilion',
    focalTone: 'ivory',
    aspectLabel: '35mm Archival Print',
    motif: 'ceremony',
  },
  {
    id: 'frame-2',
    title: 'Sealed in Plum Wax',
    moment: 'Stationery Suite',
    location: 'Cotton Stock · 600gsm',
    focalTone: 'butter',
    aspectLabel: 'Studio Flat-Lay',
    motif: 'ring',
  },
  {
    id: 'frame-3',
    title: 'Golden Hour Portraits',
    moment: 'Terrace Promenade',
    location: '5:15 PM · South Lawn',
    focalTone: 'plum',
    aspectLabel: 'Medium Format',
    motif: 'portrait',
  },
  {
    id: 'frame-4',
    title: 'Candlelit Reception',
    moment: 'Long Table Dinner',
    location: '7:45 PM · Orangery Hall',
    focalTone: 'ivory',
    aspectLabel: 'Editorial Frame',
    motif: 'table',
  },
  {
    id: 'frame-5',
    title: 'Champagne & First Dance',
    moment: 'Evening Celebration',
    location: '9:30 PM · Conservatory',
    focalTone: 'butter',
    aspectLabel: 'Documentary Shot',
    motif: 'toast',
  },
  {
    id: 'frame-6',
    title: 'The Estate Grounds',
    moment: 'Venue Architecture',
    location: 'Cape Winelands · Manor House',
    focalTone: 'plum',
    aspectLabel: 'Wide Architectural',
    motif: 'estate',
  },
];

export const AGENT_SCENARIOS: AgentScenario[] = [
  {
    id: 'hospitality',
    companyName: 'Aurelia Manor & Spa',
    industry: 'Hospitality & Events',
    roleTitle: 'Guest Concierge & Event Booking Agent',
    greeting:
      'Welcome to Aurelia Manor. I can check suite availability, share private dining menus, or schedule a venue tour with our events director.',
    quickPrompts: [
      {
        label: 'Check weekend suite availability',
        userMessage: 'Do you have 2 garden suites open for the first weekend of June?',
        toolCall: 'check_availability(dates="June 5-7", room_type="Garden Suite", count=2)',
        agentReply:
          'Yes—Garden Suites 04 and 07 are available June 5–7 at $460/night, including breakfast and thermal spa access. Would you like me to hold both rooms for 24 hours under your name?',
      },
      {
        label: 'Request wedding buyout pricing',
        userMessage: 'Can we book the entire estate for an 80-guest autumn wedding?',
        toolCall: 'fetch_event_package(guests=80, season="Autumn", buyout=true)',
        agentReply:
          'Full weekend estate buyouts accommodate up to 110 guests across 14 suites and the Orangery Hall. For 80 guests, packages start at $18,500 including ceremony seating and coordination. I can open our events calendar to book a walkthrough call.',
      },
      {
        label: 'Dietary & accessibility inquiry',
        userMessage: 'Are your reception menus accommodating for gluten-free and vegan guests?',
        toolCall: 'query_policy_docs(topic="culinary_dietary_accommodations")',
        agentReply:
          'Absolutely. Our kitchen prepares dedicated allergen-safe courses for gluten-free, vegan, and nut-free guests at no additional charge when noted in your digital RSVP at least 14 days prior.',
      },
    ],
  },
  {
    id: 'saas',
    companyName: 'Northbridge Ledger',
    industry: 'B2B Financial Software',
    roleTitle: 'Onboarding & Technical Support Agent',
    greeting:
      'Hello! I am the Northbridge Ledger assistant. Ask me about Xero/QuickBooks sync, team permissions, or book a live migration review.',
    quickPrompts: [
      {
        label: 'Troubleshoot invoice sync',
        userMessage: 'Our multi-currency invoices from Xero did not appear in this morning’s batch.',
        toolCall: 'inspect_integration_logs(provider="xero", scope="multi_currency")',
        agentReply:
          'Multi-currency invoices require the FX ledger mapping toggle enabled under Settings -> Integrations -> Xero. Once toggled, trigger "Backfill Last 7 Days" and entries populate within 90 seconds. Shall I open a ticket with your workspace ID attached?',
      },
      {
        label: 'Estimate migration timeline',
        userMessage: 'How long does it take to migrate 4 years of historical client records?',
        toolCall: 'calculate_migration_sla(years=4, tier="Enterprise")',
        agentReply:
          'Historical CSV and API imports for 4 years of records typically complete in 3–5 business days with our guided verification script. I can reserve a 30-minute onboarding slot with an implementation engineer tomorrow.',
      },
      {
        label: 'Role-based access rules',
        userMessage: 'Can external auditors view statements without editing reconciliations?',
        toolCall: 'query_rbac_matrix(role="External Auditor")',
        agentReply:
          'Yes. Assign the "Read-Only Auditor" seat—it grants export access to monthly statements and audit trails while locking all journal and reconciliation edits.',
      },
    ],
  },
  {
    id: 'retail',
    companyName: 'Kensington Bespoke Atelier',
    industry: 'Custom Tailoring & Goods',
    roleTitle: 'Client Fitting & Order Status Agent',
    greeting:
      'Good day from Kensington Atelier. I can track an existing bespoke order, explain fabric lead times, or book your measurement fitting.',
    quickPrompts: [
      {
        label: 'Track bespoke order #KB-408',
        userMessage: 'What is the current stage of order #KB-408?',
        toolCall: 'lookup_order_status(order_id="KB-408")',
        agentReply:
          'Order #KB-408 (Double-Breasted Wool Coat in Espresso) completed basted tailoring yesterday and is scheduled for final pressing on Thursday. Ready for collection or courier dispatch Friday at 2:00 PM.',
      },
      {
        label: 'Book a private fitting',
        userMessage: 'I need a 45-minute bridal suit fitting next Tuesday afternoon.',
        toolCall: 'list_fitting_slots(day="Next Tuesday", duration_min=45)',
        agentReply:
          'Master Tailor Julian has openings next Tuesday at 2:15 PM and 4:00 PM at our Main Street salon. Which time suits you best?',
      },
      {
        label: 'Care & alteration policy',
        userMessage: 'Do you include complimentary sleeve adjustments after delivery?',
        toolCall: 'query_atelier_warranty(item="tailored_outerwear")',
        agentReply:
          'Every bespoke commission includes complimentary minor alterations for 12 months following delivery. Simply bring the garment in or request a prepaid courier label here.',
      },
    ],
  },
];

export const WEBSITE_BLUEPRINTS: WebsiteBlueprint[] = [
  {
    id: 'hospitality',
    clientName: 'Vespera Vineyards',
    sector: 'Estate Hospitality & Tasting Room',
    headline: 'Single-vineyard hospitality, reserved online in seconds.',
    subheadline:
      'Editorial storytelling paired with a live cellar-tasting reservation engine and private event inquiry pipeline.',
    primaryAction: 'Reserve Tasting Table',
    navigation: ['Vineyard', 'Tastings', 'Private Events', 'Journal'],
    sections: [
      {
        label: '01. Editorial Hero',
        title: 'Seasonal Harvest Showcase',
        detail: 'Full-bleed photography with instant table-date selector.',
      },
      {
        label: '02. Booking Engine',
        title: 'Live Sommelier Availability',
        detail: 'Zero-redirect reservation flow with automated SMS reminders.',
      },
      {
        label: '03. Wine Club Portal',
        title: 'Member Allocation Vault',
        detail: 'Curated seasonal shipments and private cellar tasting invites.',
      },
    ],
    performance: {
      loadTime: '0.7s LCP',
      accessibility: 'WCAG AA 100%',
      conversionLift: '+142% Direct Bookings',
    },
  },
  {
    id: 'advisory',
    clientName: 'Alder & Sterling Partners',
    sector: 'Corporate & Estate Advisory',
    headline: 'Clarity and counsel for multi-generational enterprises.',
    subheadline:
      'High-trust editorial layout structured around partner profiles, downloadable briefings, and confidential consultation booking.',
    primaryAction: 'Schedule Partner Briefing',
    navigation: ['Practice Areas', 'Partners', 'Insights', 'Contact'],
    sections: [
      {
        label: '01. Authority Header',
        title: 'Firm Mandate & Jurisdictions',
        detail: 'Quiet serif typography engineered for executive credibility.',
      },
      {
        label: '02. Case Archive',
        title: 'Filterable Mandate Directory',
        detail: 'Structured by sector with instant briefing PDF requests.',
      },
      {
        label: '03. Intake Funnel',
        title: 'Encrypted Consultation Routing',
        detail: 'Smart conflict-check pre-screening before calendar booking.',
      },
    ],
    performance: {
      loadTime: '0.6s LCP',
      accessibility: 'WCAG AA 100%',
      conversionLift: '+84% Qualified Inquiries',
    },
  },
  {
    id: 'architecture',
    clientName: 'atelier Kestrel',
    sector: 'Residential & Civic Architecture',
    headline: 'Spaces shaped by daylight, limestone, and quiet permanence.',
    subheadline:
      'Media-first project monograph with interactive floor-plan zoom, material specifications, and commission intake.',
    primaryAction: 'Commission Inquiry',
    navigation: ['Selected Works', 'Studio', 'Materials', 'Press'],
    sections: [
      {
        label: '01. Project Monograph',
        title: 'Asymmetric Masonry Grid',
        detail: 'High-resolution plates with instant lightbox inspection.',
      },
      {
        label: '02. Material Library',
        title: 'Tactile Finish Index',
        detail: 'Filterable stone, timber, and brass provenance notes.',
      },
      {
        label: '03. Client Portal',
        title: 'Private Milestone Tracker',
        detail: 'Dedicated client login for drawings, permits, and site logs.',
      },
    ],
    performance: {
      loadTime: '0.8s LCP',
      accessibility: 'WCAG AA 99%',
      conversionLift: '3.1x Average Session Depth',
    },
  },
];

export const STUDIO_CONTACT = {
  phoneDisplay: '0723147152',
  phoneHref: 'tel:0723147152',
  whatsappHref: 'https://wa.me/27723147152',
  tiktokHandle: '@roderick_and_ellen',
  tiktokHref: 'https://www.tiktok.com/@roderick_and_ellen',
  instagramHandle: '@roderickandellen',
  instagramHref: 'https://www.instagram.com/roderickandellen',
};

