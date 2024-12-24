import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LogIn, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-4 py-3 top-4"
    >
      <motion.div 
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-lg border border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                SubsTrackr
              </span>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how-it-works">How it Works</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => navigate('/dashboard')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-6"
                  size="lg"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 py-4 border-t border-white/10"
            >
              <div className="flex flex-col space-y-4">
                <MobileNavLink href="#features">Features</MobileNavLink>
                <MobileNavLink href="#how-it-works">How it Works</MobileNavLink>
                <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                <MobileNavLink href="#faq">FAQ</MobileNavLink>
                <Button 
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"
        whileHover={{ width: '100%' }}
      />
    </motion.a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-gray-300 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}