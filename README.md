# redux-saga-shopping-cart

## About
A fully functional shopping cart application. This app comes in two packages, the Node/Express backend API and the 
front-end built with React and Redux Saga using ES6 Yields.

## Packages
- Server `./packages/server`
- Client `./packages/client`

## Development Setup
1. Node version >= 9.0.0
2. `npm install -g babel babel-cli lerna yarn`
3. `yarn`
4. `lerna bootstrap`

Notes: 
1. After installing or uninstalling a NPM package, run `lerna bootstrsp` at the root of the project!

## Usage
1. In terminal, start the backend server via:  `yarn serve`
2. Open another terminal and run the frontend application via: `yarn start`
3. Navigate via browser: `http://localhost:8080`

## Scripts
- `yarn start` - Starts the frontend and backend applications. 
- `yarn test` - Runs all unit tests.
