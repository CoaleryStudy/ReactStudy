import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, toggle, remove } from '../modules/todos';

function CreateTodo({ onCreate }) {
  const [contents, setContents] = useState('');

  const onChange = (event) => setContents(() => event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    onCreate(contents);
    setContents('');
  };

  return (
    <form onSubmit={onSubmit} style={{ marginBottom: 8 }}>
      <input onChange={onChange} value={contents} />
      <button type="submit">추가</button>
    </form>
  );
}

const TodoItem = React.memo(({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: todo.enable ? 'line-through' : 'none',
          cursor: 'pointer',
          marginRight: 8,
          marginBottom: 2,
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.contents}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
});

function TodoList() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const onCreate = (contents) => dispatch(create(contents));
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = (id) => dispatch(remove(id));

  return (
    <div>
      <CreateTodo onCreate={onCreate} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TodoList;
