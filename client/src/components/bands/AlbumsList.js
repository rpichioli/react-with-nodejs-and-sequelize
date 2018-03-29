import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';
import { NavLink } from 'react-router-dom';

export default function AlbumsList({ band }) {
	console.group("AlbumsList");
	console.log(band);
	console.log(band.albums);
	console.log(band.title);
	console.log(band.id);
	console.groupEnd();

	const albumCards = (
		<div className="ui four cards">
			{
				!!band.albums && band.albums.map((album) => {
					return (<AlbumCard key={band.id} band={band} album={album} />);
				})
			}
		</div>
	);

	const emptyMessage = (
		<div class="ui info message">There is no albums registered yet.</div>
	);

	return (
		<div>
			<NavLink exact to="/bands/" className="ui button">Back to bands list</NavLink>
			<NavLink exact to={`/bands/${band.id}/albums/new`} className="ui button primary">Add New</NavLink>
			<br /><br />
			{ !!band.albums && band.albums.length > 0 ? albumCards : emptyMessage }
		</div>
	);
}

AlbumsList.propTypes = {
	band: PropTypes.object.isRequired
}
