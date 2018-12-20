import React, { Component, PureComponent } from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import axios from 'axios';
import { observer, inject } from 'mobx-react';

/*
 * Components 
*/

import Nav from '@lino/components/Nav';
import Footer from '@lino/components/Footer';
import Social from '@lino/components/SocialLinks';

/*
 * Pages
*/
import AboutMe from '@lino/pages/AboutMe';
import Projects from '@lino/pages/Projects';
import ContactMe from '@lino/pages/ContactMe';
import Home from '@lino/pages/Home';

@inject('userStore')
class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.userStore.fetchProfile();
	}

	render() {
		const store = this.props.userStore;
		return (
			<React.Fragment>
				<Nav />
				<main>
					<Switch>
						<Route path="/projects" exact component={Projects} />
						<Route path="/about-me" exact component={AboutMe} />
						<Route path="/contact-me" exact component={ContactMe} />
						<Route path="/" exact component={Home} />
						<Route render={() => <div>404: No route found</div>} />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
