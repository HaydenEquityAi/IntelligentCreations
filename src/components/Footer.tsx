import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative mt-48 border-t border-[#41E0FF]/20 bg-gradient-to-b from-[#0B132B] to-[#0B132B]/95 overflow-hidden">
      {/* Animated radial gradient background overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            'radial-gradient(circle at 50% 100%, rgba(30, 144, 255, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 100%, rgba(94, 224, 255, 0.4) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 100%, rgba(30, 144, 255, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Brand Column */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <motion.h3
                className="text-2xl font-bold mb-4"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #F5F7FA 30%, #5AE0FF 50%, #F5F7FA 70%)',
                  backgroundSize: '200% auto',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
                animate={{
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                IntelligentCreations
              </motion.h3>
              <p className="text-[#A9B3C1] text-sm mb-6 leading-relaxed">
                Where intelligence meets creation. Building the future of autonomous AI systems.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com/company/intelligentcreations', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://twitter.com/intelligentcreations', label: 'Twitter' },
                  { icon: Github, href: 'https://github.com/intelligentcreations', label: 'GitHub' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{
                      scale: 1.15,
                      filter: 'drop-shadow(0 0 8px rgba(94, 224, 255, 0.6))',
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services Column */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-[#F5F7FA] font-semibold mb-4 text-sm uppercase tracking-wider">
                SERVICES
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Intelligent Systems', id: 'intelligent-systems' },
                  { label: 'Enterprise Lab', id: 'enterprise-lab' },
                  { label: 'AI Product Studio', id: 'ai-product-studio' },
                  { label: 'Innovation Lab', id: 'innovation-lab' },
                ].map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h4 className="text-[#F5F7FA] font-semibold mb-4 text-sm uppercase tracking-wider">
                COMPANY
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Automation + Integration', id: 'automation' },
                  { label: 'Advisory + Consulting', id: 'advisory' },
                  { label: 'Contact', id: 'contact' },
                ].map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  >
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect Column */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h4 className="text-[#F5F7FA] font-semibold mb-4 text-sm uppercase tracking-wider">
                CONNECT
              </h4>
              <motion.a
                href="mailto:contact@intelligentcreations.ai"
                className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300 text-sm flex items-center justify-center lg:justify-start gap-2 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.div>
                contact@intelligentcreations.ai
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#41E0FF]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A9B3C1]/70">
            © {new Date().getFullYear()} IntelligentCreations. All rights reserved.
          </p>
          <p className="text-xs text-[#A9B3C1]/70">
            Where intelligence meets creation.
          </p>
        </div>
      </div>
    </footer>
  );
}
