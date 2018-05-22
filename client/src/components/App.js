import React, { Component } from 'react';
import Menu from './Menu';

class App extends Component {
	render() {
		return (
			<div>
				<Menu></Menu>

				{/* .main from index.css file */}
				<div className="ui container text main">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
