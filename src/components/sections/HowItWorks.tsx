import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: "Sign Up",
    description: "Create your account in seconds. No credit card required.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1000"
  },
  {
    title: "Add Subscriptions",
    description: "Easily import or manually add your existing subscriptions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
  },
  {
    title: "Monitor & Manage",
    description: "Track expenses, receive notifications, and manage all subscriptions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
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
            How It Works
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Get started with SubsTrackr in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            What you'll get
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Automated tracking system",
              "Real-time notifications",
              "Detailed analytics",
              "Secure payment processing",
              "24/7 customer support",
              "Mobile app access"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm h-full">
        <div className="aspect-video mb-6 rounded-xl overflow-hidden">
          <motion.img
            src={step.image}
            alt={step.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex items-center mb-4">
          <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
            {index + 1}
          </span>
          <h3 className="text-xl font-semibold text-white ml-3">{step.title}</h3>
        </div>
        <p className="text-gray-400">{step.description}</p>
      </div>
    </motion.div>
  );
}