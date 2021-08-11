import classNames from 'classnames';
import React, { useState } from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

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

function CheckCircle({ done, children }) {
  return <div className={classNames('check-circle', { done })}>{children}</div>;
}

function Remove({ children, isHover }) {
  return <div className={classNames('remove', { isHover })}>{children}</div>;
}

function Text({ done, children }) {
  return <div className={classNames('text', { done })}>{children}</div>;
}

function TodoItem({ id, done, text }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <TodoItemBlock setIsHover={setIsHover}>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove isHover={isHover}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
