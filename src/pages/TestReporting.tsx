import { DocPage, DocSection } from '../components/DocPage';

export const TestReporting = () => (
  <DocPage
    title="Test Execution & Reporting"
    description="Execute tests and communicate status clearly. Logs, defect reports, and test summary reports."
  >
    <DocSection title="Execution best practices">
      <p>
        Run tests in a consistent environment; log results (pass/fail, steps, screenshots, logs). Retest fixed defects and run regression as defined in the test plan. Keep execution traceable to test cases and requirements.
      </p>
    </DocSection>
    <DocSection title="Defect reporting">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Title and summary</strong> — clear, reproducible description.</li>
        <li><strong>Steps to reproduce</strong> — minimal, ordered steps.</li>
        <li><strong>Expected vs. actual</strong> — what should happen vs. what happened.</li>
        <li><strong>Environment and data</strong> — build, OS, browser, test data.</li>
        <li><strong>Severity and priority</strong> — impact and urgency (align with team definitions).</li>
      </ul>
    </DocSection>
    <DocSection title="Test summary report">
      <p>
        At closure, produce a <strong>test summary report</strong>: scope executed, pass/fail counts, coverage, major defects, risks, and release recommendation. Include lessons learned and improvement items for the next cycle.
      </p>
    </DocSection>
    <DocSection title="Stakeholder communication">
      <p>
        Communicate status regularly (e.g. dashboards, short written updates). Highlight blockers, risks, and trends. Keep the report concise; link to detailed logs and defect trackers for drill-down.
      </p>
    </DocSection>
  </DocPage>
);
