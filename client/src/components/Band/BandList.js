import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Actions
import { fetchBands } from '../../actions/bands';

class BandsListPage extends React.Component {

	/**
	 * Fetch all bands on component load
	 */
	componentDidMount() {
		this.props.fetchBands();
	}

	render() {
		let gridLines = "";

		const bands = this.props.bands;

		if (bands.length !== 0) {
			gridLines = bands.map((band, i) => {
				if (band) {
					return (
						<tr key={band.id}>
							<td>{band.id}</td>
							<td>{band.title}</td>
							<td style={{ textAlign: "center" }}>{band.year}</td>
							<td style={{ textAlign: "center" }}>
								<div className={classnames('ui','label','circular','small', {
									'green' : band.albums.length > 0,
									'yellow' : band.albums.length == 0
								})}>{band.albums.length}</div>
							</td>
							<td style={{ textAlign: "right" }}>
								<NavLink className="ui button compact icon small black" to={`/band/${band.id}/albums/`} title="More details">
									<i className="icon eye"></i>
								</NavLink>
								<NavLink className="ui button compact icon small blue" to={`/band/${band.id}`} title="Edit">
									<i className="icon edit"></i>
								</NavLink>
								<NavLink className="ui button compact icon small red disabled" to={`/band/delete/${band.id}`} title="Delete">
									<i className="icon trash"></i>
								</NavLink>
							</td>
						</tr>
					);
				}
			});
		}

		const grid = (
			<table className="ui striped selectable compact table single line">
				<thead>
					<tr>
						<th width="7%">ID</th>
						<th>Title</th>
						<th width="7%" style={{ textAlign: "center" }}>Year</th>
						<th width="5%" style={{ textAlign: "center" }}>Albums</th>
						<th width="15%"></th>
					</tr>
				</thead>
				<tbody>
					{gridLines}
				</tbody>
			</table>
		);

		const emptyMessage = (
			<div className="ui info message">There is no bands yet in your collection</div>
		);

		return (
			<div className="ui container">
				<h1>Bands List</h1>
				<NavLink exact to="/bands/new" className="ui button primary">Add New</NavLink>
				{bands.length > 0 ? grid : emptyMessage }
			</div>
		);
	}
}

BandsListPage.propTypes = {
	bands: PropTypes.array.isRequired,
	fetchBands: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		bands: state.bands
	}
}

export default connect(mapStateToProps, { fetchBands })(BandsListPage);
