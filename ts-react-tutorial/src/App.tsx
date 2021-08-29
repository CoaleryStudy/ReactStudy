import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says Hello!`);
  };
  return (
    <>
      <Greetings name="World" onClick={onClick} />
      <Counter />
    </>
  );
}

export default App;
