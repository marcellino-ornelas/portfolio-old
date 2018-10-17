import React, { Component } from 'react';
import classnames from 'classnames';
import { matchPath } from 'react-router';

import NavListItem from './NavListItem/';

const NAV_LIST = [
  {
    link: '/',
    name: 'Home',
    icon: 'home',
    exact: true
  },
  {
    link: '/projects',
    name: 'Projects',
    icon: 'folder-open',
    exact: false
  },
  {
    link: '/contact-me',
    name: 'Contact Me',
    icon: 'phone',
    exact: true
  },
  {
    link: '/about-me',
    name: 'Profile',
    icon: 'user',
    exact: true
  }
];

{
  /*isAdmin && (
        <React.Fragment>
          <li>
            <NavLink to="/keystone"><i className="fa fa-home" />Admin</NavLink>
          </li>
          <li>
            <NavLink to="/keystone/signout"><i className="fa fa-home" />Sign Out</NavLink>
          </li>
        </React.Fragment>
      )*/
}

const NavList = props => {
  const classes = classnames('nav-list', props.className);
  const navList = NAV_LIST.map((navItem, i) => {
    // check to see if page should display active
    const isActive = matchPath(window.location.pathname, {
      exact: navItem.exact,
      path: navItem.link
    });

    return (
      <NavListItem
        key={i}
        name={navItem.name}
        icon={navItem.icon}
        link={navItem.link}
        isActive={isActive}
      />
    );
  });
  return <ul className={classes}>{navList}</ul>;
};

export default NavList;
