import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { fetchBands } from '../../actions/bands';
import BandsList from './BandsList';

class BandsPage extends React.Component {

	componentDidMount() {
		this.props.fetchBands();
	}

	render() {
		const bands = this.props.bands;
		return (
			<div>
				<h1>Bands</h1>
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
