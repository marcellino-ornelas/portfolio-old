import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import { Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';

ReactGA.initialize('UA-125057302-1');

// Component level styling
// import './styles/main.css';
const history = createHistory();

history.listen((location, action) => {
  console.log(location);
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);
