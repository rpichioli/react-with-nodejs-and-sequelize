import React from 'react';
import ReactDOM from 'react-dom';
// Routing
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Redux
import { createStore, applyMiddleware } from 'redux';
// Redux Middlewares
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// Redux Provider for React
import { Provider } from 'react-redux';
// JSON Web Token
import jwt from 'jsonwebtoken';

// API that helps in caching assets and other files when the user is offline or on slow network
import registerServiceWorker from './registerServiceWorker';
// Root reducer to use in Redux Store
import rootReducer from './reducers/rootReducer';
// The application, high order component
import App from './components/App';
// Application routes as external component
import Routes from './routes/Routes';
// Style
import './style/index.css';

// Browser history
const history = createBrowserHistory();

// Redux store
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Routes />
			</App>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();

// For Arch Linux (if ENOSPC error) add this line to /etc/sysctl.d/99-sysctl.conf
// fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -
