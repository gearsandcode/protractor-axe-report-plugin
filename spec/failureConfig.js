var env = require('./environment.js');

exports.config = {
  seleniumAddress: env.seleniumAddress,
  framework: 'jasmine',
  specs: ['fail_spec.js'],
  baseUrl: env.baseUrl,
  plugins: [{
    path: '../index.js',
    htmlReportPath: 'reports',
    displayHelpUrl: true,
    displayContext: true,
    displayPasses: true,
    displayViolations: true,
    standardsToReport: []
  }]
};
