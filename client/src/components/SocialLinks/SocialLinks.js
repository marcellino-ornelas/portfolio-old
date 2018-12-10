import React, { Component } from 'react';
import { inject } from 'mobx-react';

const SocialLinks = inject('userStore')(props => {
  const { github, linkedIn, website } = props.userStore.profile;
  return (
    <div className="social fx">
      <a href={github} target="_blank">
        <i className="fa fa-lg fa-github" aria-hidden="true" />
      </a>
      <a href={linkedIn} target="_blank">
        <i className="fa fa-lg fa-linkedin-square" aria-hidden="true" />
      </a>
      <a href={website} target="_blank">
        <i className="fa fa-lg fa-envelope-o" aria-hidden="true" />
      </a>
    </div>
  );
});

export default SocialLinks;
