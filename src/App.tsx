import React, { FC } from 'react';
import AppRouters from './AppRouters.tsx';
import { AppQuizletProvider } from './core/contexts/AppContext.tsx';
import Signed from './core/components/Signed/Signed.tsx';

const App: FC = () => (
  <div>
    <AppQuizletProvider>
      <AppRouters />
    </AppQuizletProvider>
    <Signed />
  </div>
);

export default App;
