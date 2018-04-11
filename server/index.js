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
	console.log('Database working');
}).catch(function(err) {
	console.error(err, "Something went wrong with the database syncronization");
});

app.listen(8080, () => console.log('Server listening to localhost:8080'));

export default app;
