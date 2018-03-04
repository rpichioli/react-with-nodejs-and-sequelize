import express from 'express';
import bodyParser from 'body-parser';
import bands from './routes/bands';
import models from './models';

const app = express();

// Body parser
app.use(bodyParser.json());
// Routes
app.use('/api/bands/', bands);

// Sync database with Sequelize models
models.sequelize.sync().then(function() {
    console.log('Database working');
}).catch(function(err) {
    console.error(err, "Something went wrong with the database syncronization");
});

app.listen(8080, () => console.log('Server listening to localhost:8080'));
