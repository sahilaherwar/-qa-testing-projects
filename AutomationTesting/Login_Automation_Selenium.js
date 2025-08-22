// Login_Automation_Selenium.js
// Selenium WebDriver Test - Login Page

const { Builder, By, until } = require('selenium-webdriver');

(async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open the login page
        await driver.get('https://example.com/login');

        // Enter email
        await driver.findElement(By.id('email')).sendKeys('test@example.com');

        // Enter password
        await driver.findElement(By.id('password')).sendKeys('pass123');

        // Click login
        await driver.findElement(By.id('loginBtn')).click();

        // Wait for dashboard to load
        await driver.wait(until.urlContains('/dashboard'), 5000);

        console.log("✅ Login test passed");

    } catch (err) {
        console.error("❌ Login test failed: ", err);
    } finally {
        await driver.quit();
    }
})();
