import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from './study/Layout';
import mainRouter from './mainRouter';

const Loading = <div>Loading...</div>;

const Example1 = lazy(() => import('./study/Example1'));
const Example2 = lazy(() => import('./study/Example2'));
const Example3 = lazy(() => import('./study/MyComponent'));
const Example4 = lazy(() => import('./study/EffectVisible'));

const Router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={Loading}>
        <Layout />
      </Suspense>
    ),
    children: mainRouter,
  },

  {
    path: 'study1',
    element: (
      <Suspense fallback={Loading}>
        <Example1 />
      </Suspense>
    ),
  },
  {
    path: 'study2',
    element: (
      <Suspense fallback={Loading}>
        <Example2 />
      </Suspense>
    ),
  },
  {
    path: 'study3',
    element: (
      <Suspense fallback={Loading}>
        <Example3>리액트</Example3>
      </Suspense>
    ),
  },
  {
    path: 'study4',
    element: (
      <Suspense fallback={Loading}>
        <Example4 />
      </Suspense>
    ),
  },
]);

export default Router;
