const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const url = "https://cleango.hu/";

const generateSevenDigitNumber = () => {
  const min = 1000000;
  const max = 9999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const navigateToPage = async () => {
  const options = new chrome.Options().headless();
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  await driver.get(url);

  return driver;
}

test('main page loads correctly', async () => {
  const driver = await navigateToPage();

  try {
    await driver.wait(until.titleContains('Cleango'), 5000);
    const title = await driver.getTitle();
    expect(title).toContain('Cleango');

  } finally {
    await driver.quit();
  }
});

test('registration fields are required', async () => {
  const driver = await navigateToPage();

  try {
    const emailField = await driver.findElement(By.xpath('//*[@id="email"]'));
    const phoneNumber = await driver.findElement(By.xpath('//*[@id="phone"]'));

    const isEmailRequired = await emailField.getAttribute('required');
    const isPhoneRequired = await phoneNumber.getAttribute('required');

    expect(isEmailRequired).toBe("true");
    expect(isPhoneRequired).toBe("true");
  
  } finally {
    await driver.quit();
  }
});

test('invalid email and password', async () => {
  const driver = await navigateToPage();

  try {
    const emailField = await driver.findElement(By.xpath('//*[@id="email"]'));
    const phoneNumberField = await driver.findElement(By.xpath('//*[@id="phone"]'));
    const invalidEmailAddress = "invalidemail";
    const invalidPhoneNumber = "23453322455";
    const expectedEmailError = "A(z) email cím nem érvényes email formátum."
    const expectedPhoneError = "A telefonszám mezőnek érvényesnek kell lennie."

    emailField.sendKeys(invalidEmailAddress);
    phoneNumberField.sendKeys(invalidPhoneNumber);

    const submitButton = await driver.findElement(By.xpath('//*[@id="registrationForm"]/form/div[2]/button'));
    await submitButton.click();

    const emailError = await driver.wait(until.elementLocated(By.xpath('//*[@id="registrationForm"]/form/div[1]/div[1]/div/span')), 10000)
    const actualEmailError = await emailError.getText();

    const phoneError = await driver.wait(until.elementLocated(By.xpath('//*[@id="registrationForm"]/form/div[1]/div[2]/div/span[2]')), 10000)
    const actualPhoneError = await phoneError.getText();

    expect(actualEmailError).toBe(expectedEmailError);
    expect(actualPhoneError).toBe(expectedPhoneError);
  
  } finally {
    await driver.quit();
  }
});

test('successful registration', async () => {
  const driver = await navigateToPage();

  const randomTestID = generateSevenDigitNumber();
  const phoneNumber = `+3630${randomTestID}`;
  const emailAddress = `test_${randomTestID}@email.com`;

  try {
    const emailField = await driver.findElement(By.xpath('//*[@id="email"]'));
    const phoneNumberField = await driver.findElement(By.xpath('//*[@id="phone"]'));
    const expectedUrl = "https://cleango.hu/thank-you";

    phoneNumberField.sendKeys(phoneNumber);
    emailField.sendKeys(emailAddress);

    const submitButton = await driver.findElement(By.xpath('//*[@id="registrationForm"]/form/div[2]/button'));
    await submitButton.click();

    await driver.wait(until.urlIs("https://cleango.hu/thank-you"), 10000);
    const finalUrl = await driver.getCurrentUrl();
    expect(finalUrl).toBe(expectedUrl);

  } finally {
    await driver.quit();
  }
});
