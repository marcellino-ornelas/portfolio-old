import React, { Component } from 'react';
import Project from './Project/';
import { observer, inject } from 'mobx-react';

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
					<div id="projects" className="container">
						<h2> Projects </h2>
						<div className="row">{projects}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
