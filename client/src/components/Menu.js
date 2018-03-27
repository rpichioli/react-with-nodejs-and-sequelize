import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

class Menu extends React.Component {
	render() {
		return (
			<div className="ui fixed inverted menu">
				<a href="/" className="header item">
					<img className="logo App-logo" src={logo} alt="Logo" />
					React | All-in-One
				</a>

				<NavLink className="item" activeonlywhenexact="active" exact to="/">
					<i className="home icon"></i> Home
				</NavLink>
				<NavLink className="item" activeonlywhenexact="active" exact to="/bands">
					<i className="music icon"></i> Bands
				</NavLink>

				<div className="right menu">
					<div className="item">
						<NavLink className="ui blue" exact to="/sign-up">
							<i className="keyboard icon"></i>
							Sign Up
						</NavLink>
					</div>
					<div className="item">
						<NavLink className="ui green" exact to="/sign-in">
							<i className="paper plane icon"></i>
							Sign in
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;
