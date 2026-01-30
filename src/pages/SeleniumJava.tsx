import { DocPage, DocSection } from '../components/DocPage';

export const SeleniumJava = () => (
  <DocPage
    title="Selenium + Java"
    description="Reliable UI automation with Selenium and Java. Page Object Model and design patterns from Selenium and Martin Fowler."
  >
    <DocSection title="Test pyramid and UI tests">
      <p>
        Martin Fowler&apos;s <strong>Test Pyramid</strong> recommends many fast, low-level tests (unit, integration/API) and fewer slow, brittle UI tests. Selenium-based UI tests are expensive to write and maintain—use them for critical user-facing flows, not for every scenario.
      </p>
    </DocSection>
    <DocSection title="Design patterns (Selenium best practices)">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Page Object Model (POM)</strong> — encapsulate page structure and actions in classes; tests use page objects, not raw selectors. Reduces duplication and eases maintenance when UI changes.</li>
        <li><strong>LoadableComponent</strong> — wait for a page or component to be ready before interacting; reduces flakiness.</li>
        <li><strong>Domain-driven test design</strong> — express tests in user/product language; keep assertions and flows readable.</li>
      </ul>
    </DocSection>
    <DocSection title="What to avoid">
      <p>
        Avoid record-playback as the primary approach—it resists change and obscures structure. Prefer stable, semantic selectors (e.g. data attributes, roles) over brittle XPath when possible. Keep tests independent and avoid shared mutable state.
      </p>
    </DocSection>
    <DocSection title="Best practices">
      <p>
        Use explicit waits for dynamic content; keep tests short and focused; run in a consistent environment (browser, OS). Integrate with CI (e.g. GitHub Actions, Jenkins) for regression on each change. Maintain test code with the same rigor as production code—reviews, refactoring, and clear naming.
      </p>
    </DocSection>
  </DocPage>
);
