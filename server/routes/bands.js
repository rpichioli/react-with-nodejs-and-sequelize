import express from 'express';
import models from '../models';
import Validator from 'validator';

const router = express.Router();

/**
 * Get all bands
 */
router.get('/', (req, res) => {
	models.band.findAll({
		include: [models.album],
		order: [['title', 'ASC'], [models.album, 'year', 'ASC']]
	}).then(bands => {
		if (bands && Object.keys(bands).length > 0)
			res.json({ success: true, bands });
		else
			res.status(400).json({ success: false, error: "Any band found." });
	})
});

/**
 * Get band by ID
 */
router.get('/:id', (req, res) => {
	let error = null;
	let id = req.params.id || null;

	if (!id) error = "Invalid request.";
	else if (Validator.isEmpty(id)) error = "Invalid request.";
	else if (!Validator.isInt(id)) error = "Value must be integer.";
	else if (id <= 0) error = "Invalid value.";

	if (error) res.status(400).json({ success: false, error: error, data: {} });

	models.band.findById(req.params.id, {
		include: [models.album],
		order: [[models.album, 'year', 'ASC']]
	}).then(data => {
		if (data)
			res.json({ success: true, band: data });
		else
			res.status(400).json({ success: false, error: "Band not found.", band: {} });
	})
});

/**
 * Insert new band
 */
router.post('/', (req, res) => {
	let { title, year, description } = req.body;
	models.band
		.build({ title, year, description })
		.save()
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: err } }));
});

/**
 * Update band by ID
 */
router.put('/:id', (req, res) => {
	let { id, title, year, description } = req.body;
	models.band
		.update({ title, year, description }, { where: { id } })
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(400).json({ success: false, errors: { globals: "Ops, something wrong happened.." } }));
});

/**
 * Delete band by ID
 */
router.delete('/:id', (req, res) => {
	let id = req.params.id;
	models.band
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

export default router;
