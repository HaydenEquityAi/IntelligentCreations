import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative mt-32 border-t border-[#41E0FF]/20 bg-gradient-to-b from-[#0B132B] to-[#0B132B]/95 overflow-hidden">
      {/* Subtle animated background */}
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

      <div className="relative z-10 py-20 px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Column 1 - Brand */}
            <div className="lg:col-span-1">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                <motion.h3
                  className="text-2xl font-bold mb-3"
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
                <p className="text-[#A9B3C1] text-sm mb-6">
                  Where intelligence meets creation.
                </p>
                <p className="text-[#A9B3C1]/60 text-xs">
                  © 2024 IntelligentCreations. All rights reserved.
                </p>
              </motion.div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <motion.h4
                className="text-[#F5F7FA] font-semibold mb-4 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Services
              </motion.h4>
              <ul className="space-y-3">
                {[
                  { label: 'Intelligent Systems', id: 'intelligent-systems' },
                  { label: 'Enterprise Lab', id: 'enterprise-lab' },
                  { label: 'AI Product Studio', id: 'ai-product-studio' },
                  { label: 'Innovation Lab', id: 'innovation-lab' },
                ].map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
            </div>

            {/* Column 3 - Company */}
            <div>
              <motion.h4
                className="text-[#F5F7FA] font-semibold mb-4 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Company
              </motion.h4>
              <ul className="space-y-3">
                {[
                  { label: 'Automation + Integration', id: 'automation' },
                  { label: 'Advisory', id: 'advisory' },
                  { label: 'Contact', id: 'contact' },
                ].map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
            </div>

            {/* Column 4 - Connect */}
            <div>
              <motion.h4
                className="text-[#F5F7FA] font-semibold mb-4 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Connect
              </motion.h4>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <a
                  href="mailto:contact@intelligentcreations.ai"
                  className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contact@intelligentcreations.ai
                </a>
              </motion.div>
              <div className="flex items-center gap-4">
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
                    className="text-[#A9B3C1] hover:text-[#41E0FF] transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{
                      scale: 1.1,
                      filter: 'drop-shadow(0 0 8px rgba(65, 224, 255, 0.6))',
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

