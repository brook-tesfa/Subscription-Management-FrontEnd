import { useState, useEffect } from 'react';
import { Subscription } from '@/types/subscription';

const initialSubscriptions: Subscription[] = [
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

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(initialSubscriptions);

  const totalSpending = subscriptions.reduce((total, sub) => {
    if (sub.active) {
      const monthlyAmount = sub.frequency === 'Monthly' 
        ? sub.amount 
        : sub.frequency === 'Quarterly'
        ? sub.amount / 3
        : sub.amount / 12;
      return total + monthlyAmount;
    }
    return total;
  }, 0);

  const addSubscription = (subscription: Omit<Subscription, 'id'>) => {
    const newSubscription = {
      ...subscription,
      id: Date.now().toString(),
    };
    setSubscriptions(prev => [...prev, newSubscription]);
    return newSubscription;
  };

  const updateSubscription = (id: string, updates: Partial<Subscription>) => {
    setSubscriptions(prev =>
      prev.map(sub => (sub.id === id ? { ...sub, ...updates } : sub))
    );
  };

  const toggleSubscriptionStatus = (id: string) => {
    setSubscriptions(prev =>
      prev.map(sub => (sub.id === id ? { ...sub, active: !sub.active } : sub))
    );
  };

  return {
    subscriptions,
    totalSpending,
    addSubscription,
    updateSubscription,
    toggleSubscriptionStatus,
  };
}