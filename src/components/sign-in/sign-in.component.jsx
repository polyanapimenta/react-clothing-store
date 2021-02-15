import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      alert('Please enter your credentials');
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.state = {email: '', password: ''}
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            label="email"
            value={this.state.email} 
            handleChange={this.handleChange}
            autoComplete="username"
            required 
          />
          <FormInput 
            type="password" 
            name="password"
            label="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            autoComplete="current-password"
            required 
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;