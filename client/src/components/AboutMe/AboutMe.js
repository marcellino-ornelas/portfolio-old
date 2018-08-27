import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import SocialLinks from '../SocialLinks/';

class AboutMe extends Component {
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
    return (
      <div>
        <div className="about-us section">
          <div className="row">
            <div className="col s12 m12 l3">
              <div className="center-align">
                <img src="/images/portrait.jpg" alt="" className="full" />
              </div>
              <ul className="collection">
                <a
                  href="/Resume.pdf"
                  className="collection-item"
                  target="_blank"
                >
                  Resume
                </a>
                <a href="/Resume.pdf" className="collection-item" download>
                  Download Resume
                </a>
                <NavLink to="/contact-me" className="collection-item">
                  Contact Me
                </NavLink>
              </ul>
            </div>
            <div className="col s12 m12 l9">
              <div className="row">
                <div className="fx header">
                  <h3>
                    {this.props.profile.name.first}{' '}
                    {this.props.profile.name.last}
                  </h3>
                  <SocialLinks profile={this.props.profile} />
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="row">
              <div className="s12">
                <p className="flow-text">
                  I am a highly efficient and hardworking with a “can do”
                  attitude Full Stack Web Developer that has grasped a deep
                  understanding of web development. Possessing a positive team
                  spirit, deadline orientated and has the ability to produce
                  outstanding results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
