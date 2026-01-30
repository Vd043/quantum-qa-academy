import { Link } from 'react-router-dom';
import { DocPage, DocSection } from '../components/DocPage';

export const AILLMPath = () => (
  <DocPage
    title="AI & LLM Path"
    description="Use AI effectively in day-to-day QA work. Practical, safe workflows for test design, prompting, and test data generation."
  >
    <DocSection title="Who this is for">
      <p>
        QA and automation engineers curious about using AI in a practical, safe way. Prerequisites: basic familiarity with prompts and chat-based tools.
      </p>
    </DocSection>
    <DocSection title="Phase 1 – Foundations: AI for Testers">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/ai-llms/ai-for-testers" className="text-teal-400 underline hover:no-underline">AI for Testers</Link> — practical ways QA can use AI today (test ideas, summarization, self-healing).</li>
        <li>Exercise: Use an LLM to generate test ideas for a simple feature; filter and prioritize them.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can integrate AI into daily QA workflows while protecting quality and security.</p>
    </DocSection>
    <DocSection title="Phase 2 – Prompting for QA Workflows">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/ai-llms/prompting" className="text-teal-400 underline hover:no-underline">Prompting for QA</Link> — prompts that produce reliable, structured outputs.</li>
        <li>Exercise: Design prompts for test case generation, bug report summarization, and log analysis.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can design prompts that give you reliable, structured outputs.</p>
    </DocSection>
    <DocSection title="Phase 3 – AI-Driven Test Data & Automation Support">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/ai-llms/test-data-generation" className="text-teal-400 underline hover:no-underline">AI Test Data Generation</Link> — use AI for realistic, edge-case-heavy test data.</li>
        <li>Exercise: Use an LLM to propose realistic, edge-case-heavy test data sets for a sample feature.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can use AI to generate and maintain test data and support automation.</p>
    </DocSection>
    <DocSection title="Done when">
      <p>You can integrate AI into your daily QA workflows, design prompts for reliable outputs, and use AI for test data and automation support. See <Link to="/resources/glossary" className="text-teal-400 underline hover:no-underline">Glossary</Link> and <Link to="/resources/cheat-sheets" className="text-teal-400 underline hover:no-underline">Cheat Sheets</Link> for quick reference.</p>
    </DocSection>
  </DocPage>
);
