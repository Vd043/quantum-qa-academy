import { Link, Outlet } from 'react-router-dom';
import { Terminal, ArrowLeft } from 'lucide-react';

export const DocLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-tighter text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-tighter text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded bg-white text-black">
                <Terminal size={18} strokeWidth={2.5} />
              </div>
              QuantumQA Academy
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};
