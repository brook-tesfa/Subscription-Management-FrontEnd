import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Animated Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-32 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Manage Subscriptions
            <br />
            <span className="text-blue-400">Effortlessly</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Track, manage, and optimize all your subscriptions in one place. Never miss a payment or renewal again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500/50 hover:bg-blue-500/10">
              Watch Demo <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Stat number="10K+" label="Active Users" />
          <Stat number="$2M+" label="Managed Monthly" />
          <Stat number="99.9%" label="Uptime" />
        </motion.div>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
    >
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  );
}