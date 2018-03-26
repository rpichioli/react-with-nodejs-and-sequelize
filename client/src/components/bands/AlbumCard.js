import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class AlbumCard extends React.Component {
	render() {
		const band = this.props.band;
		const album = this.props.album;

		return (
			<div className="ui card">
				<div className="image">
					<img src={album.cover} alt="Game Cover" />
				</div>
				<div className="content">
					<div className="header">{album.title}</div>
				</div>
				<div className="extra content">
					<NavLink to={`/band/${band.id}/album/${album.id}`} className="ui basic button green">Edit</NavLink>
					<div className="ui basic button red">Delete</div>
					{/* onClick={() => deleteGame(album._id)} */}
				</div>
			</div>
		)
	}
}

AlbumCard.propTypes = {
	band: PropTypes.number.isRequired,
	album: PropTypes.object.isRequired
}

export default AlbumCard;
