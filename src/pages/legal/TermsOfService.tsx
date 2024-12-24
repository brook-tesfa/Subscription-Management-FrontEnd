import React from 'react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using SubsTrackr, you agree to be bound by these Terms of Service
            and all applicable laws and regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">2. User Responsibilities</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Maintain accurate account information</li>
            <li>Protect your account credentials</li>
            <li>Comply with all applicable laws</li>
            <li>Use the service responsibly</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">3. Service Modifications</h2>
          <p>
            We reserve the right to modify or discontinue the service at any time,
            with or without notice. We shall not be liable to you or any third party.
          </p>
        </section>
      </div>
    </motion.div>
  );
}