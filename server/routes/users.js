import express from 'express';
import models from '../models';
import Validator from 'validator';

const router = express.Router();

router.post('/', (req, res) => {
	res.json({ sucess: true );
});
