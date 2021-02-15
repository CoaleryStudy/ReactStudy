// https://react.vlpt.us/basic/05-props.html - 5. props 를 통해 컴포넌트에게 값 전달하기
// https://react.vlpt.us/basic/06-conditional-rendering.html - 6. 조건부 렌더링

import React from "react";

function Hello({ msg, isSpecial }) {
  return (
    <div>
      {isSpecial && <b>*</b>}
      {msg}
    </div>
  );
}

Hello.defaultProps = {
  msg: "기본 값",
  isSpecial: false,
};

export default Hello;
