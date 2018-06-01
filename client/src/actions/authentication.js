import axios from 'axios';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export function loggedIn(data) {
	return { type: LOGGED_IN, data };
}

export function loggedOut(data) {
	return { type: LOGGED_OUT, data };
}

export function logIn(data) {
	return dispatch = {
		const { identifier, password } = data;
		axios.post('/api/auth/login', { identifier, password })
			.then(response => dispatch(loggedIn(response.data)))
			.catch(err => console.error(err));
	};
};

export function logOut(data) {
	return dispatch = {
		const { identifier } = data;
		axios.get('/api/auth/logout', { identifier })
			.then(() => dispatch(loggedOut(identifier)))
			.catch(err => console.error(err));
	};
}
