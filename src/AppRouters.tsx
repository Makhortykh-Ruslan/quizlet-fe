import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const Welcome = lazy(() => import('../src/pages/Welcome/Welcome.tsx'));
const Quizlet = lazy(() => import('../src/pages/Quizlet/Quizlet.tsx'));
const NotFound = lazy(() => import('../src/pages/NotFound/NotFound.tsx'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense>
        <Welcome />
      </Suspense>
    ),
  },
  {
    path: '/quiz',
    element: (
      <Suspense>
        <Quizlet />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
  },
] as RouteObject[];

export const appRouters = createBrowserRouter(routes);
