import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './styled';

class AuthForm extends Component {
  static propTypes = {
    registerUser: PropTypes.func
  }

  state = {
    email: '',
    password: ''
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleInputChange = field => ({ currentTarget }) => {
    this.setState({ [field]: currentTarget.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const formValues = Object.entries(this.state).map(([key, value]) => ({ [key]: value }));
    this.props.registerUser(formValues);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type="text" placeholder="Enter email" onInput={this.handleInputChange('email')} />
        <Input type="password" placeholder="Enter password" onInput={this.handleInputChange('password')} />
        <Button type="submit">Finish</Button>
      </Form>
    );
  }
}

export default AuthForm;
