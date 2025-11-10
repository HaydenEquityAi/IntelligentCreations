import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Database, Workflow, Lightbulb, Building2 } from 'lucide-react';

interface EnterpriseLabPageProps {
  onNavigate: (pageId: string) => void;
}

export function EnterpriseLabPage({ onNavigate }: EnterpriseLabPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-0">
        {/* Teal gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(30, 144, 255, 0.1) 0%, transparent 60%)',
              'radial-gradient(circle at 80% 70%, rgba(94, 224, 255, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 20% 30%, rgba(30, 144, 255, 0.1) 0%, transparent 60%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Flowing data lines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full opacity-20"
            style={{
              background: 'linear-gradient(90deg, transparent, #00CED1, transparent)',
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear',
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Intelligence, applied.
          </motion.h1>

          <motion.p
            className="mb-16 sm:mb-12 text-[#A9B3C1] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We build systems for organizations that demand clarity, precision, and scale.
          </motion.p>
        </div>
      </section>

      {/* Data Infrastructure */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#1E90FF]/10 to-[#5AE0FF]/10 border border-[#41E0FF]/30"
              whileHover={{
                rotate: 2,
                boxShadow: '0 0 30px rgba(94, 224, 255, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Database className="w-12 h-12 text-[#00CED1]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Intelligent pipelines that connect and learn.</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed">
              We design data architectures that evolve with your business — transforming fragmented 
              information into continuous intelligence streams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#00CED1]/10 rounded-2xl border border-[#00CED1]/20 p-12 overflow-hidden">
              <Database className="absolute inset-0 w-full h-full text-[#00CED1] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Flowing pipeline lines */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[2px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #00CED1, transparent)',
                    top: `${20 + i * 12}%`,
                    left: '-100%',
                    width: '100%',
                  }}
                  animate={{
                    left: ['100%', '-100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automation Architecture */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#1E90FF]/10 rounded-2xl border border-[#00CED1]/20 p-12">
              <Workflow className="absolute inset-0 w-full h-full text-[#1E90FF] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Pulsing nodes */}
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-[#00CED1] rounded-full"
                  style={{
                    left: `${25 + (i % 3) * 25}%`,
                    top: `${25 + Math.floor(i / 3) * 25}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
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
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#1E90FF]/10 to-[#00CED1]/10 border border-[#1E90FF]/30"
              whileHover={{
                rotate: -2,
                boxShadow: '0 0 30px rgba(30, 144, 255, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Workflow className="w-12 h-12 text-[#1E90FF]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Operational systems that adapt to change.</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed">
              Build enterprise workflows that learn from patterns, optimize themselves, and scale 
              with your organization's growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insight Engines */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#1E90FF]/10 to-[#5AE0FF]/10 border border-[#41E0FF]/30"
              whileHover={{
                rotate: 2,
                boxShadow: '0 0 30px rgba(94, 224, 255, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Lightbulb className="w-12 h-12 text-[#5AE0FF]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Decision tools that explain themselves.</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed">
              Enterprise intelligence systems that don't just predict — they reveal their reasoning, 
              building trust through transparency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#00CED1]/10 rounded-2xl border border-[#5AE0FF]/20 p-12">
              <Lightbulb className="absolute inset-0 w-full h-full text-[#5AE0FF] opacity-10 p-16" strokeWidth={0.5} />
              
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(94, 224, 255, 0.15) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
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
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(94, 224, 255, 0.2) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.15) 0%, transparent 70%)',
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
            Transform your organization with applied intelligence.
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
          >
            <span className="relative z-10 flex items-center justify-center gap-4 sm:gap-3">
              Start Your Enterprise Transformation <ArrowRight className="w-6 h-6" />
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
