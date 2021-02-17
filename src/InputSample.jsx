import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  const onReset = () => {
    setInputs({
      id: "",
      password: "",
    });
  };

  const onChange = (event) => {
    // 1
    // if (event.target.name === "id") {
    //   setInputs({
    //     id: event.target.value,
    //     password: password,
    //   });
    // } else {
    //   setInputs({
    //     id: id,
    //     password: event.target.value,
    //   });
    // }

    // 2
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <input
        name="id"
        onChange={onChange}
        placeholder="아이디 입력"
        value={id}
      />
      <input
        name="password"
        type="password"
        onChange={onChange}
        placeholder="비밀번호 입력"
        value={password}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <div>아이디 : {id}</div>
        <div>비밀번호 : {password}</div>
      </div>
    </div>
  );
}

export default InputSample;
