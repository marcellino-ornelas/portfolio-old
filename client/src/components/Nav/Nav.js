import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import NavList from './NavList/';
import classnames from 'classnames';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: false
    };

    this.openSideBar = this.openSideBar.bind(this);
    this.closeSideBar = this.closeSideBar.bind(this);
  }

  openSideBar(e) {
    this.setState({
      openSideBar: true
    });

    document.body.classList.add('contain');
  }

  closeSideBar(e) {
    this.setState({
      openSideBar: false
    });

    document.body.classList.remove('contain');
  }

  // componentDidMount(){}

  render() {
    const isAdmin = false;

    const sideBarClasses = classnames('side-nav', {
      open: this.state.openSideBar
    });

    return (
      <header id="header">
        <nav>
          <div className="mobile-trigger" onClick={this.openSideBar}>
            <i className="material-icons fa fa-bars" />
          </div>
          <NavList />
        </nav>

        <div className={sideBarClasses} onClick={this.closeSideBar}>
          <NavList />
        </div>
      </header>
    );
  }
}

export default Nav;
