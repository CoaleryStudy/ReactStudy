import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState("");

  const onRemove = () => {
    setText("");
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onRemove}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
