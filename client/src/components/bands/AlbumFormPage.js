import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAlbum, updateAlbum } from '../../actions/bands';
import AlbumForm from './AlbumForm';

class AlbumFormPage extends React.Component {
	state = { redirect: false };

	componentDidMount() {
		// if (typeof this.props.match.params.band_id !== "undefined") {
		// 	this.props.fetchAlbum(this.props.match.params.band_id);
		// }
	}

	saveBand = ({ title, description, year, cover }) => {
		const { band_id, id } = this.props.album;
		if (!id)
			this.props.addAlbum({ band_id, title, description, year, cover }).then(() => this.setState({ redirect: true }));
		else
			this.props.updateAlbum({ id, band_id, title, description, year, cover }).then(() => this.setState({ redirect: true }));
	}

	render() {
		return (
			<div className="ui container">
				<h1>Album Registration</h1>
				<AlbumForm album={this.props.album} />
			</div>
		)
	}
}

AlbumFormPage.propTypes = {
	updateAlbum: PropTypes.func.isRequired,
	addAlbum: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
	if (props.match.params && props.match.params.id > 0) {
		const band = state.bands.find(item => item.id == props.match.params.id);
		const album = band ? band.albums.find(item => item.band_id == props.match.params.band_id) : null;
		return { album: album };
	}

	return { album: null };
}

export default connect(mapStateToProps, { addAlbum, updateAlbum })(AlbumFormPage);
