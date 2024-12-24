import React from 'react';
import { motion } from 'framer-motion';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { InteractiveBackground } from '@/components/three/InteractiveBackground';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20">
      <InteractiveBackground />
      
      <DashboardSidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />

      <main className={cn(
        "min-h-screen transition-all duration-300",
        isSidebarOpen ? "pl-64" : "pl-0"
      )}>
        <DashboardHeader />
        <DashboardOverview />
      </main>
    </div>
  );
}