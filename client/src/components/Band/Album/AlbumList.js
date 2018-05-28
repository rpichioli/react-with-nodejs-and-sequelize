import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

import { fetchBandAlbums } from '../../../actions/bands';
import AlbumCard from './AlbumCard';

class AlbumsList extends React.Component {

	render() {
		let albumCards = "";
		if (!!this.props.band && !!this.props.band.albums) {
			albumCards = (
				<div className="ui three cards">
					{
						!!this.props.band.albums && this.props.band.albums.map((album) => {
							return (<AlbumCard key={this.props.band.id} band={this.props.band} album={album} />);
						})
					}
				</div>
			);
		}

		const emptyMessage = (
			<div className="ui info message">There is no albums registered yet.</div>
		);

		return (
			<div className="ui container">
				{
					!this.props.band ? //|| !this.props.band.albums ?
						<Redirect to="/bands" /> :
						<div>
							<h1>{this.props.band.title}</h1>
							<div>
								<NavLink exact to="/bands/" className="ui button">Back to bands list</NavLink>
								<NavLink exact to={`/band/${this.props.band.id}/album/new`} className="ui button primary">Add New</NavLink>
								<br /><br />
								{ !!this.props.band.albums && this.props.band.albums.length > 0 ? albumCards : emptyMessage }
							</div>
						</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return { band: state.bands.filter(item => item.id == Number(props.match.params.id))[0] };
}

export default connect(mapStateToProps, { fetchBandAlbums })(AlbumsList);
