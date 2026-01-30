import { DocPage, DocSection } from '../components/DocPage';

export const Appium = () => (
  <DocPage
    title="Appium Basics"
    description="Get started with mobile automation. Cross-platform mobile testing with Appium."
  >
    <DocSection title="What is Appium?">
      <p>
        <strong>Appium</strong> is an open-source framework for automating mobile apps (iOS and Android) using the WebDriver protocol. It allows you to write tests in your preferred language (e.g. Java, JavaScript, Python) and run them on simulators, emulators, or real devices.
      </p>
    </DocSection>
    <DocSection title="When to use Appium">
      <ul className="list-inside list-disc space-y-2">
        <li>You need to automate native or hybrid mobile apps across iOS and Android.</li>
        <li>You want one test codebase that can target multiple platforms (with platform-specific adjustments where needed).</li>
        <li>You are integrating mobile tests into CI/CD (e.g. cloud device farms, local simulators/emulators).</li>
      </ul>
    </DocSection>
    <DocSection title="Core concepts">
      <ul className="list-inside list-disc space-y-2">
        <li><strong>Session</strong> — each test run starts a session with the Appium server and the target app.</li>
        <li><strong>Capabilities</strong> — platform, device, app path, and other settings (e.g. appPackage, appActivity for Android).</li>
        <li><strong>Locators</strong> — use accessibility IDs, XPath, or platform-specific locators; prefer stable, semantic identifiers.</li>
      </ul>
    </DocSection>
    <DocSection title="Best practices">
      <p>
        Use Page Object–style abstractions for screens; wait for elements to be present/visible before interacting; run on real devices for critical flows when possible. Keep tests deterministic and maintainable; integrate with CI for regression. Prefer API or contract tests where they can replace heavy UI flows.
      </p>
    </DocSection>
  </DocPage>
);
