import React, { Component, PureComponent } from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import axios from 'axios';

import Nav from '../Nav';
import Footer from '../Footer';
import Social from '../SocialLinks';

const Loading = () => <div>Loading...</div>;

/*
 * Pages
*/
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import ContactMe from '../ContactMe';
import Home from '../Home/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projects: []
    };
  }

  // componentWillMount(){}
  componentDidMount() {
    axios('/my-profile')
      .then(res => {
        console.log(res.data);
        this.setState({
          profile: res.data.profile,
          projects: res.data.projects
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <main>
          <Switch>
            <Route
              path="/projects"
              exact
              render={props =>
                !this.state.projects.length ? (
                  <Loading />
                ) : (
                  <Projects {...props} projects={this.state.projects} />
                )
              }
            />
            <Route
              path="/about-me"
              exact
              render={props =>
                !this.state.profile ? (
                  <Loading />
                ) : (
                  <AboutMe {...props} profile={this.state.profile} />
                )
              }
            />
            <Route path="/contact-me" exact component={ContactMe} />
            <Route
              path="/"
              exact
              render={
                props => (
                  // !this.state.profile ? (
                  //   <Loading />
                  // ) : (
                  <Home {...props} profile={this.state.profile} />
                )
                // )
              }
            />
            <Route render={() => <div>404: No route found</div>} />
          </Switch>
        </main>
        <div className="desktop-social">
          <Social profile={this.state.profile} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
