import classNames from 'classnames';
import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

import './TodoCreate.scss';

function CircleButton({ children, onClick, open }) {
  return (
    <button className={classNames('circle-button', { open })} onClick={onClick}>
      {children}
    </button>
  );
}

function InsertFormPositioner({ children }) {
  return <div className="insert-form-positioner">{children}</div>;
}

function InsertForm({ children, onSubmit }) {
  return (
    <form className="insert-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

function Input({ placeholder, ...rest }) {
  return (
    <input
      className="input"
      placeholder={placeholder}
      autoFocus
      {...rest}
    ></input>
  );
}

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="할 일을 입력 후, Enter를 누르세요."
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
