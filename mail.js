import playwright from 'playwright'

const login = 'login' // enter you login
const passw = 'password'         // enter you password

async function main() {
   const browser = await playwright.firefox.launch({headless: false,})
   const page = await browser.newPage()
   await page.goto("https://mail.google.com/")
   await page.waitForTimeout(1000)
   await page.locator('#identifierId').type(login)
   await page.locator('span', {hasText: 'Next' }).click()
   await page.waitForTimeout(1000)
   await page.locator('#selectionc1').click()
   await page.waitForTimeout(1000)
   await page.locator('xpath=//html/body/div[1]/div[1]/div[2]//c-wiz//div[2]//div[1]/div/form/span/section[2]/div/div/div[1]/div[1]//div[1]//div[1]/input').type(passw)
   await page.waitForTimeout(1000)
   await page.locator('span', {hasText: 'Next' }).click()
   await page.waitForTimeout(1000)
   await page.waitForSelector('.bsU')
   const headingText = await page.locator('.bsU')

   const textMail = await headingText.allTextContents()  // number of unread emails
   console.log("number of unread emails - ",textMail)     

   await browser.close()
   
}
main();
