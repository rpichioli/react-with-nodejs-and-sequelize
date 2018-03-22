import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

class AlbumsList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const band = this.props.band;
		const albumCards = null;

		if (band.albums.length > 0) {
			albumCards = band.albums.map((album, i) => {
				return (
					<AlbumCard band={band} album={album} />
				);
			});
		}

		const emptyMessage = (
			<p>There is no bands yet in yout collection</p>
		);

		return (
			<div>
				{ !!albumCards ? albumCards : emptyMessage }
			</div>
		);
	}
}

AlbumsList.propTypes = {
	band: PropTypes.object.isRequired
}

export default AlbumsList
