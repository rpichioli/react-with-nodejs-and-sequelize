import React from 'react';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div className="ui inverted vertical masthead aligned segment">
						<div className="ui container">
							<h1 className="ui inverted header">Welcome!</h1>
							<p>This is a simple project made with React + Redux, Sequelize and Passport.</p>
							<p>Check the project code and documentation in the Github repository just clicking the button below:</p>
							<a className="ui github button primary" href="https://github.com/rpichioli/react-with-sequelize-and-passport" target="_blank">
								<i className="github icon"></i>
								Let me in!
							</a>
					</div>
				</div>

				<div className="ui vertical stripe segment">
					<div className="ui middle aligned stackable grid container">
						<div className="row">
							<div className="wide column">
								{/* eight */}
								<h3 className="ui header">Server-Side</h3>
								<p>Located in the "/server/" folder, here becomes the NodeJS Express application.</p>
								<p>Use npm install to install all dependencies and npm start to run the app.</p>
								<h3 className="ui header">Client-Side</h3>
								<p>Located in the "/client/" folder, here is the React app. Built with the package "create-react-app" and working with Redux.</p>
								<p>Use npm install to install all dependencies and npm start to run the app.</p>
							</div>
							{/* <div className="six wide right floated column">
								<img src="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png" className="ui large image" alt="atom" />
							</div> */}
						</div>
					</div>
				</div>

				{/*<div className="ui vertical stripe quote segment">
					<div className="ui equal width stackable internally celled grid">
						<div className="center aligned row">
							<div className="column">
								<h3>"What a technology!"</h3>
								<p>React is really amazing :)</p>
							</div>
							<div className="column">
								<h3>"Why I haven't used NodeJS before?"</h3>
								<p>
									<i className="child icon"></i>
									<b>Favorite</b> choice for web apps
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="ui inverted vertical footer segment">
					<div className="ui container">
						<div className="ui stackable inverted divided equal height stackable grid">
							<div className="three wide column">
								<h4 className="ui inverted header">Test</h4>
								<div className="ui inverted link list">
									<a href="#" className="item">Test</a>
									<a href="#" className="item">Test</a>
									<a href="#" className="item">Test</a>
									<a href="#" className="item">Test</a>
								</div>
							</div>
							<div className="three wide column">
								<h4 className="ui inverted header">Test</h4>
								<div className="ui inverted link list">
									<a href="#" className="item">Test</a>
									<a href="#" className="item">Test</a>
									<a href="#" className="item">Test</a>
									<a href="#" className="item">Test</a>
								</div>
							</div>
							<div className="seven wide column">
								<h4 className="ui inverted header">Footer Header</h4>
								<p>Extra space for a call to action inside the footer that could help re-engage users.</p>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		);
	}
}

export default HomePage;
