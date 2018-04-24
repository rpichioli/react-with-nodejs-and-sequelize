import express from 'express';
import bodyParser from 'body-parser';
import bands from './routes/bands';
import albums from './routes/albums';
import models from './models';

const app = express();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/api/bands/', bands);
app.use('/api/albums/', albums);

// Middleware for errors
app.use((req, res) => {
	res.status(404).json({ errors: { global: "Still working on it. Please try again later when we implement it." } });
});

// Sync database with Sequelize models
models.sequelize.sync().then(function() {
	if (process.env.NODE_ENV !== "test") {
		console.log('Database connected!');
	}
}).catch(function(err) {
	console.error(err, "Something went wrong, database is not connected!");
});

if (process.env.NODE_ENV == 'test')
	app.listen(5000, () => console.log(`Tests listening to 5000.`));
else
	app.listen(8080, () => console.log(`NodeJS listening to 8080. Current environment: ${process.env.NODE_ENV}.`));

module.exports = app;

// ------------------------------------------------------------------------------
// NodeJS Environment > process.env.NODE_ENV
// ------------------------------------------------------------------------------
// To set an environment variable in Windows normally:
//		SET NODE_ENV=development
// Through PowerShell terminal:
//		$env:NODE_ENV="development"
// If you are in OSX or Linux terminals:
//		export NODE_ENV=development
