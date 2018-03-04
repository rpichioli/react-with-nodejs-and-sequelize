import axios from 'axios';

export const SET_BANDS = 'SET_BANDS';

export function setBands(bands) {
	return {
		type: SET_BANDS,
		bands
	}
}

export function fetchBands() {
	return dispatch => {
		return axios.get('/api/bands').then(response => {
			// console.log("action");
			// console.log(response.data.bands);
			dispatch(setBands(response.data.bands));
		});
	}
}
