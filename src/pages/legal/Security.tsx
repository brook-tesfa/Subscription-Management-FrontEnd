import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, Bell } from 'lucide-react';

export default function Security() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-white mb-8">Security</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <SecurityCard
          icon={Shield}
          title="Data Protection"
          description="We use industry-standard encryption to protect your sensitive data."
        />
        <SecurityCard
          icon={Lock}
          title="Access Control"
          description="Strict authentication and authorization protocols are in place."
        />
        <SecurityCard
          icon={Server}
          title="Secure Infrastructure"
          description="Our servers are protected by advanced security measures."
        />
        <SecurityCard
          icon={Bell}
          title="Security Alerts"
          description="Real-time monitoring and alert systems for suspicious activities."
        />
      </div>

      <div className="mt-12 space-y-6 text-gray-300">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Security Practices</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Regular security audits and penetration testing</li>
            <li>Compliance with industry security standards</li>
            <li>Employee security training and awareness</li>
            <li>Incident response and recovery procedures</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}

function SecurityCard({ icon: Icon, title, description }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-500/10">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}