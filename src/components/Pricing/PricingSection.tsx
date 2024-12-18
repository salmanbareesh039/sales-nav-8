import React from 'react';
import DynamicPricingCard from './DynamicPricingCard';
import PricingCard from './PricingCard';
import { salesNavigatorPlans, salesNavigatorFeatures, premiumBusinessPlan } from './config';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <DynamicPricingCard 
            plans={salesNavigatorPlans}
            features={salesNavigatorFeatures}
          />
          <PricingCard
            title={premiumBusinessPlan.title}
            description={premiumBusinessPlan.description}
            price={premiumBusinessPlan.basePrice.toString()}
            duration={`for ${premiumBusinessPlan.duration} months`}
            features={premiumBusinessPlan.features}
          />
        </div>
      </div>
    </section>
  );
}