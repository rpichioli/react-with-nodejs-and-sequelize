import express from "express";
import models from "../models";

const router = express.Router();

router.post('/', (req, res) => {
	const { name, email, username, password } = req.body;
	models.user
		.create({ name, email, username, password })
		.then(() => res.json({ success: true }))
		.catch(err => res.status(400).json({ success: false, errors: { globals: err } }));.
});
