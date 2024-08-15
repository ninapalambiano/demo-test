import { test, expect, Browser, Page, Locator} from '@playwright/test'
import { chromium } from '@playwright/test'



test('login automation', async() =>{
  const browser:Browser = await chromium.launch({headless: false});
  const page:Page = await browser.newPage();
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  const userName:Locator = await page.locator('#username');
  const password:Locator = await page.locator('#password');
  const submitButton:Locator = await page.locator('#submit');


  await userName.fill("student");
  await password.fill("Password123");
  await submitButton.click();


  const title = await page.title();
  console.log("home page title: ", title);

  await page.screenshot({path: 'login.png'});


  expect(title).toEqual('Logged In Successfully | Practice Test Automation');



});