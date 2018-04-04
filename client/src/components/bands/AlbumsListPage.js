import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchBandAlbums } from '../../actions/bands';
import AlbumsList from './AlbumsList';

class AlbumsListPage extends React.Component {

	render() {
		// console.groupCollapsed("AlbumsListPage");
		// console.log(this.props.band);
		// console.groupEnd();
		return (
			<div className="ui container">
				{
					!this.props.band ? //|| !this.props.band.albums ?
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
	return { band: state.bands.filter(item => item.id == Number(props.match.params.id))[0] };
}

export default connect(mapStateToProps, { fetchBandAlbums })(AlbumsListPage);
