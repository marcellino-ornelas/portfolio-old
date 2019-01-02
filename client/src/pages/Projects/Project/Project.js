import React, { Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';

import Truncate from '@lino/components/Truncate';

const DEFAULT_PICTURE_URL =
	'http://www.artconnect.com/assets/default/default_project_list-7c7cb913cb130a76c51f21509f73bbb6.png';

const Project = props => {
	const project = props.project;
	const picture = (project.picture || { url: DEFAULT_PICTURE_URL }).url;
	const preview = project.website || project.github;

	const date = project.createAt
		? moment(project.createAt).format('MMMM Do YYYY')
		: '';

	return (
		<div className="projects-item">
			<div className="projects-item__image">
				<img src={picture} alt="" />
			</div>
			<div className="projects-item__details">
				<h3 className="projects-item__name">{project.name}</h3>
				<p className="projects-item__created">Created: {date}</p>
				<Truncate
					className="projects-item__description"
					text={project.description}
				/>
			</div>
		</div>
	);
};

export default Project;

/*
<div className="col s12 m6 l4">
  <div className="card">
    <div className="card-image">
      <img src={picture} alt="" />
      <span className="card-title"> {props.project.name} </span>
      <a
        href={preview}
        className="btn-floating btn-large halfway-fab waves-effect waves-light red"
        target="_blank"
      >
        <i
          className="material-icons fa fa-search-plus"
          aria-hidden="true"
        />
      </a>
    </div>
    <div className="card-content truncate-text">
      <p> {props.project.description} </p>
    </div>
  </div>
</div>
*/
