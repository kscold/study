import { RouterProvider } from 'react-router-dom';
import Router from './router';
import IterationSample from './study/IterationSample';

function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <IterationSample />
    </>
  );
}

export default App;
