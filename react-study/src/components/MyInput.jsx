import React from 'react';
import { InputGroup, Input } from 'reactstrap';

function MyInput({ placeholder, password, onChange, value, name }) {
  return (
    <InputGroup>
      <Input
        placeholder={placeholder}
        type={password ? 'password' : 'text'}
        onChange={onChange}
        value={value}
        name={name}
      />
    </InputGroup>
  );
}

MyInput.defaultProps = {
  password: false
};

export default MyInput;
