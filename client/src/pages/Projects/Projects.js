import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

/**
 * Components
 */
import Project from './Project/';

@inject('projectStore')
@observer
class Projects extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.projectStore.fetchProjects();
	}

	render() {
		const projectStore = this.props.projectStore;
		const projects = projectStore.isEmpty() ? (
			<div>Loading....</div>
		) : (
			projectStore.projects.map((project, index) => {
				return <Project project={project} key={index} />;
			})
		);

		return (
			<div>
				<div className="section">
					<h2> Projects </h2>
					<div id="projects" className="container">
						{projects}
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
