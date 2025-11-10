import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FlaskConical, Cpu, Beaker, Zap } from 'lucide-react';

interface InnovationLabPageProps {
  onNavigate: (pageId: string) => void;
}

export function InnovationLabPage({ onNavigate }: InnovationLabPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-0">
        {/* Violet-Cyan mist background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 40%, rgba(139, 92, 246, 0.12) 0%, rgba(30, 144, 255, 0.08) 50%, transparent 70%)',
              'radial-gradient(circle at 80% 60%, rgba(94, 224, 255, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
              'radial-gradient(circle at 20% 40%, rgba(139, 92, 246, 0.12) 0%, rgba(30, 144, 255, 0.08) 50%, transparent 70%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Morphing particle simulation */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#8B5CF6' : '#5AE0FF',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            className="mb-8 mx-auto w-24 h-24"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <FlaskConical className="w-full h-full text-[#8B5CF6]" strokeWidth={1} />
            </motion.div>
          </motion.div>

          <motion.h1
            className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where ideas learn to think.
          </motion.h1>

          <motion.p
            className="mb-16 sm:mb-12 text-[#A9B3C1] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Inside the Innovation Lab, we fine-tune, simulate, and experiment — exploring how models 
            evolve beyond their original design.
          </motion.p>
        </div>
      </section>

      {/* Applied Research */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#1E90FF]/10 border border-[#8B5CF6]/30"
              whileHover={{
                rotate: 2,
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Cpu className="w-12 h-12 text-[#8B5CF6]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Applied Research</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed mb-4">
              Developing domain-tuned LLMs and self-hosted intelligence.
            </p>
            <p className="text-[#A9B3C1] leading-relaxed">
              We build custom language models trained on industry-specific data — from financial markets 
              to real estate analytics. Intelligence that understands your domain deeply.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#8B5CF6]/10 rounded-2xl border border-[#8B5CF6]/20 p-12 overflow-hidden">
              <Cpu className="absolute inset-0 w-full h-full text-[#8B5CF6] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Gradient beaker visualization */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.2) 100%)',
                }}
                animate={{
                  background: [
                    'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.2) 100%)',
                    'linear-gradient(180deg, transparent 30%, rgba(139, 92, 246, 0.3) 100%)',
                    'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.2) 100%)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fine-Tuning & Training */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#5AE0FF]/10 rounded-2xl border border-[#5AE0FF]/20 p-12 overflow-hidden">
              <Beaker className="absolute inset-0 w-full h-full text-[#5AE0FF] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Morphing data structures */}
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border-2 rounded-lg"
                  style={{
                    borderColor: i % 2 === 0 ? '#8B5CF6' : '#5AE0FF',
                    left: `${10 + i * 15}%`,
                    top: `${20 + i * 10}%`,
                    width: `${40 + i * 5}%`,
                    height: `${20 + i * 8}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.05, 1],
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
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#5AE0FF]/10 to-[#8B5CF6]/10 border border-[#5AE0FF]/30"
              whileHover={{
                rotate: -2,
                boxShadow: '0 0 30px rgba(94, 224, 255, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Beaker className="w-12 h-12 text-[#5AE0FF]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Fine-Tuning & Training</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed mb-4">
              Adapting models through reinforcement learning and domain embeddings.
            </p>
            <p className="text-[#A9B3C1] leading-relaxed">
              We don't just use pre-trained models — we sculpt them. Through advanced fine-tuning techniques, 
              we create AI that speaks your language and understands your context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prototyping */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#5AE0FF]/10 border border-[#8B5CF6]/30"
              whileHover={{
                rotate: 2,
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="w-12 h-12 text-[#8B5CF6]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Prototyping</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed mb-4">
              Testing multi-agent frameworks, new datasets, and emergent behaviors.
            </p>
            <p className="text-[#A9B3C1] leading-relaxed">
              The Lab is where we push boundaries — experimenting with autonomous agent systems, 
              testing novel architectures, and discovering what's possible when intelligence collaborates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#8B5CF6]/10 rounded-2xl border border-[#8B5CF6]/20 p-12 overflow-hidden">
              <Zap className="absolute inset-0 w-full h-full text-[#8B5CF6] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Energy particles */}
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, #8B5CF6, #5AE0FF)`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 1, 0.3],
                    x: [0, (Math.random() - 0.5) * 40, 0],
                    y: [0, (Math.random() - 0.5) * 40, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
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
              'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(94, 224, 255, 0.2) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
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
            Visit the Innovation Lab.
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
            <span className="relative z-10 flex items-center justify-center gap-3">
              Explore Research Opportunities <ArrowRight className="w-6 h-6" />
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
