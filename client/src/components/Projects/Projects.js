import React, { Component } from 'react';
import Project from './Project/';

class Projects extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const projects = !this.props.projects.length ? (
      <div>Loading....</div>
    ) : (
      this.props.projects.map((project, index) => {
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
