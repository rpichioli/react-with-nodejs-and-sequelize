import axios from 'axios';

// -----------------------------------------------------------
// Action types
// -----------------------------------------------------------
export const ALBUM_SAVED = 'ALBUM_SAVED';
export const ALBUM_UPDATED = 'ALBUM_UPDATED';
export const ALBUM_DELETED = 'ALBUM_DELETED';

// -----------------------------------------------------------
// Actions to be dispatched to the reducer
// -----------------------------------------------------------
export function albumSaved(album) {
	return { type: ALBUM_SAVED, album };
}
export function albumUpdated(album) {
	return { type: ALBUM_UPDATED, album };
}
export function albumDeleted(albumId) {
	return { type: ALBUM_DELETED, albumId };
}

// -----------------------------------------------------------
// Business rules before dispatch
// -----------------------------------------------------------
export function addAlbum(album) {
	return dispatch => {
		const { title, year, description, cover, band_id } = album;
		return axios.post('/api/albums', { title, year, description, cover, band_id })
			.then(response => {console.log(response); dispatch(albumSaved(response.data.album))})
			.catch(error => console.log(error));
	}
}
export function updateAlbum(album) {
	return dispatch => {
		const { id, title, year, description, cover, band_id } = album;
		return axios.put(`/api/albums/${id}`, { id, title, year, description, cover, band_id })
			.then(response => dispatch(albumUpdated(album)))
			.catch(error => console.log(error));
	}
}
export function deleteAlbum(album) {
	return dispatch => {
		return axios.delete(`/api/albums/${album.id}`)
			.then(response => dispatch(albumDeleted(album.id)))
			.catch(error => console.log(error));
	}
}
