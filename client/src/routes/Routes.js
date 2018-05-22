import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home/Home';
import LogIn from '../components/Authentication/LogIn';
import SignUp from '../components/User/SignUp';
import BandList from '../components/Band/BandList';
import BandForm from '../components/Band/BandForm';
import AlbumList from '../components/Band/Album/AlbumList';
import AlbumForm from '../components/Band/Album/AlbumForm';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/bands" component={BandList} />
				<Route path="/bands/new" component={BandForm} />
				<Route exact path="/band/:id" component={BandForm} />
				<Route exact path="/band/:id/albums/" component={AlbumList} />
				<Route exact path="/band/:id/album/new" component={AlbumForm} />
				<Route exact path="/band/:id/album/:album_id" component={AlbumForm} />
				<Route path="/log-in" component={LogIn} />
				<Route path="/sign-up" component={SignUp} />
			</Switch>
		)
	}
}

export default Routes;
