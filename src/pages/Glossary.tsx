import { DocPage, DocSection } from '../components/DocPage';

export const Glossary = () => (
  <DocPage
    title="Glossary"
    description="Key QA, automation, and AI terms. Quick reference for the academy."
  >
    <DocSection title="QA SDLC & Testing">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Test strategy</strong> — High-level approach to testing (what and how); often org- or product-level (ISO 29119).</li>
        <li><strong>Test plan</strong> — Concrete scope, schedule, and resources for a specific release or project.</li>
        <li><strong>Equivalence partitioning</strong> — Test design: group inputs into classes; test one representative per class.</li>
        <li><strong>Boundary value analysis</strong> — Test at and around boundaries (min, max, off-by-one).</li>
        <li><strong>Regression testing</strong> — Re-running tests to ensure changes didn&apos;t break existing behavior.</li>
      </ul>
    </DocSection>
    <DocSection title="Automation">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Test pyramid</strong> — Many fast unit/API tests, fewer slow UI tests (Martin Fowler).</li>
        <li><strong>Page Object Model (POM)</strong> — Design pattern: encapsulate page structure and actions in classes.</li>
        <li><strong>CI/CD</strong> — Continuous Integration / Continuous Delivery; automated build, test, and deploy.</li>
        <li><strong>Smoke test</strong> — Quick set of critical-path tests to verify the system is deployable.</li>
      </ul>
    </DocSection>
    <DocSection title="AI & LLM">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>LLM</strong> — Large Language Model; used for text generation, summarization, code/test generation.</li>
        <li><strong>Prompting</strong> — Crafting input text (prompts) to get desired, structured output from an LLM.</li>
        <li><strong>Self-healing tests</strong> — Tests that automatically adapt to UI changes (e.g. via semantic selectors or LLMs).</li>
      </ul>
    </DocSection>
  </DocPage>
);
