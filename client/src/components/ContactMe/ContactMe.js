import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import Form from '../Form/';
import InputField from '../Form/InputField/';
import Textarea from '../Form/Textarea/';

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
