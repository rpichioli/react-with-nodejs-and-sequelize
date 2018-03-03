import express from 'express';
//import {  } from './validations/shared';
import { getByID } from './validations/bands';
import staticBands from '../data/bands';

const router = express.Router();

/**
 * Return all registered bands
 */
router.get('/', (req, res) => {
	let bands = staticBands;
	res.json({ success: true, data: bands })
});

/**
 * Get band by ID
 */
router.get('/:id', (req, res) => {
	let { error, isValid, band } = getByID(req.params.id);
	if (isValid) {
		res.json({ success: isValid, data: band, isValid: isValid });
	} else
		res.status(400).json({ success: isValid, error: error, isValid: isValid });
});

export default router;
