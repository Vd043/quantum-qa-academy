import { DocPage, DocSection } from '../components/DocPage';

export const PromptingQA = () => (
  <DocPage
    title="Prompting for QA"
    description="Prompts that produce reliable, structured outputs. Test case generation, summarization, and analysis."
  >
    <DocSection title="Why prompting matters">
      <p>
        Good prompts lead to reliable, structured outputs from LLMs. Poor prompts produce vague or inconsistent results. For QA, you want outputs you can trust: test cases with clear steps and expected results, summaries that are accurate, and analysis that is actionable.
      </p>
    </DocSection>
    <DocSection title="Prompting patterns for QA">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Role + task + format</strong> — e.g. &quot;You are a QA engineer. Generate test cases for [feature]. Output as a table: ID, steps, expected result.&quot;</li>
        <li><strong>Structured output</strong> — ask for JSON, Markdown tables, or numbered lists so you can parse and validate.</li>
        <li><strong>Few-shot examples</strong> — give one or two examples of the desired output format and style.</li>
        <li><strong>Constraints</strong> — e.g. &quot;Include at least one negative test&quot;; &quot;Use boundary values.&quot;</li>
      </ul>
    </DocSection>
    <DocSection title="Example prompts">
      <p>
        <strong>Test case generation:</strong> &quot;Given this requirement: [paste]. Generate 5 test cases. For each: title, preconditions, steps, expected result. Include one boundary and one negative case.&quot; <strong>Bug summarization:</strong> &quot;Summarize this bug report in 2–3 sentences: [paste]. Include: what failed, steps, and suggested area to investigate.&quot; <strong>Log analysis:</strong> &quot;From this stack trace [paste], suggest the most likely root cause and one next step for the developer.&quot;
      </p>
    </DocSection>
    <DocSection title="Best practices">
      <p>
        Be specific; include context (e.g. tech stack, product area). Request a format that fits your workflow (JSON, table, list). Validate outputs—spot-check and run generated tests. Iterate on prompts; save good ones as templates for your team.
      </p>
    </DocSection>
  </DocPage>
);
