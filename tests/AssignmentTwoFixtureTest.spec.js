const{assignmentTest} = require('../utils/AssignmentFixtures.js');
const{expect} = require('@playwright/test');

assignmentTest('First Fixture test', async ({goToHomePage, addEvent})=>{
    goToHomePage.goto('https://eventhub.rahulshettyacademy.com/events');
    await expect(goToHomePage.getByText('Tech 2026 Event added')).toBeVisible();
    
})

