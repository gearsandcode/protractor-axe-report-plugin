aXe Report Plugin
====================

This package is a derivation of the [protractor-accessibility-plugin](https://github.com/angular/protractor-accessibility-plugin). The protractor-accessibility-plugin can generate three different types of accessibility report from the last page that was loaded by the webdriver at the end of the test.

This plugin only uses the aXe Accessibility Engine, and can generate accessibility reports from any point during the test run. Key features:

*  Make a call to `runAxeTest(testName)` once the webdriver has loaded the page under test, and you will get a report for that page. Example:


```js
it('Check accessibility', function() {
  runAxeTest('Signin page');
});
```

Output:

```
 Test: Signin page
 URL:  http://localhost:9000/#/signin
       13 passes  and 1 violation
 Pass: Required ARIA attributes must be provided 
 Pass: Certain ARIA roles must contain particular children 
 Pass: Certain ARIA roles must be contained by particular parents 
 Pass: ARIA roles used must conform to valid values 
```

* You can also use `runAxeTest(testName, selector)` specify the CSS selector to use to get just a part of the page (handy for testing modal dialogs):

```js
  it('myDetails click', function() {
    mainPage.profileMenu.click();
    mainPage.myDetails.click();
    expect(mainPage.modalDialog.isDisplayed()).toBe(true);
    expect(element(by.id('healthcareProfessionalDetailsForm')).isDisplayed()).toBe(true);

    runAxeTest('Clinician details', '.modal-dialog');
  });
```

* The plugin also consolidates all the passes and violations together and groups them by standard, so you can see which standards pass and have violations:

```
--- Accessibilty test results by standard ---

 Standard: wcag2a
 Pass: Required ARIA attributes must be provided (1 pass, 0 fail)
 Pass: Certain ARIA roles must contain particular children (1 pass, 0 fail)
 Pass: Certain ARIA roles must be contained by particular parents (1 pass, 0 fail)
 Pass: ARIA roles used must conform to valid values (1 pass, 0 fail)
 Pass: Buttons must have discernible text (1 pass, 0 fail)
 Pass: Page must have means to bypass repeated blocks (1 pass, 0 fail)
 Pass: Documents must have <title> element to aid in navigation (1 pass, 0 fail)
 Pass: id attribute value must be unique (1 pass, 0 fail)
 Pass: Headings must not be empty (1 pass, 0 fail)
 Pass: <html> element must have a valid lang attribute (1 pass, 0 fail)
 Pass: Form elements must have labels (1 pass, 0 fail)
 Pass: Links must have discernible text (1 pass, 0 fail)

 Standard: wcag2aa
 Pass: Elements must have sufficient color contrast (1 pass, 0 fail)
 Fail: Zooming and scaling must not be disabled (0 pass, 1 fail)
```

* As long as ignoreAxeFailures is not true, any aXe failures will cause the whole test to fail. 

* And finally, you can specify which standards you want to report on, and it will hide any issues (passes or violations) related to standards which are not specified. For instance, if I specify `standardsToReport: ['wcag2aa']` in the plugin config, I would get an output like this:

```
--- Accessibilty test results by standard ---
Only returning results for the following standards: wcag2aa

 Standard: wcag2aa
 Pass: Elements must have sufficient color contrast (1 pass, 0 fail)
 Fail: Zooming and scaling must not be disabled (0 pass, 1 fail)

--- Accessibilty test results by page ---
Only returning results for the following standards: wcag2aa

 Test: Signin page
 URL:  http://localhost:9000/#/signin
       1 pass  and 1 violation
 Pass: Elements must have sufficient color contrast 
 Fail: Zooming and scaling must not be disabled 
```

This makes it easy to focus on just the standard that you are working on at that time. 


# Installation
```
npm i -g protractor-axe-html-report-plugin
```

Enable this plugin in the protractor.conf.js file:

```js
  exports.config = {
    ...
    plugins: [{
        displayHelpUrl: true|false, // Displays the aXe help URL along with the error. Defaults to true. 
        displayContext: true|false, // Displays the HTML of interest. Defaults to true.
        displayPasses: true|false, // Display pass results. Defaults to true.
        displayViolations: true|false, // Display vioaltions. Defaults to true.
        standardsToReport: ['wcag2a', 'wcag2aa'], // A list of standards to report on. If empty, reports on all standards.
        ignoreAxeFailures: true|false, // If true, aXe failures won't cause the whole test to fail. Defaults to false
        package: 'protractor-axe-html-report-plugin',
        globalParams: {}, // This is a configuration object, see below for more detail.
        htmlReportPath: '/path/to/reports'|null // The path to the report folder. If null, no HTML report will be generated
    }]
  }
```
#Configuration

Global configuration can be done in the protractor.conf.js file by providing an object to the globalParams key.  The contents of this object are descirbed in the [axe-core documentation](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md).  A sample object is shown below.

```js
  ...
  globalParams: {
    exclude: 'mat-select',
    options: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa']
      }
    }
  }
  ...
```

# Testing
- Install requirements. I prefer `yarn` so I do `yarn install`
- Start the local server: `npm start`
- Run the tests: `npm test`

# TODO
- Complete renaming of project and related documentation update
- Add documentation about using the testapp
