import { JSX, lazy } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { RouterPath } from './core/enums';

const Welcome = lazy(() => import('../src/pages/Welcome/Welcome.tsx'));
const Quizlet = lazy(() => import('../src/pages/Quizlet/Quizlet.tsx'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: RouterPath.QUIZLET,
    element: <Quizlet />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
] as RouteObject[];

const appRouters = createBrowserRouter(routes);

const AppRouters = (): JSX.Element => {
  return <RouterProvider router={appRouters} />;
};

export default AppRouters;
