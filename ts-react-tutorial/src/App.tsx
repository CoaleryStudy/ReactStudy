import React from 'react';
import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';
import Greetings from './Greetings';
import MyForm, { FormData } from './MyForm';
import ReducerSample from './ReducerSample';

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
      <CounterWithReducer />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </>
  );
}

export default App;
