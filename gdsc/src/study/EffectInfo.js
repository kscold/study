import React, { useEffect, useState } from 'react';

const EffectInfo = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다.');
  //     console.log({ name, nickname });
  //   }); // 모든 업데이트에 대해서 실행

  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다.');
  //     console.log({ name, nickname });
  //   }, []); // 마운트 될 때만 실행

  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다.');
  //     console.log({ name });
  //   }, [name]); // 마운트 시와 name이 업데이될 때 실행

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({ name });
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]); // 마운트 시와 name이 업데이될 때 실행, 마운트가 끝날 때 cleanup이라고 뜨게 실행

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </>
  );
};

export default EffectInfo;
