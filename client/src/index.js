import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

ReactGA.initialize('UA-125057302-1');

/*
 * Stores 
*/
import ProfileStore from './store/profile';
import ProjectStore from './store/projects';

const profileStore = new ProfileStore();
const projectStore = new ProjectStore();

// Component level styling
// import './styles/main.css';
const history = createHistory();

history.listen((location, action) => {
	ReactGA.set({ page: location.pathname });
	ReactGA.pageview(location.pathname);
});

ReactDOM.render(
	<Router history={history}>
		<Provider userStore={profileStore} projectStore={projectStore}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('app')
);
