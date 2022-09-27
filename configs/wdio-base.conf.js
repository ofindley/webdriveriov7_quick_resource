const fs = require('fs');
const errorDirectory = 'screenshots';

/* Importing QualityWatcher WDIO service and reporter modules */
import QualityWatcherService from "@qualitywatcher/wdio-service";
import QualityWatcherReporter from "@qualitywatcher/wdio-reporter";
 
require("dotenv").config(); // Requiring dotenv NPM module to use QualityWatcher API Key added to the .env file

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

    /* QualityWatcher WDIO service options */
    services: ['selenium-standalone', [QualityWatcherService, {
        email: 'ofindley@qualitywatcher.com',
        apiKey: process.env.QUALITYWATCHER_API_KEY, // using dotenv module to add QualityWatcher API Key stored in the .env
        testRunName: "Sample Automation results",
        description: 'This is a sample test run from our sample test automation.',
        projectId: 2,
        includeAllCases: true,
    }]],
    framework: 'mocha',
    reporters: ['spec', QualityWatcherReporter], // QualityWatcher WDIO reporter
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
