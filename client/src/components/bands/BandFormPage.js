import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BandForm from './BandForm';
import { fetchBand, updateBand, addBand } from '../../actions/bands';

class BandFormPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { redirect: false };
	}

	componentDidMount() {
		if (typeof this.props.match.params._id !== "undefined") {
			this.props.fetchBand(this.props.match.params._id);
		}
	}


	saveBand = ({ id, title, year }) => {
		if (!id)
			this.props.addBand({ title, year }).then(() => this.setState({ redirect: true }));
		else
			this.props.updateBand({ id, title, year }).then(() => this.setState({ redirect: true }));
	}

	render() {
		return(
			<div className="ui container">
				<h1>Band Registration</h1>
				<BandForm band={this.props.band} saveBand={this.saveBand} />
			</div>
		);
	}
}

BandFormPage.propTypes = {
	fetchBand: PropTypes.func.isRequired,
	updateBand: PropTypes.func.isRequired,
	saveBand: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
	if (typeof this.props.match.params._id !== "undefined") {
		//console.log('mapStateToProps');
		//console.log(state.bands.find(item => item.id == props.match.params._id));
		return { band: state.bands.find(item => item.id == props.match.params._id) };
	}

	return { band: null };
}

export default connect(mapStateToProps, { fetchBand, updateBand, saveBand })(BandFormPage);
