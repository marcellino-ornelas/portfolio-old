import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';

// @inject('userStore')
class Nav extends Component {
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
    const isAdmin = false;
    return (
      <header id="header">
        <div className="nav">
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">
                  MO
                </NavLink>
                <a
                  href="#"
                  className="button-collapse"
                  data-activates="mobile-demo"
                >
                  <i className="material-icons fa fa-bars" />
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <NavLink to="/"> Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects"> Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact-me"> Contact Me</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-me"> About Me</NavLink>
                  </li>
                  {isAdmin && (
                    <React.Fragment>
                      <li>
                        <NavLink to="/keystone"> Admin</NavLink>
                      </li>
                      <li>
                        <NavLink to="/keystone/signout"> Sign Out</NavLink>
                      </li>
                    </React.Fragment>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <ul id="mobile-demo" className="side-nav">
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects"> Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact-me"> Contact Me</NavLink>
          </li>
          <li>
            <NavLink to="/about-me"> About Me</NavLink>
          </li>
          {isAdmin && (
            <React.Fragment>
              <li>
                <NavLink to="/keystone"> Admin</NavLink>
              </li>
              <li>
                <NavLink to="/keystone/signout"> Sign Out</NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </header>
    );
  }
}

export default Nav;
