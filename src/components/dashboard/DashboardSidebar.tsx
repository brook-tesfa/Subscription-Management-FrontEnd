import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home,
  CreditCard,
  PieChart,
  Settings,
  Users,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface DashboardSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: Home, label: 'Overview', path: '/dashboard' },
  { icon: CreditCard, label: 'Subscriptions', path: '/dashboard/subscriptions' },
  { icon: PieChart, label: 'Analytics', path: '/dashboard/analytics' },
  { icon: Users, label: 'Team', path: '/dashboard/team' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  { icon: HelpCircle, label: 'Help', path: '/dashboard/help' },
];

export function DashboardSidebar({ isOpen, onToggle }: DashboardSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 text-white"
      >
        <Menu className="h-6 w-6" />
      </Button>
      
      <motion.aside
        initial={{ x: -300 }}
        animate={{ 
          x: isOpen && (isMobileMenuOpen || window.innerWidth >= 768) ? 0 : -300 
        }}
        className="fixed left-0 top-0 h-full w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 z-40"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/dashboard')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
            >
              SubsTrackr
            </motion.h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="text-gray-400 hidden md:flex"
            >
              {isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </Button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-500/10 text-blue-400' 
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 text-gray-400 hover:text-red-400"
          >
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </Button>
        </div>
      </motion.aside>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}