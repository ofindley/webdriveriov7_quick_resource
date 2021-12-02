const sharedConfig = require('./wdio-base.conf');
const url = require('../urls.js');
const ENV = process.env.ENV;

if (!ENV || !['dev', 'test', 'prod'].includes(ENV)) {
    // eslint-disable-next-line no-console
    console.log('Please use the following format when running the test script: ENV=dev|test|prod [script]');
    process.exit();
}

exports.config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        }],
        baseUrl: url[ENV],
    }
};
