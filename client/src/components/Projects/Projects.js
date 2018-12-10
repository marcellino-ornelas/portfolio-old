import React, { Component } from 'react';
import Project from './Project/';
import { observer, inject } from 'mobx-react';

@inject('userStore')
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount(){}

  render() {
    const store = this.props.userStore;
    const projects = !store.projects.length ? (
      <div>Loading....</div>
    ) : (
      store.projects.map((project, index) => {
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
