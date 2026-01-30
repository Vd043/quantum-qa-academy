import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Code2, BrainCircuit, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black pt-20">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
            <span className="mr-2 h-1 w-1 animate-pulse rounded-full bg-teal-400"></span>
            QA · Automation · System Design · AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 text-5xl font-black uppercase tracking-tighter text-white sm:text-7xl lg:text-9xl"
        >
          QUANTUMQA <br />
          <span className="bg-gradient-to-r from-teal-400 via-white to-teal-300 bg-clip-text text-transparent">
            ACADEMY.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/40 sm:text-xl"
        >
          A world-class learning hub for QA SDLC, automation, system design,
          and AI. Curated paths from beginner to advanced—clear structure,
          zero fluff.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/learning-paths/beginner-qa"
            className="group relative flex items-center gap-2 overflow-hidden rounded bg-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-black transition-all hover:scale-105"
          >
            Start Beginner Path
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            to="/learning-paths"
            className="flex items-center gap-2 rounded border border-white/10 bg-white/5 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
          >
            Browse All Paths
          </Link>
        </motion.div>
      </div>

      <div className="mt-24 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              label: 'QA SDLC',
              value: 'Full lifecycle',
              color: 'text-teal-400',
            },
            {
              icon: Code2,
              label: 'Automation',
              value: 'Selenium · API · CI/CD',
              color: 'text-blue-500',
            },
            {
              icon: BrainCircuit,
              label: 'AI for Testers',
              value: 'Prompting · Data gen',
              color: 'text-purple-500',
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex flex-col items-start rounded border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
            >
              <stat.icon className={`mb-4 ${stat.color}`} size={24} />
              <span className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/40">
                {stat.label}
              </span>
              <span className="font-mono text-xl font-bold tracking-tight text-white">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
