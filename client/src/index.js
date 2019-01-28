import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from '@lino/components/App/';
import ProfileStore from './store/profile';
import ProjectStore from './store/projects';
import SessionStore from './store/session';

ReactGA.initialize('UA-125057302-1');

/*
 * Mobx stores
 */
const stores = {
	userStore: new ProfileStore(),
	projectStore: new ProjectStore(),
	sessionStore: new SessionStore()
};

/*
 * React router history object
 */
const history = createHistory();

history.listen((location, action) => {
	/*
	 * Google analitics
	 */

	const isSamePath = stores.sessionStore.currentLocation === location.pathname;

	if (!isSamePath) {
		stores.sessionStore.currentLocation = location.pathname;
	}
	ReactGA.set({ page: location.pathname });
	ReactGA.pageview(location.pathname);
});

ReactDOM.render(
	<Router history={history}>
		<Provider {...stores}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('app')
);
