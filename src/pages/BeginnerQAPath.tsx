import { Link } from 'react-router-dom';
import { DocPage, DocSection } from '../components/DocPage';

export const BeginnerQAPath = () => (
  <DocPage
    title="Beginner QA Path"
    description="Build rock-solid QA foundations from scratch. For new QA engineers, career switchers, and developers who want to understand testing deeply."
  >
    <DocSection title="Who this is for">
      <p>
        New QA engineers, career switchers, or developers who want to understand testing deeply. Prerequisites: basic computer literacy and some familiarity with web or mobile apps.
      </p>
    </DocSection>
    <DocSection title="Phase 1 – Foundations of QA">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/qa-sdlc/overview" className="text-teal-400 underline hover:no-underline">QA SDLC Overview</Link> — understand the full lifecycle and key deliverables.</li>
        <li>Read: <Link to="/qa-sdlc/test-strategy" className="text-teal-400 underline hover:no-underline">Test Strategy & Plans</Link> — define how, what, and when you test.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can explain the QA SDLC to a teammate and align testing with business and technical risk.</p>
    </DocSection>
    <DocSection title="Phase 2 – Designing Good Tests">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/qa-sdlc/test-design-techniques" className="text-teal-400 underline hover:no-underline">Test Design Techniques</Link> — equivalence partitioning, boundary value analysis, decision tables, state transition (ISTQB-aligned).</li>
        <li>Exercise: Take a simple app and write test cases using at least three techniques. Focus on high-value, reproducible cases.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can design test cases systematically and document expected results clearly.</p>
    </DocSection>
    <DocSection title="Phase 3 – Execution & Reporting">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/qa-sdlc/test-reporting" className="text-teal-400 underline hover:no-underline">Test Execution & Reporting</Link> — execution logs, defect reports, test summary reports.</li>
        <li>Practice: Execute a small test suite and write a concise test report with status, coverage, and risks.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can run tests, log results, and communicate status clearly to stakeholders.</p>
    </DocSection>
    <DocSection title="Done when">
      <p>You can: explain the QA SDLC; write a basic test plan and a small set of well-designed test cases; run tests and communicate status clearly. From here, move to the <Link to="/learning-paths/automation-engineer" className="text-teal-400 underline hover:no-underline">Automation Engineer Path</Link> or <Link to="/learning-paths/system-design" className="text-teal-400 underline hover:no-underline">System Design Path</Link>.</p>
    </DocSection>
  </DocPage>
);
