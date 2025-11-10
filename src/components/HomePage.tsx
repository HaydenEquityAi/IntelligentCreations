import React from 'react';
import { motion } from 'motion/react';
import { NeuralBackground, GradientWave } from './NeuralBackground';
import { ArrowRight, Brain, Building2, Sparkles, FlaskConical, Network, Users, Compass } from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section - "Living Intelligence" */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-0">
        <NeuralBackground />
        <GradientWave />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">
          <motion.h1
            className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block"
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
              We build intelligent systems that think, learn, and create value.
            </motion.span>
          </motion.h1>

          <motion.p
            className="mb-16 sm:mb-12 text-[#A9B3C1] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Applied AI for modern business. Where intelligence meets creation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#1E90FF] to-[#5AE0FF] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(94,224,255,0.6)] flex items-center justify-center gap-6 sm:gap-6 z-10"
            >
              Explore Our Work <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="group px-8 py-4 bg-transparent border-2 border-[#A9B3C1]/30 rounded-lg transition-all duration-300 hover:border-[#41E0FF] hover:shadow-[0_0_30px_rgba(65,224,255,0.4)] hover:scale-105 group-hover:text-[#41E0FF] transition-colors duration-300 flex items-center justify-center gap-6 sm:gap-6"
            >
              Learn About The Lab <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B132B] to-transparent" />
      </section>

      {/* Section 2 - Intelligent Systems */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E90FF" />
                <stop offset="100%" stopColor="#5AE0FF" />
              </linearGradient>
            </defs>
            {/* Neural mesh pattern */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={`${(i % 5) * 25}%`}
                cy={`${Math.floor(i / 5) * 33}%`}
                r="2"
                fill="url(#brain-gradient)"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#1E90FF]/10 to-[#5AE0FF]/10 rounded-2xl border border-[#41E0FF]/20 p-12 flex items-center justify-center">
              <Brain className="w-full h-full text-[#41E0FF] opacity-30" strokeWidth={0.5} />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/20 to-transparent rounded-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6">We design systems that think.</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed">
              The foundation of everything we build — neural architectures that reason, adapt, and evolve. 
              Real intelligence isn't installed; it's engineered.
            </p>
            <button
              onClick={() => onNavigate('intelligent-systems')}
              className="mt-12 sm:mt-8 group flex items-center gap-6 sm:gap-6 text-[#41E0FF] hover:text-[#5AE0FF] transition-colors"
            >
              Explore Intelligent Systems <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Enterprise Solutions Lab */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6">Intelligence, applied.</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed">
              We build systems for organizations that demand clarity, precision, and scale. 
              The Lab transforms data into dynamic intelligence — invisible, but everywhere.
            </p>
            <button
              onClick={() => onNavigate('enterprise-lab')}
              className="mt-12 sm:mt-8 group flex items-center gap-6 sm:gap-6 text-[#41E0FF] hover:text-[#5AE0FF] transition-colors"
            >
              Explore Enterprise Lab <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#1E90FF]/20 rounded-2xl border border-[#41E0FF]/20 p-12 flex items-center justify-center overflow-hidden">
              <Building2 className="w-full h-full text-[#41E0FF] opacity-30" strokeWidth={0.5} />
              {/* Flowing lines */}
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#5AE0FF] to-transparent"
                  style={{ top: `${20 + i * 15}%` }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - AI Product Studio */}
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
            <div className="relative aspect-square bg-gradient-to-br from-[#5AE0FF]/10 to-[#41E0FF]/10 rounded-2xl border border-[#41E0FF]/20 p-12 flex items-center justify-center">
              <Sparkles className="w-full h-full text-[#5AE0FF] opacity-30" strokeWidth={0.5} />
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(94, 224, 255, 0.2) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6">From concept to cognition.</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed">
              We turn R&D breakthroughs into live products — systems that learn and create value in the real world.
            </p>
            <button
              onClick={() => onNavigate('ai-product-studio')}
              className="mt-12 sm:mt-8 group flex items-center gap-6 sm:gap-6 text-[#41E0FF] hover:text-[#5AE0FF] transition-colors"
            >
              Explore AI Product Studio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 - R&D + Innovation */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 50%, #8B5CF6 0%, transparent 50%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6">Where ideas learn to think.</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed">
              Inside the Lab, we fine-tune, simulate, and experiment — exploring how models evolve beyond their design.
            </p>
            <button
              onClick={() => onNavigate('rnd')}
              className="mt-12 sm:mt-8 group flex items-center gap-6 sm:gap-6 text-[#41E0FF] hover:text-[#5AE0FF] transition-colors"
            >
              Explore R&D <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#8B5CF6]/10 to-[#1E90FF]/10 rounded-2xl border border-[#41E0FF]/20 p-12 flex items-center justify-center">
              <FlaskConical className="w-full h-full text-[#41E0FF] opacity-30" strokeWidth={0.5} />
              {/* 3D layers effect */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-[#5AE0FF]/20 rounded-2xl"
                  style={{ margin: `${i * 8}px` }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - Automation + Integration */}
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
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#5AE0FF]/10 rounded-2xl border border-[#41E0FF]/20 p-12 flex items-center justify-center">
              <Network className="w-full h-full text-[#5AE0FF] opacity-30" strokeWidth={0.5} />
              {/* Pulsing nodes */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-[#41E0FF] rounded-full"
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
            <h2 className="mb-6">Everything, connected.</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed">
              We link your tools and data into self-learning systems that run themselves. Insight flows where it's needed.
            </p>
            <button
              onClick={() => onNavigate('automation')}
              className="mt-12 sm:mt-8 group flex items-center gap-6 sm:gap-6 text-[#41E0FF] hover:text-[#5AE0FF] transition-colors"
            >
              Explore Automation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 - Advisory + Consulting */}
      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6">Blueprints for the Intelligent Enterprise.</h2>
            <p className="text-[#A9B3C1] text-xl leading-relaxed">
              We guide leaders through AI transformation — designing architectures that scale thought itself.
            </p>
            <button
              onClick={() => onNavigate('advisory')}
              className="mt-12 sm:mt-8 group flex items-center gap-6 sm:gap-6 text-[#41E0FF] hover:text-[#5AE0FF] transition-colors"
            >
              Explore Advisory Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#1E90FF]/20 rounded-2xl border border-[#41E0FF]/20 p-12 flex items-center justify-center overflow-hidden">
              <Compass className="w-full h-full text-[#41E0FF] opacity-30" strokeWidth={0.5} />
              {/* Rotating compass ring */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#compass-gradient)"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  <defs>
                    <linearGradient id="compass-gradient">
                      <stop offset="0%" stopColor="#1E90FF" />
                      <stop offset="100%" stopColor="#5AE0FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8 - Final CTA */}
      <section id="work" className="relative py-24 sm:py-32 lg:py-56 overflow-hidden">
        {/* Animated background */}
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

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Content container with vertical centering */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 lg:px-12 lg:py-32">
              <motion.h2
                className="mb-12 text-5xl lg:text-7xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Let's build something intelligent together.
              </motion.h2>

              <motion.p
                className="text-[#A9B3C1] text-2xl lg:text-3xl leading-relaxed mb-20 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Because intelligence — when designed with purpose — creates infinite leverage.
              </motion.p>

              <motion.button
                onClick={() => onNavigate('contact')}
                className="group relative px-8 sm:px-16 lg:px-32 py-4 sm:py-6 lg:py-10 bg-gradient-to-r from-[#1E90FF] to-[#5AE0FF] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 text-base sm:text-xl lg:text-2xl font-medium flex items-center justify-center gap-8 sm:gap-6 z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{
                  boxShadow: '0 0 60px rgba(94, 224, 255, 0.6)',
                }}
              >
                Start a Project <ArrowRight className="w-7 h-7" />

                {/* Expanding ripple effect */}
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
          </div>
        </div>
      </section>
    </div>
  );
}
