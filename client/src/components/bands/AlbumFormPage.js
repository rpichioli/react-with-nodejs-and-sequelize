import React from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addAlbum, updateAlbum } from '../../actions/albums';
import AlbumForm from './AlbumForm';

class AlbumFormPage extends React.Component {
	constructor(props) {
		super(props);
	}

	state = { redirect: false };

	// saveAlbum = ({ id, title, year, description, cover, band_id }) => {
	saveAlbum = (album) => {
		console.log(album.id);
		console.log(this.props);
		if (album.id && album.id > 0) {
			return this.props.updateAlbum(album).then(() => { this.setState({ redirect: true }) });
			// this.props.updateAlbum({
			// 	id, title, year, description, cover, band_id
			// }).then(() => this.setState({ redirect: true }));
		} else {
			album.band_id = this.props.match.params.id;
			return this.props.addAlbum(album).then(() => { this.setState({ redirect: true }) });
			// this.props.addAlbum({
			// 	title, year, description, cover, band_id: this.props.match.params.id
			// }).then(() => this.setState({ redirect: true }));
		}
	}

	render() {
		return (
			<div>
				{
					// Redirect if some action has worked succesfully, render if not
					this.state.redirect ?
						<Redirect to={`/band/${this.props.match.params.id}/albums`} /> :
						<div className="ui container">
							<h1>Album Registration</h1>
							<NavLink exact to={`/band/${this.props.match.params.id}/albums`} className="ui button">Back to albums list</NavLink>
							<br /><br />
							<AlbumForm album={this.props.album} saveAlbum={this.saveAlbum} />
						</div>
				}
			</div>
		)
	}
}

AlbumFormPage.propTypes = {
	updateAlbum: PropTypes.func, //.isRequired,
	addAlbum: PropTypes.func //.isRequired
};

function mapStateToProps(state, props) {
	if (props.match.params && props.match.params.id > 0) {
		const band = state.bands.find(item => item.id == props.match.params.id);
		const album = band ? band.albums.find(item => item.id == props.match.params.album_id) : null;
		return { album: album };
	}

	return { album: null };
}

export default connect(mapStateToProps, { addAlbum, updateAlbum })(AlbumFormPage);
