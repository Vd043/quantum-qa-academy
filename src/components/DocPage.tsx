import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const DocPage = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) => {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="mb-2 font-mono text-3xl font-bold uppercase tracking-tighter text-white sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mb-10 text-lg text-white/50">{description}</p>
      )}
      <div className="space-y-10 text-white/80">{children}</div>
    </article>
  );
};

export const DocSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section>
    <h2 className="mb-4 font-mono text-lg font-bold uppercase tracking-widest text-teal-400">
      {title}
    </h2>
    <div className="space-y-3 text-sm leading-relaxed">{children}</div>
  </section>
);

export const DocCardGrid = ({ children }: { children: ReactNode }) => (
  <div className="my-8 grid gap-4 sm:grid-cols-2">
    {children}
  </div>
);

export const DocLinkCard = ({
  title,
  to,
  description,
}: {
  title: string;
  to: string;
  description: string;
}) => (
  <Link
    to={to}
    className="block rounded border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10 hover:border-white/20"
  >
    <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-white">
      {title}
    </h3>
    <p className="text-xs text-white/50">{description}</p>
  </Link>
);
