import React from 'react';
import { motion } from 'framer-motion';
import { SpendingGraph } from '@/components/dashboard/SpendingGraph';
import { AnalyticsChart } from '@/components/AnalyticsChart';
import { useSubscriptions } from '@/hooks/useSubscriptions';

export default function Analytics() {
  const { subscriptions } = useSubscriptions();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Analytics</h2>
      
      <div className="grid gap-6">
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Spending Overview</h3>
          <SpendingGraph subscriptions={subscriptions} />
        </div>
        
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Category Distribution</h3>
          <AnalyticsChart subscriptions={subscriptions} />
        </div>
      </div>
    </motion.div>
  );
}