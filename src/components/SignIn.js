import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import { InputPassword, InputEmail, Button, PASSWORD, EMAIL } from './validations';

const SignIn = () => {
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  return (
    <div>
      <h2>Sign in</h2>
      <form>
        <p>
          <InputEmail
            type="email"
            placeholder="Email Address*"
            value={valueEmail}
            onChange={(e) => {
              setValueEmail(e.target.value);
            }}
          />
        </p>
        <p>
          <InputPassword
            type="password"
            placeholder="Password*"
            value={valuePassword}
            onChange={(e) => {
              setValuePassword(e.target.value);
            }}
          />
        </p>
        <p className="wrapper-checkbox">
          <input type="checkbox" />
          <span>Remember me</span>
        </p>

        <Button disabled={!(PASSWORD.test(valuePassword) && EMAIL.test(valueEmail))}>
          SIGN IN
        </Button>
        <p className="wrapper-links">
          <Link to={'*'} className="link">
            Don't have an account? Sign Up
          </Link>
          <a className="link" href="#">
            Forgot password?
          </a>
        </p>
      </form>
    </div>
  );
};
export default SignIn;
