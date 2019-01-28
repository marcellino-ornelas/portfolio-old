import React, { Component } from 'react';
import classnames from 'classnames';

const Background = props => {
	const bgContentClasses = classnames('bg-content', {
		valign: props.center
	});

	const bgClasses = classnames('bg', props.className);

	return (
		<div className={bgClasses}>
			<img className="bg-img" src={props.img} alt="" />
			<section className={bgContentClasses}>{props.children}</section>
		</div>
	);
};

Background.defaultProps = {
	center: true
};

export default Background;
