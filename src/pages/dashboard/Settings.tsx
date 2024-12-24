import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Lock, User, CreditCard, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Settings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">Settings</h2>

      <div className="grid gap-6">
        <SettingsSection
          icon={User}
          title="Profile Settings"
          description="Manage your account information and preferences"
        >
          <div className="space-y-4">
            <InputField label="Display Name" defaultValue="John Doe" />
            <InputField label="Email" type="email" defaultValue="john@example.com" />
            <InputField label="Phone" type="tel" defaultValue="+1 234 567 890" />
          </div>
        </SettingsSection>

        <SettingsSection
          icon={Bell}
          title="Notifications"
          description="Configure how you receive notifications"
        >
          <div className="space-y-4">
            <ToggleSetting label="Email Notifications" defaultChecked />
            <ToggleSetting label="Push Notifications" defaultChecked />
            <ToggleSetting label="SMS Notifications" />
          </div>
        </SettingsSection>

        <SettingsSection
          icon={Lock}
          title="Security"
          description="Manage your security preferences"
        >
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Enable Two-Factor Authentication
            </Button>
          </div>
        </SettingsSection>
      </div>
    </motion.div>
  );
}

function SettingsSection({ icon: Icon, title, description, children }: any) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-blue-400" />
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function InputField({ label, type = "text", defaultValue }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function ToggleSetting({ label, defaultChecked }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
      </label>
    </div>
  );
}