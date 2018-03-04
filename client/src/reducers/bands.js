import { SET_BANDS } from '../actions/bands';

export default function bands(state = [], action = {}) {
	switch (action.type) {
		case SET_BANDS:
			// console.log("reducer");
			// console.log(action.bands);
			return action.bands;
		default:
			return state;
	}
}
