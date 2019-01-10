import React, { Component } from 'react';
import classnames from 'classnames';

const Icon = props => {
	const faClass = classnames('fas', `fa-${props.name}`, props.className);
	return <i className={faClass} />;
};

export default Icon;
