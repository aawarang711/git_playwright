const ExcelJS = require('exceljs');
const { test, expect } = require('@playwright/test');

async function writeExcelTest(searchItem, newValue, change, excelFilePath) {

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath)
    const worksheet = workbook.getWorksheet('Sheet1')
    const output = readExcel(worksheet, searchItem);
    await writeExcel(newValue, output, change, excelFilePath, worksheet, workbook)
};

function readExcel(worksheet, searchItem) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, conumnNumber) => {
            if (cell.value === searchItem) {
                output.row = rowNumber;
                output.column = conumnNumber
            }
        })
    }
    )
    return output;
}

async function writeExcel(newValue, output, change, excelFilePath, worksheet, workbook) {
    const cell = worksheet.getCell(output.row + change.rowChange, output.column + change.colChange);
    cell.value = newValue;
    await workbook.xlsx.writeFile(excelFilePath)
}


test("Excel test", async ({ page }) => {
    const amount = '1000';
    const filePath = "C:/Users/Aniket904388/Downloads/download.xlsx";
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html')
    const downloadExcelPromis = page.waitForEvent('download');
    await expect(page.getByRole('button', { name: 'Download' })).toBeVisible()
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadExcelPromis;
    await download.saveAs(filePath);
    await writeExcelTest("Mango", amount, { rowChange: 0, colChange: 2 }, filePath);
    await page.getByRole('button', { name: 'Choose File' }).click();
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles(filePath);
    const mangoAmount = await page.locator("#row-0 div[id='cell-4-undefined']").textContent();
    expect(mangoAmount.includes(amount)).toBeTruthy();
})
