export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  imageUrl: string;
  badge?: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
  city: string;
  serviceType: 'Hoch- & Tiefbau' | 'Sanierung & Umbau' | 'Außenanlagen' | 'Sonstiges';
  details: string;
  gdprConsent: boolean;
}

export interface PromoCampaign {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  validUntil: string;
  discount: string;
}
