import express from "express";
import models from "../models";

const router = express.Router();

/**
 * Select album data by ID
 */
router.get('/:id', (req, res) => {
	const id = req.params.id
	models.album.find({ where: { id } }).then(album => {
		if (album) res.json({ success: true, album });
		else res.status(400).json({ success: false, error: "Album not found." });
	})
});

/**
 * Save new band album
 */
router.post('/', (req, res) => {
	let { title, description, cover, year, band_id } = req.body;
	models.album
		.create({ title, description, cover, year, band_id })
		.then(album => res.json({ success: true, album }))
		.catch(err => res.status(400).json({ success: false, errors: { globals: err }}));
});

/**
 * Update album by ID
 */
router.put('/:id', (req, res) => {
	const { id, title, description, cover, year } = req.body;
	models.album
		.update({ title, description, cover, year }, { where: { id }})
		.then(() => res.json({ success: true }))
		.catch(err => res.status(400).json({ success: false, errors: { globals: err }}));
});

/**
 * Delete album by ID
 */
router.delete('/:id', (req, res) => {
	const id = req.params.id;
	models.album
		.destroy({ where: { id } })
		.then(() => res.json({ success: true }))
		.catch(err => res.status(400).json({ success: false, errors: { globals: err } }));
});

export default router;
