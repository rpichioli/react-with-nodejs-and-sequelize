import React, { Component } from 'react';
import Menu from './Menu';

class App extends Component {
	render() {
		return (
			<div>
				<Menu></Menu>

				<div className="main">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
