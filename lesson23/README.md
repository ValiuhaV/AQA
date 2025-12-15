# Expense Tracker App Tests

## Dependencies
* Docker
* docker-compose

## Preparing
* Install ReportPortal (https://reportportal.io/docs/installation-steps/DeployWithDocker)
  * Use docker-compose.reportportal.yml from this repo
  * Set RP_INITIAL_ADMIN_PASSWORD in docker-compose.reportportal.yml
  * Run docker-compose up --profiles core -d
* Create a new project in ReportPortal
* Add a new user to the created project
* Login to the ReportPortal as the created user
* Generate API KEY
* Install ReportPortal PLaywright Plugin (https://reportportal.io/docs/log-data-in-reportportal/test-framework-integration/JavaScript/Playwright)
* Set environment variables:
  * REPORTPORTAL_URL - http://example.com/api/v2
  * REPORTPORTAL_API_KEY - generated API KEY

## Run Tests
* Run command: docker-compose up --build
* Click on a link in console to check tests results in the ReportPortal
