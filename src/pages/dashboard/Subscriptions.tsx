import React from 'react';
import { motion } from 'framer-motion';
import { SubscriptionsList } from '@/components/dashboard/SubscriptionsList';

export default function Subscriptions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Manage Subscriptions</h2>
      <SubscriptionsList />
    </motion.div>
  );
}