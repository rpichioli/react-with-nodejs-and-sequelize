import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { fetchBands } from '../../actions/bands';
// Components
import BandsList from './BandsList';

class BandsPage extends React.Component {

	componentDidMount() {
		this.props.fetchBands();
	}

	render() {
		const bands = this.props.bands;
		return (
			<div className="ui container">
				<h1>Bands List</h1>
				{bands && <BandsList bands={bands} />}
			</div>
		);
	}
}

BandsPage.propTypes = {
	bands: PropTypes.array.isRequired,
	fetchBands: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		bands: state.bands
	}
}

export default connect(mapStateToProps, { fetchBands })(BandsPage);
