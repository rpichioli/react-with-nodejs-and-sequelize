#### ================ In development stage ================

### Summary
The main idea of this project is to create an application with relational database exposing data through API services using NodeJS + Express. The front-end is a React + Redux application that manages state populated by the API based in each operation basically.

Besides the registration the project has a simple login/logout feature made using HOC (High Order Component) in React-side that calls an authorization middleware in the API backend, as a layer, that authorizes the user to access all the stuff - if everything is OK.

> - The **client-side** is a React + Redux app based.
> - The **server-side** is built in NodeJS (Express) and works like an API server.
> - This application uses Sequelize ORM to manage relational database and maintain it's data.
> - The [Passport](https://www.npmjs.com/package/passport) is basically a Express-compatible authentication middleware for Node.js.

I prefer not to use Flow to type data in this project, we'll use prop-types feature to type properties in React components and also say if it's necessarily required or not.

If you have some suggestion, let me know about it!

#### Server-Side
The NodeJS Express application, located in the ```/server/``` folder.

Inside it's scope use ```npm install``` to install all dependencies and ```npm start``` to run the server application after that.

>Be sure database is working before starting the server.
>Database configurations for each environment are inside ```/server/config/database.json```.

#### Client-Side
Located in the ```/client/``` folder the client-side React application was built within the functional preconfigured project (with Babel, Webpack, and more..) provided by the official Facebook [create-react-app](https://www.npmjs.com/package/create-react-app) npm package that simply says in it's GitHub "Create React apps with no build configuration".

To install npm dependencies use ```npm install``` and finally ```npm start``` to run the React application.

#### TDD + BDD
To verify if API we have done are working succesfully, we have writen some tests in Mocha + Chai, disposed in ```/server/test/```.

We are using Mocha for the tests and Chai to the asserts (TDD) and the behaviour tests (BDD) to improve the test accuracy against the way we use the API and also the way we should take care about errors.

You can run the tests just entering the test folder and type in terminal: ```npm run test```.

#### Developed by
Rodrigo Quiñones Pichioli, since Mar/02/2018
