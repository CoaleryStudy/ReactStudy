import classNames from 'classnames';
import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

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

function InsertForm({ children }) {
  return <form className="insert-form">{children}</form>;
}

function Input({ placeholder }) {
  return <input className="input" placeholder={placeholder} autoFocus></input>;
}

function TodoCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input placeholder="할 일을 입력 후, Enter를 누르세요." />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
