import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "Up to 5 subscriptions",
      "Basic notifications",
      "Monthly spending report",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "9.99",
    description: "Best for personal use",
    popular: true,
    features: [
      "Unlimited subscriptions",
      "Advanced analytics",
      "Priority support",
      "Calendar integration",
      "Custom categories",
      "Payment automation",
      "Export data"
    ]
  },
  {
    name: "Enterprise",
    price: "29.99",
    description: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "SSO authentication",
      "Advanced security"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-blue-900/20 backdrop-blur-xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your subscription management needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PriceCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceCard({ plan, index }: { plan: typeof plans[0] & { popular?: boolean }, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      {plan.popular && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center gap-1">
            <Star className="w-4 h-4" /> Most Popular
          </span>
        </div>
      )}
      
      <div className={`relative p-8 rounded-2xl backdrop-blur-sm h-full border ${
        plan.popular 
          ? 'bg-white/10 border-blue-500/50' 
          : 'bg-white/5 border-white/10'
      }`}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
          <p className="text-gray-400 mb-4">{plan.description}</p>
          <div className="flex items-center justify-center mb-6">
            <span className="text-3xl font-bold text-white">$</span>
            <span className="text-5xl font-bold text-white">{plan.price}</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
          <Button 
            className={`w-full ${
              plan.popular
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            Get Started
          </Button>
        </div>
        
        <div className="space-y-3">
          {plan.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
              className="flex items-center space-x-3"
            >
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}