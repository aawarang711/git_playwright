const {test, expect} = require ('@playwright/test');

const BASE_URI  = 'https://rahulshettyacademy.com';

// test.describe.configure({mode: 'parallel'});
test.describe.configure({mode: 'serial'});

test("Popup validations", async ({page})=>{

    console.log(require('os').cpus().length);

    await page.goto('https://google.com');
    await page.goto(`${BASE_URI}/AutomationPractice/`);
    await page.goBack();
    await page.goForward();
    expect(await page.locator('h1').getByText('Practice Page').isVisible());
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
});


test.skip("Java popup validatio", async ({page})=>{
    await page.goto(`${BASE_URI}/AutomationPractice/`);
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    // await page.locator('#confirmbtn').screenshot({path:'onlyConfirmButton.png'})
    // await page.screenshot({path:'ConfirmButton.png'});
    expect(await page.screenshot()).toMatchSnapshot('../ConfirmButton.png')
    await page.locator('#mousehover').hover();
    const frameLocator = page.frameLocator('#courses-iframe');
    // you should not put space in between in locator for :visible like locator("nav a[href='lifetime-access'] : visible") it will throw an error
    await frameLocator.locator("nav a[href='lifetime-access']:visible").click();
    
    const text = await frameLocator.locator('.text h2').textContent();
    const noOfSubs = text.split(' ')[1];
    console.log(noOfSubs);
});

