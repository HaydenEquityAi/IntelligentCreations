import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Layers, Brain, Network, Rocket } from 'lucide-react';

interface IntelligentSystemsPageProps {
  onNavigate: (pageId: string) => void;
}

export function IntelligentSystemsPage({ onNavigate }: IntelligentSystemsPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-0">
        {/* 3D Neural Wave Background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E90FF" />
                <stop offset="100%" stopColor="#5AE0FF" />
              </linearGradient>
            </defs>
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.path
                key={i}
                d={`M 0 ${i * 30} Q ${window.innerWidth / 4} ${i * 30 + 15}, ${window.innerWidth / 2} ${i * 30} T ${window.innerWidth} ${i * 30}`}
                stroke="url(#wave-gradient)"
                strokeWidth="1"
                fill="none"
                animate={{
                  d: [
                    `M 0 ${i * 30} Q ${window.innerWidth / 4} ${i * 30 + 15}, ${window.innerWidth / 2} ${i * 30} T ${window.innerWidth} ${i * 30}`,
                    `M 0 ${i * 30} Q ${window.innerWidth / 4} ${i * 30 - 15}, ${window.innerWidth / 2} ${i * 30} T ${window.innerWidth} ${i * 30}`,
                    `M 0 ${i * 30} Q ${window.innerWidth / 4} ${i * 30 + 15}, ${window.innerWidth / 2} ${i * 30} T ${window.innerWidth} ${i * 30}`,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </svg>

          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(30, 144, 255, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 60%, rgba(94, 224, 255, 0.2) 0%, transparent 60%)',
                'radial-gradient(circle at 30% 40%, rgba(30, 144, 255, 0.15) 0%, transparent 60%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            The architecture of intelligence.
          </motion.h1>

          <motion.p
            className="mb-16 sm:mb-12 text-[#A9B3C1] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Every system we build begins with one question — how does intelligence emerge?
          </motion.p>

          <motion.button
            onClick={() => document.getElementById('generative-ai')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-gradient-to-r from-[#1E90FF] to-[#5AE0FF] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{
              boxShadow: '0 0 50px rgba(94, 224, 255, 0.6)',
            }}
          >
            <span className="relative z-10 flex items-center gap-3 sm:gap-2">
              Explore the Ecosystem <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </div>
      </section>

      {/* Applied Generative AI */}
      <section id="generative-ai" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1E90FF]/20 to-[#5AE0FF]/20 border border-[#41E0FF]/30 rounded-full">
                <Sparkles className="w-4 h-4 text-[#41E0FF]" />
                <span className="text-[#41E0FF] text-sm">Applied Generative AI</span>
              </div>

              <h2 className="mb-6">The Creative Core</h2>
              <p className="text-[#A9B3C1] text-xl leading-relaxed">
                We engineer generative systems that create — not imitate. Models that design, write, 
                and build autonomously.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#1E90FF]/10 rounded-2xl border border-[#41E0FF]/20 p-12 overflow-hidden">
                {/* Flowing ribbons */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-2 w-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #5AE0FF, transparent)',
                      top: `${i * 12}%`,
                      left: '-100%',
                    }}
                    animate={{
                      left: ['100%', '-100%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'linear',
                    }}
                  />
                ))}

                <Sparkles className="absolute inset-0 w-full h-full text-[#41E0FF] opacity-20 p-12" strokeWidth={0.5} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Learning */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#8B5CF6]/10 rounded-2xl border border-[#41E0FF]/20 p-12 overflow-hidden">
                {/* Stacked translucent planes */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 border-2 border-[#5AE0FF]/30 rounded-2xl"
                    style={{
                      transform: `translateZ(${i * 20}px) scale(${1 - i * 0.1})`,
                      margin: `${i * 12}px`,
                    }}
                    animate={{
                      opacity: [0.1 + i * 0.1, 0.3 + i * 0.1, 0.1 + i * 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    {/* Violet-blue lighting between planes */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(139, 92, 246, ${0.1 + i * 0.05}) 0%, rgba(30, 144, 255, ${0.1 + i * 0.05}) 100%)`,
                      }}
                    />
                  </motion.div>
                ))}

                <Layers className="absolute inset-0 w-full h-full text-[#8B5CF6] opacity-20 p-12" strokeWidth={0.5} />
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B5CF6]/20 to-[#1E90FF]/20 border border-[#8B5CF6]/30 rounded-full">
                <Layers className="w-4 h-4 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6] text-sm">Deep Learning</span>
              </div>

              <h2 className="mb-6">The Depth of Cognition</h2>
              <p className="text-[#A9B3C1] text-xl leading-relaxed">
                The hidden layers of understanding. Networks that extract meaning, build memory, 
                and refine awareness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Machine Learning */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1E90FF]/20 to-[#5AE0FF]/20 border border-[#41E0FF]/30 rounded-full">
                <Brain className="w-4 h-4 text-[#41E0FF]" />
                <span className="text-[#41E0FF] text-sm">Machine Learning</span>
              </div>

              <h2 className="mb-6">The Learning Engine</h2>
              <p className="text-[#A9B3C1] text-xl leading-relaxed">
                Intelligence that improves itself. Every dataset teaches, every cycle refines. 
                The engine that adapts faster than it's coded.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#1E90FF]/10 rounded-2xl border border-[#41E0FF]/20 p-12 overflow-hidden">
                {/* Reconfiguring data particles */}
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#41E0FF] rounded-full"
                    initial={{
                      x: Math.random() * 100 + '%',
                      y: Math.random() * 100 + '%',
                    }}
                    animate={{
                      x: [
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                      ],
                      y: [
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                      ],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: 'easeInOut',
                    }}
                  />
                ))}

                <Brain className="absolute inset-0 w-full h-full text-[#41E0FF] opacity-10 p-12" strokeWidth={0.5} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Agent Ecosystems */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B] via-[#0B132B]/50 to-[#0B132B]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1E90FF]/20 to-[#5AE0FF]/20 border border-[#41E0FF]/30 rounded-full">
              <Network className="w-4 h-4 text-[#41E0FF]" />
              <span className="text-[#41E0FF] text-sm">Multi-Agent Ecosystems</span>
            </div>

            <h2 className="mb-6">The Collective Mind</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed max-w-3xl mx-auto">
              Collaboration between autonomous systems. Each agent learns, communicates, and co-creates — 
              forming emergent intelligence.
            </p>
          </motion.div>

          {/* Thousands of nodes visualization */}
          <motion.div
            className="relative w-full h-96 rounded-2xl border border-[#41E0FF]/20 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B132B] to-[#1E90FF]/10" />

            {/* Node network */}
            {Array.from({ length: 100 }).map((_, i) => {
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#41E0FF] rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              );
            })}

            {/* Motion trails */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="trail-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(30, 144, 255, 0)" />
                  <stop offset="50%" stopColor="rgba(94, 224, 255, 0.3)" />
                  <stop offset="100%" stopColor="rgba(30, 144, 255, 0)" />
                </linearGradient>
              </defs>
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.path
                  key={i}
                  d={`M ${Math.random() * 100}% ${Math.random() * 100}% Q ${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%`}
                  stroke="url(#trail-gradient)"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                  animate={{
                    d: [
                      `M ${Math.random() * 100}% ${Math.random() * 100}% Q ${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%`,
                      `M ${Math.random() * 100}% ${Math.random() * 100}% Q ${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%`,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Real Systems, Real Impact */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1E90FF]/20 to-[#5AE0FF]/20 border border-[#41E0FF]/30 rounded-full">
                <Rocket className="w-4 h-4 text-[#41E0FF]" />
                <span className="text-[#41E0FF] text-sm">Real Systems, Real Impact</span>
              </div>

              <h2 className="mb-6">Applied Intelligence in Action</h2>
              <p className="text-[#A9B3C1] text-xl leading-relaxed">
                The principles of intelligent architecture come to life in every system we build. 
                Our products don't just process — they learn.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#1E90FF]/10 rounded-2xl border border-[#41E0FF]/20 p-12 overflow-hidden">
                {/* Animated project cards visualization */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-xl border border-[#41E0FF]/30 bg-gradient-to-br from-[#0B132B]/80 to-[#0B132B]/60"
                    style={{
                      width: '60%',
                      height: '25%',
                      left: `${15 + i * 5}%`,
                      top: `${20 + i * 25}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 0.9, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div className="w-8 h-8 bg-[#41E0FF]/20 rounded-lg mb-2" />
                      <div className="h-2 bg-[#41E0FF]/30 rounded w-3/4 mb-1" />
                      <div className="h-2 bg-[#41E0FF]/20 rounded w-1/2" />
                    </div>
                  </motion.div>
                ))}

                {/* Connecting lines */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#5AE0FF] to-transparent"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: `${35 + i * 25}%`,
                      width: '40%',
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scaleX: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.7,
                    }}
                  />
                ))}

                <Rocket className="absolute inset-0 w-full h-full text-[#41E0FF] opacity-10 p-12" strokeWidth={0.5} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exit CTA */}
      <section className="relative py-24 sm:py-32 lg:py-56 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.2) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(94, 224, 255, 0.25) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(30, 144, 255, 0.2) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h2
              className="mb-12 text-4xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Explore how intelligence takes form.
            </motion.h2>

            <motion.button
              onClick={() => onNavigate('home')}
              className="group px-6 sm:px-12 lg:px-20 py-3 sm:py-4 lg:py-6 bg-transparent border-2 border-[#A9B3C1]/30 rounded-lg transition-all duration-300 hover:border-[#41E0FF] hover:scale-105 text-base sm:text-lg lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{
                boxShadow: '0 0 40px rgba(65, 224, 255, 0.4)',
              }}
            >
              <span className="group-hover:text-[#41E0FF] transition-colors duration-300 flex items-center justify-center gap-4 sm:gap-3">
                Return to Living Intelligence <ArrowRight className="w-6 h-6" />
              </span>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}