var env = require('./environment.js');

exports.config = {
  ...env,
  framework: 'jasmine',
  specs: ['fail_spec.js'],
  multiCapabilities: [{
    ...env.capabilities,
    specs: ['fail_spec.js']
  }],
  plugins: [{
    path: '../index.js',
    ignoreAxeFailures: true,
    htmlReportPath: 'reports',
    htmlReportFileName: 'a11y-${capabilities.browserName}-${capabilities.specs[0].split("/").reduce((a,b) => b).split(".")[0]}.html',
    displayHelpUrl: true,
    displayContext: true,
    displayPasses: true,
    displayViolations: true,
    standardsToReport: []
  }]
};
