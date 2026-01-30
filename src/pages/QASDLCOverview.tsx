import { DocPage, DocSection } from '../components/DocPage';

export const QASDLCOverview = () => (
  <DocPage
    title="QA SDLC Overview"
    description="Understand the end-to-end QA lifecycle from planning to closure. Aligned with ISO 29119 and industry practice."
  >
    <DocSection title="What is QA SDLC?">
      <p>
        The <strong>QA Software Development Life Cycle (QA SDLC)</strong> is the structured process QA follows alongside delivery teams. It defines when and how testing happens, what deliverables are produced, and how quality risks are managed from requirements to release.
      </p>
    </DocSection>
    <DocSection title="Phases (high level)">
      <ol className="list-inside list-decimal space-y-2">
        <li><strong>Requirement analysis</strong> — understand scope, risks, and testability.</li>
        <li><strong>Test planning</strong> — test strategy, test plan, scope, schedule, resources.</li>
        <li><strong>Test design</strong> — test cases, checklists, test data, environments.</li>
        <li><strong>Environment & data preparation</strong> — test beds, data, integrations.</li>
        <li><strong>Test execution</strong> — run tests, log results, report defects.</li>
        <li><strong>Reporting & closure</strong> — test summary, lessons learned, sign-off.</li>
      </ol>
    </DocSection>
    <DocSection title="Deliverables per phase">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Requirement analysis</strong> → risk list, clarification questions, testability review.</li>
        <li><strong>Planning</strong> → test strategy, test plan, entry/exit criteria.</li>
        <li><strong>Design</strong> → test cases, checklists, test data, automation scope.</li>
        <li><strong>Execution</strong> → execution logs, defect reports, status updates.</li>
        <li><strong>Closure</strong> → test summary report, lessons learned, release recommendation.</li>
      </ul>
    </DocSection>
    <DocSection title="Best practices">
      <p>
        Maintain clear traceability from requirements to test cases and expected results (ISTQB). Combine manual and automation testing for comprehensive coverage. Document scope and out-of-scope explicitly. Align entry/exit criteria with stakeholders and keep deliverables consistent across teams.
      </p>
    </DocSection>
  </DocPage>
);
