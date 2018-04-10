#### ================ In development stage ================

### Summary
The main idea of this project is to create an application that works with relational database (MySQL in this one) providing data through NodeJS Express API and exploring React/Redux features and possibilities in the front-end.

You'll have contact with a simple login/logout feature, **JWT (JSON Web Token)** package to manage within tokens and improve security between server and client communication, implementation of a  **HOC (High Order Component)** in React-side that calls an authorization middleware in the API backend for any Components that are child of it, that authorizes the user to access all the stuff if everything is OK.

We already have 2 layers of CRUD, one of them has many from another. So we have explored a little bit from Sequelize ORM too when we talk about tables relationship queries and how to use them properly in models and API.

> - The **client-side** is a React + Redux app based;
> - The **server-side** is built in NodeJS (Express) and works like an API server;
> - Sequelize ORM to manage and mantain relational database and maintain;
> - The [Passport](https://www.npmjs.com/package/passport) is basically a Express-compatible authentication middleware for Node.js.

Another point is that we aren't using Flow in this application, only prop-types for data typing in components.

If you have some suggestion, please let me know about it!

#### Server-Side
Located in the "/server/" folder, here becomes the NodeJS Express application.
Use ```npm install``` to install all dependencies and ```npm start``` to run the app.

#### Client-Side
Located in the "/client/" folder, here is the React app. Built with the package "create-react-app" and working with Redux.
Use ```npm install``` to install all dependencies and ```npm start``` to run the app.

#### Developed by
Rodrigo Quiñones Pichioli, since Mar/02/2018
