import { useState } from 'react';

export interface Activity {
  id: string;
  type: 'add' | 'pause' | 'resume';
  subscriptionName: string;
  timestamp: Date;
}

export function useActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (type: Activity['type'], subscriptionName: string) => {
    const newActivity = {
      id: Date.now().toString(),
      type,
      subscriptionName,
      timestamp: new Date(),
    };
    setActivities(prev => [newActivity, ...prev].slice(0, 10)); // Keep only last 10 activities
  };

  return {
    activities,
    addActivity,
  };
}