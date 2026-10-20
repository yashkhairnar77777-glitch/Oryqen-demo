import { ConceptProject, ServiceItem } from '../types';

export const CONCEPT_PROJECTS: ConceptProject[] = [
  {
    id: 'aura-bistro',
    title: 'Aura Bistro & Bar',
    subtitle: 'Artisan Dining & Evening Cocktail Lounge',
    category: 'hospitality',
    categoryLabel: 'Restaurant & Dining',
    tagline: 'High-conversion hospitality web presence designed to fill tables effortlessly.',
    image: '/src/assets/images/concept_restaurant_1792490557262.jpg',
    description:
      'A cinematic, moody digital experience built for modern restaurants. Designed to replace clunky PDF menus with responsive, touch-friendly digital tasting menus and direct reservation flows.',
    coreHighlights: [
      'Interactive Tasting Menu with dietary and allergy filters',
      'Frictionless 3-step Table Reservation workflow',
      'Curated Cocktail Pairing Lookbook with seasonal spirits',
      'Mobile-first opening hours, parking, and instant directions'
    ],
    conversionFeatures: [
      {
        title: 'Zero-Lag Menu Browsing',
        description: 'Guests can explore dishes, allergen indicators, and sommelier pairings without downloading heavy PDFs.'
      },
      {
        title: 'Peak-Hour Reservation Conversion',
        description: 'Optimized booking flow embedded above the fold, converting Friday & Saturday evening mobile visitors immediately.'
      },
      {
        title: 'Atmospheric Visual Scrollytelling',
        description: 'Rich low-light photography showcasing table intimacy, chef plating, and bar craft.'
      }
    ],
    prototypeSpecs: {
      targetAudience: 'Upscale diners, date night couples, corporate dinner coordinators',
      primaryConversionGoal: 'Table reservations & private dining inquiries',
      mobileOptimization: 'Sticky table booking bar, quick-tap phone dialer, GPS map coordinates',
      keyDeliverables: ['Digital menu system', 'Reservation widget integration', 'Private event inquiry form', 'Instagram live feed mirror']
    },
    sampleInteractiveData: {
      type: 'menu',
      headline: 'Seasonal Tasting & Sommelier Selection',
      subheadline: 'Sample interactive menu component built for touch navigation',
      items: [
        {
          title: 'Prime 45-Day Dry Aged Ribeye',
          meta: 'Smoked Bone Marrow · Charred Shallot Jus',
          description: 'Wood-fired Nebraska beef, confit baby leeks, truffle pomme purée.',
          price: '$68',
          badge: 'Chef Signature'
        },
        {
          title: 'Black Truffle & Wild Morel Tagliatelle',
          meta: 'Aged Parmigiano Reggiano · Cultured Butter',
          description: 'Hand-rolled yolk pasta, shaved seasonal black truffles, crisp sage.',
          price: '$42',
          badge: 'Vegetarian'
        },
        {
          title: 'Pan-Roasted King Salmon',
          meta: 'Kombu Dashi Glaze · Crispy Skin',
          description: 'Wild Alaskan salmon, maitake mushrooms, ginger pea emulsion.',
          price: '$46'
        },
        {
          title: 'The Obsidian Smoke Cocktail',
          meta: 'Japanese Whisky · Burnt Orange · Bitters',
          description: 'Smoked tableside under bell jar with applewood essence.',
          price: '$24',
          badge: 'House Special'
        }
      ]
    }
  },
  {
    id: 'grand-elysian',
    title: 'The Grand Elysian',
    subtitle: 'Palatial Banquet Hall & Private Events Venue',
    category: 'venues',
    categoryLabel: 'Banquet & Event Venue',
    tagline: 'Grand architectural presentation engineered for high-ticket event bookings.',
    image: '/src/assets/images/concept_banquet_1792490557217.jpg',
    description:
      'A majestic digital venue showcase for luxury banquet halls and gala spaces. Empowers event planners and couples to explore hall layouts, calculate capacities, and request private tours.',
    coreHighlights: [
      'Interactive Guest Capacity & Seating Layout Calculator',
      'Comprehensive Wedding & Corporate Gala Package Showcase',
      'Architectural 360° Ballroom & Bridal Suite Gallery',
      'Event Date Availability & Tour Request Pipeline'
    ],
    conversionFeatures: [
      {
        title: 'Interactive Capacity Configurator',
        description: 'Clients select their guest count and immediately see recommended room configurations and seating styles.'
      },
      {
        title: 'High-Ticket Event Package Tiers',
        description: 'Transparent presentation of gala, reception, and corporate packages to filter high-intent prospects.'
      },
      {
        title: 'Instant Private Venue Tour Request',
        description: 'One-click tour booking with calendar slot selection and dedicated event concierge response.'
      }
    ],
    prototypeSpecs: {
      targetAudience: 'Engaged couples, event planners, corporate gala coordinators, trade associations',
      primaryConversionGoal: 'In-person venue tour bookings & custom event proposals',
      mobileOptimization: 'Fast floor plan zoom, downloadable floor specs, direct event sales WhatsApp/call button',
      keyDeliverables: ['Capacity planner tool', 'Digital venue lookbook', 'Interactive floor layouts', 'Tour scheduler']
    },
    sampleInteractiveData: {
      type: 'capacity',
      headline: 'Interactive Ballroom Capacity & Layout Estimator',
      subheadline: 'Adjust the slider to simulate guest configurations and recommended ballroom wings',
      calculator: {
        min: 60,
        max: 600,
        defaultVal: 240,
        label: 'Estimated Guest Count',
        unit: 'Guests',
        tiers: [
          { min: 60, max: 140, name: 'The Sovereign Salon', layoutRecommendation: 'Intimate Round Table setup with central dance floor & cocktail mezzanine.' },
          { min: 141, max: 320, name: 'The Grand Imperial Ballroom', layoutRecommendation: 'Full Grand Ballroom with dual bars, stage, and banquet banquet rounds.' },
          { min: 321, max: 600, name: 'Palatial Estate Pavilion', layoutRecommendation: 'Full estate buyout combining Imperial Ballroom, Garden Atrium & Terrace.' }
        ]
      }
    }
  },
  {
    id: 'kroma-atelier',
    title: 'Kroma Atelier & Spa',
    subtitle: 'Architectural Hair Studio & Wellness Spa',
    category: 'beauty',
    categoryLabel: 'Salon & Spa Studio',
    tagline: 'Editorial aesthetics paired with high-conversion appointment scheduling.',
    image: '/src/assets/images/concept_salon_1792490558945.jpg',
    description:
      'An editorial visual identity and online booking platform for modern salons and wellness practitioners. Designed to present stylist portfolios and convert casual visitors into recurring clients.',
    coreHighlights: [
      'Master Stylist Portfolios with Before/After transformations',
      'Categorized Service Menu with transparent consultation times',
      'Mobile-optimized WhatsApp and Online Booking integration',
      'Curated Luxury Product Line & Atelier Treatments'
    ],
    conversionFeatures: [
      {
        title: 'Stylist-Specific Selection',
        description: 'Clients can browse individual artist specialties and book directly with their preferred professional.'
      },
      {
        title: 'Frictionless Mobile Booking Flow',
        description: 'Engineered specifically for smartphone users who book during commutes or evening leisure.'
      },
      {
        title: 'Service Duration & Consultation Clarity',
        description: 'Eliminates scheduling surprises with explicit session lengths and preparation advice.'
      }
    ],
    prototypeSpecs: {
      targetAudience: 'Style-conscious professionals, bridal parties, wellness enthusiasts',
      primaryConversionGoal: 'Online appointment bookings & stylist consultations',
      mobileOptimization: 'Instant booking button pinned to bottom nav, tap-to-call stylist desk',
      keyDeliverables: ['Digital service lookbook', 'Stylist portfolio showcase', 'Booking system integration', 'Care guides']
    },
    sampleInteractiveData: {
      type: 'services',
      headline: 'Signature Atelier Hair & Spa Services',
      subheadline: 'Transparent service durations, consultation notes, and pricing structures',
      items: [
        {
          title: 'Dimensional Balayage & Gloss',
          meta: '180 mins · Master Colorist',
          description: 'Hand-painted multidimensional blonde or brunette tones with bond-building treatment.',
          price: '$285',
          badge: 'Most Booked'
        },
        {
          title: 'Architectural Precision Cut & Blowout',
          meta: '75 mins · Creative Director',
          description: 'Bespoke structural scissor cut mapped to facial bone structure and texture.',
          price: '$140'
        },
        {
          title: 'Japanese Scalp Spa & Steam Therapy',
          meta: '90 mins · Spa Specialist',
          description: 'Deep herbal exfoliation, shiatsu scalp massage, micro-mist hydration sauna.',
          price: '$195',
          badge: 'Wellness'
        },
        {
          title: 'Keratin Thermal Smoothing Infusion',
          meta: '150 mins · Senior Stylist',
          description: 'Anti-humidity formaldehyde-free smoothing treatment lasting up to 5 months.',
          price: '$320'
        }
      ]
    }
  },
  {
    id: 'vanguard-living',
    title: 'Vanguard Living',
    subtitle: 'Ultra-Luxury Architecture & Estates',
    category: 'realestate',
    categoryLabel: 'Prime Real Estate',
    tagline: 'High-end architectural presentation for prestige residential properties.',
    image: '/src/assets/images/concept_realestate_1792490558967.jpg',
    description:
      'A cinematic property showcase website built for luxury brokerages and high-end architects. Features full-screen architectural photography, floor plan specs, and private viewing booking.',
    coreHighlights: [
      'Immersive Property Specification Sheets (Sq Ft, Lot, Features)',
      'High-Resolution Gallery with Blue-Hour Architectural Photography',
      'VIP Private Tour & Showing Request Pipeline',
      'Downloadable Architectural Brochure & Neighborhood Demographics'
    ],
    conversionFeatures: [
      {
        title: 'Exclusive Showing Capture',
        description: 'Vetted private viewing request form designed to capture qualified high-net-worth buyers.'
      },
      {
        title: 'Architectural Digest Visual Standard',
        description: 'Full-bleed imagery emphasizing cantilevered lines, indoor-outdoor flow, and material finishes.'
      },
      {
        title: 'Neighborhood & Lifestyle Context',
        description: 'Highlights nearby private schools, helipads, Michelin dining, and transit times.'
      }
    ],
    prototypeSpecs: {
      targetAudience: 'HNW home buyers, real estate investors, architectural collectors',
      primaryConversionGoal: 'Confidential private tour requests & brochure downloads',
      mobileOptimization: 'Pinch-to-zoom floor plans, agent direct call/SMS button, fast photo swipe',
      keyDeliverables: ['Property showcase system', 'Private tour request pipeline', 'Digital asset packet', 'Agent branding']
    },
    sampleInteractiveData: {
      type: 'realestate',
      headline: 'The Bel-Air Cantilever Pavilion · Property Specs',
      subheadline: 'Sample property data architecture showcasing key specifications for luxury buyers',
      items: [
        {
          title: 'Living Space & Architecture',
          meta: 'Interior Area',
          description: '7,450 sq ft of seamless indoor-outdoor living with 14-foot motorized glass pocket walls.',
          price: '7,450 Sq Ft'
        },
        {
          title: 'Bedrooms & En-Suites',
          meta: 'Accommodations',
          description: '5 Master suites each featuring private terrace gardens and Italian quartzite baths.',
          price: '5 Beds · 7 Baths'
        },
        {
          title: 'Cantilevered Infinity Reflection Pool',
          meta: 'Outdoor Living',
          description: '65-foot heated saltwater vanishing edge pool overlooking panoramic city lights.',
          price: 'Heated Saltwater'
        },
        {
          title: 'Automated Smart Residence',
          meta: 'Technology & Security',
          description: 'Full Lutron HomeWorks architectural lighting, biometric access, and private wine vault.',
          price: 'Integrated System'
        }
      ]
    }
  },
  {
    id: 'aurea-atelier',
    title: 'Auréa Craft & Objects',
    subtitle: 'Curated Designer Homeware & Artisan Ceramics',
    category: 'retail',
    categoryLabel: 'Artisanal Retail & Shop',
    tagline: 'Gallery-grade lifestyle retail design built for discoverability and local foot traffic.',
    image: '/src/assets/images/concept_boutique_1792490559058.jpg',
    description:
      'A refined web presence for design studios, local lifestyle boutiques, and ceramic ateliers. Blends curated product releases with physical storefront hours, directions, and bespoke order requests.',
    coreHighlights: [
      'Limited Batch Release Showcase with Real-Time Stock Status',
      'Artisan Maker Stories & Sourcing Transparency',
      'Physical Storefront Locator, Visiting Hours, and Parking Guidance',
      'Bespoke Commission Inquiry & Local Click-and-Collect'
    ],
    conversionFeatures: [
      {
        title: 'Foot-Traffic Driving Design',
        description: 'Prominently features visiting hours, neighborhood parking, and current in-store inventory.'
      },
      {
        title: 'Editorial Product Presentation',
        description: 'Transforms physical retail products into coveted museum-grade collector pieces.'
      },
      {
        title: 'Bespoke Commission Channel',
        description: 'Direct inquiry channel for custom interior designer orders and hospitality tableware batches.'
      }
    ],
    prototypeSpecs: {
      targetAudience: 'Interior designers, ceramic collectors, discerning local retail shoppers',
      primaryConversionGoal: 'Storefront visits, custom commission orders, local click-and-collect',
      mobileOptimization: 'Instant Apple Maps / Google Maps navigation trigger, click-and-collect SMS option',
      keyDeliverables: ['Product catalog system', 'Store locator module', 'Commission inquiry workflow', 'Batch drop counter']
    },
    sampleInteractiveData: {
      type: 'boutique',
      headline: 'Curated Autumn Batch · Available in Atelier & Online',
      subheadline: 'Sample product presentation displaying material provenance and stock state',
      items: [
        {
          title: 'Volcanic Ash Amphora Vessel No. 04',
          meta: 'Hand-thrown Terracotta · Matte Basalt Slip',
          description: 'Sculpted from iron-rich local clay, wood-fired for 48 hours. Watertight.',
          price: '$210',
          badge: 'Limited Batch'
        },
        {
          title: 'Architectural Stone Pedestal Bowl',
          meta: 'Carved Charcoal Limestone · Honed Finish',
          description: 'Solid natural stone bowl suitable as centerpiece or fruit vessel.',
          price: '$185'
        },
        {
          title: 'Hand-Dyed Belgian Linen Throw',
          meta: '100% Organic Flax · Natural Walnut Dye',
          description: 'Woven on heritage wooden looms, washed for supple softness.',
          price: '$165',
          badge: 'New Arrival'
        },
        {
          title: 'Cast Bronze Incense Burner & Well',
          meta: 'Solid Sandcast Bronze · Waxed Patina',
          description: 'Heavyweight brass-bronze alloy that develops a unique patina with age.',
          price: '$120'
        }
      ]
    }
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Websites',
    description:
      'Complete, high-conversion web platforms engineered specifically for restaurants, banquet halls, salons, real estate, and local service enterprises. Built to turn casual visitors into paying customers.',
    highlights: [
      'Tailored brand identity and visual styling',
      'Seamless booking, menu, or listing workflows',
      'Optimized conversion funnels with clear CTAs',
      'Google business profile and local SEO foundation'
    ],
    idealFor: 'Restaurants, salons, venues, clinics, professional practices',
    turnaround: '2–3 Weeks'
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'High-Impact Landing Pages',
    description:
      'Hyper-focused, single-page conversion engines designed for paid advertising, seasonal campaigns, service launches, or specific promotional offers. Zero fluff, maximum action.',
    highlights: [
      'Laser-focused copy and visual hierarchy',
      'Speed-optimized for paid ad quality scores',
      'Integrated lead capture forms with instant alerts',
      'A/B test ready layout structure'
    ],
    idealFor: 'Product launches, seasonal events, ad campaigns, lead generation',
    turnaround: '5–7 Days'
  },
  {
    id: 'website-redesigns',
    number: '03',
    title: 'Full Website Redesigns',
    description:
      'Transform outdated, slow, or template-cluttered websites into sleek, modern digital flagships that command respect and reflect your real business caliber.',
    highlights: [
      'Comprehensive UX audit of your current site',
      'Preservation of existing SEO rankings & URLs',
      'Modern dark/light cinematic aesthetic overhaul',
      'Elimination of slow plugins and bloat'
    ],
    idealFor: 'Established businesses with dated, slow, or DIY-template sites',
    turnaround: '2–4 Weeks'
  },
  {
    id: 'responsive-development',
    number: '04',
    title: 'Mobile-First Responsive Development',
    description:
      'Pixel-perfect responsive engineering optimized primarily for Android and iOS mobile devices where over 70% of local customers discover you.',
    highlights: [
      'Zero pinch-and-zoom required on any screen',
      'Touch-friendly button sizes (44px+ hit areas)',
      'Sub-second mobile loading speeds',
      'Offline-resilient asset caching'
    ],
    idealFor: 'Businesses receiving mobile traffic from Instagram, Google, and TikTok',
    turnaround: 'Built into every project'
  },
  {
    id: 'tasteful-animations',
    number: '05',
    title: 'Tasteful Motion & 3D Interactive',
    description:
      'Subtle parallax, silky page transitions, and lightweight interactive 3D elements that captivate visitors and make your business unforgettable without hurting performance.',
    highlights: [
      'Hardware-accelerated 60fps animations',
      'Respects reduced-motion preferences',
      'Lightweight WebGL 3D elements with CPU fallbacks',
      'Micro-interactions that guide the user’s gaze'
    ],
    idealFor: 'Brands that want a memorable, modern technological edge',
    turnaround: 'Integrated feature'
  }
];

export const WHY_ORYQEN_POINTS = [
  {
    title: 'Mobile-First Design',
    subtitle: 'Engineered for how people actually browse',
    description:
      'Over 70% of restaurant reservations, salon appointments, and local service searches happen on smartphones. We build for the thumb first, ensuring frictionless navigation on Android and iOS.',
    metric: '70%+',
    metricLabel: 'Mobile Discovery Traffic'
  },
  {
    title: 'Clear User Journeys',
    subtitle: 'Zero confusion, instant comprehension',
    description:
      'Visitors decide within 3 seconds whether to stay. We eliminate confusing navigation and bury-the-lead syndrome, giving potential customers exactly what they need: menu, pricing, location, and booking.',
    metric: '< 3s',
    metricLabel: 'Decision Window'
  },
  {
    title: 'Fast-Loading Pages',
    subtitle: 'Clean code without template bloat',
    description:
      'We never use bloated visual builders or sluggish plugins. Our sites are handcrafted with modern web standards, achieving near-instant load times that both customers and search engines favor.',
    metric: '95+',
    metricLabel: 'Performance Score Target'
  },
  {
    title: 'Enquiry-Focused Layouts',
    subtitle: 'Every element serves a commercial purpose',
    description:
      'A beautiful website that does not generate calls or inquiries is an expense, not an asset. Every button, visual anchor, and form is placed with psychological intent to drive business growth.',
    metric: '2.4x',
    metricLabel: 'Average Inquiry Lift'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Discover',
    headline: 'Understanding Your Business & Audience',
    description:
      'We analyze your business model, customer demographics, competitor shortcomings, and primary conversion objectives to establish a clear architectural roadmap.'
  },
  {
    step: '02',
    name: 'Design',
    headline: 'Bespoke Visual Direction & Layouts',
    description:
      'We craft tailored, high-fidelity designs with typography, colors, and layout rhythm specifically tuned for your industry—no recycled generic themes.'
  },
  {
    step: '03',
    name: 'Build',
    headline: 'Clean Modern Code & Responsive Execution',
    description:
      'We implement the design using clean, lightweight code, integrating interactive components, menus, booking widgets, and mobile optimizations.'
  },
  {
    step: '04',
    name: 'Launch',
    headline: 'Deployment, Testing & Ongoing Handover',
    description:
      'Comprehensive cross-browser testing across Android, iOS, and desktop viewports, domain configuration, speed verification, and launch support.'
  }
];
