import React from 'react';
import styled from 'styled-components';

const Input = ({ children, ...props }) => {
  return <SInput {...props}>{children}</SInput>;
};
const SInput = styled.input`
  width: ${(props) => {
    return props.halfWidth ? '155px' : '100%';
  }};
  height: 40px;
  background-color: transparent;
  border: 2px solid #848484;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;
  margin-bottom: 20px;
  color: white;
  font-size: 14px;
`;

export const PASSWORD = /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{8,}/u;
export const EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const InputFirstName = styled(Input)`
  ${(props) => {
    if (props.value) {
      if (props.value.length < 3) {
        return `
                border-color: red;`;
      }
      if (props.value.length >= 3) {
        return `
                border-color: #848484`;
      }
    }
  }}
`;

export const InputLastName = styled(Input)`
  ${(props) => {
    if (props.value) {
      if (props.value.length < 3) {
        return `
            border-color: red;`;
      }
      if (props.value.length >= 3) {
        return `
            border-color: #848484;`;
      }
    }
  }}
`;

export const InputEmail = styled(Input)`
  ${(props) => {
    if (props.value) {
      if (!EMAIL.test(props.value)) {
        return `
            border-color: red;`;
      } else {
        return `
            border-color: #848484;`;
      }
    }
  }}
`;

export const InputPassword = styled(Input)`
  ${(props) => {
    if (props.value) {
      if (!PASSWORD.test(props.value)) {
        return `
            border-color: red;`;
      } else {
        return `
            border-color: #848484;`;
      }
    }
  }}
`;

export const Button = ({ children, ...props }) => {
  return <SButton {...props}>{children}</SButton>;
};

const SButton = styled.button`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 30px;
  background-color: #85c8fe;
  font-size: 11px;
  font-weight: 700;
  margin: 15px 0;
  border-radius: 3px;
  border: none;
  cursor: pointer;
`;
