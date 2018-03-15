import { SET_BANDS, BAND_FETCHED } from '../actions/bands';

export default function bands(state = [], action = {}) {
	switch (action.type) {
		case BAND_FETCHED:
			//console.log('reducer');
			//console.log(action.band);
			const index = state.findIndex(item => item.id === action.band.id);

			if (index > -1) {
				return state.map(item => {
					if (item.id === action.band.id) return action.band;
					return item;
				});
			} else {
				return [ ...state, action.band ];
			}
		case SET_BANDS:
			return action.bands;
		default:
			return state;
	}
}
