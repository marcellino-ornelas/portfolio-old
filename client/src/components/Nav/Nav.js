import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import NavList from './NavList/';
import classnames from 'classnames';
import { observer, inject } from 'mobx-react';

import { NAVIGATION, SIGNED_IN_NAVIGATION } from './navigation';

const OPEN_SIDE_BAR = {
	openSideBar: true
};
const CLOSE_SIDE_BAR = {
	openSideBar: false
};

@inject('sessionStore')
@observer
class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openSideBar: false
		};

		this.openSideBar = this.openSideBar.bind(this);
		this.closeSideBar = this.closeSideBar.bind(this);
	}

	openSideBar(e) {
		this.setState(OPEN_SIDE_BAR);

		document.body.classList.add('contain');
	}

	closeSideBar(e) {
		if (!e.target.classList.contains('nav-list')) {
			this.setState(CLOSE_SIDE_BAR);
			document.body.classList.remove('contain');
		}
	}

	// componentDidMount(){}

	render() {
		console.log('hellow');
		const isAdmin = false;
		const { sessionStore } = this.props;

		const sideBarClasses = classnames('side-nav', {
			open: this.state.openSideBar
		});

		let navList = NAVIGATION;

		if (sessionStore.signedIn) {
			navList = NAVIGATION.concat(SIGNED_IN_NAVIGATION);
		}

		return (
			<header id="header">
				<nav>
					<div className="mobile-trigger" onClick={this.openSideBar}>
						<i className="material-icons fa fa-bars" />
					</div>
					<NavList navigation={navList} />
				</nav>

				<div className={sideBarClasses} onClick={this.closeSideBar}>
					<NavList sidebar={true} navigation={navList} />
				</div>
			</header>
		);
	}
}

export default Nav;
