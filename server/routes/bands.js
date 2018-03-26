import express from 'express';
import models from '../models';
import Validator from 'validator';
// import { findAll, findByID } from './business/bands';
// import staticBands from '../data/bands';

const router = express.Router();

/**
 * Get all bands
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

	if (error) res.status(400).json({ success: false, error: error, data: {} });

	models.band.findById(req.params.id).then(data => {
		if (data)
			res.json({ success: true, band: data });
		else
			res.status(400).json({ success: false, error: "Band not found.", band: {} });
	})
});

router.get('/:id/albums', (req, res) => {
	console.log(req.params.id);
	models.album.findAll({ where: { band_id: req.params.id } }).then(albums => {
		if (albums && Object.keys(albums).length > 0)
			res.json({ albums });
		else
			res.status(400).json({ error: "Any albums found for the requested band." });
	});
});

/**
 * Insert new band
 */
router.post('/', (req, res) => {
	let { title, year } = req.body;
	console.log(req.body);
	models.band
		.build({ title: title, year: year })
		.save()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ errors: { globals: err } }));
});

/**
 * Update band by ID
 */
router.put('/:id', (req, res) => {
	let { id, title, year } = req.body;
	models.band
		.update({ title, year }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ errors: { globals: "Ops, something wrong happened.." } }));
});

/**
 * Delete band by ID
 */
router.delete('/:id', (req, res) => {
	let id = req.params.id;
	models.band
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ errors: { globals: err } }));
});

export default router;
