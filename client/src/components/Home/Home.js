import React from 'react';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div className="ui container text">
					<h1 className="ui header">Welcome!</h1>

					<b>Basically</b>
					<p>It's a simple project made with React + Redux, NodeJS (Express), Sequelize ORM and Passport.</p>

					<b>Summary</b>
					<p>The main idea of this project is to create an application with relational database exposing data through API services using NodeJS + Express. The front-end is a React + Redux application that manages state populated by the API based in each operation basically.</p>
					<p>Besides the registration the project has a simple login/logout feature made using HOC (High Order Component) in React-side that calls an authorization middleware in the API backend, as a layer, that authorizes the user to access all the stuff - if everything is OK.</p>

					<b>Prooving new stuff!</b>
					<p>I've chosen Semantic UI framework to compare with Bootstrap features, and it sounds really good!</p>



					<b>Client</b>
					<p>React + Redux</p>

					<b>Server</b>
					<p>NodeJS (Sequelize) + Sequelize ORM + Passport</p>

					<b>TDD + BDD</b>
					<p>React - Jest<br />
					Express API - Mocha + Chai</p>
				</div>

				<br />
				<br />
				<br />

				<div class="ui vertical masthead center aligned segment">
					<div class="ui text container">
						{/* <h3 class="ui inverted header">Check the GitHub!</h3> */}
						<p>Access full code and documentation in GitHub repository</p>
						<a className="ui github button primary" href="https://github.com/rpichioli/react-with-sequelize-and-passport" target="_blank">
							<i className="github icon"></i>
							Let me in!!
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
