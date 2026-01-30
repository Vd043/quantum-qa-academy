import { Link } from 'react-router-dom';
import { DocPage, DocSection } from '../components/DocPage';

export const AutomationEngineerPath = () => (
  <DocPage
    title="Automation Engineer Path"
    description="Go from manual tester to automation engineer. Build reliable UI and API automation with Selenium, Appium, API testing, and CI/CD."
  >
    <DocSection title="Who this is for">
      <p>
        Testers with QA basics who want to ship reliable automation for UI and APIs. Prerequisites: complete the <Link to="/learning-paths/beginner-qa" className="text-teal-400 underline hover:no-underline">Beginner QA Path</Link> and have basic programming knowledge (Java preferred, or another OOP language).
      </p>
    </DocSection>
    <DocSection title="Phase 1 – Automation Foundations">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/automation/foundations" className="text-teal-400 underline hover:no-underline">Automation Foundations</Link> — when to automate, what to automate, and principles (determinism, API over UI, test code as production asset).</li>
        <li>Read: <Link to="/qa-sdlc/overview" className="text-teal-400 underline hover:no-underline">QA SDLC Overview</Link> — how automation fits into the lifecycle.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You understand when automation is valuable and how it fits into the SDLC.</p>
    </DocSection>
    <DocSection title="Phase 2 – UI Automation with Selenium + Java">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/automation/selenium-java" className="text-teal-400 underline hover:no-underline">Selenium + Java</Link> — Page Object Model, design patterns, and Selenium best practices.</li>
        <li>Exercise: Set up a small Selenium project; automate a login flow and a simple happy-path test. Stretch: introduce the Page Object pattern.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can build and maintain UI tests in a clean structure.</p>
    </DocSection>
    <DocSection title="Phase 3 – API Testing">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/automation/api-testing" className="text-teal-400 underline hover:no-underline">API Testing</Link> — designing and automating high-value API tests.</li>
        <li>Exercise: Automate three to five API tests for a public API; validate status codes, payloads, and edge cases.</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can design and run API tests that catch integration and contract issues.</p>
    </DocSection>
    <DocSection title="Phase 4 – CI/CD Integration">
      <ul className="list-inside list-disc space-y-2">
        <li>Read: <Link to="/automation/ci-cd" className="text-teal-400 underline hover:no-underline">CI/CD for QA</Link> — where tests fit in the pipeline (unit on commit, API/UI smoke on main, full regression nightly).</li>
        <li>Exercise: Run your tests on each commit using a CI tool (GitHub Actions, Jenkins, or GitLab CI).</li>
      </ul>
      <p className="mt-3"><strong>Outcome:</strong> You can run tests reliably in CI and troubleshoot failures.</p>
    </DocSection>
    <DocSection title="Done when">
      <p>You can: decide what to automate and what not to; build and maintain Selenium and API tests in a clean structure; run tests reliably in CI. Next: <Link to="/learning-paths/system-design" className="text-teal-400 underline hover:no-underline">System Design Path</Link> or <Link to="/learning-paths/ai-llm" className="text-teal-400 underline hover:no-underline">AI & LLM Path</Link>.</p>
    </DocSection>
  </DocPage>
);
