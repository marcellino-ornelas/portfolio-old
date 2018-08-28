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

/*each project in projects
  .col.s12.m6.l4: .card
    .card-image
      img(src=project.pictureURL)
      span.card-title= project.name
      a.btn-floating.btn-large.halfway-fab.waves-effect.waves-light.red(
        href=project.preview
        target='_blank'
      )
        i.material-icons.fa.fa-search-plus(aria-hidden="true")
    .card-content.truncate-text
      p= project.description
else
  h2 No projects at this time*/

export default Projects;
