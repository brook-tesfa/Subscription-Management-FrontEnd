import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Help() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Help Center</h2>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <HelpCard
          icon={FileText}
          title="Documentation"
          description="Browse our comprehensive guides and documentation"
          buttonText="View Docs"
        />
        
        <HelpCard
          icon={MessageCircle}
          title="Live Chat Support"
          description="Chat with our support team in real-time"
          buttonText="Start Chat"
        />
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            "How do I add a new subscription?",
            "Can I export my subscription data?",
            "How do I change my billing information?",
            "What payment methods do you accept?",
          ].map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <button className="w-full flex items-center justify-between text-white hover:text-blue-400">
                <span>{question}</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function HelpCard({ icon: Icon, title, description, buttonText }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-500/10">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <Button variant="outline" className="w-full">
        {buttonText}
      </Button>
    </motion.div>
  );
}