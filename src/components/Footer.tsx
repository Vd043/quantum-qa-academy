import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

const AVATAR_FALLBACK =
  'https://ui-avatars.com/api/?name=Vardan+Shukla&size=128&background=22c55e&color=fff&bold=true';

export const Footer = () => {
  const [photoError, setPhotoError] = useState(false);
  const photoSrc = !photoError ? '/profile.png' : AVATAR_FALLBACK;

  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-white text-black">
              <Terminal size={18} strokeWidth={2.5} />
            </div>
            <span className="font-mono text-sm font-bold uppercase tracking-tighter text-white">
              QuantumQA Academy
            </span>
          </Link>
          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-widest text-white/40">
            <Link to="/learning-paths" className="transition-colors hover:text-white">
              Learning Paths
            </Link>
            <Link to="/qa-sdlc/overview" className="transition-colors hover:text-white">
              QA SDLC
            </Link>
            <Link to="/automation/foundations" className="transition-colors hover:text-white">
              Automation
            </Link>
            <Link to="/system-design/qa-perspective" className="transition-colors hover:text-white">
              System Design
            </Link>
            <Link to="/ai-llms/ai-for-testers" className="transition-colors hover:text-white">
              AI & LLMs
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/5 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            Created by
          </p>
          <div className="flex items-center gap-3">
            <img
              src={photoSrc}
              alt="Vardan Shukla"
              onError={() => setPhotoError(true)}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20"
            />
            <span className="font-mono text-sm font-medium text-white/90">Vardan Shukla</span>
          </div>
        </div>

        <div className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-white/30">
          © {new Date().getFullYear()} QuantumQA Academy — QA, Automation & AI Learning Hub.
        </div>
      </div>
    </footer>
  );
};
