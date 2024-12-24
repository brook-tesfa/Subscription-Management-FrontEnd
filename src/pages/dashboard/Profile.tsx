import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Camera, MapPin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">My Profile</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <button className="absolute bottom-0 right-0 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-xl font-semibold text-white">John Doe</h3>
              <p className="text-gray-400">Product Manager</p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>john@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <LinkIcon className="w-4 h-4" />
                <span>github.com/johndoe</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <InputField label="First Name" defaultValue="John" />
                <InputField label="Last Name" defaultValue="Doe" />
              </div>
              <InputField label="Email" type="email" defaultValue="john@example.com" />
              <InputField label="Phone" type="tel" defaultValue="+1 234 567 890" />
              <InputField label="Location" defaultValue="San Francisco, CA" />
              <div className="pt-4">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Save Changes
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Account Security</h3>
            <div className="space-y-4">
              <InputField label="Current Password" type="password" />
              <InputField label="New Password" type="password" />
              <InputField label="Confirm New Password" type="password" />
              <div className="pt-4">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Update Password
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
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