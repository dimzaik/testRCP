const
    glob         = require('glob'),
    protractor   = require.resolve('protractor'),
	report   = require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length),
    seleniumJar  = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop();
const path = require('path');
exports.config = {

    baseUrl: 'http://todomvc.com',

    seleniumServerJar: seleniumJar,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    disableChecks: true,

    // https://github.com/protractor-cucumber-framework/protractor-cucumber-framework#uncaught-exceptions
    ignoreUncaughtExceptions: true,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [ 'features/**/*.feature' ],

    cucumberOpts: {
        require:    [ 'features/**/*.js' ],
        format: 'json:.tmp/results.json',
        compiler:   'ts:ts-node/register'
    },
	
	// Here the magic happens
    plugins: [{
        package: report,
        options:{
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                'disable-infobars'
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
            ]
        }
    }
};
