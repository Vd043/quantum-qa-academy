import { DocPage, DocSection } from '../components/DocPage';

export const CICD = () => (
  <DocPage
    title="CI/CD for QA"
    description="Run your tests continuously in a delivery pipeline. Fast, actionable feedback on each change."
  >
    <DocSection title="Objectives">
      <p>
        Integrate automated tests into a CI pipeline so every change gets fast, actionable feedback. Catch regressions early; keep the main branch releasable; reduce manual regression cycles.
      </p>
    </DocSection>
    <DocSection title="Where tests fit in the pipeline">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Unit tests</strong> → on every commit; fast (seconds to a few minutes); block merge if they fail.</li>
        <li><strong>API and UI smoke tests</strong> → on main branch and/or before release; critical paths only; fail fast.</li>
        <li><strong>Full regression</strong> → nightly or on-demand; broader coverage; results triaged next day or on demand.</li>
      </ul>
    </DocSection>
    <DocSection title="Common platforms">
      <p>
        <strong>GitHub Actions</strong>, <strong>Jenkins</strong>, <strong>GitLab CI</strong>, and similar tools can run test suites on commit, on merge, or on schedule. Configure build steps to install dependencies, run tests, and publish results (e.g. JUnit XML, HTML reports). Use secrets for credentials and environment-specific config.
      </p>
    </DocSection>
    <DocSection title="Best practices">
      <ul className="list-inside list-disc space-y-2">
        <li>Keep pipelines <strong>fast</strong> and <strong>reliable</strong> — flaky tests undermine trust; fix or quarantine them.</li>
        <li>Fail fast and surface root cause clearly — order tests by criticality; good failure messages and logs.</li>
        <li>Separate smoke vs. full regression — run smoke on every merge; full suite on schedule or release branch.</li>
        <li>Use consistent environments — same OS, runtime, and dependencies in CI as in production where possible.</li>
      </ul>
    </DocSection>
  </DocPage>
);
