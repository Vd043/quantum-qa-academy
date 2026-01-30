import { Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { DocLayout } from './components/DocLayout';
import { LearningPathsIndex } from './pages/LearningPathsIndex';
import { BeginnerQAPath } from './pages/BeginnerQAPath';
import { AutomationEngineerPath } from './pages/AutomationEngineerPath';
import { SystemDesignPath } from './pages/SystemDesignPath';
import { AILLMPath } from './pages/AILLMPath';
import { QASDLCOverview } from './pages/QASDLCOverview';
import { TestStrategy } from './pages/TestStrategy';
import { TestDesignTechniques } from './pages/TestDesignTechniques';
import { TestReporting } from './pages/TestReporting';
import { AutomationFoundations } from './pages/AutomationFoundations';
import { SeleniumJava } from './pages/SeleniumJava';
import { Appium } from './pages/Appium';
import { APITesting } from './pages/APITesting';
import { CICD } from './pages/CICD';
import { SystemDesignQAPerspective } from './pages/SystemDesignQAPerspective';
import { PerfReliability } from './pages/PerfReliability';
import { AIForTesters } from './pages/AIForTesters';
import { PromptingQA } from './pages/PromptingQA';
import { TestDataGeneration } from './pages/TestDataGeneration';
import { Glossary } from './pages/Glossary';
import { CheatSheets } from './pages/CheatSheets';
import { Roadmaps } from './pages/Roadmaps';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/learning-paths" element={<DocLayout />}>
        <Route index element={<LearningPathsIndex />} />
        <Route path="beginner-qa" element={<BeginnerQAPath />} />
        <Route path="automation-engineer" element={<AutomationEngineerPath />} />
        <Route path="system-design" element={<SystemDesignPath />} />
        <Route path="ai-llm" element={<AILLMPath />} />
      </Route>
      <Route path="/qa-sdlc" element={<DocLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<QASDLCOverview />} />
        <Route path="test-strategy" element={<TestStrategy />} />
        <Route path="test-design-techniques" element={<TestDesignTechniques />} />
        <Route path="test-reporting" element={<TestReporting />} />
      </Route>
      <Route path="/automation" element={<DocLayout />}>
        <Route index element={<Navigate to="foundations" replace />} />
        <Route path="foundations" element={<AutomationFoundations />} />
        <Route path="selenium-java" element={<SeleniumJava />} />
        <Route path="appium" element={<Appium />} />
        <Route path="api-testing" element={<APITesting />} />
        <Route path="ci-cd" element={<CICD />} />
      </Route>
      <Route path="/system-design" element={<DocLayout />}>
        <Route index element={<Navigate to="qa-perspective" replace />} />
        <Route path="qa-perspective" element={<SystemDesignQAPerspective />} />
        <Route path="perf-reliability" element={<PerfReliability />} />
      </Route>
      <Route path="/ai-llms" element={<DocLayout />}>
        <Route index element={<Navigate to="ai-for-testers" replace />} />
        <Route path="ai-for-testers" element={<AIForTesters />} />
        <Route path="prompting" element={<PromptingQA />} />
        <Route path="test-data-generation" element={<TestDataGeneration />} />
      </Route>
      <Route path="/resources" element={<DocLayout />}>
        <Route index element={<Navigate to="glossary" replace />} />
        <Route path="glossary" element={<Glossary />} />
        <Route path="cheat-sheets" element={<CheatSheets />} />
        <Route path="roadmaps" element={<Roadmaps />} />
      </Route>
    </Routes>
  );
}
