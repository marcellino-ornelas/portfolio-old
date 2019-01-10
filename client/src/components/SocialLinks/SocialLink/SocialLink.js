import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from '@lino/components/Icon';

const SocialLink = props => {
	return (
		<li>
			<a href={props.to}>
				<Icon name={props.icon} />
			</a>
		</li>
	);
};

export default SocialLink;
