import express from "express";
import models from "../models";

const router = express.Router();

router.get('/:id', (req, res) => {
	models.album.find({ where: { id: req.params.id } }).then(album => {
		if (album)
			res.json({ album });
		else
			res.status(400).json({ error: "Album not found." });
	})
});

export default router;
