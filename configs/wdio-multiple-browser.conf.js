const sharedConfig = require('./wdio-base.conf.js');
const url = require('../urls');
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
            browserName: 'chrome',
        }, {
            // Safari doesn't allow more than one browser when doing automated testing
            maxInstances: 1,
            browserName: 'safari',
        }, {
            browserName: 'firefox',
        }],
        baseUrl: url[process.env.ENV],
    }
};
