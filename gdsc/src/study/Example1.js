import { useEffect, useState } from 'react';

function FirstExample() {
  const [channame, setChangename] = useState('');

  useEffect(() => {
    console.log(channame);
  }, []);

  const onChange = (e) => {
    setChangename(e.target.value);
  };

  return (
    <>
      {channame === '리액트' ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h1>리액트가 아닙니다.</h1>
      )}
      {/* <div className="react">{name}</div> */}
      <input onChange={onChange} />
    </>
  );
}

export default FirstExample;
