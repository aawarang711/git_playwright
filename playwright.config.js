// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Allure reporting commands
  // npx playwright test --grep @Web --reporter=line,allure-playwright

  // This is not working for allure report
  // allure generate ./allure-results --clean
  //allure open ./allure-report

  // This is working for allure report
  // npx allure generate ./allure-results
  // npx allure open ./allure-report



  testDir: './tests',
  //Test level timeout 
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  // reporter: "allure-playwright",
  retries : 0,
  // workers:2,

  projects : [
    {
    name : 'safari',
    use: {
    // Timeout for each action
    actionTimeout: 10000,
    // Timeout when the url loads first time in the browser
    navigationTimeout: 30000,
    browserName: 'webkit',
    headless: false,
    screenshot: 'on',
    trace: 'on',
    ...devices['iPhone 17 Pro Max']
    // only for failures
    // trace:'retain-on-failure',
    // trace: 'on-first-retry',
    // email -> aniketplaywright@mail.com
    // password -> Aniket@123
  },
  }, 
  {
    name : 'Chrome',
    use: {
    // Timeout for each action
    actionTimeout: 10000,
    // Timeout when the url loads first time in the browser
    navigationTimeout: 30000,
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',
    // ignoreHTTPSErrors:true,
    // permissions: ['geolocation'],
    video: 'retain-on-failure',
    // viewport: {width:720, height:720}
    // only for failures
    // trace:'retain-on-failure',
    // trace: 'on-first-retry',
    // email -> aniketplaywright@mail.com
    // password -> Aniket@123
  },
  }

    

  ],
    
  
  

  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

