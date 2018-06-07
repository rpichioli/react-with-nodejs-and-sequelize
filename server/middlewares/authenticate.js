import jwt from 'jsonwebtoken';
import models from '../models';

/**
 * Verifica se o usuário está autorizado (válido e logado)
 * @function
 * @param  {Object}   req  Request (Requisição)
 * @param  {Object}   res  Response (Resposta)
 * @param  {Function} next Chama a próxima função da cadeia de execução
 */
export default (req, res, next) => {
	// Autorização presente no cabeçalho
	const authorizationHeader = req.headers['authorization'];
	// Variável reservada para armazenar o token "bruto"
	let token;

	if (authorizationHeader)
		token = authorizationHeader.split(' ')[1]; // Parte após o "Bearer"

	if (token) {
		// Verifica se o token é um dado válido
		jwt.verify(token, "node_and_more_node_please!", (err, decoded) => {
			if (err) {
				res.status(401).json({ error: 'Failed to authenticate' });
			} else {
				models.User
					.findById(decoded.id)
					.then(user => {
						req.currentUser = user;
						next();
					})
					.catch(err => res.status(404).json({ error: 'No such user' }));
			}
		});
	} else {
		res.status(403).json({ error: 'No token provided' });
	}
}
