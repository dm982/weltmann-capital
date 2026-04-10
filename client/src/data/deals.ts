export interface Deal {
  id: string;
  title: string;
  location: string;
  country: "baltics" | "germany" | "spain";
  dealType: "cashflow" | "value-add" | "development";
  status: "open" | "closing" | "sold";
  price: string;
  equityNeeded: string;
  leverageRange: string;
  businessPlan: string;
  timeline: string;
  highlights: string[];
  risks: string[];
  mitigations: string[];
  documents: string[];
  image: string;
}

export const deals: Deal[] = [
  {
    id: "riga-multifamily-1",
    title: "Riga Multifamily Portfolio",
    location: "Riga, Latvia",
    country: "baltics",
    dealType: "cashflow",
    status: "open",
    price: "€2.4M",
    equityNeeded: "€850K",
    leverageRange: "60-65% LTV",
    businessPlan: "Stabilized rental portfolio with minor capex improvements. 24 residential units across 3 buildings in central Riga.",
    timeline: "12-18 months hold period",
    highlights: [
      "Fully occupied with strong tenant retention",
      "Below-market rents with upside potential",
      "Professional property management in place"
    ],
    risks: [
      "Currency exposure (EUR)",
      "Regulatory changes in rental law",
      "Economic sensitivity to local market"
    ],
    mitigations: [
      "Long-term leases provide income stability",
      "Diversified tenant base across unit types",
      "Conservative underwriting assumptions"
    ],
    documents: ["Investment Memo", "Financial Model", "Rent Roll", "Building Reports"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
  },
  {
    id: "berlin-value-add-1",
    title: "Berlin Office Repositioning",
    location: "Berlin Mitte, Germany",
    country: "germany",
    dealType: "value-add",
    status: "open",
    price: "€8.5M",
    equityNeeded: "€3.2M",
    leverageRange: "55-60% LTV",
    businessPlan: "Repositioning of dated office building into modern flexible workspace. Complete interior renovation and tenant repositioning.",
    timeline: "24-36 months business plan",
    highlights: [
      "Prime central Berlin location",
      "Vacant possession available",
      "Strong office demand in submarket"
    ],
    risks: [
      "Construction cost overruns",
      "Leasing risk in competitive market",
      "Extended vacancy during renovation"
    ],
    mitigations: [
      "Fixed-price construction contract",
      "Pre-marketing to prospective tenants",
      "Phased renovation approach"
    ],
    documents: ["Investment Memo", "Financial Model", "Capex Budget", "Market Study"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
  },
  {
    id: "valencia-development-1",
    title: "Valencia Residential Development",
    location: "Valencia, Spain",
    country: "spain",
    dealType: "development",
    status: "open",
    price: "€4.8M",
    equityNeeded: "€1.9M",
    leverageRange: "60% LTC",
    businessPlan: "Ground-up development of 18-unit residential building in emerging neighborhood. Full permits in place.",
    timeline: "30-42 months to completion and exit",
    highlights: [
      "Fully permitted site ready for construction",
      "Strong pre-sale interest from local buyers",
      "Experienced local development partner"
    ],
    risks: [
      "Construction timeline delays",
      "Sales velocity uncertainty",
      "Material cost fluctuations"
    ],
    mitigations: [
      "Conservative construction timeline",
      "Pre-sale requirement before construction start",
      "Fixed-price contracts where possible"
    ],
    documents: ["Investment Memo", "Financial Model", "Permits", "Architecture Plans"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
  },
  {
    id: "tallinn-retail-1",
    title: "Tallinn Retail Conversion",
    location: "Tallinn, Estonia",
    country: "baltics",
    dealType: "value-add",
    status: "closing",
    price: "€1.8M",
    equityNeeded: "€720K",
    leverageRange: "55-60% LTV",
    businessPlan: "Conversion of underperforming retail space to mixed-use with F&B and residential. Prime old town location.",
    timeline: "18-24 months business plan",
    highlights: [
      "UNESCO heritage district location",
      "Strong tourism recovery driving demand",
      "Flexible zoning allows mixed use"
    ],
    risks: [
      "Heritage building renovation constraints",
      "Seasonal tourism fluctuations",
      "Permit timeline for conversion"
    ],
    mitigations: [
      "Experienced heritage renovation contractor",
      "Year-round tenant mix strategy",
      "Pre-consultation with planning authority"
    ],
    documents: ["Investment Memo", "Financial Model", "Heritage Assessment"],
    image: "https://images.unsplash.com/photo-1464938050520-ef2571571e1f?w=800&h=600&fit=crop"
  },
  {
    id: "munich-residential-1",
    title: "Munich Student Housing",
    location: "Munich, Germany",
    country: "germany",
    dealType: "cashflow",
    status: "open",
    price: "€6.2M",
    equityNeeded: "€2.1M",
    leverageRange: "65% LTV",
    businessPlan: "Stabilized student housing asset near university campus. Strong occupancy and waiting list demand.",
    timeline: "Long-term hold, 5+ years",
    highlights: [
      "98% historical occupancy",
      "Waiting list of prospective tenants",
      "Inflation-linked rent adjustments"
    ],
    risks: [
      "University enrollment fluctuations",
      "Rent control legislation",
      "Building maintenance requirements"
    ],
    mitigations: [
      "Multiple universities in catchment",
      "Below-market rents provide buffer",
      "Recent major capex completed"
    ],
    documents: ["Investment Memo", "Financial Model", "Occupancy History", "Capex Report"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop"
  },
  {
    id: "malaga-hospitality-1",
    title: "Malaga Boutique Hotel",
    location: "Malaga, Spain",
    country: "spain",
    dealType: "development",
    status: "sold",
    price: "€3.6M",
    equityNeeded: "€1.4M",
    leverageRange: "60% LTC",
    businessPlan: "Development of 28-key boutique hotel in historic center. Partnership with established operator.",
    timeline: "Completed - Sold December 2024",
    highlights: [
      "Pre-agreed operator lease",
      "Strong Costa del Sol tourism market",
      "Successful exit achieved"
    ],
    risks: [
      "Execution risk managed",
      "Operator performance dependency",
      "Market timing"
    ],
    mitigations: [
      "Long-term operator agreement",
      "Conservative revenue assumptions",
      "Exit at opportune market window"
    ],
    documents: ["Case Study Available"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop"
  }
];

export const dealTypesContent = {
  cashflow: {
    title: "Cashflow Deals",
    examples: ["Stabilized multifamily", "Student housing", "Long-term leased retail"],
    investorProfile: "Income-focused investors seeking stable, predictable returns with lower volatility",
    riskFocus: "Tenant quality, lease duration, market rent sustainability, operational efficiency"
  },
  "value-add": {
    title: "Value-Add Deals",
    examples: ["Office repositioning", "Retail conversion", "Multifamily renovation"],
    investorProfile: "Investors comfortable with execution risk in exchange for enhanced return potential",
    riskFocus: "Capex accuracy, leasing timeline, construction execution, market timing"
  },
  development: {
    title: "Development Deals",
    examples: ["Ground-up residential", "Hotel development", "Mixed-use projects"],
    investorProfile: "Experienced investors who understand development cycles and are comfortable with higher risk profiles",
    riskFocus: "Entitlement, construction, sales/leasing velocity, exit timing"
  }
};

export const filterSteps = [
  {
    step: 1,
    title: "Screening",
    description: "Initial review of liquidity, market fundamentals, and seller motivation"
  },
  {
    step: 2,
    title: "Cashflow Stress Test",
    description: "Sensitivity analysis on rates, occupancy, and rental income assumptions"
  },
  {
    step: 3,
    title: "Capex & Execution Review",
    description: "Assessment of capital expenditure requirements and execution complexity"
  },
  {
    step: 4,
    title: "Downside Protection",
    description: "Evaluation of exit strategies and downside scenarios"
  },
  {
    step: 5,
    title: "Investor Fit",
    description: "Matching deal characteristics to appropriate investor profiles"
  }
];

export const faqItems = [
  {
    question: "How are deals selected?",
    answer: "Every deal goes through our five-step Weltmann Filter. We evaluate liquidity, stress test cashflows, review capex requirements, assess downside protection, and determine investor fit. If a deal doesn't pass all stages, we don't represent it — regardless of the potential fee."
  },
  {
    question: "How do you get paid?",
    answer: "We operate on a success-based model. Our fees are typically structured as a percentage of the transaction value, payable at closing. This aligns our interests with yours — we only succeed when you successfully close a deal."
  },
  {
    question: "What investor types do you work with?",
    answer: "We work with family offices, private investors, small institutions, and syndicates who are looking for cross-border European real estate opportunities. Our typical equity checks range from €500K to €5M per deal."
  },
  {
    question: "Do you co-invest?",
    answer: "In select situations, our principals may co-invest alongside clients. This is evaluated on a deal-by-deal basis and is never a prerequisite for representing a transaction."
  },
  {
    question: "What geographies and asset types?",
    answer: "We focus on Germany, Spain, and the Baltic states (Latvia, Lithuania, Estonia). Asset types include residential, office, retail, hospitality, and development opportunities. We specialize in deals where local knowledge and cross-border execution create value."
  }
];

export const teamMembers = [
  {
    name: "Alexander Weltmann",
    role: "Founder & Managing Director",
    bio: "15+ years in European real estate investment and advisory. Previously at institutional asset managers in London and Frankfurt."
  },
  {
    name: "Maria Gonzalez",
    role: "Director, Spain & Iberia",
    bio: "10+ years in Spanish real estate with deep networks in Valencia, Malaga, and Madrid markets."
  },
  {
    name: "Janis Berzins",
    role: "Director, Baltics",
    bio: "Native Latvian with extensive experience in Baltic real estate transactions and local operator relationships."
  },
  {
    name: "Thomas Müller",
    role: "Director, Germany",
    bio: "Former banker with specialization in German real estate finance and institutional transactions."
  }
];

export const companyValues = [
  {
    title: "Transparency",
    description: "We share the same information with investors that we use to make our own decisions. No hidden agendas."
  },
  {
    title: "Discipline",
    description: "We walk away from more deals than we represent. Our reputation depends on the quality of every opportunity we present."
  },
  {
    title: "Long-term Relationships",
    description: "We build partnerships, not transactions. Our goal is to be your trusted source for European real estate opportunities."
  }
];
