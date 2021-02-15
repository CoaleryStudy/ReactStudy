import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

function App() {
  return (
    <div>
      <Hello msg="안녕하세요" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
