import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Map, Shield } from 'lucide-react';

interface AdvisoryPageProps {
  onNavigate: (pageId: string) => void;
}

export function AdvisoryPage({ onNavigate }: AdvisoryPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-0">
        {/* Blue-Gray Glow background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.08) 0%, rgba(169, 179, 193, 0.05) 50%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.12) 0%, rgba(169, 179, 193, 0.08) 50%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.08) 0%, rgba(169, 179, 193, 0.05) 50%, transparent 70%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Centered Compass Halo Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1E90FF]/20 to-[#A9B3C1]/20 blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            className="mb-8 mx-auto w-32 h-32 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <Compass className="w-full h-full text-[#1E90FF]" strokeWidth={0.5} />
            </motion.div>

            {/* Compass ring */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#1E90FF"
                strokeWidth="0.5"
                strokeDasharray="4 4"
                opacity="0.4"
              />
            </motion.svg>
          </motion.div>

          <motion.h1
            className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Blueprints for the Intelligent Enterprise.
          </motion.h1>

          <motion.p
            className="mb-16 sm:mb-12 text-[#A9B3C1] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We guide leaders through AI transformation — designing architectures that scale thought itself.
          </motion.p>
        </div>
      </section>

      {/* AI Strategy */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#1E90FF]/10 to-[#A9B3C1]/10 border border-[#1E90FF]/30"
              whileHover={{
                rotate: 2,
                boxShadow: '0 0 30px rgba(30, 144, 255, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Map className="w-12 h-12 text-[#1E90FF]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">AI Strategy</h2>
            <p className="text-[#1E90FF] text-xl mb-4">
              Identify and prioritize opportunities for intelligent transformation.
            </p>
            <p className="text-[#A9B3C1] leading-relaxed">
              We work with leadership teams to map AI opportunities across your organization — 
              from quick wins to transformative initiatives that redefine how you compete.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#1E90FF]/10 rounded-2xl border border-[#1E90FF]/20 p-12 overflow-hidden">
              <Map className="absolute inset-0 w-full h-full text-[#1E90FF] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Strategic pathways */}
              <svg className="absolute inset-0 w-full h-full">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M ${20 + i * 15} 20 Q ${30 + i * 15} 50, ${20 + i * 15} 80`}
                    stroke="#1E90FF"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                    animate={{
                      d: [
                        `M ${20 + i * 15} 20 Q ${30 + i * 15} 50, ${20 + i * 15} 80`,
                        `M ${20 + i * 15} 20 Q ${10 + i * 15} 50, ${20 + i * 15} 80`,
                        `M ${20 + i * 15} 20 Q ${30 + i * 15} 50, ${20 + i * 15} 80`,
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Architecture */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#A9B3C1]/10 rounded-2xl border border-[#A9B3C1]/20 p-12 overflow-hidden">
              <Compass className="absolute inset-0 w-full h-full text-[#A9B3C1] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Blueprint layers */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-[#1E90FF]/20 rounded-2xl"
                  style={{ margin: `${i * 16}px` }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#A9B3C1]/10 to-[#1E90FF]/10 border border-[#A9B3C1]/30"
              whileHover={{
                rotate: -2,
                boxShadow: '0 0 30px rgba(169, 179, 193, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Compass className="w-12 h-12 text-[#A9B3C1]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Data Architecture</h2>
            <p className="text-[#1E90FF] text-xl mb-4">
              Blueprints that turn fragmented data into continuous intelligence.
            </p>
            <p className="text-[#A9B3C1] leading-relaxed">
              Design the foundation for AI success. We create data architectures that flow 
              seamlessly — from collection to insight, powering intelligence at every level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governance */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#1E90FF]/10 to-[#A9B3C1]/10 border border-[#1E90FF]/30"
              whileHover={{
                rotate: 2,
                boxShadow: '0 0 30px rgba(30, 144, 255, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Shield className="w-12 h-12 text-[#1E90FF]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Governance</h2>
            <p className="text-[#1E90FF] text-xl mb-4">
              Design policies for ethical, explainable, and sustainable AI.
            </p>
            <p className="text-[#A9B3C1] leading-relaxed">
              Build trust through transparency. We help you establish AI governance frameworks 
              that ensure your systems are responsible, auditable, and aligned with your values.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#1E90FF]/10 rounded-2xl border border-[#1E90FF]/20 p-12 overflow-hidden">
              <Shield className="absolute inset-0 w-full h-full text-[#1E90FF] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Protective layers */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.15) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 lg:py-56 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.12) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(169, 179, 193, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.12) 0%, transparent 70%)',
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
            Partner with InteractiveLabs.
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
              Begin Your AI Transformation <ArrowRight className="w-6 h-6" />
            </span>

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
