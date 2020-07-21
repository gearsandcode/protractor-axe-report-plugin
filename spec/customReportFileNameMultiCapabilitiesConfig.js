var env = require('./environment.js');

exports.config = {
  ...env,
  capabilities: undefined,
  framework: 'jasmine',
  multiCapabilities: [{
    ...env.capabilities,
    name: 'c1',
    specs: ['fail_spec.js']
  },{
    ...env.capabilities,
    name: 'c2',
    specs: ['success_spec.js']
  }],
  plugins: [{
    path: '../index.js',
    ignoreAxeFailures: true,
    htmlReportPath: 'reports',
    htmlReportFilename: 'a11y-#{capabilities.browserName}-#{capabilities.name}.html',
    displayHelpUrl: true,
    displayContext: true,
    displayPasses: true,
    displayViolations: true,
    standardsToReport: []
  }]
};
