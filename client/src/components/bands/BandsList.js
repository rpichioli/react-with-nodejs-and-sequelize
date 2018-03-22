import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BandsList({ bands }) {

	let gridLines = "";

	if (bands.length !== 0) {
		gridLines = bands.map((band, i) => {
			if (band) {
				return (
					<tr>
						<td>{band.id}</td>
						<td>{band.title}</td>
						<td>{band.year}</td>
						<td style={{ textAlign: "right" }}>
							<NavLink exact to={`/band/albums/${band.id}`} title="Edit">
								<i className="icon info"></i>
							</NavLink>
							<NavLink exact to={`/band/${band.id}`} title="Edit">
								<i className="icon edit blue"></i>
							</NavLink>
							<NavLink exact to={`/band/delete/${band.id}`} title="Delete">
								<i className="icon trash red"></i>
							</NavLink>
						</td>
					</tr>
				);
			}
		});
	}

	const grid = (
		<table className="ui striped selectable compact table">
			<thead>
				<tr>
					<th width="7%">ID</th>
					<th>Title</th>
					<th width="7%">Year</th>
					<th width="7%"></th>
				</tr>
			</thead>
			<tbody>
				{gridLines}
			</tbody>
		</table>
	);

	const emptyMessage = (
		<p>There is no bands yet in yout collection</p>
	);

	return (
		<div>
			<NavLink exact to="/bands/new" className="ui button primary">Add New</NavLink>
			{bands.length > 0 ? grid : emptyMessage }
		</div>
	);
}
