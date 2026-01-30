import { DocPage, DocSection } from '../components/DocPage';

export const TestStrategy = () => (
  <DocPage
    title="Test Strategy & Plans"
    description="Define how, what, and when you test for a release or product. Aligned with ISO 29119 and ISTQB."
  >
    <DocSection title="Test strategy vs. test plan">
      <p>
        A <strong>test strategy</strong> is a high-level document describing the general testing approach—what needs to be achieved and how (ISO 29119). It operates at a strategic level. A <strong>test plan</strong> is the concrete scope, schedule, and resourcing for a specific release or project. Strategy answers &quot;how we test&quot;; plan answers &quot;what we test this release and when.&quot;
      </p>
    </DocSection>
    <DocSection title="Key elements of a test strategy">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Scope and out-of-scope</strong> — what is in and out of testing for this product/program.</li>
        <li><strong>Quality risks and priorities</strong> — business and technical risks; what to test first.</li>
        <li><strong>Types of testing</strong> — functional, regression, performance, security, etc., and when each applies.</li>
        <li><strong>Test design techniques and completion criteria</strong> — e.g. equivalence partitioning, boundary value; definition of done for test design.</li>
        <li><strong>Environments and data</strong> — test beds, data approach, tooling.</li>
        <li><strong>Entry/exit criteria</strong> — when testing can start and when it can be considered complete.</li>
        <li><strong>Retesting and regression approach</strong> — how and when regression and retests are run.</li>
      </ul>
    </DocSection>
    <DocSection title="Practical checklist">
      <ul className="list-inside list-disc space-y-2">
        <li>Risks and priorities are documented and agreed.</li>
        <li>Scope and non-scope are clear to stakeholders.</li>
        <li>Types of testing are mapped to risks.</li>
        <li>Exit criteria are agreed with product and engineering.</li>
        <li>Traceability from requirements to test cases is maintained.</li>
      </ul>
    </DocSection>
  </DocPage>
);
