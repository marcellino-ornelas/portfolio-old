import React, { Component } from 'react';
// import joi from 'joi';

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.contactFormOptions = ['email', 'firstName', 'lastName', 'description'];

    this.state = {};

    this.contactFormOptions.forEach(field => {
      this.state[field] = '';
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    console.log(e.target);

    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');

    var fields = this.contactFormOptions.reduce((acc, next) => {
      acc[next] = this.state[next];
      return acc;
    }, {});

    // INPUT FIELDS
    console.log(fields);
  }

  render() {
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
                className="validate"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
              <label htmlFor="firstName"> First Name</label>
            </div>
            <div className="input-field col s12 m6">
              <input
                type="text"
                id="last-name"
                className="validate"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
              <label htmlFor="lastName"> Last Name</label>
            </div>
          </div>
          <div className="input-field col s12">
            <input
              type="email"
              id="email"
              className="validate"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <label htmlFor="email"> Email</label>
          </div>
          <div className="input-field col s12">
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              className="materialize-textarea validate"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
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
