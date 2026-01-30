import { DocPage, DocSection, DocCardGrid, DocLinkCard } from '../components/DocPage';

export const LearningPathsIndex = () => (
  <DocPage
    title="Learning Paths"
    description="Guided paths from beginner QA to advanced automation, system design, and AI. Follow a structured sequence instead of jumping between topics."
  >
    <DocSection title="Choose your path">
      <p className="mb-6">
        Each path is a curated sequence of topics with clear outcomes. Start with one and complete it before branching.
      </p>
      <DocCardGrid>
        <DocLinkCard
          title="Beginner QA Path"
          to="/learning-paths/beginner-qa"
          description="Build rock-solid QA foundations: SDLC, test strategy, test design, and reporting. For new QA engineers and career switchers."
        />
        <DocLinkCard
          title="Automation Engineer Path"
          to="/learning-paths/automation-engineer"
          description="Go from zero to robust UI and API automation with Selenium, Appium, API testing, and CI/CD integration."
        />
        <DocLinkCard
          title="System Design Path"
          to="/learning-paths/system-design"
          description="Understand how large systems are designed and how QA fits in. Performance, reliability, and the QA perspective."
        />
        <DocLinkCard
          title="AI & LLM Path"
          to="/learning-paths/ai-llm"
          description="Use AI for test design, prompting, and test data generation. Practical, safe workflows for testers."
        />
      </DocCardGrid>
    </DocSection>
    <DocSection title="Explore by topic">
      <p className="mb-4">
        Prefer to jump by topic? Use the nav or the links below.
      </p>
      <DocCardGrid>
        <DocLinkCard title="QA SDLC Overview" to="/qa-sdlc/overview" description="End-to-end lifecycle from planning to closure." />
        <DocLinkCard title="Test Strategy & Plans" to="/qa-sdlc/test-strategy" description="Define how, what, and when you test." />
        <DocLinkCard title="Automation Foundations" to="/automation/foundations" description="When and how to use test automation." />
        <DocLinkCard title="CI/CD for QA" to="/automation/ci-cd" description="Run tests continuously in your pipeline." />
        <DocLinkCard title="AI for Testers" to="/ai-llms/ai-for-testers" description="Practical ways QA can use AI today." />
        <DocLinkCard title="Glossary & Resources" to="/resources/glossary" description="Key terms, cheat sheets, and roadmaps." />
      </DocCardGrid>
    </DocSection>
  </DocPage>
);
