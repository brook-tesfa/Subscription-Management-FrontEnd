import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, CreditCard, Calendar } from 'lucide-react';

interface StatsGridProps {
  totalSpending: number;
  subscriptionCount: number;
}

export function StatsGrid({ totalSpending, subscriptionCount }: StatsGridProps) {
  const stats = [
    {
      label: 'Total Spending',
      value: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(totalSpending),
      change: '+12.5%',
      trend: 'up',
      icon: CreditCard,
    },
    {
      label: 'Active Subscriptions',
      value: subscriptionCount.toString(),
      change: subscriptionCount > 0 ? '+1' : '0',
      trend: 'up',
      icon: Calendar,
    },
    {
      label: 'Monthly Savings',
      value: '$350.00',
      change: '-8.3%',
      trend: 'down',
      icon: TrendingDown,
    },
    {
      label: 'Upcoming Renewals',
      value: '3',
      change: '2 this week',
      trend: 'neutral',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-white/5">
              <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
            </div>
            <span className={`text-sm ${
              stat.trend === 'up' ? 'text-green-400' : 
              stat.trend === 'down' ? 'text-red-400' : 
              'text-gray-400'
            }`}>
              {stat.change}
            </span>
          </div>
          <p className="text-sm text-gray-400">{stat.label}</p>
          <p className="text-xl md:text-2xl font-semibold text-white mt-1">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
}