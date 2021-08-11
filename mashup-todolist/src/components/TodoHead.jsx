import React from 'react';

import './TodoHead.scss';

function TodoHead() {
  return (
    <div className="todo-head-block">
      <h1>2021년 8월 11일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </div>
  );
}

export default TodoHead;
