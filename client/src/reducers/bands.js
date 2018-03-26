import {
	SET_BANDS,
	BAND_FETCHED,
	BAND_SAVED,
	BAND_UPDATED,
	BAND_DELETED,
	SET_BAND_ALBUMS
} from '../actions/bands';

export default function bands(state = [], action = {}) {
	//console.log('entered reducer');
	//console.log(state);
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
			return state.filter(item => item.id !== action.bandId);
		case SET_BAND_ALBUMS:
			//console.log(state);
			return state.map(item => {
				item.albums = [];
				if (item.id === Number(action.bandId)) item.albums = action.albums;
				console.info(item);
				return item;
			})
		default:
			return state;
	}
}
