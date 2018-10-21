import React, { Component, Provider } from 'react';
import classnames from 'classnames';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.setInputValue = this.setInputValue.bind(this);
  }

  // componentDidMount(){}

  setInputValue(e) {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value;
    })
  }

  render() {
    return (
      <form action="" onSubmit={this.props.onSubmit}>
        <Provider value={{ setInputValue: this.setInputValue }}>
          {this.props.children}
        </Provider>
      </form>
    );
  }
}

export default Form;
