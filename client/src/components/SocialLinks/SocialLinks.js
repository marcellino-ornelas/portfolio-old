import React, { Component } from 'react';
import classnames from 'classnames';
import SocialLink from './SocialLink/';
import { inject, observer } from 'mobx-react';

class Social {
	constructor(icon, to) {
		this.icon = icon;
		this.to = to;
	}
}

const SocialLinks = inject('userStore')(
	observer(props => {
		const { github, linkedIn, website, email } = props.userStore.profile;

		const socialLinks = [
			new Social('github', github),
			new Social('linkedin-square', linkedIn),
			new Social('envelope-o', 'mailto:' + email)
			// new Social('global', website)
		];
		return (
			<ul className="social-links">
				{socialLinks.map((link, i) => {
					return <SocialLink to={link.to} icon={link.icon} key={i} />;
				})}
			</ul>
		);
	})
);

export default SocialLinks;
