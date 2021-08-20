import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TodoList from './components/TodoList';
import { todoReducer } from './modules/todos';

function App() {
  const store = createStore(todoReducer);
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
