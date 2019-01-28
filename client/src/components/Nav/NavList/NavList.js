import React, { Component } from 'react';
import classnames from 'classnames';
import { matchPath, withRouter } from 'react-router';
import { observer, inject } from 'mobx-react';
import NavListItem from './NavListItem/';

const NavList = inject('sessionStore')(
	observer(({ navigation, sessionStore, className }) => {
		const classes = classnames('nav-list', className);

		const navList = navigation.map((navItem, i) => {
			// check to see if page should display active
			const isActive = matchPath(sessionStore.currentLocation, {
				exact: navItem.exact,
				path: navItem.link
			});

			return <NavListItem key={i} isActive={isActive} {...navItem} />;
		});

		return <ul className={classes}>{navList}</ul>;
	})
);

export default NavList;
