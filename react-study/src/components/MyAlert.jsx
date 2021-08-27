import { Alert } from 'reactstrap';
import React from 'react';

export const DEFAULT = 'DEFAULT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

function MyAlert({ status }) {
  if (status === LOGIN_SUCCESS)
    return <Alert color="primary">로그인 성공!</Alert>;
  if (status === LOGIN_FAIL) return <Alert color="danger">로그인 실패!</Alert>;
  return null;
}

export default MyAlert;
