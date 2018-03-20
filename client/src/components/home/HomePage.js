import React from 'react';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div class="ui inverted vertical masthead center aligned segment">
					<div class="ui container">
						<div className="ui text container">
							<h1 className="ui inverted header">React with Redux and Sequelize</h1>
							<h2>Check the code in Github</h2>
							<button className="ui github button primary" onClick="window.location='https://github.com/rpichioli/react-with-sequelize-and-passport'">
								<i className="github icon"></i>
								Let me in!
							</button>
						</div>
					</div>
				</div>

				<div class="ui vertical stripe segment">
					<div class="ui middle aligned stackable grid container">
						<div class="row">
							<div class="eight wide column">
								<h3 class="ui header">Server-Side</h3>
								<p>Located in the "/server/" folder, here becomes the NodeJS Express application.</p>
								<p>Use npm install to install all dependencies and npm start to run the app.</p>
								<h3 class="ui header">Client-Side</h3>
								<p>Located in the "/client/" folder, here is the React app. Built with the package "create-react-app" and working with Redux.</p>
								<p>Use npm install to install all dependencies and npm start to run the app.</p>
							</div>
							<div class="six wide right floated column">
								<img src="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png" class="ui large image" alt="atom" />
							</div>
						</div>
					</div>
				</div>

				<div className="ui vertical stripe quote segment">
					<div className="ui equal width stackable internally celled grid">
						<div className="center aligned row">
							<div className="column">
								<h3>"What a technology!"</h3>
								<p>React is really amazing :)</p>
							</div>
							<div className="column">
								<h3>"Why I haven't used NodeJS before?"</h3>
								<p>
									<i class="child icon"></i>
									<b>Favorite</b> choice for web apps
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="ui inverted vertical footer segment">
					<div class="ui container">
						<div class="ui stackable inverted divided equal height stackable grid">
							<div class="three wide column">
								<h4 class="ui inverted header">Test</h4>
								<div class="ui inverted link list">
									<a href="#" class="item">Test</a>
									<a href="#" class="item">Test</a>
									<a href="#" class="item">Test</a>
									<a href="#" class="item">Test</a>
								</div>
							</div>
							<div class="three wide column">
								<h4 class="ui inverted header">Test</h4>
								<div class="ui inverted link list">
									<a href="#" class="item">Test</a>
									<a href="#" class="item">Test</a>
									<a href="#" class="item">Test</a>
									<a href="#" class="item">Test</a>
								</div>
							</div>
							<div class="seven wide column">
								<h4 class="ui inverted header">Footer Header</h4>
								<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
