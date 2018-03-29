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
						<td style={{ textAlign: "center" }}>{band.year}</td>
						<td style={{ textAlign: "center" }}>{band.albums.length}</td>
						<td style={{ textAlign: "right" }}>
							<NavLink className="ui button compact icon small black" to={`/band/${band.id}/albums/`} title="More details">
								<i className="icon eye"></i>
							</NavLink>
							<NavLink className="ui button compact icon small blue" to={`/band/${band.id}`} title="Edit">
								<i className="icon edit"></i>
							</NavLink>
							<NavLink className="ui button compact icon small red" to={`/band/delete/${band.id}`} title="Delete">
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
		<div class="ui info message">There is no bands yet in your collection</div>
	);

	return (
		<div>
			<NavLink exact to="/bands/new" className="ui button primary">Add New</NavLink>
			{bands.length > 0 ? grid : emptyMessage }
		</div>
	);
}
