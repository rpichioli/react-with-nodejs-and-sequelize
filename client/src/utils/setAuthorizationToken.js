import axios from 'axios';

export default function setAuthorizationToken(token) {
	if (token) {
		// Write "Bearer" token in requests header
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		// Remove authorization from header
		delete axios.defaults.headers.common['Authorization'];
	}
}
