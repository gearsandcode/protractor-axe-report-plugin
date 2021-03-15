var env = require('./environment.js');

exports.config = {
  framework: 'jasmine',
  specs: ['success_spec.js'],
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
