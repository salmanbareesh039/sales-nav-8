export interface PricingPlan {
  title: string;
  description: string;
  basePrice: number;
  features: string[];
  popular?: boolean;
  savings?: string;
}

export interface SalesNavigatorPlan {
  duration: number;
  basePrice: number;
  pricePerMonth: number;
  savings?: string;
  popular?: boolean;
}

export interface PremiumPlan extends PricingPlan {
  duration: number;
}