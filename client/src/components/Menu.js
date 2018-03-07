import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

class Menu extends React.Component {
	render() {
		return (
			<div className="ui fixed inverted menu">
				<div className="ui container">
					<a href="/" className="header item">
						<img className="logo App-logo" src={logo} alt="Logo" />
						Bands App
					</a>

					<NavLink className="item" activeonlywhenexact="active" exact to="/">Home</NavLink>
					<NavLink className="item" activeonlywhenexact="active" exact to="/bands">Bands</NavLink>

					<div className="right menu">
						<div className="item">
							<NavLink className="ui button" exact to="/login">Log in</NavLink>
						</div>
						<div className="item">
							<NavLink className="ui primary button" exact to="/signup">Sign Up</NavLink>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;
