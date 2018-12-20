import React, { Component } from 'react';
import classnames from 'classnames';
import { Link as NavLink } from 'react-router-dom';

const NavListItem = props => {
	const iconClasses = classnames('fa', 'fa-' + props.icon);
	const navItemClass = classnames('nav-list-item', {
		active: props.isActive
	});

	return (
		<li className={navItemClass}>
			<NavLink to={props.link} className="valign">
				<i className={iconClasses} />
				{props.name}
			</NavLink>
		</li>
	);
};

export default NavListItem;
