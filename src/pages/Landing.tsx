import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Capabilities } from '../components/Capabilities';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { Footer } from '../components/Footer';
import { TechMarquee } from '../components/TechMarquee';
import { CustomCursor } from '../components/CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';

const SystemLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 font-mono text-[10px] text-white/40 uppercase tracking-[0.5em]"
      >
        Loading QuantumQA Academy...
      </motion.div>
      <div className="h-[1px] w-64 bg-white/10">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 font-mono text-[10px] text-white/60">{progress}%</div>
    </div>
  );
};

export const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SystemLoader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <TechMarquee />
              <Capabilities />
              <ArchitectureSection />

              <section className="bg-white px-4 py-24 text-black sm:py-32">
                <div className="mx-auto max-w-7xl">
                  <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
                    <div>
                      <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl">
                        TESTING IS TEMPORARY. <br />
                        QUALITY MINDSET IS{' '}
                        <span className="text-gray-400">PERMANENT.</span>
                      </h2>
                    </div>
                    <div>
                      <p className="mb-8 text-xl font-light leading-relaxed">
                        Great QA isn't just about tools. It's about the fundamentals:
                        test strategy, automation design, system thinking, and
                        using AI responsibly in your workflows.
                      </p>
                      <Link
                        to="/learning-paths"
                        className="inline-block border-b-2 border-black pb-1 font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:text-gray-500"
                      >
                        Read QA Manifesto
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <section className="overflow-hidden bg-black px-4 py-24">
                <div className="mx-auto max-w-7xl text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative inline-block border border-white/10 p-12"
                  >
                    <div className="absolute -left-1 -top-1 h-2 w-2 bg-white"></div>
                    <div className="absolute -right-1 -top-1 h-2 w-2 bg-white"></div>
                    <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-white"></div>
                    <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-white"></div>

                    <h2 className="mb-6 text-3xl font-bold uppercase tracking-tighter text-white">
                      Ready to Level Up?
                    </h2>
                    <p className="mx-auto mb-10 max-w-md text-white/40">
                      Pick a learning path and build real skills: QA SDLC,
                      automation, system design, and AI for testers.
                    </p>
                    <Link
                      to="/learning-paths"
                      className="inline-block bg-white px-10 py-4 font-mono text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-gray-200"
                    >
                      Start Learning
                    </Link>
                  </motion.div>
                </div>
              </section>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
