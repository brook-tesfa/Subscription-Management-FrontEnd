import React from 'react';
import { Calendar, CreditCard, MoreVertical, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Subscription } from '../types/subscription';

interface SubscriptionCardProps {
  subscription: Subscription;
  onEdit: (id: string) => void;
  onPause: (id: string) => void;
  index: number;
}

export function SubscriptionCard({ subscription, onEdit, onPause, index }: SubscriptionCardProps) {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(subscription.amount);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(subscription.nextBillingDate));

  const isUpcoming = new Date(subscription.nextBillingDate).getTime() - new Date().getTime() < 7 * 24 * 60 * 60 * 1000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`bg-white rounded-xl shadow-sm border transition-all duration-200 ${
        subscription.active ? 'border-gray-200' : 'border-gray-300 opacity-75'
      }`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
            >
              {subscription.logo ? (
                <img 
                  src={subscription.logo} 
                  alt={subscription.name} 
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <CreditCard className="w-6 h-6 text-gray-500" />
              )}
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900">{subscription.name}</h3>
              <motion.div 
                initial={false}
                animate={{ color: subscription.active ? '#10B981' : '#6B7280' }}
                className="text-sm"
              >
                {subscription.category}
              </motion.div>
            </div>
          </div>
          <motion.button 
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => onEdit(subscription.id)}
          >
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </motion.button>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ x: 5 }}
          >
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{formattedDate}</span>
            {isUpcoming && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <AlertCircle className="w-4 h-4 text-amber-500" />
              </motion.div>
            )}
          </motion.div>
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-lg font-semibold text-gray-900">{formattedAmount}</span>
            <span className="text-sm text-gray-500">/{subscription.frequency.toLowerCase()}</span>
          </motion.div>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onPause(subscription.id)}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
              subscription.active 
                ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                : 'border-blue-300 text-blue-700 hover:bg-blue-50'
            }`}
          >
            {subscription.active ? 'Pause' : 'Resume'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onEdit(subscription.id)}
            className="flex-1 px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Manage
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}