import {test} from '@playwright/test';
import {test as base } from '@playwright/test';

interface testData {
    userEmail: string;
    password: string;
    firstProduct: string;
    requiredProduct: string;
}

export const customTest = base.extend<{testData: testData}>(
    {
        testData: {
            userEmail: "aniket111awa@gmail.com",
            password: "Aniket@123",
            firstProduct: "ADIDAS ORIGINAL",
            requiredProduct: "ZARA COAT 3"
        }
    }
)