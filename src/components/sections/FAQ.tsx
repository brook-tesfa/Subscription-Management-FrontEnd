import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does the subscription tracking work?",
    answer: "Our system automatically monitors your subscriptions and sends timely notifications before renewal dates. You can also manually add and manage subscriptions through our intuitive dashboard."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your SubsTrackr subscription at any time. For your tracked subscriptions, we provide easy cancellation instructions and reminders for each service."
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely! We use bank-level encryption and security measures to protect your sensitive data. We never store your full credit card information on our servers."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on our Pro plan. No credit card required to start. You can explore all features risk-free."
  },
  {
    question: "How do I import my existing subscriptions?",
    answer: "You can import subscriptions manually, connect your email to scan for subscription emails, or link your bank account to automatically detect recurring payments."
  },
  {
    question: "What happens if I exceed my subscription limit?",
    answer: "On the free plan, you'll be notified when you reach your limit. You can upgrade to Pro for unlimited subscriptions or remove some existing ones to add new ones."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-blue-900/20 backdrop-blur-xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-xl">
            Everything you need to know about SubsTrackr
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between"
      >
        <span className="text-lg font-medium text-white">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-blue-400" />
          ) : (
            <Plus className="w-5 h-5 text-blue-400" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-400">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}