const sharedConfig = require('./wdio-base.conf.js');
const url = require('../urls');
const BROWSER = process.env.BROWSER
const ENV = process.env.ENV;
var capabilities = []

if (!ENV || !['dev', 'test', 'prod'].includes(ENV)) {
    // eslint-disable-next-line no-console
    console.log('Please use the following format when running the test script: ENV=dev|test|prod [script]');
    process.exit();
}

if (!BROWSER || !['chrome', 'firefox', 'safari'].includes(BROWSER)) {
    console.log('Please use the following format when running the test script: BROWSER=chrome|firefox|safari [script]')
    process.exit();
}

if (BROWSER === 'chrome') { capabilities = [{ browserName: 'chrome' }]; }
if (BROWSER === 'firefox') { capabilities = [{ browserName: 'firefox' }]; }
if (BROWSER === 'safari') { capabilities = [{ maxInstances: 1, browserName: 'safari', }]; }

exports.config = {
    ...sharedConfig,
    ...{
        capabilities,
        baseUrl: url[process.env.ENV],
    }
};