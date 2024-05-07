import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/developer1">김승찬</Link>
        </li>
        <li>
          <Link to="/profiles/developer2">김가원</Link>
        </li>
        <li>
          <Link to="/profiles/developer3">존재하지 않은 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
