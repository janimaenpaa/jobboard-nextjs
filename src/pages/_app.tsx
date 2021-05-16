import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { ChakraProvider, Container } from '@chakra-ui/react';
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

  if (router.pathname.startsWith('/admin')) {
    return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }

  const ifOnAdminPage = router.pathname.startsWith('/admin');

  return (
    <ChakraProvider theme={theme}>
      {ifOnAdminPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Navigation />
          <Container mb="4" maxW="container.lg">
            {pageLoading ? <LoadingSpinner /> : <Component {...pageProps} />}
          </Container>
        </>
      )}
    </ChakraProvider>
  );
};

export default App;
