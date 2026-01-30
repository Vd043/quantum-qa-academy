import { Link } from 'react-router-dom';
import { DocPage, DocSection } from '../components/DocPage';

export const Roadmaps = () => (
  <DocPage
    title="Roadmaps"
    description="Career and learning roadmaps. Where to go after each path."
  >
    <DocSection title="Learning roadmap">
      <p className="mb-4">Suggested order:</p>
      <ol className="list-inside list-decimal space-y-2">
        <li><Link to="/learning-paths/beginner-qa" className="text-teal-400 underline hover:no-underline">Beginner QA Path</Link> — QA SDLC, test strategy, design, reporting.</li>
        <li><Link to="/learning-paths/automation-engineer" className="text-teal-400 underline hover:no-underline">Automation Engineer Path</Link> — Selenium, API, CI/CD.</li>
        <li><Link to="/learning-paths/system-design" className="text-teal-400 underline hover:no-underline">System Design Path</Link> — Architecture, performance, reliability.</li>
        <li><Link to="/learning-paths/ai-llm" className="text-teal-400 underline hover:no-underline">AI & LLM Path</Link> — AI for testers, prompting, test data.</li>
      </ol>
    </DocSection>
    <DocSection title="Career progression">
      <p>
        From manual QA → automation engineer → SDET or QA lead → quality architect or engineering manager. Build depth in one area (e.g. API testing, performance) and breadth in SDLC, automation, and system thinking. Use the paths and resources here as a structured way to level up.
      </p>
    </DocSection>
  </DocPage>
);
