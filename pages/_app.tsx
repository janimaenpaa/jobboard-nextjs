import React from 'react';
import ThemeProvider from '../styles/provider';
import { AppPropsType } from 'next/dist/next-server/lib/utils';

const App = ({ Component, pageProps }: AppPropsType) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
