import React, { useState } from 'react';

const Info = () => {
  const [input, setInput] = useState({
    name: '',
    nickName: '',
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const { name, nickName } = input;

  return (
    <>
      <div>
        <input value={name} onChange={onChange} name="name" />
        <input value={nickName} onChange={onChange} name="nickName" />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickName}
        </div>
      </div>
    </>
  );
};

export default Info;
