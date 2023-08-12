# playwright-basics

## M2: Install and configuration

### Documentation

https://playwright.dev/docs/intro

### Install

npm init playwright@latest

npx playwright test

npx playwright test --headed

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
