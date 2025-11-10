import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative mt-48 border-t border-[#41E0FF]/20 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold text-[#F5F7FA] mb-4">IntelligentCreations</h3>
            <p className="text-[#A9B3C1] text-sm mb-6">Where intelligence meets creation.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/intelligentcreations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/intelligentcreations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/intelligentcreations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
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
          <div>
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
          <div>
            <h4 className="text-[#F5F7FA] font-semibold mb-4 text-xs uppercase tracking-wider">CONNECT</h4>
            <a
              href="mailto:contact@intelligentcreations.ai"
              className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors duration-300 text-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              contact@intelligentcreations.ai
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A9B3C1]/70">© {new Date().getFullYear()} IntelligentCreations. All rights reserved.</p>
          <p className="text-xs text-[#A9B3C1]/70">Where intelligence meets creation.</p>
        </div>
      </div>
    </footer>
  );
}
