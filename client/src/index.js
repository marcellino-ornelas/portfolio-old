import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

/*
 * Store 
*/

import ProfileStore from './store/profile';
import ProjectStore from './store/projects';

const profileStore = new ProfileStore();
const projectStore = new ProjectStore();

// Component level styling
// import './styles/main.css';

ReactDOM.render(
	<Router>
		<Provider userStore={profileStore} projectStore={projectStore}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('app')
);
