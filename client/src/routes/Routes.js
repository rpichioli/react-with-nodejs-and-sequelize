import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/home/HomePage';
import BandsPage from '../components/bands/BandsPage';
import SignInPage from '../components/auth/SignInPage';
import SignUpPage from '../components/auth/SignUpPage';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/bands" component={BandsPage} />
				<Route path="/sign-in" component={SignInPage} />
				<Route path="/sign-up" component={SignUpPage} />
			</Switch>
		)
	}
}

export default Routes;
