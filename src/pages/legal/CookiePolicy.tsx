import React from 'react';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-white mb-8">Cookie Policy</h1>
      
      <div className="space-y-6 text-gray-300">
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit our website.
            They help us provide you with a better experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Essential cookies for site functionality</li>
            <li>Analytics cookies to understand usage</li>
            <li>Preference cookies to remember your settings</li>
            <li>Marketing cookies for relevant content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">3. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings.
            Please note that removing cookies may affect site functionality.
          </p>
        </section>
      </div>
    </motion.div>
  );
}