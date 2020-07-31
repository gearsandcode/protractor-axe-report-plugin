#!/usr/bin/env node

var Executor = require('./test_util').Executor;

var executor = new Executor();

executor.addCommandlineTest(
    'node node_modules/protractor/bin/protractor spec/successConfig.js')
    .expectExitCode(0);

// This is the same test as the failure test, but we set the config not to fail on aXe result failure
executor.addCommandlineTest(
    'node node_modules/protractor/bin/protractor spec/noAxeResultsConfig.js')
    .expectExitCode(0)
    .expectFileExists('./reports/a11y-chrome.html');

executor.addCommandlineTest(
    'node node_modules/protractor/bin/protractor spec/failureConfig.js')
    .expectExitCode(1)
    .expectErrors([{
      message: 'aXe - check if accessibility plugin works on bad apps - should have accessibility problems on markup'
    }]);

executor.addCommandlineTest(
    'node node_modules/protractor/bin/protractor spec/customReportFileNameConfig.js')
    .expectExitCode(0)
    .expectFileExists('./reports/a11y-chrome-fail_spec.html');

executor.addCommandlineTest(
    'node node_modules/protractor/bin/protractor spec/customReportFileNameMultiCapabilitiesConfig.js')
    .expectExitCode(0)
    .expectFileExists('./reports/a11y-chrome-c1.html')
    .expectFileExists('./reports/a11y-chrome-c2.html');

executor.execute();
