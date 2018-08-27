import React, { Component, PureComponent } from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';

import Nav from '../Nav';
import Footer from '../Footer';

/*
 * Pages
*/
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import ContactMe from '../ContactMe';

const routes = [
  {
    name: 'Home',
    to: '/',
    exact: true,
    component: () => <div>Home</div>
  },
  {
    name: 'About Me',
    to: '/about-me',
    exact: true,
    component: () => <div>About Me</div>
  },
  {
    name: 'Projects',
    to: '/projects',
    exact: true,
    component: () => <div>Projects</div>
  },
  {
    name: 'Contact Me',
    to: '/contact-me',
    exact: true,
    component: () => <div>Contact Me</div>
  }
];

class App extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  render() {
    const navLinks = routes.map(route => (
      <NavLink to={route.to} key={route.to}>
        {route.name}
      </NavLink>
    ));

    return (
      <div>
        <Nav />
        {/*navLinks*/}
        <main>
          <Switch>
            <Route path="/projects" exact component={Projects} />
            <Route path="/about-me" exact component={AboutMe} />
            <Route path="/contact-me" exact component={ContactMe} />
            <Route path="/" exact component={() => <div>Home</div>} />
            <Route render={() => <div>404: No route found</div>} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
