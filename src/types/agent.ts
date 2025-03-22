
export interface Agent {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: AgentCategory;
  pricing: {
    model: PricingModel;
    amount: number;
    currency: string;
    period?: string;
  };
  rating: number;
  reviewCount: number;
  developer: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
  popular?: boolean;
  new?: boolean;
}

export type AgentCategory = 
  | 'Assistant'
  | 'Chatbot'
  | 'Trading'
  | 'Automation'
  | 'Healthcare'
  | 'Content'
  | 'Security'
  | 'Education'
  | 'Analytics'
  | 'All';

export type PricingModel = 
  | 'Free'
  | 'Freemium'
  | 'Subscription'
  | 'Pay-per-use'
  | 'One-time';
