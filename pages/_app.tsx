import React from 'react';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import Navigation from '../components/Navigation';

const App = ({ Component, pageProps }: AppPropsType) => {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
