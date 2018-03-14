import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BandForm from './BandForm';
import { fetchBand } from '../../actions/bands';

class BandFormPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { redirect: false };
	}

	componentDidMount() {
		if (this.props.match.params && this.props.match.params._id) {
			this.props.fetchBand(this.props.match.params._id);
		}
	}

	render() {
		return(
			<div className="ui container">
				<h1>Band Registration</h1>
				<BandForm band={this.props.band} />
			</div>
		);
	}
}

BandFormPage.propTypes = {
	fetchBand: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
	if (props.match.params && props.match.params._id) {
		console.log('mapStateToProps');
		console.log(state.bands.find(item => item.id == props.match.params._id));
		return { band: state.bands.find(item => item.id == props.match.params._id) };
	}

	return { band: null };
}

export default connect(mapStateToProps, { fetchBand })(BandFormPage);
