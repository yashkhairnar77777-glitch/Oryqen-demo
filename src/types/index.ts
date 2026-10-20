export type BusinessCategory =
  | 'all'
  | 'hospitality'
  | 'venues'
  | 'beauty'
  | 'realestate'
  | 'retail';

export interface ConceptProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'hospitality' | 'venues' | 'beauty' | 'realestate' | 'retail';
  categoryLabel: string;
  tagline: string;
  image: string;
  description: string;
  coreHighlights: string[];
  conversionFeatures: {
    title: string;
    description: string;
  }[];
  prototypeSpecs: {
    targetAudience: string;
    primaryConversionGoal: string;
    mobileOptimization: string;
    keyDeliverables: string[];
  };
  sampleInteractiveData: {
    type: 'menu' | 'capacity' | 'services' | 'realestate' | 'boutique';
    headline: string;
    subheadline: string;
    items?: {
      title: string;
      meta?: string;
      description: string;
      price?: string;
      badge?: string;
    }[];
    calculator?: {
      min: number;
      max: number;
      defaultVal: number;
      label: string;
      unit: string;
      tiers: { min: number; max: number; name: string; layoutRecommendation: string }[];
    };
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  idealFor: string;
  turnaround: string;
}

export interface InquiryFormData {
  businessType: string;
  serviceNeeded: string;
  timeline: string;
  clientName: string;
  businessName: string;
  email: string;
  phone: string;
  projectBrief: string;
}
