import classNames from 'classnames';
import React, { useState } from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

import './TodoItem.scss';

function TodoItemBlock({ children, setIsHover }) {
  return (
    <div
      className="todo-item-block"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </div>
  );
}

function CheckCircle({ done, children, onClick }) {
  return (
    <div className={classNames('check-circle', { done })} onClick={onClick}>
      {children}
    </div>
  );
}

function Remove({ children, isHover, onClick }) {
  return (
    <div className={classNames('remove', { isHover })} onClick={onClick}>
      {children}
    </div>
  );
}

function Text({ done, children }) {
  return <div className={classNames('text', { done })}>{children}</div>;
}

function TodoItem({ id, done, text }) {
  const [isHover, setIsHover] = useState(false);

  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock setIsHover={setIsHover}>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove isHover={isHover} onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
