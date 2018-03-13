# The project (in development)
The main idea of thi project is to create an application which works with relational database building CRUDs, simple and complex forms, explore React features and possibilities, and also a login/logout feature based on an anthorization middleware in the API backend layer to access all the stuff.

- The **client-side** is a React + Redux app based.
- The **server-side** is built in NodeJS (Express) and works like an API server.

The Passport based authorization middleware will intercept all requests, verify their data if necessary and proceed with the authorization or not, depending on it's logic.

>This application uses Sequelize ORM to manage relational database and maintain it's data.

If you have some suggestion, please let me know about it!

## Server-Side
Located in the "/server/" folder, here becomes the NodeJS Express application. 

Use ```npm install``` to install all dependencies and ```npm start``` to run the app.

## Client-Side
Located in the "/client/" folder, here is the React app. Built with the package "create-react-app" and working with Redux.

Use ```npm install``` to install all dependencies and ```npm start``` to run the app.

## Copyright
Rodrigo Quiñones Pichioli, since Mar/02/2018
