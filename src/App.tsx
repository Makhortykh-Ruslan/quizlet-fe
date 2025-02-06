import React, { FC } from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { appRouters } from './AppRouters.tsx';

const App: FC = () => {
  return <RouterProvider router={appRouters} />;
};

export default App;
