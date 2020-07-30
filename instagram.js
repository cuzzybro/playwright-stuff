const playwright = require('playwright');
const base_url = 'https://instagram.com/';
const elements = require('./selectors.json');

const instagram = {

    browser: null,
    page: null,

    initialize: async () => {

        instagram.browser = await playwright.firefox.launch({
            headless: false
        });

        instagram.page = await instagram.browser.newPage();

        await instagram.page.goto(base_url, {
            waitUntil: 'networkidle'
        });

    },

    login: async (username, password) => {

        await instagram.page.type(elements.loginPage.userName, username, { delay: 50 });
        await instagram.page.type(elements.loginPage.password, password, { delay: 50 });
        await instagram.page.click(elements.loginPage.loginBtn);

    }

}

module.exports = instagram;