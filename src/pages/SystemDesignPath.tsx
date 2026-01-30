import { Link } from 'react-router-dom';
import { DocPage, DocSection } from '../components/DocPage';

export const SystemDesignPath = () => (
  <DocPage
    title="System Design Path"
    description="Learn how large systems are designed and what QA should care about. For QA and automation engineers who interact with architects, SREs, and senior developers."
  >
    <DocSection title="Who this is for">
      <p>
        QA and automation engineers who interact with architects, SREs, and senior developers. Prerequisites: comfortable with basic web app concepts, HTTP, and databases.
      </p>
    </DocSection>
    <DocSection title="Phase 1 – System Design from a QA Lens">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/system-design/qa-perspective" className="text-teal-400 underline hover:no-underline">System Design for QA</Link> — view system design through a QA lens; key test points and failure modes.</li>
        <li>Exercise: Draw a simple diagram for a three-tier web app and mark key test points (integration, failure, data flow).</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can read a system design diagram and ask sharp QA questions.</p>
    </DocSection>
    <DocSection title="Phase 2 – Performance, Reliability, and Observability">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/system-design/perf-reliability" className="text-teal-400 underline hover:no-underline">Performance & Reliability</Link> — tests for scalability, resilience, and observability.</li>
        <li>Exercise: Identify performance and reliability risks in your current or a sample project; propose test scenarios.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can propose tests for scalability, resilience, and observability.</p>
    </DocSection>
    <DocSection title="Phase 3 – Test Strategies for Distributed Systems">
      <ul className="list-inside list-disc space-y-2">
        <li>Combine: <Link to="/qa-sdlc/overview" className="text-teal-400 underline hover:no-underline">QA SDLC Overview</Link> and <Link to="/system-design/qa-perspective" className="text-teal-400 underline hover:no-underline">System Design for QA</Link>.</li>
        <li>Design: A test strategy for a microservices-based system (happy paths, failure modes, chaos, contract tests).</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can design a test strategy for distributed systems.</p>
    </DocSection>
    <DocSection title="Done when">
      <p>You can read a system design diagram and ask sharp QA questions, and propose tests for scalability, resilience, and observability. Next: <Link to="/learning-paths/ai-llm" className="text-teal-400 underline hover:no-underline">AI & LLM Path</Link>.</p>
    </DocSection>
  </DocPage>
);
