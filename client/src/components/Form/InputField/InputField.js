import React, { Component, Consumer } from 'react';
import classnames from 'classnames';


const DEFAULT_INPUT_TYPE = 'text';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount(){}

  render() {
    const type = this.props.type || DEFAULT_INPUT_TYPE;

    return (
      <Consumer>
        {({ setInputValue }) => (
          <div class="input-field">
            <input type={type} name={this.props.name} onChange={ setInputValue }/>
            <label htmlFor="">{this.props.label}</label>
          </div>;
        )}
      </Consumer>
    );
  }
}

export default InputField;
