import { DocPage, DocSection } from '../components/DocPage';

export const TestDesignTechniques = () => (
  <DocPage
    title="Test Design Techniques"
    description="Design high-value test cases systematically. ISTQB-aligned specification-based and structure-based techniques."
  >
    <DocSection title="Why use formal techniques?">
      <p>
        Techniques like equivalence partitioning and boundary value analysis help you design tests that cover behavior systematically instead of ad hoc. They reduce gaps and redundancy and improve traceability to requirements.
      </p>
    </DocSection>
    <DocSection title="Specification-based (black-box) techniques">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Equivalence partitioning</strong> — group inputs into classes that should behave the same; test one representative per partition.</li>
        <li><strong>Boundary value analysis</strong> — test at and just inside/outside boundaries (min, max, off-by-one).</li>
        <li><strong>Decision table testing</strong> — combinations of conditions and actions; good for business rules.</li>
        <li><strong>State transition testing</strong> — model states and transitions; test valid and invalid paths.</li>
        <li><strong>Use case testing</strong> — scenarios from user flows and use cases.</li>
      </ul>
    </DocSection>
    <DocSection title="Structure-based (white-box) techniques">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Statement coverage</strong> — every statement executed at least once.</li>
        <li><strong>Decision coverage</strong> — every decision (branch) has true and false outcomes tested.</li>
        <li><strong>Code coverage</strong> — measure and use as one input for test completeness (not the only criterion).</li>
      </ul>
    </DocSection>
    <DocSection title="Best practices">
      <p>
        Combine techniques: use equivalence partitioning and boundary value for inputs; decision tables for rules; state transition for workflows. Document expected results and trace to requirements. Prefer high-value, stable scenarios for automation; use techniques to prioritize and avoid redundant tests.
      </p>
    </DocSection>
  </DocPage>
);
