const fs = require('fs');
const errorDirectory = 'screenshots';

module.exports = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        auth: [
            './test/specs/auth/*.js',
        ]
    },
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    baseUrl: 'https://qualitycamp.netlify.app/',

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    async afterTest(test, context, { error }) {
        // take a screenshot anytime a test fails and throws an error
        if (error) {
            if (!fs.existsSync(errorDirectory)) { fs.mkdirSync(errorDirectory); } // create screenshots folder if it doesn't exist
            await browser.saveScreenshot(`./${errorDirectory}/${test.title}.png`);
        }
    }
};
