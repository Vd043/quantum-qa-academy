import { motion } from 'framer-motion';

const TECH = [
  'QA SDLC',
  'SELENIUM',
  'JAVA',
  'APPIUM',
  'API TESTING',
  'CI/CD',
  'JENKINS',
  'GITHUB ACTIONS',
  'TEST STRATEGY',
  'SYSTEM DESIGN',
  'AI FOR TESTERS',
  'PROMPTING',
];

export const TechMarquee = () => {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-black py-8">
      <motion.div
        className="flex w-max gap-16"
        animate={{ x: [0, -1920] }}
        transition={{
          x: { repeat: Infinity, duration: 25, ease: 'linear' },
        }}
      >
        {[...TECH, ...TECH].map((label, i) => (
          <span
            key={i}
            className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.3em] text-white/30"
          >
            {label}
          </span>
        ))}
      </motion.div>
    </section>
  );
};
