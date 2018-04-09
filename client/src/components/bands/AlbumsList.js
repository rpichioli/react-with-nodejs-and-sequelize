import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';
import { NavLink } from 'react-router-dom';

export default function AlbumsList({ band }) {
	const albumCards = (
		<div className="ui five cards">
			{
				!!band.albums && band.albums.map((album) => {
					return (<AlbumCard key={band.id} band={band} album={album} />);
				})
			}
		</div>
	);

	const emptyMessage = (
		<div className="ui info message">There is no albums registered yet.</div>
	);

	return (
		<div>
			<NavLink exact to="/bands/" className="ui button">Back to bands list</NavLink>
			<NavLink exact to={`/band/${band.id}/album/new`} className="ui button primary">Add New</NavLink>
			<br /><br />
			{ !!band.albums && band.albums.length > 0 ? albumCards : emptyMessage }
		</div>
	);
}

AlbumsList.propTypes = {
	band: PropTypes.object.isRequired
}
