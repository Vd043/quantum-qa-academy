import { motion } from 'framer-motion';
import { Database, Laptop, Shield, Bot, Layers, Network } from 'lucide-react';

const CapabilityCard = ({
  icon: Icon,
  title,
  description,
  className = '',
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`group relative overflow-hidden rounded border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 ${className}`}
  >
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-white/5 text-white transition-colors group-hover:bg-white group-hover:text-black">
      <Icon size={24} />
    </div>
    <h3 className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-white">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-white/40">{description}</p>
    <div className="absolute bottom-4 right-4 text-white/10 transition-transform group-hover:translate-x-1 group-hover:text-white/20">
      <Network size={40} strokeWidth={1} />
    </div>
  </motion.div>
);

export const Capabilities = () => {
  return (
    <section id="dev" className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-teal-400">
            Learning Paths
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tighter text-white sm:text-5xl">
            Curated Paths. <br />
            Real Skills.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <CapabilityCard
            icon={Shield}
            title="QA SDLC"
            description="From test strategy and planning to design, execution, and reporting. Master the full QA lifecycle."
            className="md:col-span-2"
            delay={0.1}
          />
          <CapabilityCard
            icon={Laptop}
            title="Automation"
            description="Selenium, Appium, API testing, and CI/CD. Build and maintain reliable automation from scratch."
            delay={0.2}
          />
          <CapabilityCard
            icon={Layers}
            title="System Design"
            description="Understand how systems are built and scaled. Ask the right QA questions in design reviews."
            delay={0.3}
          />
          <CapabilityCard
            icon={Bot}
            title="AI & LLMs"
            description="Use AI for test ideas, prompting, and test data. Practical, safe workflows for testers."
            delay={0.4}
          />
          <CapabilityCard
            icon={Database}
            title="Resources"
            description="Glossary, cheat sheets, and roadmaps. Quick reference and career growth guidance."
            className="md:col-span-2 lg:col-span-3"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};
