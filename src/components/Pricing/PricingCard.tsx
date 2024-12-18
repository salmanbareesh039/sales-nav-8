import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import EmailModal from '../EmailModal';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
  savings?: string;
  pricePerMonth?: string;
}

export default function PricingCard({
  title,
  description,
  price,
  duration,
  features,
  popular,
  savings,
  pricePerMonth
}: PricingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDirectPayment = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      localStorage.setItem('pendingOrder', JSON.stringify({
        plan: title,
        price: `₹${price}`,
        duration: duration,
        timestamp: new Date().toISOString()
      }));
      
      setIsProcessing(false);
    } catch (error: any) {
      console.error('Payment initiation failed:', error);
      setError('Failed to initiate payment. Please try again.');
      setIsProcessing(false);
      setTimeout(() => setError(null), 5000);
    }
  };

  const isPremiumBusiness = title.includes('Premium Business');

  return (
    <div className={`h-full ${popular ? 'lg:scale-110' : ''}`}>
      <div className={`h-full glass-card rounded-2xl transition-all duration-300 ${
        popular ? 'border-2 border-purple-500/50 shadow-lg shadow-purple-500/20' : ''
      }`}>
        <div className="p-8">
          {popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
              Most Popular
            </span>
          )}
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-gradient">₹{price}</span>
              <span className="text-gray-400">{duration}</span>
            </div>
            {pricePerMonth && (
              <p className="text-sm text-gray-400 mt-2">
                ₹{pricePerMonth}/month
              </p>
            )}
            {savings && (
              <div className="mt-3">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Save ₹{savings}
                </span>
              </div>
            )}
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="space-y-3 mt-auto">
            <button
              onClick={handleDirectPayment}
              disabled={isProcessing}
              className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25 ring-2 ring-purple-500/50 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Pay Now'
              )}
            </button>
            
            {!isPremiumBusiness && (
              <button
                onClick={() => setIsModalOpen(true)}
                disabled={isProcessing}
                className="w-full py-3 px-6 rounded-xl font-semibold glass-card hover:bg-white/10 transition-all duration-300 disabled:opacity-50"
              >
                Pay After Activation
              </button>
            )}
          </div>

          {error && (
            <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}
        </div>
      </div>

      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planTitle={title}
        paymentType="after"
      />
    </div>
  );
}