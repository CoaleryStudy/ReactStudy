import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === 'true';

  return (
    <div>
      <h1>어바웃</h1>
      <p>이건 어바웃 페이지인데 내용은 기억이 안나요.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고.</p>}
    </div>
  );
};

export default About;
