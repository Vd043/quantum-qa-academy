import { DocPage, DocSection } from '../components/DocPage';

export const APITesting = () => (
  <DocPage
    title="API Testing"
    description="Design and automate high-value API tests. Fast feedback without UI complexity."
  >
    <DocSection title="Why API testing?">
      <p>
        API tests give you many of the benefits of end-to-end tests while avoiding UI brittleness and slowness (Martin Fowler&apos;s test pyramid). They validate contracts, business logic, and integration points quickly and reliably. Use them for regression, contract testing, and data validation.
      </p>
    </DocSection>
    <DocSection title="What to test">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Status codes and response structure</strong> — 200, 201, 4xx, 5xx; JSON schema or key fields.</li>
        <li><strong>Business rules and data</strong> — payload content, calculations, and side effects (e.g. DB state).</li>
        <li><strong>Edge cases and errors</strong> — invalid input, auth failures, rate limits, validation messages.</li>
        <li><strong>Contracts</strong> — request/response shape and semantics so consumers and providers stay aligned.</li>
      </ul>
    </DocSection>
    <DocSection title="Design principles">
      <p>
        Keep tests independent (no shared state); use realistic test data; validate both success and failure paths. Prefer structured assertions (e.g. schema checks, key field assertions) over brittle full-document comparison. Organize tests by resource or flow; reuse setup and helpers.
      </p>
    </DocSection>
    <DocSection title="Tools and integration">
      <p>
        Use libraries like RestAssured (Java), requests + pytest (Python), or axios + Jest (JavaScript). Integrate API tests into CI—run on every commit or on main branch for fast feedback. Separate smoke (critical paths) from full regression; run smoke first, then expand.
      </p>
    </DocSection>
  </DocPage>
);
