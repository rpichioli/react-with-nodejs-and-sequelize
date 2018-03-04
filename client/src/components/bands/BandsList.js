import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BandsList({ bands }) {
	var items = bands.map((band, i) => {
		return (
			<tr>
				<td>{band.id}</td>
				<td>{band.title}</td>
				<td>{band.year}</td>
				<td align="right">
					<NavLink exact to={`/bands/${band.id}`} title="Edit">
						<i className="edit bordered inverted icon blue"></i>
					</NavLink>
					<NavLink exact to={`/bands/delete/${band.id}`} title="Delete">
						<i className="trash bordered inverted icon red"></i>
					</NavLink>
				</td>
			</tr>
		);
	});

	const grid = (
		<table className="ui striped selectable  table">
			<thead>
				<tr>
					<th width="10%">ID</th>
					<th>Title</th>
					<th width="10%">Year</th>
					<th width="10%"></th>
				</tr>
			</thead>
			<tbody>
				{items}
			</tbody>
		</table>
	);

	const emptyMessage = (
		<p>There is no bands yet in yout collection</p>
	);

	return (
		<div>
			{bands && bands.length > 0 ? grid : emptyMessage}
		</div>
	);
}
