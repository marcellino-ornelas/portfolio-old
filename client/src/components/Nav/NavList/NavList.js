import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import classnames from 'classnames';

const NavList = props => {
  const classes = classnames('nav-list', props.className);
  return (
    <ul className={classes}>
      <li>
        <NavLink to="/" className="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/contact-me">Contact Me</NavLink>
      </li>
      <li>
        <NavLink to="/about-me">About Me</NavLink>
      </li>
      {/*isAdmin && (
        <React.Fragment>
          <li>
            <NavLink to="/keystone"> Admin</NavLink>
          </li>
          <li>
            <NavLink to="/keystone/signout"> Sign Out</NavLink>
          </li>
        </React.Fragment>
      )*/}
    </ul>
  );
};

export default NavList;
