import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';

/*
 * Store 
*/

import UserStore from './components/App/UserStore.js';

const userStore = new UserStore();

// Component level styling
// import './styles/main.css';

ReactDOM.render(
  <Router>
    <Provider userStore={userStore}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('app')
);
