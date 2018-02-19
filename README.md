# redux-saga-shopping-cart

##About
A fully functional shopping cart application. This app comes in two packages, the Node/Express backend API and the 
front-end built with React and Redux Saga using ES6 Yields.

##Packages
- Server `./packages/server`
- Client `./packages/client`

##Development Setup
1. Node version >= 9.0.0
2. `npm install -g babel babel-cli lerna yarn`
3. `yarn`
4. `lerna bootstrap`

Notes: 
1. After installing or uninstalling a NPM package, run `lerna bootstrsp` at the root of the project!

##Usage
1. `yarn start`
2. Open `http://localhost:8080`

##Scripts
- `yarn start` - Starts the frontend and backend applications. 
- `yarn test` - Runs all unit tests.
