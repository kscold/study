import { RouterProvider } from 'react-router-dom';
import studyRouter from './router';

import Say from './study/Say';

function App() {
  return (
    <>
      <RouterProvider router={studyRouter} />
      <Say></Say>
    </>
  );
}

export default App;
