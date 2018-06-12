import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setCurrentUser(user) {
	return { type: SET_CURRENT_USER, user }
}

export function logout() {
	return dispatch => {
		// Remove token from storage
		localStorage.removeItem('jwtToken');
		// Remove token from request headers
		setAuthorizationToken(false);
		// Send empty user to reducer
		dispatch(setCurrentUser({}));
	}
}

export function login(data) {
	return dispatch => {
		return axios.post('/api/auth', data).then(res => {
			// Receive token
			const token = res.data.token;
			// Create token key in storage
			localStorage.setItem('jwtToken', token);
			// Add token in header requests for future actions
			setAuthorizationToken(token);
			// Promises data to reducer
			dispatch(setCurrentUser(jwtDecode(token)));
		});
	}
}
