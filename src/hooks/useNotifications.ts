import { useState } from 'react';

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'Subscription Renewal',
    message: 'Netflix subscription renews tomorrow',
    timestamp: new Date(),
    read: false,
  },
  {
    id: '2',
    title: 'New Feature',
    message: 'Check out our new budget tracking feature',
    timestamp: new Date(),
    read: false,
  },
];

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const addNotification = (title: string, message: string) => {
    const newNotification: Notification = {
      id: Date.now().toString(),
      title,
      message,
      timestamp: new Date(),
      read: false,
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return {
    notifications: notifications.filter(n => !n.read),
    allNotifications: notifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    clearNotifications,
  };
}