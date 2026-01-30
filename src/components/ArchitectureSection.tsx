import { motion } from 'framer-motion';

export const ArchitectureSection = () => {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="flex-1">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-teal-400">
              How We Teach
            </span>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tighter text-white sm:text-5xl">
              Learning Paths <br />
              That Scale With You.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/40">
              Beginner to advanced paths: QA SDLC foundations, automation with
              Selenium and API, system design for QA, and AI for testers. Each
              path has clear phases and a “Done when” checklist.
            </p>

            <div className="mt-12 space-y-8">
              {[
                { label: 'Beginner QA Path', value: 'SDLC · Test design' },
                { label: 'Automation Engineer Path', value: 'Selenium · API · CI/CD' },
                { label: 'AI & LLM Path', value: 'Prompting · Data gen' },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-white/10 pl-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    {item.label}
                  </div>
                  <div className="text-2xl font-bold tracking-tighter text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1080"
                alt="QA and learning"
                className="h-full w-full object-cover opacity-50 mix-blend-luminosity"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex items-start justify-between">
                  <div className="rounded border border-teal-400/30 bg-teal-400/5 p-2 font-mono text-[10px] text-teal-400">
                    // QA_SDLC
                  </div>
                  <div className="rounded border border-blue-400/30 bg-blue-400/5 p-2 font-mono text-[10px] text-blue-400">
                    // AUTOMATION
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="animate-pulse font-mono text-[8px] text-white/20">
                    LEARNING_PATHS_ACTIVE
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="rounded border border-purple-400/30 bg-purple-400/5 p-2 font-mono text-[10px] text-purple-400">
                    // AI_LLMS
                  </div>
                  <div className="rounded border border-emerald-400/30 bg-emerald-400/5 p-2 font-mono text-[10px] text-emerald-400">
                    // RESOURCES
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-white/20"></div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
