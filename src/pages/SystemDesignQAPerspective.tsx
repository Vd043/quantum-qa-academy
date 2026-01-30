import { DocPage, DocSection } from '../components/DocPage';

export const SystemDesignQAPerspective = () => (
  <DocPage
    title="System Design for QA"
    description="View system design through a QA lens. Key test points, failure modes, and integration risks."
  >
    <DocSection title="Why QA cares about system design">
      <p>
        Understanding how systems are designed (components, data flow, integrations, failure modes) helps QA ask the right questions, design high-value tests, and identify risks early. You can target integration points, boundaries, and failure scenarios instead of testing blindly.
      </p>
    </DocSection>
    <DocSection title="Key test points">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Component boundaries</strong> — APIs, queues, events; contract and integration tests.</li>
        <li><strong>Data flow</strong> — where data is created, transformed, stored; consistency and validation.</li>
        <li><strong>Failure modes</strong> — what happens when a dependency fails, times out, or returns bad data; retries, fallbacks, error handling.</li>
        <li><strong>State and consistency</strong> — distributed state, eventual consistency, idempotency.</li>
      </ul>
    </DocSection>
    <DocSection title="Questions to ask">
      <p>
        Where are the single points of failure? What happens when this service is down or slow? How is data validated at each boundary? What is the retry and backoff strategy? How do we test rollback and recovery? Asking these questions early improves test strategy and design.
      </p>
    </DocSection>
    <DocSection title="Test strategy for distributed systems">
      <p>
        Combine happy-path tests with failure injection (e.g. chaos, fault injection). Use contract tests at API boundaries; integration tests for critical flows. Consider performance and reliability tests (load, stress, resilience). Document test points on the architecture diagram for clarity.
      </p>
    </DocSection>
  </DocPage>
);
