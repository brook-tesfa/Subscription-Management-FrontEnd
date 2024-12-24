import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { DashboardHeader } from '../dashboard/DashboardHeader';
import { DashboardSidebar } from '../dashboard/DashboardSidebar';
import { InteractiveBackground } from '../three/InteractiveBackground';
import { cn } from '@/lib/utils';

export default function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  // Don't show sidebar and header for legal pages
  const isLegalPage = [
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/security'
  ].includes(location.pathname);

  const handleMenuClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLegalPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20">
      <InteractiveBackground />
      
      <DashboardSidebar 
        isOpen={isSidebarOpen} 
        isMobileOpen={isMobileMenuOpen}
        onToggle={() => setSidebarOpen(!isSidebarOpen)}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      <main className={cn(
        "min-h-screen transition-all duration-300",
        {
          "md:pl-64": isSidebarOpen,
          "pl-0": !isSidebarOpen || !isMobileMenuOpen
        }
      )}>
        <DashboardHeader onMenuClick={handleMenuClick} />
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}