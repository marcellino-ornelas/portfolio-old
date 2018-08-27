import React, { Component } from 'react';

const SocialLinks = props => {
  return (
    <div className="social fx">
      <a href={props.profile.github} target="_blank">
        <i className="fa fa-lg fa-github" aria-hidden="true" />
      </a>
      <a href={props.profile.linkedIn} target="_blank">
        <i className="fa fa-lg fa-linkedin-square" aria-hidden="true" />
      </a>
      <a href={props.profile.website} target="_blank">
        <i className="fa fa-lg fa-envelope-o" aria-hidden="true" />
      </a>
    </div>
  );
};

export default SocialLinks;
