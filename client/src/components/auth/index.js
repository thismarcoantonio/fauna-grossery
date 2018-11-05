import React, { Component } from 'react';
import { Background, Card, CardTitle, CardSubtitle, SmallContent, SmallText, SmallLink } from './styled';
import AuthForm from '../../containers/auth-form';

class Auth extends Component {
  state = {
    haveAccount: false
  }

  render() {
    return (
      <Background>
        <Card>
          <CardTitle>Fauna</CardTitle>
          <CardSubtitle>{this.state.haveAccount ? 'Log in' : 'Sign up'}</CardSubtitle>

          <AuthForm />

          <SmallContent>
            <SmallText>Already have an account?</SmallText>
            <SmallLink>Log in Now!</SmallLink>
          </SmallContent>
        </Card>
      </Background>
    );
  }
}

export default Auth;
