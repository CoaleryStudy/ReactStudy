import { Link } from 'react-router-dom';
import React from 'react';

function Links() {
  return (
    <ol>
      <li>
        <Link to="/List">List로 이동하기</Link>
      </li>
      <li>
        <Link to="/">Home으로 이동하기</Link>
      </li>
    </ol>
  );
}

export default Links;
