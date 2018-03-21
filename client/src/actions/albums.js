import axios from 'axios';

export const SET_BAND_ALBUM = 'SET_BAND_ALBUMS';

export function setBandAlbums()

export default function fetchBandAlbums(bandId) {
	return dispatch => {
		return axios.get(`api/bands/${bandId}/albums`)
			.then(response => console.log(response));
			.catch(err => console.log(err));
	}
}
