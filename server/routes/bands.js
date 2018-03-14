import express from 'express';
import models from '../models';
import Validator from 'validator';
// import { findAll, findByID } from './business/bands';
// import staticBands from '../data/bands';

const router = express.Router();

/**
 * Return all registered bands
 */
router.get('/', (req, res) => {
	models.band.findAll().then(bands => {
		if (bands && Object.keys(bands).length > 0)
			res.json({ bands });
		else
			res.status(400).json({ error: "Any band found." });
	})
});

/**
 * Get band by ID
 */
router.get('/:id', (req, res) => {
	let error = null;
	let id = req.params.id || null;

	if (!id)
		error = "Invalid request.";
	else if (Validator.isEmpty(id))
		error = "Invalid request.";
	else if (!Validator.isInt(id))
		error = "Value must be integer.";
	else if (id <= 0)
		error = "Invalid value.";

	if (error)
		res.status(400).json({ success: false, error: error, data: {} });

	models.band.findById(req.params.id).then(data => {
		if (data)
			res.json({ success: true, band: data });
		else
			res.status(400).json({ success: false, error: "Band not found.", band: {} });
	})
});

export default router;
