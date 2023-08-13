# playwright-basics

## M2: Install and configuration

### Documentation

https://playwright.dev/docs/intro

### Install

npm init playwright@latest

### Run test

npx playwright test

npx playwright test --headed

npx playwright test --ui

npx playwright test --debug

npx playwright test --trace on

### Browser

https://playwright.dev/docs/browsers

### Context

https://playwright.dev/docs/api/class-browsercontext

### Page

https://playwright.dev/docs/api/class-page

### Popular commands

https://playwright.dev/docs/writing-tests#basic-actions

https://playwright.dev/docs/api/class-locator

#### page.goto()

https://playwright.dev/docs/api/class-page#page-goto

#### page.locator()

https://playwright.dev/docs/api/class-page#page-locator

#### page.click()

https://playwright.dev/docs/api/class-locator#locator-click

#### page.hover()

https://playwright.dev/docs/api/class-locator#locator-hover

#### page.fill()

https://playwright.dev/docs/api/class-locator#locator-fill

#### page.type()

https://playwright.dev/docs/api/class-locator#locator-type

#### page.evaluate()

Returns the value of the pageFunction invocation.

### Popular Assertions

https://playwright.dev/docs/test-assertions

#### expect(locator).toBeVisible()

https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-visible

#### expect(locator).toBeHidden()

https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-hidden

#### expect(locator).toHaveText()

https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-text

#### expect(locator).toContainText()

https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-contain-text

#### expect(locator).toHaveCount()

https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-count

#### expect(locator).toHaveURL()

https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-url

#### expect(locator).toHaveTitle()

https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-title

### Writing first test scenario

#### PW Test Hooks

https://playwright.dev/docs/writing-tests#using-test-hooks

#### test.describe(name, fn)

- declares a group of test cases, pre and post requisites

#### test.beforeEach(fn)

- declares a sequence of steps that will be executed before each test cases inside describe block

#### test.afterEach(fn)

- declares a sequence of steps that will be executed after each test cases inside describe block

#### test.beforeAll(fn)

- declares a sequence of steps that will be executed once per worker before all test cases inside describe block

#### test.afterAll(fn)

- declares a sequence of steps that will be executed once per worker after all test cases inside describe block

#### test(name, fn)

- declares a test itself

### Configuration

https://playwright.dev/docs/test-configuration

## M3: Test Runner

### Configuration

- test.describe.configure()

https://playwright.dev/docs/api/class-test#test-describe-configure

### Isolation, skipping and configuring test scenarios

https://playwright.dev/docs/api/class-test

#### test.only()

https://playwright.dev/docs/api/class-test#test-only

#### test.skip()

https://playwright.dev/docs/api/class-test#test-skip-2

#### test.use()

https://playwright.dev/docs/api/class-test#test-use

https://playwright.dev/docs/api/class-testoptions

- test.use( {headless: true} );
- test.use( {locale: 'de-DE'} );
- test.use({ isMobile: true });
- test.use({ viewport: {width: 100, height: 100} });
- test.use({ storageState: 'state.json' });

### Working with Storage State

- This approach can be also used if you need to authenticate a user before all the tests

## M4: Debuggin

### Documentation

https://playwright.dev/docs/getting-started-vscode

https://playwright.dev/docs/debug

### UI Mode

https://playwright.dev/docs/test-ui-mode

- npx playwright test --ui

### Playwright inspector

https://playwright.dev/docs/debug#playwright-inspector

### Run in debug mode

- npx playwright test --debug

- npx playwright test example.spec.ts:10 --debug

- npx playwright test example.spec.ts:10 --project=webkit --debug

### Stepping through your

https://playwright.dev/docs/api/class-page#page-pause

- await page.pause();

### Trace Viewer

https://playwright.dev/docs/trace-viewer-intro

https://playwright.dev/docs/trace-viewer

https://playwright.dev/docs/api/class-testoptions#test-options-trace

### Recording a Trace

- 'on-first-retry' - Record a trace only when retrying a test for the first time.
- 'on-all-retries' - Record traces for all test retries.
- 'off' - Do not record a trace.
- 'on' - Record a trace for each test. (not recommended as it's performance heavy)
- 'retain-on-failure' - Record a trace for each test, but remove it from successful test runs.

### CLI parameters

- npx playwright test --trace on

- npx playwright show-trace trace.zip

### Video recording

https://playwright.dev/docs/videos#record-video

https://playwright.dev/docs/api/class-testoptions#test-options-video

### How to record videos in Playwright ?

- 'off' - Do not record video.
- 'on' - Record video for each test.
- 'retain-on-failure' - Record video for each test, but remove all videos from successful test runs.
- 'on-first-retry' - Record video only when retrying a test for the first time.

- const path = await page.video().path();

### Browser Developer Tools & Extended Playwright logs

https://playwright.dev/docs/debug#browser-developer-tools

https://playwright.dev/docs/debug#verbose-api-logs

PWDEBUG=console npx playwright test

The playwright object will be available in the console panel:

- playwright.$(selector) - Query the Playwright selector, using the actual Playwright query engine.
- playwright.$$(selector) - Same as playwright.$, but returns all matching elements.
- playwright.inspect(selector) - Reveal element in the Elements panel.
- playwright.locator(selector) - Create a locator and query matching elements.
- playwright.highlight(selector) - Highlight the first occurrence of the locator.
- playwright.clear() - Clear existing highlights.
- playwright.selector(element) - Generates selector for the given element. For example, select an element in the Elements panel and pass $0

#### How to enable Verbose API logs ?

- DEBUG=pw:api npx playwright test

### Headed & SlowMo modes

https://playwright.dev/docs/debug#headed-mode
https://playwright.dev/docs/api/class-testoptions#test-options-headless
https://playwright.dev/docs/api/class-browsertype#browser-type-launch-option-slow-mo

- // Chromium, Firefox, or WebKit
- await chromium.launch({ headless: false, slowMo: 100 });