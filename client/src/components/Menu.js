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
						React | All-in-One
					</a>

					<NavLink className="item" activeonlywhenexact="active" exact to="/">Home</NavLink>
					<NavLink className="item" activeonlywhenexact="active" exact to="/bands">Bands</NavLink>

					<div className="right menu">
						<div className="item">
							<NavLink className="ui green button basic" exact to="/sign-in">
								<i class="paper plane icon"></i>
								Sign in
							</NavLink>
						</div>
						<div className="item">
							<NavLink className="ui blue button basic" exact to="/sign-up">
								<i class="keyboard icon"></i>
								Sign Up
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;
