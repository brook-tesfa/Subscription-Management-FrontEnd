import React from 'react';
import { motion } from 'framer-motion';
import { SpendingGraph } from './SpendingGraph';
import { SubscriptionsList } from './SubscriptionsList';
import { StatsGrid } from './StatsGrid';
import { RecentActivity } from './RecentActivity';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { useActivities } from '@/hooks/useActivities';

export function DashboardOverview() {
  const { subscriptions, totalSpending } = useSubscriptions();
  const { activities } = useActivities();

  return (
    <div className="p-4 md:p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Dashboard Overview</h2>
        <StatsGrid totalSpending={totalSpending} subscriptionCount={subscriptions.length} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid lg:grid-cols-3 gap-6"
      >
        <div className="lg:col-span-2 p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Spending Overview</h3>
          <div className="h-[300px] md:h-[400px]">
            <SpendingGraph subscriptions={subscriptions} />
          </div>
        </div>

        <RecentActivity activities={activities} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <SubscriptionsList />
      </motion.div>
    </div>
  );
}