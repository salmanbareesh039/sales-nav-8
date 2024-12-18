import { SalesNavigatorPlan, PremiumPlan } from './types';

export const salesNavigatorPlans: Record<number, SalesNavigatorPlan> = {
  1: {
    duration: 1,
    basePrice: 2500,
    pricePerMonth: 2500,
  },
  6: {
    duration: 6,
    basePrice: 11000,
    pricePerMonth: 1833,
    savings: "4,000",
    popular: true
  },
  12: {
    duration: 12,
    basePrice: 20000,
    pricePerMonth: 1667,
    savings: "10,000"
  }
};

export const salesNavigatorFeatures = [
  "Advanced lead and company search",
  "Extended network access",
  "InMail messages (30 per month)",
  "Lead recommendations",
  "Real-time sales updates",
  "CRM integration",
  "Smart links",
  "Notes and tags",
  "Priority customer support",
  "Team collaboration tools",
  "Advanced reporting",
  "Bulk InMail credits"
];

export const premiumBusinessPlan: PremiumPlan = {
  title: "LinkedIn Premium Business",
  description: "Enhanced professional presence",
  basePrice: 3000,
  duration: 6,
  features: [
    "See who viewed your profile",
    "Business insights",
    "Unlimited people browsing",
    "15 InMail messages per month",
    "Online video courses",
    "Salary insights",
    "Applicant insights",
    "Premium badge"
  ]
};