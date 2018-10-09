import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import Background from '../Background/';

const Home = props => {
  const name = props.profile.name || {};
  return (
    <div className="root home">
      <Background img="/images/computer.jpg">
        <h1 className="header">
          {name.first} {name.last}
        </h1>
        <h4>{props.profile.caption}</h4>
      </Background>
      <div className="section">
        <div className="container">
          <div className="valign contact-me">
            <div className="contact-me-intro">
              <h3> Want your own website?</h3>
              <p className="flow-text">
                Get your dreams to come to life and contact me today for your
                free quote
              </p>
            </div>
            <div className="center-align container">
              <NavLink
                to="/contact-us"
                className="btn waves-effect waves-light"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
