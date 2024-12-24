import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SubscriptionCard } from '../SubscriptionCard';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import type { Subscription } from '@/types/subscription';
import { SubscriptionModal } from '../SubscriptionModal';

const mockSubscriptions: Subscription[] = [
  {
    id: '1',
    name: 'Netflix',
    amount: 15.99,
    category: 'Entertainment',
    frequency: 'Monthly',
    nextBillingDate: new Date('2024-04-01'),
    active: true,
  },
  {
    id: '2',
    name: 'Spotify',
    amount: 9.99,
    category: 'Music',
    frequency: 'Monthly',
    nextBillingDate: new Date('2024-03-28'),
    active: true,
  },
];

export function SubscriptionsList() {
  const [subscriptions, setSubscriptions] = React.useState(mockSubscriptions);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [editingSubscription, setEditingSubscription] = React.useState<Subscription | null>(null);

  const handleEdit = (id: string) => {
    const subscription = subscriptions.find(sub => sub.id === id);
    if (subscription) {
      setEditingSubscription(subscription);
      setIsModalOpen(true);
    }
  };

  const handlePause = (id: string) => {
    setSubscriptions(subs => 
      subs.map(sub => 
        sub.id === id ? { ...sub, active: !sub.active } : sub
      )
    );
  };

  const handleAddNew = () => {
    setEditingSubscription(null);
    setIsModalOpen(true);
  };

  const handleSubmit = (data: any) => {
    if (editingSubscription) {
      setSubscriptions(subs =>
        subs.map(sub =>
          sub.id === editingSubscription.id ? { ...sub, ...data } : sub
        )
      );
    } else {
      const newSubscription = {
        ...data,
        id: Date.now().toString(),
        active: true,
      };
      setSubscriptions(subs => [...subs, newSubscription]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Active Subscriptions</h3>
        <Button 
          onClick={handleAddNew}
          className="bg-blue-500 hover:bg-blue-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>

      <AnimatePresence>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
              onEdit={handleEdit}
              onPause={handlePause}
              index={index}
            />
          ))}
        </div>
      </AnimatePresence>

      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingSubscription || undefined}
      />
    </div>
  );
}