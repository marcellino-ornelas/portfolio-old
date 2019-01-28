import React, { Component } from 'react';
import classnames from 'classnames';

import Icon from '@lino/components/Icon';

const Pillar = props => {
	const pillarClasses = classnames('pillar', props.className);

	return (
		<div className={pillarClasses}>
			<div className="">
				<div className="pillar__icon">
					<Icon name={props.icon} className="fa-3x" />
				</div>
				<h4 className="pillar__title">{props.title}</h4>
				<p className="pillar__description">{props.description}</p>
			</div>
		</div>
	);
};

export default Pillar;
