import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBandAlbums } from '../actions/albums';
import AlbumsList from './AlbumsList';

class AlbumsListPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (typeof this.props.match.params.id !== "undefined") {
			this.props.fetchBandAlbums(this.props.match.params.id);
		}
	}

	render() {
		const band = this.props.band;
		return (
			<div className="ui container">
				<h1>{band.title}</h1>
				<h2>Albums List</h2>
				<AlbumsList band={band} />
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	if (typeof props.match.params.id !== "undefined") {
		return { band: state.bands.filter(item => item.id === props.match.params.id) };
	} else {
		return { band: null }
	}
}

export default connect(mapStateToProps, { fetchBandAlbums })(AlbumsListPage);
