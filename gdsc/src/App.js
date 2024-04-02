import { RouterProvider } from 'react-router-dom';
import studyRouter from './router';

import Say from './study/Say';
import EventPractice from './study/EventPractice';

function App() {
  return (
    <>
      <RouterProvider router={studyRouter} />
      <EventPractice />
    </>
  );
}

export default App;
