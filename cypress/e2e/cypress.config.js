const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure');
          launchOptions.args.push('--blink-settings=automationControlled=false');
        }
        return launchOptions;
      });
    },
  },
});