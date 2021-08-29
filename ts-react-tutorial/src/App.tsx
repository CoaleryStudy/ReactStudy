import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import MyForm, { FormData } from './MyForm';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says Hello!`);
  };

  const onSubmit = (form: FormData) => {
    console.log(form);
  };

  return (
    <>
      <Greetings name="World" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </>
  );
}

export default App;
