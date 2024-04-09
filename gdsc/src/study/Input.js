import React, { useState } from 'react';

const Input = () => {
  const [input, setInput] = useState('');
  const onChange = (e) => setInput(e.target.value);

  let a = 1;

  return (
    <div>
      <input onChange={onChange} />
      {input}
    </div>
  );
};
export default Input;
