import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, User, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';
import { useNotifications } from '@/hooks/useNotifications';

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const navigate = useNavigate();
  const { notifications, markAsRead } = useNotifications();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 backdrop-blur-xl bg-black/10 border-b border-white/10"
    >
      <div className="px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="md:hidden text-gray-400"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-gray-400" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-black flex items-center justify-center text-xs text-white">
                      {notifications.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[280px] md:w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.length === 0 ? (
                  <div className="py-4 px-2 text-center text-sm text-gray-400">
                    No new notifications
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <DropdownMenuItem 
                      key={notification.id}
                      onClick={() => markAsRead(notification.id)}
                      className="flex flex-col items-start py-2"
                    >
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-sm text-gray-400">{notification.message}</span>
                    </DropdownMenuItem>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" onClick={() => handleNavigation('/dashboard/settings')}>
              <Settings className="h-5 w-5 text-gray-400" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0">
                  <User className="h-4 w-4 text-white" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleNavigation('/dashboard/profile')}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation('/dashboard/settings')}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation('/dashboard/billing')}>
                  Billing
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={handleLogout} 
                  className="text-red-400 focus:text-red-400"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.header>
  );
}