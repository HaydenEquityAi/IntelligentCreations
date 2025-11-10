import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (pageId: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Gradient bloom expanding outward */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(94, 224, 255, 0.2) 0%, transparent 60%)',
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1E90FF]/20 to-[#5AE0FF]/20 border border-[#41E0FF]/30 rounded-full">
              <span className="text-[#41E0FF] text-sm uppercase tracking-wider">Start a Project</span>
            </div>

            <h1 className="mb-6">Let's build something intelligent together.</h1>

            <p className="text-[#A9B3C1] text-xl max-w-3xl mx-auto">
              Because intelligence — when designed with purpose — creates infinite leverage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Options */}
            <motion.div
              className="p-8 rounded-2xl border border-[#A9B3C1]/20 bg-[#0B132B]/40 backdrop-blur-sm hover:border-[#41E0FF]/50 transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4 p-3 w-fit rounded-lg bg-gradient-to-br from-[#1E90FF]/10 to-[#5AE0FF]/10 border border-[#41E0FF]/30">
                <Mail className="w-6 h-6 text-[#41E0FF]" />
              </div>
              <h3 className="mb-3">Email Us</h3>
              <p className="text-[#A9B3C1] mb-4">Reach out directly to discuss your project</p>
              <a
                href="mailto:hello@interactivelabs.ai"
                className="text-[#41E0FF] hover:text-[#5AE0FF] transition-colors flex items-center gap-4"
              >
                hello@interactivelabs.ai <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl border border-[#A9B3C1]/20 bg-[#0B132B]/40 backdrop-blur-sm hover:border-[#41E0FF]/50 transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4 p-3 w-fit rounded-lg bg-gradient-to-br from-[#1E90FF]/10 to-[#5AE0FF]/10 border border-[#41E0FF]/30">
                <Calendar className="w-6 h-6 text-[#41E0FF]" />
              </div>
              <h3 className="mb-3">Schedule a Call</h3>
              <p className="text-[#A9B3C1] mb-4">Book a discovery session with our team</p>
              <button className="text-[#41E0FF] hover:text-[#5AE0FF] transition-colors flex items-center gap-2">
                View Calendar <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="p-8 lg:p-12 rounded-2xl border border-[#A9B3C1]/20 bg-[#0B132B]/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="mb-8 text-center">Or send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-[#A9B3C1]">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0B132B]/60 border border-[#A9B3C1]/20 text-[#F5F7FA] focus:border-[#41E0FF] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#A9B3C1]">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0B132B]/60 border border-[#A9B3C1]/20 text-[#F5F7FA] focus:border-[#41E0FF] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#A9B3C1]">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0B132B]/60 border border-[#A9B3C1]/20 text-[#F5F7FA] focus:border-[#41E0FF] focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="intelligent-systems">Intelligent Systems</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="product">AI Product Development</option>
                  <option value="innovation">Innovation Lab / R&D</option>
                  <option value="automation">Automation & Integration</option>
                  <option value="advisory">Advisory & Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#A9B3C1]">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[#0B132B]/60 border border-[#A9B3C1]/20 text-[#F5F7FA] focus:border-[#41E0FF] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-[#1E90FF] to-[#5AE0FF] rounded-lg overflow-hidden transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 40px rgba(94, 224, 255, 0.6)',
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  Send Message <ArrowRight className="w-5 h-5" />
                </span>

                {/* Glowing edge pulse */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#5AE0FF] to-[#1E90FF]"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Ripple pulse on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  whileHover={{
                    boxShadow: [
                      '0 0 0 0 rgba(94, 224, 255, 0.4)',
                      '0 0 0 10px rgba(94, 224, 255, 0)',
                    ],
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Return Home Button */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => onNavigate('home')}
              className="text-[#A9B3C1] hover:text-[#41E0FF] transition-colors inline-flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Return to Home
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
