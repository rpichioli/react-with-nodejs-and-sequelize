import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AlbumsListPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (typeof this.props.match.params.band_id !== "undefined") {
			// Fetch
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
	return { band: null };
}

export default connect(mapStateToProps, {})(AlbumsListPage);
