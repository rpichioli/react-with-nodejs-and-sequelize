### =========================================================
### In development stage
### =========================================================

### The project summary
The main idea of this project is to create an application which works with relational database though NodeJS API services exploring React features and possibilities.

We are building a simple login/logout feature by a HOC (High Order Component) in React-side that calls an anthorization middleware in the API backend, as a layer, that authorizes the user to access all the stuff if everything is OK.

> - The **client-side** is a React + Redux app based.
> - The **server-side** is built in NodeJS (Express) and works like an API server.
> - This application uses Sequelize ORM to manage relational database and maintain it's data.
> - The [Passport](https://www.npmjs.com/package/passport) is basically a Express-compatible authentication middleware for Node.js.

No use of Flow in this application, only prop-types for data typing in components.

If you have some suggestion, please let me know about it!

#### Server-Side
Located in the "/server/" folder, here becomes the NodeJS Express application. 
Use ```npm install``` to install all dependencies and ```npm start``` to run the app.

#### Client-Side
Located in the "/client/" folder, here is the React app. Built with the package "create-react-app" and working with Redux.
Use ```npm install``` to install all dependencies and ```npm start``` to run the app.

#### Copyright
Rodrigo Quiñones Pichioli, since Mar/02/2018
