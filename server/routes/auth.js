import express from 'express';
import models from '../models';

const router = express.Router();

router.post('/login', (req, res) => {
	res.json({ success: true, message: 'Logged in.' });
});

router.post('/logout', (req, res) => {
	res.json({ success: true, message: 'Logged out.' });
});
