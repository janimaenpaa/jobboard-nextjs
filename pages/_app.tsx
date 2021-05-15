import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import Navigation from '../components/Navigation';
import LoadingSpinner from '../components/LoadingSpinner';

const App = ({ Component, pageProps }: AppPropsType) => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      {pageLoading ? <LoadingSpinner /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
};

export default App;
