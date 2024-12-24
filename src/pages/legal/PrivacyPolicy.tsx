import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Name and contact information</li>
            <li>Subscription and billing details</li>
            <li>Usage data and preferences</li>
            <li>Communication history</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process your transactions</li>
            <li>Send you important updates</li>
            <li>Improve our services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
            This includes encryption, secure servers, and regular security audits.
          </p>
        </section>
      </div>
    </motion.div>
  );
}