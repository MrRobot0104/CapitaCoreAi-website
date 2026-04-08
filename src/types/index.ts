export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: 'live' | 'beta' | 'coming-soon';
  icon: string;
  features: string[];
  link?: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
