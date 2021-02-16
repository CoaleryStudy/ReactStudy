import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const onClick1 = () => {
    setNumber(number + 1);
    setNumber(number + 1);
  };

  const onClick2 = () => {
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClick1}>button1</button>
      <button onClick={onClick2}>button2</button>
    </div>
  );
}

export default Counter;
