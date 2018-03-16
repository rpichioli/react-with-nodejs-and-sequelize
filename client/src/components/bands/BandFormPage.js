import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import BandForm from './BandForm';
import { fetchBand, updateBand, addBand } from '../../actions/bands';

class BandFormPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { redirect: false };

		this.saveBand = this.saveBand.bind(this);
	}

	componentDidMount() {
		if (typeof this.props.match.params.id !== "undefined") {
			this.props.fetchBand(this.props.match.params.id);
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
			<div>
				{
					this.state.redirect ?
						<Redirect to="/bands" /> :
						<div className="ui container">
							<h1>Band Registration</h1>
							<BandForm band={this.props.band} saveBand={this.saveBand} />
						</div>
				}
			</div>
		);
	}
}

BandFormPage.propTypes = {
	fetchBand: PropTypes.func.isRequired,
	updateBand: PropTypes.func.isRequired,
	addBand: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
	if (props.match.params && props.match.params.id > 0) {
		return { band: state.bands.find(item => item.id == props.match.params.id) };
	}

	return { band: null };
}

export default connect(mapStateToProps, { fetchBand, updateBand, addBand })(BandFormPage);
