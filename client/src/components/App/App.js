import React, { Component, PureComponent } from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import axios from 'axios';
import { observer, inject } from 'mobx-react';

/*
 * Components 
*/

import Nav from '../Nav';
import Footer from '../Footer';

const Loading = () => <div>Loading...</div>;

/*
 * Pages
*/
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import ContactMe from '../ContactMe';
import Home from '../Home/';

@inject('userStore')
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      projects: []
    };
  }

  componentDidMount() {
    // axios('/my-profile')
    //   .then(res => {
    //     console.log(res.data);
    //     this.setState({
    //       profile: res.data.profile,
    //       projects: res.data.projects
    //     });
    //   })
    //   .catch(err => console.log(err));
    const store = this.props.userStore;
    store.fetchProfile();
  }

  render() {
    const store = this.props.userStore;
    return (
      <React.Fragment>
        <Nav />
        <main>
          <Switch>
            <Route
              path="/projects"
              exact
              render={props =>
                !store.projects.length ? (
                  <Loading />
                ) : (
                  <Projects {...props} /*projects={store.projects}*/ />
                )
              }
            />
            <Route
              path="/about-me"
              exact
              render={props =>
                !store.profile ? (
                  <Loading />
                ) : (
                  <AboutMe {...props} profile={store.profile} />
                )
              }
            />
            <Route path="/contact-me" exact component={ContactMe} />
            <Route
              path="/"
              exact
              render={props => <Home {...props} profile={store.profile} />}
            />
            <Route render={() => <div>404: No route found</div>} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
