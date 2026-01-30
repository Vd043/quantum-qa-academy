import { DocPage, DocSection } from '../components/DocPage';

export const CheatSheets = () => (
  <DocPage
    title="Cheat Sheets"
    description="Quick-reference for busy engineers. Test design, automation, and CI."
  >
    <DocSection title="Test design quick ref">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Equivalence partitioning</strong> — One value per partition; avoid redundant tests.</li>
        <li><strong>Boundary value</strong> — Min, min-1, max, max+1, and typical mid.</li>
        <li><strong>Decision table</strong> — Rows = combinations of conditions; columns = actions.</li>
        <li><strong>State transition</strong> — States + events → next state; test valid and invalid paths.</li>
      </ul>
    </DocSection>
    <DocSection title="Automation quick ref">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>What to automate</strong> — High-value regression, stable flows, API contracts.</li>
        <li><strong>What to avoid early</strong> — Volatile UI, exploratory, one-off.</li>
        <li><strong>Principles</strong> — Deterministic, fast; API over UI; test code = production asset.</li>
        <li><strong>CI</strong> — Unit on commit; smoke on main; full regression nightly/on-demand.</li>
      </ul>
    </DocSection>
    <DocSection title="Defect report checklist">
      <p>Title · Steps to reproduce · Expected vs actual · Environment · Severity/priority · Screenshot/logs if helpful.</p>
    </DocSection>
  </DocPage>
);
