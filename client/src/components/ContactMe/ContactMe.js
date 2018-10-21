import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

var onlyWords = {
  validate: /^[a-zA-Z]+$/,
  error: 'Must only contain letters'
};

var validator = {
  email: {
    validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: 'Please use a valid email address'
  },
  firstName: onlyWords,
  lastName: onlyWords,
  description: {
    validate: /\w+/,
    error: 'Can only contain letters, numbers and underscore'
  }
};

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.contactFormOptions = ['email', 'firstName', 'lastName', 'description'];

    this.state = {
      errors: {}
    };

    this.contactFormOptions.forEach(field => {
      this.state[field] = '';
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    // console.log(e.target);

    const error = Object.assign(this.state.errors, {});

    delete error[e.target.name];

    this.setState({ [e.target.name]: e.target.value, error: error });
  }

  handleSubmit(e) {
    let formValid = true;
    let errors = {};

    var fields = this.contactFormOptions.reduce((acc, next) => {
      acc[next] = this.state[next];
      return acc;
    }, {});

    this.contactFormOptions.forEach(item => {
      if (!validator[item].validate.test(this.state[item])) {
        formValid = false;
        errors[item] = validator[item].error;
      }
    });

    if (!formValid) {
      e.preventDefault();
      this.setState({ errors });
      return;
    }

    // INPUT FIELDS
    console.log('all good');
  }

  render() {
    const classes = this.contactFormOptions.reduce((acc, next) => {
      acc[next] = classnames('validate', {
        error: this.state.errors[next],
        invalid: this.state.errors[next]
      });
      return acc;
    }, {});

    return (
      <div className="section container">
        <h2> Contact Me </h2>
        <form
          action="/contact"
          id="contact"
          method="POST"
          noValidate="noValidate"
          onSubmit={this.handleSubmit}
        >
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                type="text"
                id="first-name"
                className={classes.firstName}
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
              {this.state.errors.firstName ? (
                <div className="error">{this.state.errors.firstName}</div>
              ) : null}
              <label htmlFor="firstName"> First Name</label>
            </div>
            <div className="input-field col s12 m6">
              <input
                type="text"
                id="last-name"
                className={classes.lastName}
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
              {this.state.errors.lastName ? (
                <div className="error">{this.state.errors.lastName}</div>
              ) : (
                ''
              )}
              <label htmlFor="lastName"> Last Name</label>
            </div>
          </div>
          <div className="input-field col s12">
            <input
              type="email"
              id="email"
              className={classes.email}
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            {this.state.errors.email ? (
              <div className="error">{this.state.errors.email}</div>
            ) : (
              ''
            )}
            <label htmlFor="email"> Email</label>
          </div>
          <div className="input-field col s12">
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              className={'materialize-textarea ' + classes.description}
              value={this.state.description}
              onChange={this.handleInputChange}
            />
            {this.state.errors.description ? (
              <div className="error">{this.state.errors.description}</div>
            ) : (
              ''
            )}
            <label htmlFor="description">Description</label>
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Submit
            <i
              className="material-icons right fa fa-paper-plane"
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    );
  }
}

export default ContactMe;
/*
<div className="input-field col s12 m6">
  <input
    type="text"
    id="last-name"
    className={classes.lastName}
    name="lastName"
    value={this.state.lastName}
    onChange={this.handleInputChange}
  />
  {this.state.errors.lastName ? (
    <div className="error">{this.state.errors.lastName}</div>
  ) : (
    ''
  )}
  <label htmlFor="lastName"> Last Name</label>
</div>;
*/
