import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './styled';

class AuthForm extends Component {
  static propTypes = {
    registerUser: PropTypes.func,
    payload: PropTypes.object
  }

  state = {
    email: '',
    username: '',
    password: ''
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.payload.token && this.props.payload.token) {
      const token = JSON.stringify({ ...this.props.payload });
      localStorage.setItem('token', token);
    }
  }

  handleInputChange = field => ({ currentTarget }) => {
    this.setState({ [field]: currentTarget.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type="text" placeholder="Enter username" onInput={this.handleInputChange('username')} />
        <Input type="text" placeholder="Enter email" onInput={this.handleInputChange('email')} />
        <Input type="password" placeholder="Enter password" onInput={this.handleInputChange('password')} />
        <Button type="submit">Finish</Button>
      </Form>
    );
  }
}

export default AuthForm;
