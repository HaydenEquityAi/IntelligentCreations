import React from 'react';
import { Mail, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import logo from '../assets/IntelligentCreations Logo.png';

export interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative mt-48 border-t border-[#41E0FF]/20 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16 lg:gap-12 mb-12">
          {/* Brand Column - Takes more space on desktop */}
          <div className="lg:flex-1 lg:max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Intelligent Creations" 
                className="w-8 h-8 flex-shrink-0" 
              />
              <h3 className="text-xl font-bold text-[#F5F7FA]">Intelligent Creations</h3>
            </div>
            <p className="text-[#A9B3C1] text-sm mb-6 leading-relaxed">
              Where intelligence meets creation.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:flex-shrink-0">
            <h4 className="text-[#F5F7FA] font-semibold mb-4 text-xs uppercase tracking-wider">SERVICES</h4>
            <ul className="space-y-3">
              {[
                { label: 'Intelligent Systems', id: 'intelligent-systems' },
                { label: 'Enterprise Lab', id: 'enterprise-lab' },
                { label: 'AI Product Studio', id: 'ai-product-studio' },
                { label: 'Innovation Lab', id: 'innovation-lab' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:flex-shrink-0">
            <h4 className="text-[#F5F7FA] font-semibold mb-4 text-xs uppercase tracking-wider">COMPANY</h4>
            <ul className="space-y-3">
              {[
                { label: 'Automation + Integration', id: 'automation' },
                { label: 'Advisory + Consulting', id: 'advisory' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:flex-shrink-0">
            <h4 className="text-[#F5F7FA] font-semibold mb-4 text-xs uppercase tracking-wider">CONNECT</h4>
            
            {/* Email */}
            <a
              href="mailto:info@intelligentcreations.ai"
              className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300 text-sm flex items-center gap-2 mb-6"
            >
              <Mail className="w-4 h-4" />
              info@intelligentcreations.ai
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/intelligentcreations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/intelligentcreations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/intelligentcreations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-[#A9B3C1]/70">© {new Date().getFullYear()} Intelligent Creations. All rights reserved.</p>
          <p className="text-xs text-[#A9B3C1]/70">Where intelligence meets creation.</p>
        </div>
      </div>
    </footer>
  );
}
