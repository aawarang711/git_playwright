const {test ,expect} = require('@playwright/test');


test('Playwright special locators', async({page})=>{
    // use command -> npx playwright --ui
    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.locator("[name*='email']").fill("abc@xyz.com");
    // await page.locator("[name*='name']").fill("abc");
    await page.getByRole("button", {name: 'Submit'}).click();

    // below step will only return the boolean value and will not faile the test
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible()

    await page.getByText("Success! The Form has been submitted successfully!.").getByRole("link").click();
    
    // but this assertion will fail the test if the text is not present onthe screen
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

    // but what is the actualy load after the assettion timed out the you have to put explecit wait for the particular step like given below
    // this will wait for 10s even if we have globally (config.js) defiled 5s 
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout: 10000});

    await page.getByRole("link",{name:"Shop"}).click();
    await page.locator('app-card').filter({hasText: 'Nokia Edge'}).getByRole("button").click();
});

test('Playwright test level timeout', async({page})=>{
    // use command -> npx playwright --ui
    // set test level timeout to take 60s to complete overriding the gloval level timeout
    test.setTimeout(60000)

    // for expect level test timeout
    const slowexpect = expect.configure({timeout: 10000});
    // for this particular test the action timeout will be 8s expect the step action level timeout mentioned step
    page.setDefaultTimeout(8000);

    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.locator("[name*='email']").fill("abc@xyz.com");
    // await page.locator("[name*='name']").fill("abc");
    await page.getByRole("button", {name: 'Submit'}).click();

    // set step action level timeout - this will overrifr the global  and test action level timeout
    await page.getByText("Success! The Form has been submitted successfully!.").getByRole("link").click({timeout: 12000});

    // below step will only return the boolean value and will not faile the test
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible()
    // but this assertion will fail the test if the text is not present onthe screen
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();

    // whenever you use 'slowexpect' then that assertion will wait for 10s and normal expect will go with global value as 5s
    await slowexpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();


    await page.getByRole("link",{name:"Shop"}).click();
    await page.locator('app-card').filter({hasText: 'Nokia Edge'}).getByRole("button").click();
});
