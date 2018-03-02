import express from 'express';
import bodyParser from 'body-parser';
import bands from 'band';

const app = express();

// Body parser
app.use(bodyParser.json());
// Routes
app.use(bands);

app.listen(8080, () => console.log('Server listening to localhost:8080'));
