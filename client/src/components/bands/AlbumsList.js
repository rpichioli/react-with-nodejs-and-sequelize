import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

export default function AlbumsList({ band }) {
	console.log(band);
	console.log(band.albums);
	console.log(band.title);
	console.log(band.id);

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
		<p>There is no albums registered yet.</p>
	);

	return (
		<div>
			{ !!band.albums && band.albums.length === 0 ? emptyMessage : albumCards }
		</div>
	);
}

AlbumsList.propTypes = {
	band: PropTypes.object.isRequired
}
