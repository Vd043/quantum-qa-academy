import { defineConfig } from '@astrojs/starlight';

export default defineConfig({
  title: 'QuantumQA Academy',
  description:
    'A world-class, fully managed learning hub for QA SDLC, automation, system design, and AI.',
  favicon: '/favicon.svg',
  social: {
    github: 'https://github.com/Vd043/quantum-qa-academy'
  },
  appearance: {
    defaultMode: 'dark',
    canToggle: true
  },
  theme: {
    accentColor: {
      light: '#00f5d4',
      dark: '#00f5d4'
    },
    typography: {
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif'
    }
  },
  sidebar: [
    {
      label: 'Start Here',
      items: [
        { label: 'Welcome', link: '/' },
        { label: 'How to Use This Site', link: '/getting-started' },
        { label: 'Learning Paths', link: '/learning-paths/index' }
      ]
    },
    {
      label: 'Learning Paths',
      items: [
        { label: 'Beginner QA Path', link: '/learning-paths/beginner-qa' },
        { label: 'Automation Engineer Path', link: '/learning-paths/automation-engineer' },
        { label: 'System Design Path', link: '/learning-paths/system-design' },
        { label: 'AI & LLM Path', link: '/learning-paths/ai-llm' }
      ]
    },
    {
      label: 'QA SDLC',
      items: [
        { label: 'QA SDLC Overview', link: '/qa-sdlc/overview' },
        { label: 'Test Strategy & Plans', link: '/qa-sdlc/test-strategy' },
        { label: 'Test Design Techniques', link: '/qa-sdlc/test-design-techniques' },
        { label: 'Test Execution & Reporting', link: '/qa-sdlc/test-reporting' }
      ]
    },
    {
      label: 'Automation',
      items: [
        { label: 'Automation Foundations', link: '/automation/foundations' },
        { label: 'Selenium + Java', link: '/automation/selenium-java' },
        { label: 'Appium Basics', link: '/automation/appium' },
        { label: 'API Testing', link: '/automation/api-testing' },
        { label: 'CI/CD for QA', link: '/automation/ci-cd' }
      ]
    },
    {
      label: 'System Design & Architecture',
      items: [
        { label: 'System Design for QA', link: '/system-design/qa-perspective' },
        { label: 'Performance & Reliability', link: '/system-design/perf-reliability' }
      ]
    },
    {
      label: 'AI & LLMs',
      items: [
        { label: 'AI for Testers', link: '/ai-llms/ai-for-testers' },
        { label: 'Prompting for QA', link: '/ai-llms/prompting' },
        { label: 'AI Test Data Generation', link: '/ai-llms/test-data-generation' }
      ]
    },
    {
      label: 'Resources',
      items: [
        { label: 'Glossary', link: '/resources/glossary' },
        { label: 'Cheat Sheets', link: '/resources/cheat-sheets' },
        { label: 'Roadmaps', link: '/resources/roadmaps' }
      ]
    }
  ]
});

