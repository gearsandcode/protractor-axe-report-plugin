var env = require('./environment.js');

exports.config = {
  ...env,
  framework: 'jasmine',
  specs: ['success_spec.js'],
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
