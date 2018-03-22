import React from 'react';
import { NavLink } from 'react-router-dom';

class AlbumCard extends React.Component {
	render() {
		return (
			<div className="ui card">
				<div className="image">
					<img src={game.cover} alt="Game Cover" />
				</div>
				<div className="content">
					<div className="header">{game.title}</div>
				</div>
				<div className="extra content">
					<NavLink to={`/game/${game._id}`} className="ui basic button green">Edit</NavLink>
					<div className="ui basic button red" onClick={() => deleteGame(game._id)}>Delete</div>
				</div>
			</div>
		)
	}
}

export default AlbumCard;
