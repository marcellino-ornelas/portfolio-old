import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';

const Home = props => {
  const name = props.profile.name || {};
  return (
    <div className="home">
      <div className="parallax-container valign-wrapper">
        <div className="parallax">
          <img src="/images/computer.jpg" alt="" />
        </div>
        <section className="white-text caption">
          <h1 className="header">
            {name.first} {name.last}
          </h1>
          <h4>{props.profile.caption}</h4>
        </section>
      </div>
      <div className="section white">
        <div className="row container">
          <div className="valign-wrapper contact-me">
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
      {/*<div className="parallax-container">
        <div className="parallax">
          <img src="/images/coding.jpg" alt="" />
        </div>
      </div>*/}
    </div>
  );
};

export default Home;
