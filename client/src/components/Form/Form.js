import React, { Component } from 'react';

export const { Provider, Consumer } = React.createContext();

const isFunc = fn => typeof fn === 'function';

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
		const isEmpty = !value;
		const noValidation = !this.props.validate || !this.props.validate[name];
		if (noValidation || isEmpty) {
			return true;
		}

		const inputValidator = this.props.validate[name];

		let validate = inputValidator.validate;

		//turn regExp to function
		if (!isFunc(validate)) {
			validate = input => inputValidator.validate.test(input);
		}

		const isValidInput = validate(value);

		return isValidInput;
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

		const inputNames = Object.keys(this.props.validate);
		const errors = this.newErrors();

		const isValid = inputNames.reduce((acc, nextItem) => {
			let inputValue = this.state[nextItem];

			if (this.props.validate[nextItem].required && !inputValue) {
				inputValue = '';
			}

			const isValid = this.validate(nextItem, inputValue);

			// set errors if not valid
			if (!isValid) {
				errors[nextItem] = this.props.validate[nextItem].error;
			}

			return !acc ? acc : isValid;
		}, true /* isValid defaults to true */);

		// if not valid display errors
		if (!isValid) {
			this.setState({
				errors
			});
		}

		return isValid;
	}

	/*
   * New Errors
   * 
   * Make a copy of the errors state object
  */
	newErrors() {
		return Object.assign(this.state.errors, {});
	}

	/*
   * Set Error
   *
   * Return a new error object. Deletes error off error object if it is valid or sets it if its not
  */
	setError(name, isValid) {
		const errors = this.newErrors();
		const inputValidator = this.props.validate[name];

		errors[name] = isValid ? null : inputValidator.error;

		return errors;
	}

	setInputValue(e) {
		const { name, value } = e.target;

		const isValid = this.validate(name, value);

		this.setState({
			[name]: value,
			errors: this.setError(name, isValid)
		});
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
