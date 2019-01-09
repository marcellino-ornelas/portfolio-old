import React, { Component } from 'react';
import classnames from 'classnames';

const READ_MORE_MESSAGE = 'read more...';

const Truncate = props => {
	let text = props.text || '';
	const shouldTruncate = text.length >= props.breakAt;

	const TruncateClasses = classnames(props.className, {
		'truncate-text': shouldTruncate
	});

	if (shouldTruncate) {
		text = text
			.slice(0, props.breakAt)
			.split(' ')
			.slice(0, -1)
			.join(' ');
	}

	return (
		<p className={TruncateClasses}>
			{text}
			{shouldTruncate && (
				<span className="read-more"> {READ_MORE_MESSAGE}</span>
			)}
		</p>
	);
};

Truncate.defaultProps = {
	breakAt: 75
};

export default Truncate;
