import axios from 'axios';

export const SET_BANDS = 'SET_BANDS';
export const BAND_FETCHED = 'BAND_FETCHED';
export const BAND_SAVED = 'BAND_SAVED';
export const BAND_UPDATED = 'BAND_UPDATED';
export const BAND_DELETED = 'BAND_DELETED';

export function setBands(bands) {
	return { type: SET_BANDS, bands };
}
export function bandFetched(band) {
	return { type: BAND_FETCHED, band };
}
export function bandSaved(band) {
	return { type: BAND_SAVED, band };
}
export function bandUpdated(band) {
	return { type: BAND_UPDATED, band };
}
export function bandDeleted(bandId) {
	return { type: BAND_DELETED, bandId };
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
export function addBand(band) {
	return dispatch => {
		let { title, year } = band;
		return axios.post('/api/bands', { title, year }).then(response => dispatch(bandSaved(response.data.band)));
	}
}
export function updateBand(band) {
	return dispatch => {
		let { id, title, year } = band;
		return axios.put(`/api/bands/${id}`, { id, title, year }).then(response => dispatch(bandSaved(response.data.band)));
	}
}
export function deleteBand(band) {
	return dispatch => {
		return axios.delete(`/api/bands/${band.id}`).then(response => dispatch(bandSaved(response.data.band)));
	}
}
