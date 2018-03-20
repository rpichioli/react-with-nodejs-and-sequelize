import express from "express";
import models from "../models";

const router = express.Router();

router.get('/:id', (req, res) => {
	models.album.findAll({ where: { band_id: req.params.id } }).then(albums => {
		if (albums && Object.keys(albums).length > 0)
			res.json({ albums });
		else
			res.status(400).json({ error: "Any albums found for the band." });
	});
});

export default router;
