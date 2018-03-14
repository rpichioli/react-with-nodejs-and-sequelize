import axios from 'axios';

export const SET_BANDS = 'SET_BANDS';
export const BAND_FETCHED = 'BAND_FETCHED';

export function setBands(bands) {
	return { type: SET_BANDS, bands };
}

export function bandFetched(band) {
	return { type: BAND_FETCHED, band };
}

export function fetchBands() {
	return dispatch => {
		return axios.get('/api/bands').then(response => dispatch(setBands(response.data.bands)));
	}
}

export function fetchBand(id) {
	return dispatch => {
		return axios.get(`/api/bands/${id}`).then(response => dispatch(bandFetched(response.data.band)));
	}
}
