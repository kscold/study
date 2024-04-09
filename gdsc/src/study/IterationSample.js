import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  // const onKeyPress = (e) => {
  //   if (e.key == 'Enter') {
  //     onClick();
  //   }
  // };

  const onForm = (e) => {
    onClick();
    e.preventDefault();
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
    // e.preventDefault();
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  // () => ()
  // () =>
  // () => { return }

  return (
    <form onSubmit={onForm}>
      <input value={inputText} onChange={onChange} />
      <button type="submit">추가</button>
      <ul>{nameList}</ul>
    </form>
  );
};

export default IterationSample;
