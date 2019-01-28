import React, { Component } from 'react';

export const { Provider, Consumer } = React.createContext();

const isFunc = fn => typeof fn === 'function';
const nonValid = validatedField => !validatedField.isValid;

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {}
		};

		this.setInputValue = this.setInputValue.bind(this);
		this.getValue = this.getValue.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	getValue(name) {
		return this.state[name] || '';
	}

	/*
	 * Validate
	 *
	 * validate a input by name and value
	 */
	validate(name, value) {
		const field = this.props.validate[name];
		let validate = field.validate;

		//turn regExp to function
		if (!isFunc(validate)) {
			validate = input => field.validate.test(input);
		}

		const result = { isValid: false, error: '', name };

		switch (true) {
			case field.required && !value:
				result.error = 'This field is required';
				break;
			case !validate(value):
				result.error = field.error;
				break;
			default:
				result.isValid = true;
		}

		return result;
	}

	/*
	 * Validate All
	 *
	 * validate all inputs that are specifed in the valiate prop
	 */
	validateAll() {
		if (!this.props.validate) {
			return true;
		}

		const fieldNames = Object.keys(this.props.validate);

		// Validate all fields
		const validatedFields = fieldNames.map(fieldName => {
			let fieldValue = this.state[fieldName];
			return this.validate(fieldName, fieldValue);
		});

		// Find first entry with isValid to false.
		// Has to have all fields valid to submit
		const isAllValid = !validatedFields.find(nonValid);

		// Set all errors
		if (!isAllValid) {
			const onlyNonValidFields = validatedFields.filter(nonValid);
			this.setState({ errors: this.newErrors(onlyNonValidFields) });
		}

		return isAllValid;
	}

	/*
	 * New Errors
	 *
	 * Make a copy of the errors state object
	 */
	newErrors(validatedFields = []) {
		// turn argument into array
		if (!!validatedFields && !Array.isArray(validatedFields)) {
			validatedFields = [validatedFields];
		}

		const newErrors = { ...this.state.errors };

		validatedFields.forEach(({ name, error }) => {
			newErrors[name] = error;
		});

		return newErrors;
	}

	setInputValue(e) {
		const { name, value } = e.target;
		const newState = { [name]: value, errors: this.newErrors() };

		const validatedField = this.validate(name, value);

		if (!validatedField.isValid) {
			newState.errors[name] = validatedField.error;
		} else {
			newState.errors[name] = null;
		}

		this.setState(newState);
	}

	onSubmit(e) {
		e.preventDefault();

		if (this.validateAll()) {
			return this.props.onSubmit(this.state);
		}

		console.log('bad');
	}

	render() {
		return (
			<form action="" onSubmit={this.onSubmit}>
				<Provider
					value={{
						setInputValue: this.setInputValue,
						errors: this.state.errors,
						getValue: this.getValue
					}}
				>
					{this.props.children}
				</Provider>
			</form>
		);
	}
}

export default Form;
