import { DocPage, DocSection } from '../components/DocPage';

export const TestDataGeneration = () => (
  <DocPage
    title="AI Test Data Generation"
    description="Use AI for realistic, edge-case-heavy test data. LLM-powered data generation and best practices."
  >
    <DocSection title="Why use AI for test data?">
      <p>
        LLMs can generate realistic, diverse test data at scale—including edge cases and invalid inputs that are tedious to create by hand. Research shows LLMs successfully generate realistic test data generators across domains and natural languages (e.g. arXiv 2401.17626). Use AI to expand coverage and reduce manual data setup.
      </p>
    </DocSection>
    <DocSection title="Integration levels">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Raw test data</strong> — LLM outputs CSV/JSON rows or records directly for import.</li>
        <li><strong>Data generator programs</strong> — LLM generates code (e.g. in a specific language) that produces test data when run.</li>
        <li><strong>Programs using faker libraries</strong> — LLM generates code that uses existing faker/test-data libraries for consistency and realism.</li>
      </ul>
    </DocSection>
    <DocSection title="Best practices">
      <p>
        Specify schema, constraints, and edge cases in the prompt (e.g. &quot;Include null, empty, and out-of-range values&quot;). Validate generated data against business rules and schema. For sensitive data, use synthetic data only; never use production PII. Combine AI-generated data with hand-crafted critical cases for high-risk areas.
      </p>
    </DocSection>
    <DocSection title="Example use">
      <p>
        Prompt: &quot;Generate 10 test user records for a signup form. Fields: name, email, phone. Include: 2 valid, 2 invalid email, 2 boundary length name, 2 empty required field. Output as JSON array.&quot; Use the output in API or UI tests; re-run generation when schema changes.
      </p>
    </DocSection>
  </DocPage>
);
