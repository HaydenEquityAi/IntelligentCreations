import React, { useState } from 'react';
import { motion } from 'motion/react';
import logo from '../assets/IntelligentCreationTransparentLogo.png';

interface NavigationItem {
  id: string;
  label: string;
  subtitle: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', subtitle: 'Living Intelligence' },
  { id: 'intelligent-systems', label: 'Intelligent Systems', subtitle: 'The Architecture of Intelligence' },
  { id: 'enterprise-lab', label: 'Enterprise Lab', subtitle: 'Applied Systems for Scale' },
  { id: 'ai-product-studio', label: 'AI Product Studio', subtitle: 'Innovation Through Creation' },
  { id: 'innovation-lab', label: 'Innovation Lab', subtitle: 'Where Ideas Learn to Think' },
  { id: 'automation', label: 'Automation + Integration', subtitle: 'Connected Workflows' },
  { id: 'advisory', label: 'Advisory', subtitle: 'Strategic Intelligence' },
  { id: 'contact', label: 'Contact', subtitle: 'Start a Project' },
];

interface GlobalHeaderProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
}

export function GlobalHeader({ activePage, onNavigate }: GlobalHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#41E0FF]/20"
      style={{
        backgroundColor: 'rgba(11, 19, 43, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1920px] mx-auto px-8 lg:px-20">
        <div className="relative flex items-center justify-between h-20">
          {/* LEFT: Logo only on mobile, Logo + Name on desktop */}
          <motion.button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group z-10"
            whileHover={{ scale: 1.02 }}
          >
            <img src={logo} alt="Intelligent Creations" className="h-10 w-auto" />
            <span className="hidden xl:inline-block text-[#F5F7FA] group-hover:text-[#41E0FF] transition-colors duration-300 font-semibold">
              Intelligent Creations
            </span>
          </motion.button>

          {/* CENTER: Company name on mobile only */}
          <div className="absolute left-1/2 -translate-x-1/2 xl:hidden z-0">
            <span className="text-lg font-semibold text-[#F5F7FA] whitespace-nowrap">
              Intelligent Creations
            </span>
          </div>

          {/* RIGHT: Desktop nav and mobile hamburger */}
          <div className="flex items-center gap-8 z-10">
            {/* Desktop Navigation Tabs */}
            <nav className="hidden xl:flex items-center gap-6">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="relative px-1 py-2 group"
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.span
                    className={`relative text-sm transition-all duration-300 ${
                      activePage === item.id
                        ? 'text-[#41E0FF]'
                        : 'text-[#F5F7FA] group-hover:text-[#41E0FF]'
                    }`}
                    animate={{
                      scale: activePage === item.id ? 1.03 : 1,
                    }}
                    whileHover={{
                      textShadow: '0 0 8px rgba(65, 224, 255, 0.6)',
                    }}
                  >
                    {item.label}
                  </motion.span>

                  {/* Gradient underline on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1E90FF] to-[#5AE0FF]"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: activePage === item.id ? 1 : 0,
                      opacity: activePage === item.id ? 1 : 0,
                    }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0.5 }}
                  />

                  {/* Active glow */}
                  {activePage === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1E90FF] to-[#5AE0FF] blur-sm"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-[#F5F7FA] hover:text-[#41E0FF] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  // X icon when open
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger icon when closed
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            className="xl:hidden border-t border-[#41E0FF]/20 relative z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col py-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false); // Close menu after navigation
                  }}
                  className={`px-6 py-3 text-left transition-colors ${
                    activePage === item.id
                      ? 'text-[#41E0FF] bg-[#41E0FF]/10'
                      : 'text-[#F5F7FA] hover:text-[#41E0FF] hover:bg-[#41E0FF]/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
