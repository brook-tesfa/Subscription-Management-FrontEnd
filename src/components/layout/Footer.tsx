import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black backdrop-blur-xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              SubsTrackr
            </h3>
            <p className="text-gray-400 mb-6">
              Simplify your subscription management with automated tracking and smart notifications.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="#features">Features</FooterLink>
              <FooterLink to="#pricing">Pricing</FooterLink>
              <FooterLink to="#faq">FAQ</FooterLink>
              <FooterLink to="#blog">Blog</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink to="/cookie-policy">Cookie Policy</FooterLink>
              <FooterLink to="/security">Security</FooterLink>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                support@substrackr.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                123 Subscription St, CA 94105
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>© {currentYear} SubsTrackr. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <motion.div
        whileHover={{ x: 5 }}
        whileTap={{ x: 0 }}
      >
        <Link
          to={to}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {children}
        </Link>
      </motion.div>
    </li>
  );
}