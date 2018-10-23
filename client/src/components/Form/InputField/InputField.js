import React, { Component } from 'react';
import classnames from 'classnames';

import { Consumer } from '../Form.js';

const DEFAULT_INPUT_TYPE = 'text';

const InputField = props => {
  const type = props.type || DEFAULT_INPUT_TYPE;
  const label = props.label || props.name;

  return (
    <Consumer>
      {({ setInputValue, errors, getValue }) => {
        const error = errors[props.name];
        const value = getValue(props.name);

        const inputFieldClasses = classnames('input-field', {
          error: error
        });

        const labelClasses = classnames({
          active: value
        });

        return (
          <div className={inputFieldClasses}>
            <input
              type={type}
              name={props.name}
              value={value}
              onChange={setInputValue}
            />
            <label className={labelClasses}>{label}</label>
            {error ? <p className="error-message">{error}</p> : ''}
          </div>
        );
      }}
    </Consumer>
  );
};

export default InputField;
