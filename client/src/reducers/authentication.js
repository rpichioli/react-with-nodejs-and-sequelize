import { LOGGED_IN, LOGGED_OUT } from '../actions/authentication';

export default function authentication(state = []action = {}) {
	switch(action.type) {
		case 'LOGGED_IN':
			return state;
		case 'LOGGED_OUT':
			return state;
		default: return state;
	}
}
