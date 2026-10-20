
const playwright = require('@playwright/test');
const { POManager } = require('../../PageObject/poManager.js');
const { Before, After, Status, BeforeStep, AfterStep } = require('@cucumber/cucumber');

Before(async function () {
    const browser = await playwright.chromium.launch({
        headless: false
    })

    const browserContext = await browser.newContext();
    this.page = await browserContext.newPage();
    this.poManager = new POManager(this.page);
});

After(async function(){
    console.log('After each scenario')
})

BeforeStep( function () {
  console.log('Before each step')
});

AfterStep( function ({result}) {
    console.log('After each step')
  if (result.status === Status.FAILED) {
    console.log('taking screenshot')
    this.page.screenshot({path:'screenshot.png'});
  }
});
