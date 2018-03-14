import React from 'react';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div class="ui inverted vertical masthead center aligned segment">
					<div class="ui container">
						<div className="ui text container">
							<h1 className="ui inverted header">React with Redux and Sequelize</h1>
							<h2>Check this code in the our Github repository</h2>
							<button className="ui github button primary" onClick="window.location='https://github.com/rpichioli/react-with-sequelize-and-passport'">
								<i className="github icon"></i>
								Go to Github!
							</button>
						</div>
					</div>
				</div>

				<div class="ui vertical stripe segment">
					<div class="ui middle aligned stackable grid container">
						<div class="row">
							<div class="eight wide column">
								<h3 class="ui header">Client-side application based on state</h3>
								<p>With Redux we build apps based in state, that is a Redux store which works with reducers. The reducers receive actions that can work with server asyncronous requests and handle the state based on received data.</p>
								<h3 class="ui header">API powered by NodeJS with Sequelize ORM</h3>
								<p>The backend consists in a Express application working togheter with Sequelize ORM to manage data from relational database and return data based on each business rule and request.</p>
							</div>
							<div class="six wide right floated column">
								<img src="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png" class="ui large bordered rounded image" alt="atom" />
							</div>
						</div>
						<div class="row">
							<div class="center aligned column">
								<a class="ui huge button">Check Them Out</a>
							</div>
						</div>
					</div>
				</div>

				<div className="ui vertical stripe quote segment">
					<div className="ui equal width stackable internally celled grid">
						<div className="center aligned row">
							<div className="column">
								<h3>"What a Company"</h3>
								<p>That is what they all say about us</p>
							</div>
							<div className="column">
								<h3>"I shouldn't have gone with their competitor."</h3>
								<p>
									<i class="child icon"></i>
									<b>Nan</b> Chief Fun Officer Acme Toys
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
