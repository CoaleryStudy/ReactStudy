import React from 'react';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says Hello!`);
  };
  return <Greetings name="World" onClick={onClick} />;
}

export default App;
