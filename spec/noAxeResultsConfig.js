var env = require('./environment.js');

exports.config = {
  framework: 'jasmine',
  specs: ['fail_spec.js'],
  baseUrl: env.baseUrl,
  plugins: [{
    path: '../index.js',
    ignoreAxeFailures: true,
    htmlReportPath: 'reports',
    displayHelpUrl: true,
    displayContext: true,
    displayPasses: true,
    displayViolations: true,
    standardsToReport: []
  }]
};
