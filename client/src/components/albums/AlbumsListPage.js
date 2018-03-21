import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBandAlbums } from '../actions/albums';

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
		return (
			<div className="ui container">
				<h1>{this.state.band.title}</h1>
				<h2>Albums List</h2>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return { bands: state.bands };
}

export default connect(mapStateToProps, { fetchBandAlbums })(AlbumsListPage);
