# KongInc_TakeHomeTask

### Get started by running
npm install
npm run serve

### Start Dev Server in Separate Terminal
npm run server  

### Run your unit tests
npm run test:unit


### Run your end-to-end tests
npx cypress run

1. On page reload, all the services will be displayed in card design with pagination (done on client-side)
2. Clicking on a service card will open a modal
3. Input area to search for similar data in the service cards
4. Basic unit test/cypress test

NOTE:
I wrote a basic test for 'Loading the element and checking if a particular element is present'. If it was a production app, could have had several tests. For example: 
--> Make HTTP requests through Cypress to confirm that the server does the right thing for edge cases not accessible through UI;
--> Test the vuex store for appropriate keys before proceeding the test the DOM
--> Test multiple events 
--> Test Auth0 authentication
--> Test components/mixins/filter
