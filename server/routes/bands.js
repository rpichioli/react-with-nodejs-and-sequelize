import express from 'express';
import { validateID } from './validations/shared';

const app = express.Router();

app.get('/', (req, res) => {
	let bands = [
		{ id: 1, title: "Iced Earth" },
		{ id: 2, title: "Iron Maiden" },
		{ id: 3, title: "Lost Horizon" },
		{ id: 4, title: "Sabaton" },
		{ id: 4, title: "Stratovarius" }
	];
	res.json({ success: true, data: bands })
});

app.get('/:id', (req, res) => {
	let { errors, isValid } = validateID(req.params.id);
	if (isValid) {
		let data = { id: req.params.id, title: "Iced Earth" };
		res.json({ success: true, data, isValid: isValid});
	} else
		res.status(400).json({ success: false, error: error, isValid: isValid });
});
