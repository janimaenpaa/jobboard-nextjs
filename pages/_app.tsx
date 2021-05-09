import React from 'react';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppPropsType) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
