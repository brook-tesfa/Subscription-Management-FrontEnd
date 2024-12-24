import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, Calendar, CreditCard, PieChart, 
  Shield, Zap, RefreshCw, Settings
} from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get timely reminders before renewals and payment due dates."
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description: "Sync with your favorite calendar for subscription tracking."
  },
  {
    icon: CreditCard,
    title: "Automated Payments",
    description: "Set up automatic payments to never miss a subscription."
  },
  {
    icon: PieChart,
    title: "Spending Analytics",
    description: "Visualize and analyze your subscription spending patterns."
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Bank-level security to protect your sensitive information."
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "Pause, cancel, or modify subscriptions with one click."
  },
  {
    icon: RefreshCw,
    title: "Auto-Renewal",
    description: "Automatic subscription renewal management system."
  },
  {
    icon: Settings,
    title: "Custom Settings",
    description: "Personalize notifications and payment preferences."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Everything you need to manage your subscriptions effectively
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 mb-4">
        <Icon className="w-full h-full text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </motion.div>
  );
}