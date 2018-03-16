import { SET_BANDS, BAND_FETCHED, BAND_SAVED, BAND_UPDATED, BAND_DELETED } from '../actions/bands';

export default function bands(state = [], action = {}) {
	switch (action.type) {
		case SET_BANDS:
			return action.bands;
		case BAND_FETCHED:
			if (state.findIndex(item => item.id === action.band.id) > -1) {
				return state.map(item => {
					if (item.id === action.band.id) return action.band;
					return item;
				});
			} else
				return [ ...state, action.band ];
		case BAND_SAVED:
			return [ ...state, action.band ];
		case BAND_UPDATED:
			return state.map(item => {
				if (item.id == action.band.id) return action.band;
				return item;
			});
		case BAND_DELETED:
			return state.bands.filter(item => item.id !== action.bandId);
		default:
			return state;
	}
}
