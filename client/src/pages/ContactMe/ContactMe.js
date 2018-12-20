import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

/**
 * Components
 */
import Form from '@lino/components/Form';
import InputField from '@lino/components/Form/InputField';
import Textarea from '@lino/components/Form/Textarea';
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
					<Textarea name="description" label="Reason for Contact" />
					<button type="submit">here</button>
				</Form>
			</div>
		);
	}
}

export default ContactMe;
