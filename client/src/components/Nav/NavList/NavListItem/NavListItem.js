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
			{!props.isLink ? (
				<NavLink to={props.link} className="valign">
					<i className={iconClasses} />
					{props.name}
				</NavLink>
			) : (
				<a href={props.link} className="valign">
					<i className={iconClasses} />
					{props.name}
				</a>
			)}
		</li>
	);
};

export default NavListItem;
