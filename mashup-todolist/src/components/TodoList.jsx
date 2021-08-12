import React from 'react';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

import './TodoList.scss';

function TodoListBlock({ children }) {
  return <div className="todo-list-block">{children}</div>;
}

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
