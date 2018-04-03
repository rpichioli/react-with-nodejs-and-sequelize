import {
	SET_BANDS,
	BAND_FETCHED,
	BAND_SAVED,
	BAND_UPDATED,
	BAND_DELETED,
	SET_BAND_ALBUMS
} from '../actions/bands';
import {
	ALBUM_SAVED,
	ALBUM_UPDATED,
	ALBUM_DELETED
} from '../actions/albums';

export default function bands(state = [], action = {}) {
	switch (action.type) {
		// ---------------------------------------------------------
		// Band
		// ---------------------------------------------------------
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
			return state.map(item => {
				item.albums = [];
				if (item.id === Number(action.bandId)) item.albums = action.albums;
				return item;
			});
		// ---------------------------------------------------------
		// Album
		// ---------------------------------------------------------
		case ALBUM_SAVED:
			return state.map(item => {
				if (item.id == action.album.band_id) {
					item.albums[item.albums.length++] = action.album;
				}
				return item;
			});
		case ALBUM_UPDATED:
			
			return state.map(item => {
				if (item.id == action.album.band_id) {
					let album_index = item.albums.findIndex(album => album.id === action.album.id);
					if (album_index > -1) item.albums[album_index] = action.album;
				}
				return item;
			})
		case ALBUM_DELETED:
			return state;
		default:
			return state;
	}
}
