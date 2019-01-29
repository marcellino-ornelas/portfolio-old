import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

/**
 * Components
 */
import { Form, InputField, TextArea } from '@lino/components/Form/';
import { validate } from './validator';

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
				<Form onSubmit={data => console.log(data)} validate={validate}>
					<InputField type="text" name="firstName" label="First Name" />
					<InputField type="text" name="lastName" label="Last Name" />
					<InputField type="text" name="email" label="Email" />
					<TextArea name="description" label="Reason for Contact" />
					<button className="btn btn-secondary" type="submit">
						Send contact request
					</button>
				</Form>
			</div>
		);
	}
}

export default ContactMe;
