"use strict";
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

// To set an environment variable in Windows:
// SET NODE_ENV=development
// on OS X or Linux:
// export NODE_ENV=development

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'database.json'))[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

console.log(`Current environment: ${process.env.NODE_ENV}`);

const db = {};

// Import all models setting each one to the db object
fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf(".") !== 0) && (file !== "index.js");
	})
	.forEach(function(file) {
		let model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(function(modelName) {
	if ("associate" in db[modelName]) db[modelName].associate(db);}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
