import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Network, Bot, Link2 } from 'lucide-react';

interface AutomationPageProps {
  onNavigate: (pageId: string) => void;
}

export function AutomationPage({ onNavigate }: AutomationPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-0">
        {/* Cyan network pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            {/* Network grid */}
            {Array.from({ length: 100 }).map((_, i) => {
              const x = (i % 10) * 10;
              const y = Math.floor(i / 10) * 10;
              return (
                <motion.circle
                  key={i}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="2"
                  fill="#5AE0FF"
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.02,
                  }}
                />
              );
            })}
            {/* Connecting lines */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="#41E0FF"
                strokeWidth="1"
                animate={{
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </svg>
        </div>

        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 40%, rgba(94, 224, 255, 0.1) 0%, transparent 60%)',
              'radial-gradient(circle at 70% 60%, rgba(65, 224, 255, 0.15) 0%, transparent 60%)',
              'radial-gradient(circle at 30% 40%, rgba(94, 224, 255, 0.1) 0%, transparent 60%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Everything, connected.
          </motion.h1>

          <motion.p
            className="mb-16 sm:mb-12 text-[#A9B3C1] text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We link your tools and data into self-learning systems that run themselves.
          </motion.p>
        </div>
      </section>

      {/* Automation Pipelines */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#5AE0FF]/10 to-[#41E0FF]/10 border border-[#5AE0FF]/30"
              whileHover={{
                rotate: 2,
                boxShadow: '0 0 30px rgba(94, 224, 255, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Network className="w-12 h-12 text-[#5AE0FF]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Automation Pipelines</h2>
            <p className="text-[#41E0FF] text-xl mb-4">
              Google → Notion → Excel → AI workflows that communicate.
            </p>
            <p className="text-[#A9B3C1] leading-relaxed">
              Build intelligent workflows that connect your entire tech stack. From data capture to 
              insight generation, we create seamless automation that learns from every interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#5AE0FF]/10 rounded-2xl border border-[#5AE0FF]/20 p-12 overflow-hidden">
              {/* Pulsing nodes representing different apps */}
              {[
                { x: 20, y: 30, delay: 0 },
                { x: 80, y: 30, delay: 0.3 },
                { x: 50, y: 50, delay: 0.6 },
                { x: 20, y: 70, delay: 0.9 },
                { x: 80, y: 70, delay: 1.2 },
              ].map((node, i) => (
                <React.Fragment key={i}>
                  <motion.div
                    className="absolute w-12 h-12 rounded-lg bg-gradient-to-br from-[#5AE0FF]/20 to-[#41E0FF]/20 border border-[#5AE0FF]/40"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 0 rgba(94, 224, 255, 0)',
                        '0 0 20px rgba(94, 224, 255, 0.5)',
                        '0 0 0 rgba(94, 224, 255, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: node.delay,
                    }}
                  />
                  {/* Connection lines */}
                  {i < 4 && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <motion.line
                        x1={`${node.x + 5}%`}
                        y1={`${node.y + 5}%`}
                        x2={`${[80, 50, 20, 80][i] + 5}%`}
                        y2={`${[30, 50, 70, 70][i] + 5}%`}
                        stroke="#5AE0FF"
                        strokeWidth="2"
                        animate={{
                          opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: node.delay + 0.2,
                        }}
                      />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intelligent Agents */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#41E0FF]/10 rounded-2xl border border-[#41E0FF]/20 p-12 overflow-hidden">
              <Bot className="absolute inset-0 w-full h-full text-[#41E0FF] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Orbiting agents */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 bg-gradient-to-br from-[#5AE0FF] to-[#41E0FF] rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-16px',
                    marginTop: '-16px',
                  }}
                  animate={{
                    x: [
                      Math.cos((i * 120 * Math.PI) / 180) * 100,
                      Math.cos(((i * 120 + 360) * Math.PI) / 180) * 100,
                    ],
                    y: [
                      Math.sin((i * 120 * Math.PI) / 180) * 100,
                      Math.sin(((i * 120 + 360) * Math.PI) / 180) * 100,
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.5,
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
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#41E0FF]/10 to-[#5AE0FF]/10 border border-[#41E0FF]/30"
              whileHover={{
                rotate: -2,
                boxShadow: '0 0 30px rgba(65, 224, 255, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Bot className="w-12 h-12 text-[#41E0FF]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">Intelligent Agents</h2>
            <p className="text-[#41E0FF] text-xl mb-4">
              AI assistants that summarize, generate, and execute tasks.
            </p>
            <p className="text-[#A9B3C1] leading-relaxed">
              Deploy autonomous agents that understand context, make decisions, and take action. 
              From email management to report generation, intelligence that works while you sleep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* System Connectivity */}
      <section className="relative py-20 sm:py-28 lg:py-32 px-6 lg:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 p-4 w-fit rounded-xl bg-gradient-to-br from-[#5AE0FF]/10 to-[#41E0FF]/10 border border-[#5AE0FF]/30"
              whileHover={{
                rotate: 2,
                boxShadow: '0 0 30px rgba(94, 224, 255, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              <Link2 className="w-12 h-12 text-[#5AE0FF]" strokeWidth={1.5} />
            </motion.div>

            <h2 className="mb-6">System Connectivity</h2>
            <p className="text-[#41E0FF] text-xl mb-4">
              Bridging silos between data and decisions.
            </p>
            <p className="text-[#A9B3C1] leading-relaxed">
              We dissolve the boundaries between your systems. Integration architecture that creates 
              a unified intelligence layer across your entire organization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#0B132B] to-[#5AE0FF]/10 rounded-2xl border border-[#5AE0FF]/20 p-12 overflow-hidden">
              <Link2 className="absolute inset-0 w-full h-full text-[#5AE0FF] opacity-10 p-16" strokeWidth={0.5} />
              
              {/* Connecting web pattern */}
              <svg className="absolute inset-0 w-full h-full">
                {Array.from({ length: 15 }).map((_, i) => {
                  const angle = (i * 360) / 15;
                  const x1 = 50;
                  const y1 = 50;
                  const x2 = 50 + 40 * Math.cos((angle * Math.PI) / 180);
                  const y2 = 50 + 40 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <motion.line
                      key={i}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="#5AE0FF"
                      strokeWidth="1"
                      animate={{
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  );
                })}
              </svg>
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
              'radial-gradient(circle at 50% 50%, rgba(94, 224, 255, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(65, 224, 255, 0.2) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(94, 224, 255, 0.15) 0%, transparent 70%)',
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
            Connect your ecosystem.
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
              Build Your Automation Layer <ArrowRight className="w-6 h-6" />
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
