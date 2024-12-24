import React, { createContext, useContext, useState } from 'react';
import { Activity } from '@/types/activity';

interface ActivityContextType {
  activities: Activity[];
  addActivity: (type: Activity['type'], subscriptionName: string) => void;
}

const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

export function ActivityProvider({ children }: { children: React.ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (type: Activity['type'], subscriptionName: string) => {
    const newActivity = {
      id: Date.now().toString(),
      type,
      subscriptionName,
      timestamp: new Date(),
    };
    setActivities(prev => [newActivity, ...prev]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivity() {
  const context = useContext(ActivityContext);
  if (undefined === context) {
    throw new Error('useActivity must be used within an ActivityProvider');
  }
  return context;
}