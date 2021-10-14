# ui-automated-test
Container for ui automation for quality assurance 


INTRODUCTION: 

Cypress is an automation testing framework that focuses on performing end-to-end testing for web applications in an asynchronous fashion. It is fully developed using Javascript and all of the architecture surrounding Cypress is built to handle modern Javascript frameworks such as the lastest React framework. 

Check out cypress.io for a detailed history. 

ENVIRONMENT VARIABLES
We use environment variables to set sensitive data in variables we use in our tests or to set the environment which the tests will run on. Those variables need to be set in the `cypress.env.json` file at the root level of the project. At the moment when adding this, the structure looks like the one bellow. Feel free to copy and fill in the values that correspond to the environment you want to execute the tests on (QA, DEV, Int, local, etc.)
p.s. the `cypress.env.json` file was added to the gitingore file, so it will not be pushed to this repo. You can update it the way you like.

{
    "alumni_base_url": "the_env_specific_alumni_base_url",
    "catalog_base_url": "the_env_specific_catalog_base_url",
    "chargebee_key": "env_specific_chargebee_authorisation_secret_key",
    "user": {
        "email": "jfaw+cypress_cmd@k2p.com"
    },
    "existing_product_keys": ["2020-online-cv-br"]
}


KEY POINTS: 

Some key points that distinguishes Cypress from other testing frameworks are: 

Simple and easy to use! Jahi 

(TDD) Test Driven Development is key for the Cypress Framework allows the end-to-end scripts to be developed simultaneously with development. 

Changes to test are reflected in real time. 

More consistent results because it has access to native objects. 

Cypress automatically waits for elements to load making test less brittle and flaky


BASIC FEATURES: 

Here is a list of things Cypress can do that no other frameworks can: 

Time Travel: Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
Debuggability: Stop guessing why your tests are failing. Debug directly from familiar tools like Developer Tools. Our readable errors and stack traces make debugging lightning fast.
Automatic Waiting: Never add waits or sleeps to your tests. Cypress automatically waits for commands and assertions before moving on. No more async hell.
Spies, Stubs, and Clocks: Verify and control the behavior of functions, server responses, or timers. The same functionality you love from unit testing is right at your fingertips.
Network Traffic Control: Easily control, stub, and test edge cases without involving your server. You can stub network traffic however you like.
Consistent Results: Our architecture doesn’t use Selenium or WebDriver. Say hello to fast, consistent and reliable tests that are flake-free.
Screenshots and Videos: View screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI.

FOLDER & TEST STRUCTURE: 

Cypress folder structure is neatly outline as follows: 

/cypress
	/fixtures (external static data used by test )
	/integrations (spec/script files for running test)
	/plugins (ran before all spec files)
	/support (also ran before all spec files)

Cypress test interface is borrowed from Mocha & Chai and it provides the following test driven terminology: 

describe()
general topic for test

context()
same as describe

specify()
for specific test within the topic

it()
same as specify

expect()






