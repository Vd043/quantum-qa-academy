import { DocPage, DocSection } from '../components/DocPage';

export const PerfReliability = () => (
  <DocPage
    title="Performance & Reliability"
    description="Tests for scalability, resilience, and observability. Load, stress, and failure-mode testing."
  >
    <DocSection title="Performance testing">
      <p>
        Performance tests validate that the system meets latency, throughput, and resource targets under load. Types include: <strong>load testing</strong> (expected load), <strong>stress testing</strong> (beyond capacity to find breaking point), <strong>spike testing</strong> (sudden traffic), and <strong>endurance testing</strong> (sustained load over time).
      </p>
    </DocSection>
    <DocSection title="Reliability and resilience">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Failure injection</strong> — simulate service failures, network delays, timeouts; verify retries, fallbacks, and graceful degradation.</li>
        <li><strong>Chaos engineering</strong> — introduce controlled failures in production or staging to validate resilience and recovery.</li>
        <li><strong>Recovery testing</strong> — verify rollback, failover, and data recovery procedures.</li>
      </ul>
    </DocSection>
    <DocSection title="Observability">
      <p>
        Tests should validate that the system is observable: logs, metrics, and traces are available and actionable. Verify alerting and dashboards; test that failures produce clear signals for debugging. Observability is part of quality—if you can&apos;t see what went wrong, you can&apos;t fix it.
      </p>
    </DocSection>
    <DocSection title="Best practices">
      <p>
        Define clear performance and reliability goals (SLIs/SLOs). Use realistic data and load patterns. Run performance and chaos tests in isolated or staging environments where possible. Document findings and risks; integrate results into release decisions.
      </p>
    </DocSection>
  </DocPage>
);
