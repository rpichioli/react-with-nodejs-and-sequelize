import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/home/HomePage';
import BandsPage from '../components/bands/BandsPage';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/bands" component={BandsPage} />
			</Switch>
		)
	}
}

export default Routes;
