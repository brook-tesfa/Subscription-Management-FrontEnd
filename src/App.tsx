import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ActivityProvider } from './contexts/ActivityContext';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './components/layout/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Subscriptions from './pages/dashboard/Subscriptions';
import Analytics from './pages/dashboard/Analytics';
import Team from './pages/dashboard/Team';
import Settings from './pages/dashboard/Settings';
import Help from './pages/dashboard/Help';
import Profile from './pages/dashboard/Profile';
import Billing from './pages/dashboard/Billing';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';
import Security from './pages/legal/Security';

function App() {
  return (
    <ActivityProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="team" element={<Team />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
            <Route path="profile" element={<Profile />} />
            <Route path="billing" element={<Billing />} />
          </Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </BrowserRouter>
    </ActivityProvider>
  );
}

export default App;