import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Plus, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const paymentMethods = [
  {
    id: 1,
    type: 'Visa',
    last4: '4242',
    expiry: '12/24',
    isDefault: true,
  },
  {
    id: 2,
    type: 'Mastercard',
    last4: '8888',
    expiry: '08/25',
    isDefault: false,
  },
];

const billingHistory = [
  {
    id: 1,
    date: '2024-03-01',
    amount: 49.99,
    status: 'Paid',
    description: 'Pro Plan - Monthly',
  },
  {
    id: 2,
    date: '2024-02-01',
    amount: 49.99,
    status: 'Paid',
    description: 'Pro Plan - Monthly',
  },
];

export default function Billing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Billing & Payments</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Payment Methods</h3>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Plus className="w-4 h-4 mr-2" />
                Add New Card
              </Button>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-8 h-8 text-blue-400" />
                    <div>
                      <p className="text-white">
                        {method.type} ending in {method.last4}
                      </p>
                      <p className="text-sm text-gray-400">Expires {method.expiry}</p>
                    </div>
                  </div>
                  {method.isDefault && (
                    <span className="text-sm text-blue-400">Default</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Billing History</h3>
            <div className="space-y-4">
              {billingHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div>
                    <p className="text-white">{item.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white">${item.amount}</p>
                    <span className="text-sm text-green-400">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-1">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Current Plan</h3>
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Pro Plan</span>
                <span className="text-blue-400">$49.99/mo</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <AlertCircle className="w-4 h-4" />
                <span>Renews on Apr 1, 2024</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mb-4">
              Change Plan
            </Button>
            <Button variant="ghost" className="w-full text-red-400 hover:text-red-300">
              Cancel Subscription
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}