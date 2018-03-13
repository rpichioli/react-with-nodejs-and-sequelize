import React from 'react';
import { connect } from ' react-redux';
import BandForm from './BandForm';
import { fetchBand } from '../../actions/bands';

class BandFormPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { redirect: false }
	}

	componentDidMount() {
		if (this.props.match.params && this.props.match.params._id) {
			this.fetchBand(this.props.match.params._id);
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

function mapStateToProps(state) {
	if (this.props.match.params && this.props.match.params._id > 0)
		return { band: state.bands.find(item => item.id === this.props.match.params._id) }
	return { band: null }
}

export default connect(mapStateToProps, { fetchBand })(BandFormPage);
