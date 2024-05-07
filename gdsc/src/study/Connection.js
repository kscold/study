import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Connection = () => {
  const [data, setData] = useState();
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const { data } = await axios.get('http://localhost:8080');
    const { data } = await axios.post('http://localhost:8080/add', {
      title: '가원',
      date: '생일',
    });

    console.log(data);
    setData(data);
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} value={input} />
      <div>응답 데이터</div>
      {data}
    </div>
  );
};

export default Connection;
