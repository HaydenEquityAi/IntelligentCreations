import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Building, Home, Sparkles } from 'lucide-react';

interface AIProductStudioPageProps {
  onNavigate: (pageId: string) => void;
}

export function AIProductStudioPage({ onNavigate }: AIProductStudioPageProps) {
  const products = [
    {
      icon: TrendingUp,
      name: 'InvestQuant',
      tagline: 'AI-powered investment intelligence for modern investors.',
      description: 'Quantitative analysis meets generative AI — providing real-time market insights, portfolio optimization, and predictive analytics.',
      color: '#1E90FF',
    },
    {
      icon: Building,
      name: 'CapitalAi',
      tagline: 'Financial automation and forecasting for SMBs.',
      description: 'Transform your business finances with intelligent cash flow forecasting, automated bookkeeping, and predictive planning.',
      color: '#5AE0FF',
    },
    {
      icon: Home,
      name: 'RentalAi',
      tagline: 'Property management intelligence that predicts, learns, and automates.',
      description: 'From tenant screening to maintenance prediction — AI that manages properties while learning from every interaction.',
      color: '#41E0FF',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-0">
        {/* Aqua blueprint glow background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(65, 224, 255, 0.12) 0%, transparent 60%)',
              'radial-gradient(circle at 70% 60%, rgba(94, 224, 255, 0.18) 0%, transparent 60%)',
              'radial-gradient(circle at 30% 40%, rgba(65, 224, 255, 0.12) 0%, transparent 60%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Blueprint grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="blueprint-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#41E0FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            className="mb-6 mx-auto w-20 h-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-full h-full text-[#41E0FF]" strokeWidth={1} />
            </motion.div>
          </motion.div>

          <motion.h1
            className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From concept to cognition.
          </motion.h1>

          <motion.p
            className="mb-16 sm:mb-12 text-[#A9B3C1] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We turn R&D breakthroughs into live products — each one a system that learns and creates 
            value in the real world.
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      {products.map((product, index) => (
        <section key={product.name} className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <motion.div
                  className="mb-6 p-4 w-fit rounded-xl border"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}10, ${product.color}05)`,
                    borderColor: `${product.color}30`,
                  }}
                  whileHover={{
                    rotate: 2,
                    boxShadow: `0 0 30px ${product.color}40`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <product.icon className="w-12 h-12" style={{ color: product.color }} strokeWidth={1.5} />
                </motion.div>

                <h2 className="mb-4">{product.name}</h2>
                <p className="text-[#41E0FF] text-xl mb-4">{product.tagline}</p>
                <p className="text-[#A9B3C1] text-lg leading-relaxed">{product.description}</p>

                <motion.button
                  className="mt-12 sm:mt-8 group flex items-center gap-3 sm:gap-2 transition-colors"
                  style={{ color: product.color }}
                  whileHover={{ x: 5 }}
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <motion.div
                  className="relative aspect-square bg-gradient-to-br from-[#0B132B] rounded-2xl border overflow-hidden"
                  style={{
                    borderColor: `${product.color}20`,
                    background: `linear-gradient(135deg, #0B132B 0%, ${product.color}10 100%)`,
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <product.icon
                    className="absolute inset-0 w-full h-full opacity-10 p-20"
                    style={{ color: product.color }}
                    strokeWidth={0.5}
                  />

                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${product.color}20 0%, transparent 70%)`,
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Animated particles */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: product.color,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 1, 0.2],
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 lg:py-56 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(65, 224, 255, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(94, 224, 255, 0.2) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(65, 224, 255, 0.15) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 lg:px-12">
          <motion.h2
            className="mb-16 text-4xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explore our AI products.
          </motion.h2>

          <motion.button
            onClick={() => onNavigate('contact')}
            className="group relative px-8 sm:px-16 lg:px-24 py-4 sm:py-6 lg:py-8 bg-gradient-to-r from-[#1E90FF] to-[#5AE0FF] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 text-base sm:text-lg lg:text-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{
              boxShadow: '0 0 60px rgba(94, 224, 255, 0.6)',
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-4 sm:gap-3">
              Partner with Our Studio <ArrowRight className="w-6 h-6" />
            </span>

            {/* Ripple pulse on click */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#5AE0FF] to-[#1E90FF]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
