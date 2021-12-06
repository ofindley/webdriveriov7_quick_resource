### Webdriverio v7 Quick Start Up Resource
Quick Start Test Automation Suite for webdriver v7

### Dependencies
1. Java JDK
2. NodeJS & NPM
3. Chrome browser
4. Firefox browser
5. Safari browser

## Getting Started
Clone the repository & install dependencies
```sh
$ git clone 
$ cd webdriverio_quick_resource
$ npm install
```
# Folder Structure
- **data:** Files with test data to be used in tests. *E.g. [credentials, error messages, routes, and any other data that will be used in a test]*
- **page:** Page object files which include element selectors and functions that are used in tests.
- **test/specs:** Test files which include the actual tests.

# Execute tests
This project contains multiple config files and ways to execute tests on different browsers and environments.

- The easiest option is ```npm run test```. This executes all tests in the chrome browser against the production environment.
- This will execute all tests in the chrome browser against the specified environment. 
```ENV=dev|test|prod npm run chrome```
- This will execute all tests in the chrome headless browser against the specified environment. 
```ENV=dev|test|prod npm run headless-chrome```
- This will execute all tests in the firefox headless browser against the specified environment. 
```ENV=dev|test|prod npm run headless-firefox```
- This will execute all tests in the specified browser against the specified environment. (only 1 option can be choosen for each)
```BROWSER=chrome|firefox|safari ENV=dev|test|prod npm run env-browser```
- This will execute all tests on 3 different browsers `chrome|firefox|safari` against the specified environment.
```ENV=dev|test|prod npm run multiple-browser```

# Execute tests by test file
```ENV=test npm run chrome -- --spec ./test/specs/auth/logout.test.js```

# Execute a group [test suite] of tests
```ENV=test npm run headless-chrome -- --suite auth```

***N.B. The suite would have to exist in the config file before running this command***
```
suites: {
        auth: [
            './test/specs/auth/*.js',
        ]
    }
```

# Environments
There are currently 3 environments:

&emsp; dev: https://qw-test-store-dev.netlify.app/

&emsp; test: https://qw-test-store-prod.netlify.app/

&emsp; prod: https://qualitycamp.netlify.app/

To run tests against the different environments you can change the value of the `ENV` variable in the command.

&nbsp; Example to run tests on development environment

&emsp; ```ENV=dev npm run headless-firefox -- --spec ./test/specs/auth/login.test.js```

&nbsp; Example to run tests on test environment

&emsp; ```ENV=test npm run multiple-browser -- --spec ./test/specs/products.test.js```