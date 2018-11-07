# react-with-nodejs-and-sequelize

### Summary
The main idea of this project is to create an application with relational database exposing data through API services using NodeJS + Express. The front-end uses React and Redux working directly with state that is filled by the NodeJS API.

> - The **client-side** is a React + Redux app based.
> - The **server-side** is built in NodeJS (Express) and works like an API server.
> - This application uses Sequelize ORM to manage relational database and maintain it's data.

I choose to use only [prop-types](https://www.npmjs.com/package/prop-types) to cover all data typing and obligation requirements in React Components, when it's necessary. 

#### Server-Side
The NodeJS Express application, located in the ```/server/``` folder.

Inside it's scope use ```npm install``` to install all dependencies and ```npm start``` to run the server application after that.

> - Be sure that the database is working before starting the server.
> - All the database connections you need (for each environment) are in ```/server/config/database.json```.

#### Client-Side
In the ```/client/``` folder we have the client-side React application.

This client was built using the official Facebook [create-react-app](https://www.npmjs.com/package/create-react-app) npm package. This package basically create a working React application, configured with minimal dependency and granting imediate work with no configuration for features like Babel, Webpack, and another stuff (because it's already done).

To install npm dependencies use ```npm install``` and finally ```npm start``` to run the React application.

The UI is fully made using [Semantic UI](https://semantic-ui.com/) - decided that it's the oportunity to get it out from my pending PoC checklist and use effectively. Semantic is a development framework that helps to create modern designs and responsive layouts. It also empowers designers and developers by creating a shared vocabulary for UI.

#### TDD + BDD
We have some tests too to be sure that our client and server-side API are working succesfully.

I have writen some tests in API side using [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/), disposed in ```/server/test/```.

Mocha is used to build tests and Chai to configure the asserts (TDD) and the behaviours (BDD) to improve test accuracy against the way we can use the API and also the way we should take care about errors. This way we know it's OK for every situation.

You can run all tests entering the server folder in terminal and just typing: ```npm run test``` - It's configured to run and compile with **Babel (ES6)** in then server "package.json".

#### Developed by
Rodrigo Quiñones Pichioli, since Mar/02/2018
