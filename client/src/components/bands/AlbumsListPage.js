import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchBandAlbums } from '../../actions/bands';
import AlbumsList from './AlbumsList';

class AlbumsListPage extends React.Component {
	componentDidMount() {
		if (typeof this.props.match.params.id !== "undefined") {
			this.props.fetchBandAlbums(this.props.match.params.id);
		}
	}

	render() {
		console.log(this.props.band);
		return (
			<div className="ui container">
				{
					!this.props.band ?
						<Redirect to="/bands" /> :
						<div>
							<h1>{this.props.band.title}</h1>
							<AlbumsList band={this.props.band} />
						</div>
				}
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	//console.log("mapping state to props");
	//console.log(state);
	//console.log(props);
	//if (typeof props.match.params.id !== "undefined") {
		return { band: state.bands.filter(item => item.id == Number(props.match.params.id))[0] };
	// } else {
	// 	return { band: null }
	// }
}

export default connect(mapStateToProps, { fetchBandAlbums })(AlbumsListPage);
