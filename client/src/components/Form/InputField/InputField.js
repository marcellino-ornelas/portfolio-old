import React, { Component } from 'react';
import classnames from 'classnames';

import { Consumer } from '../Form';

const DEFAULT_INPUT_TYPE = 'text';

class InputField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			focused: false
		};

		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

	onFocus() {
		this.setState({ focused: true });
	}

	onBlur() {
		this.setState({ focused: false });
	}

	render() {
		const label = this.props.label || this.props.name;
		const { name, type = DEFAULT_INPUT_TYPE } = this.props;

		return (
			<Consumer>
				{({ setInputValue, errors, getValue }) => {
					const error = errors[name];
					const value = getValue(name);

					const inputFieldClasses = classnames('input-field', {
						error: error
					});

					const labelClasses = classnames({
						active: this.state.focused || !!value
					});

					return (
						<div className={inputFieldClasses}>
							<input
								type={type}
								name={name}
								value={value}
								onChange={setInputValue}
								onFocus={this.onFocus}
								onBlur={this.onBlur}
							/>
							<label className={labelClasses}>{label}</label>
							{error ? <p className="error-message">{error}</p> : ''}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default InputField;
