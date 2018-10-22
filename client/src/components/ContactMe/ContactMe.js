import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import Form from '../Form/';
import InputField from '../Form/InputField/';
import Textarea from '../Form/Textarea/';

var onlyWords = {
  validate: /^[a-zA-Z]{2,}$/,
  error: 'Must only contain letters and at least 2 characters',
  required: true
};

var validator = {
  email: {
    validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: 'Please use a valid email address',
    required: true
  },
  firstName: onlyWords,
  lastName: onlyWords,
  description: {
    validate: /\w+/,
    error: 'Can only contain letters, numbers and underscore',
    required: true
  }
};

class ContactMe extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // INPUT FIELDS
    console.log('all good');
  }

  render() {
    return (
      <div className="section container">
        <h2> Contact Me </h2>
        <Form onSubmit={data => console.log(data)} validate={validator}>
          <InputField type="text" name="firstName" label="First Name" />
          <InputField type="text" name="lastName" label="Last Name" />
          <InputField type="text" name="email" label="Email" />
          <Textarea name="description" label="Reason for Contact" />
          <button type="submit">here</button>
        </Form>
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
*/
