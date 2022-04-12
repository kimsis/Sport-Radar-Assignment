# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Structure

The solution is split in several parts: Middleware, Models, Components, Providers

The Middleware can be found under src/middleware
There are 2 files, the Pipeline script is not in use, as I wasn't able to properly incorporate the standard middleware pattern with the fetch or axios API.
The APIFetcher script contains the entire fetching and parsing logic. It uses the AppContext provider to retreive the http address, and returns an object that contains up to 5 of the latest matches for each tournament.

The models can be found under /src/models. There is 1 class, Match, used to display the necessary data via the widget. Aside from this class, there are multiple interfaces, mainly used for type-hinting.

The components can be found under /src/components. There are 4 components in a layered structure (1st contains 2nd etc.) to separate the parts of the widget.

There is 1 ContextProvider, AppContext, which serves to keep persistant data, in this case the http address.

To start the project please clone the repository -> open the terminal in the destination folder -> yarn install (npm install) -> yarn start (npm start)

To run the tests use yarn test (npm test), there are currently no functioning tests.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
