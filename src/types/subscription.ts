export type SubscriptionCategory = 
  | 'Entertainment'
  | 'Software'
  | 'Fitness'
  | 'Music'
  | 'Streaming'
  | 'Other';

export type BillingFrequency = 
  | 'Monthly'
  | 'Quarterly'
  | 'Annually';

export interface Subscription {
  id: string;
  name: string;
  amount: number;
  category: SubscriptionCategory;
  frequency: BillingFrequency;
  nextBillingDate: Date;
  logo?: string;
  description?: string;
  active: boolean;
}