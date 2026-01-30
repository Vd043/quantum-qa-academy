import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Learning Paths', to: '/learning-paths' },
    { name: 'QA SDLC', to: '/qa-sdlc/overview' },
    { name: 'Automation', to: '/automation/foundations' },
    { name: 'AI & LLMs', to: '/ai-llms/ai-for-testers' },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-white text-black">
              <Terminal size={18} strokeWidth={2.5} />
            </div>
            <span className="font-mono text-sm font-bold uppercase tracking-tighter">
              QuantumQA Academy
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="font-mono text-xs font-medium uppercase tracking-widest text-white/60 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/learning-paths"
                className="rounded border border-white/20 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
              >
                Start Learning
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white/60 hover:text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 bg-black md:hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="block rounded-md px-3 py-2 font-mono text-xs text-white/60 hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
