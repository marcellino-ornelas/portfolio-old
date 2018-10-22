import React, { Component } from 'react';
import classnames from 'classnames';

import { Consumer } from '../Form.js';

const TextArea = props => {
  const label = props.label || props.name;

  return (
    <Consumer>
      {({ setInputValue, errors }) => {
        const error = errors[props.name];
        const inputFieldClasses = classnames('input-field', {
          error: error
        });
        return (
          <div className={inputFieldClasses}>
            <textarea name={props.name} onChange={setInputValue} />
            <label htmlFor="">{label}</label>
            {error ? <p className="error-message">{error}</p> : ''}
          </div>
        );
      }}
    </Consumer>
  );
};

export default TextArea;
