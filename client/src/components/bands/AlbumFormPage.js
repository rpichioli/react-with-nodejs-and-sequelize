import React from 'react';
import AlbumForm from './AlbumForm';

class AlbumFormPage extends React.Component {
	render() {
		return (
			<div className="ui container">
				<h1>Album Registration</h1>
				<AlbumForm />
			</div>
		)
	}
}

export default AlbumFormPage;
