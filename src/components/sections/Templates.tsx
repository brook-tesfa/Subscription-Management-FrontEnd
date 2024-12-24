import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Wallet, 
  Bell, 
  BarChart3,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const templates = [
  {
    title: "Payment Cards",
    description: "Manage all your subscription cards in one place with detailed tracking and analytics.",
    icon: CreditCard,
    gradient: "from-blue-500/20 to-purple-500/20",
    borderGlow: "group-hover:border-blue-500/50"
  },
  {
    title: "Smart Wallet",
    description: "Intelligent wallet system that predicts spending patterns and suggests optimizations.",
    icon: Wallet,
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGlow: "group-hover:border-purple-500/50"
  },
  {
    title: "Notifications",
    description: "Custom alert system for renewals, price changes, and subscription updates.",
    icon: Bell,
    gradient: "from-pink-500/20 to-red-500/20",
    borderGlow: "group-hover:border-pink-500/50"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics to track and optimize your subscription spending.",
    icon: BarChart3,
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGlow: "group-hover:border-cyan-500/50"
  }
];

export function Templates() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-blue-900/20 backdrop-blur-xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Ready-to-Use Templates
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Beautiful and functional components to enhance your subscription management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
              <div className={`relative h-full p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-300 ${template.borderGlow}`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${template.gradient} p-3 mb-6`}>
                  <template.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{template.title}</h3>
                <p className="text-gray-400 mb-6">{template.description}</p>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    className="px-0 text-blue-400 hover:text-blue-300 hover:bg-transparent"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="px-0 text-purple-400 hover:text-purple-300 hover:bg-transparent"
                  >
                    Preview <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Browse All Templates <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}