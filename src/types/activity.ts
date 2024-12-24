export type ActivityType = 'add' | 'pause' | 'resume' | 'delete';

export interface Activity {
  id: string;
  type: ActivityType;
  subscriptionName: string;
  timestamp: Date;
}