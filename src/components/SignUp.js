import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import {
  InputFirstName,
  InputLastName,
  InputPassword,
  InputEmail,
  Button,
  PASSWORD,
  EMAIL,
} from './validations';

const SignUp = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  return (
    <div>
      <h2>Sign up</h2>
      <form>
        <p>
          <InputFirstName
            type="text"
            placeholder="First Name*"
            value={FirstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            halfWidth
          />
          <InputLastName
            type="text"
            placeholder="Last Name*"
            value={LastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            halfWidth
          />
        </p>
        <p>
          <InputEmail
            type="email"
            placeholder="Email Address*"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </p>
        <p>
          <InputPassword
            type="password"
            placeholder="Password*"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </p>
        <p className="wrapper-checkbox">
          <input type="checkbox" />

          <span>I want to receive inspiration, marketing promotions and updates via email.</span>
        </p>

        <Button disabled={!(PASSWORD.test(Password) && EMAIL.test(Email) && LastName && FirstName)}>
          SIGN UP
        </Button>

        <p className="wrapper-links">
          <Link to="/signIn" className="link">
            Already have an account? Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
