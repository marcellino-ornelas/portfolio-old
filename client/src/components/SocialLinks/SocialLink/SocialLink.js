import React, { Component } from 'react';
import classnames from 'classnames';

const SocialLink = props => {
  const faClass = classnames('fa', 'fa-' + props.icon);
  return (
    <li>
      <a href={props.to}>
        <i className={faClass} />
      </a>
    </li>
  );
};

export default SocialLink;
