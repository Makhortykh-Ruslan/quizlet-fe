import React, { FC } from 'react';
import AppRouters from './AppRouters.tsx';
import { AppQuizletProvider } from './core/contexts/AppContext.tsx';

const App: FC = () => (
  <AppQuizletProvider>
    <AppRouters></AppRouters>
  </AppQuizletProvider>
);

export default App;
