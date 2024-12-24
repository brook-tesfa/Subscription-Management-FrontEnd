import React from 'react';
import { Plus, BarChart3, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface DashboardHeaderProps {
  totalSpending: number;
  onAddSubscription: () => void;
}

export function DashboardHeader({ totalSpending, onAddSubscription }: DashboardHeaderProps) {
  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalSpending);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-900"
            >
              Subscriptions
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-1 flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span className="text-gray-600">Monthly spending:</span>
                <motion.span 
                  className="font-semibold text-gray-900"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  {formattedTotal}
                </motion.span>
              </div>
              <motion.div 
                className="flex items-center space-x-2 text-green-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Active</span>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={onAddSubscription}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Subscription
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}