import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import SocialLinks from '../SocialLinks/';
import { observer, inject } from 'mobx-react';

@inject('userStore')
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
    const store = this.props.userStore;

    const capitalize = s => s[0].toUpperCase() + s.slice(1);
    const fullName = [store.profile.name.first, store.profile.name.last]
      .map(capitalize)
      .join(' ');
    return (
      <div className="about-me row">
        <div className="col s12 m12 l3">
          <div className="center-align section">
            <img
              src="/images/portrait.jpg"
              alt=""
              className="profile-pic circle"
            />
            <h6 className="profile-name">{fullName}</h6>
          </div>
          <ul className="collection">
            <a href="/Resume.pdf" className="collection-item" target="_blank">
              Resume
            </a>
            <a href="/Resume.pdf" className="collection-item" download>
              Download Resume
            </a>
            <NavLink to="/contact-me" className="collection-item">
              Contact Me
            </NavLink>
          </ul>
          <div className="center-align">
            <SocialLinks profile={store.profile} />
          </div>
        </div>
        <div className="col s12 m12 l9">
          <div className="row">
            <div className="fx header">
              <h3>{fullName}</h3>
              {/*<SocialLinks profile={this.props.profile} />*/}
            </div>
          </div>
          <div className="divider" />
          <div className="row">
            <div className="s12">
              <p className="flow-text">{store.profile.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
