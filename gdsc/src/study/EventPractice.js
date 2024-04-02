// import React, { useState } from 'react';

// const EventPractice = () => {
//   const [username, setUsername] = useState('');
//   const [message, setMessage] = useState('');

//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessage(e.target.value);

//   const onClick = () => {
//     alert(username + ': ' + message);
//     setUsername('');
//     setMessage('');
//   };

//   const onKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       onClick();
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         value={username}
//         placeholder="사용자명"
//         style={{ width: '150px' }}
//         onChange={onChangeUsername}
//         onKeyPress={onKeyPress}
//       />
//       <input
//         type="text"
//         name="message"
//         value={message}
//         placeholder="아무거나 입력해 보세요"
//         style={{ width: '150px' }}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button style={{ width: '150px' }} onClick={onClick}>
//         확인
//       </button>
//     </div>
//   );
// };

// export default EventPractice;

// 업그레이드 버전
import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextFrom = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(nextFrom);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="사용자명"
        style={{ width: '150px' }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="아무거나 입력해 보세요"
        style={{ width: '150px' }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button style={{ width: '150px' }} onClick={onClick}>
        확인
      </button>
    </div>
  );
};

export default EventPractice;
