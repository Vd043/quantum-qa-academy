import { DocPage, DocSection } from '../components/DocPage';

export const AutomationFoundations = () => (
  <DocPage
    title="Automation Foundations"
    description="When and how to use test automation effectively. Strategy first—automation is not just a collection of scripts."
  >
    <DocSection title="Automation is a strategy">
      <p>
        Test automation is a <strong>strategy</strong>, not just a collection of scripts. It should support quality goals: fast feedback, regression safety, and repeatability. Align automation with risk and value—automate what matters most and what is stable enough to maintain.
      </p>
    </DocSection>
    <DocSection title="What to automate">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>High-value regression flows</strong> — critical paths and business rules that must not break.</li>
        <li><strong>Stable, repeatable scenarios</strong> — flows with low UI/UX churn and clear expected outcomes.</li>
        <li><strong>Data-intensive checks</strong> — validations that are tedious or error-prone manually.</li>
        <li><strong>API contracts and integrations</strong> — fast, reliable feedback without UI (Martin Fowler&apos;s test pyramid: prefer API over UI when possible).</li>
      </ul>
    </DocSection>
    <DocSection title="What not to automate (early)">
      <ul className="list-inside list-disc space-y-2">
        <li>Volatile UI still changing daily — maintenance cost outweighs benefit.</li>
        <li>Exploratory and UX feel — human judgment and exploration.</li>
        <li>One-off, low-frequency migrations or checks — manual is often faster.</li>
      </ul>
    </DocSection>
    <DocSection title="Principles">
      <ul className="list-inside list-disc space-y-2">
        <li>Keep tests <strong>deterministic</strong> and <strong>fast</strong> — no flakiness; run often.</li>
        <li>Prefer <strong>API</strong> over UI when possible — cheaper and more stable.</li>
        <li>Treat test code as a <strong>production asset</strong> — reviews, refactoring, standards, version control.</li>
        <li>Avoid record-playback as the primary approach — use Page Object Model and clear abstractions (Selenium best practices).</li>
      </ul>
    </DocSection>
  </DocPage>
);
