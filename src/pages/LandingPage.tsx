import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Templates } from '../components/sections/Templates';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Pricing } from '../components/sections/Pricing';
import { FAQ } from '../components/sections/FAQ';
import { Footer } from '../components/layout/Footer';
import { InteractiveBackground } from '../components/three/InteractiveBackground';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
        </div>
        
        {/* Interactive 3D Background */}
        <InteractiveBackground />
        
        {/* Content */}
        <div className="relative">
          <Navbar />
          <Hero />
          <Features />
          <Templates />
          <HowItWorks />
          <Pricing />
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
}