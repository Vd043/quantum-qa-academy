import { DocPage, DocSection } from '../components/DocPage';

export const AIForTesters = () => (
  <DocPage
    title="AI for Testers"
    description="Practical ways QA can use AI today. Test ideas, summarization, self-healing, and automation support."
  >
    <DocSection title="How AI is reshaping QA">
      <p>
        LLMs and generative AI are moving QA from &quot;automated checking&quot; (verifying known paths) toward &quot;automated testing&quot; (intelligent exploration and generation). Use AI to accelerate test design, data generation, and maintenance while keeping humans in the loop for quality and security.
      </p>
    </DocSection>
    <DocSection title="Practical use cases">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Test idea generation</strong> — from requirements or PRDs; expand coverage and edge cases.</li>
        <li><strong>Test case and script generation</strong> — translate requirements or Jira tickets into test cases or automation skeletons.</li>
        <li><strong>Bug report summarization</strong> — condense logs and steps into clear defect reports.</li>
        <li><strong>Log and failure analysis</strong> — suggest root cause and next steps from stack traces and logs.</li>
        <li><strong>Self-healing tests</strong> — use semantic understanding (e.g. embeddings) to update selectors when UI changes, reducing flakiness (CloudQA, research).</li>
      </ul>
    </DocSection>
    <DocSection title="Best practices">
      <p>
        Always review and validate AI output—don&apos;t blindly trust generated tests or data. Protect sensitive data; don&apos;t send production data to public LLMs. Use clear, structured prompts (see Prompting for QA) for reliable outputs. Integrate AI into existing workflows (e.g. IDE, CI) where it saves time without compromising quality.
      </p>
    </DocSection>
  </DocPage>
);
