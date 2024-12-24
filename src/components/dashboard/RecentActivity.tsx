import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Plus, Pause, Play, Trash2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useActivity } from '@/contexts/ActivityContext';
import type { Activity } from '@/types/activity';

export function RecentActivity() {
  const { activities } = useActivity();

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'add':
        return <Plus className="w-4 h-4 text-green-400" />;
      case 'pause':
        return <Pause className="w-4 h-4 text-amber-400" />;
      case 'resume':
        return <Play className="w-4 h-4 text-blue-400" />;
      case 'delete':
        return <Trash2 className="w-4 h-4 text-red-400" />;
    }
  };

  const getActivityText = (activity: Activity) => {
    switch (activity.type) {
      case 'add':
        return `Added ${activity.subscriptionName} subscription`;
      case 'pause':
        return `Paused ${activity.subscriptionName} subscription`;
      case 'resume':
        return `Resumed ${activity.subscriptionName} subscription`;
      case 'delete':
        return `Removed ${activity.subscriptionName} subscription`;
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.length === 0 ? (
          <p className="text-gray-400 text-center py-4">No recent activity</p>
        ) : (
          activities.map((activity) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="p-2 rounded-full bg-white/10">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">{getActivityText(activity)}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">
                    {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}