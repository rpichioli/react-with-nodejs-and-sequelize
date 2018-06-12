import express from 'express';
import models from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import secret from '../config/secret';

const router = express.Router();

router.post('/', (req, res) => {
	const {identifier, password } = req.body;

	models.user.find({ username: identifier }).fetch().then((user) => {
		if (user) {
			if (bcrypt.compareSync(password, user.get('password_digest'))) {
				const token = jwt.sign({
					id: user.get('id'),
					username: user.get('username')
				}, secret.jwtSecret);

				res.json({ token });
			} else {
				res.status(401).json({ errors: { form: 'Invalid credentials' } });
			}
		} else {
			res.status(401).json({ errors: { form: 'Invalid credentials' } });
		}
	});

	router.get('/logout', (req, res) => {
		req.session.destroy(() => res.json({ success: true, message: "Successful logout!" }));
	});
});

export default router;
