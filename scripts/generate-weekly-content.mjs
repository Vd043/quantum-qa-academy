import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const weeklyDir = path.join(ROOT, 'src', 'content', 'docs', 'weekly');

async function main() {
  fs.mkdirSync(weeklyDir, { recursive: true });

  const topic = await pickTopic();
  const markdown = await generateArticleForTopic(topic);

  const date = new Date().toISOString().slice(0, 10);
  const filename = `${date}-${slugify(topic)}.mdx`;
  const filePath = path.join(weeklyDir, filename);

  const frontmatter = [
    '---',
    `title: ${JSON.stringify(topic)}`,
    'description: Auto-generated weekly article draft.',
    '---',
    ''
  ].join('\n');

  fs.writeFileSync(filePath, `${frontmatter}${markdown}\n`, 'utf8');
  console.log(`Generated weekly article: ${filePath}`);
}

async function pickTopic() {
  const topics = [
    'Testing strategies for microservices',
    'Designing resilient test data pipelines',
    'Using AI to generate test cases from requirements',
    'Common anti-patterns in UI automation',
    'Measuring test effectiveness with real metrics'
  ];
  return topics[Math.floor(Math.random() * topics.length)];
}

async function generateArticleForTopic(topic) {
  // Placeholder – wire to your LLM provider using process.env.LLM_API_KEY.
  return [
    `## ${topic}`,
    '',
    '_This article was generated as a draft. Review and refine before publishing._',
    '',
    '### Why this topic matters',
    '',
    'Briefly explain why this area is important for modern QA teams.',
    '',
    '### Key concepts',
    '',
    '- Concept 1',
    '- Concept 2',
    '- Concept 3',
    '',
    '### Practical checklist',
    '',
    '- [ ] Action item 1',
    '- [ ] Action item 2',
    '- [ ] Action item 3'
  ].join('\n');
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

