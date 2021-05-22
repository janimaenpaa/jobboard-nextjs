import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import {
  ChakraProvider,
  Container,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import theme from '../styles/theme';
import Navigation from '../components/Navigation';
import LoadingSpinner from '../components/LoadingSpinner';
import Topbar from '../components/Dashboard/Topbar';
import Sidebar from '../components/Dashboard/Sidebar';

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
    const [isMobile] = useMediaQuery('(max-width: 900px)');
    const [open, setOpen] = useState(true);
    const sidebarWidth = '260px';
    const user = 'User';

    const handleToggle = () => {
      setOpen(!open);
    };

    useEffect(() => {
      if (isMobile) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }, [isMobile]);
    return (
      <ChakraProvider theme={theme}>
        <Flex minHeight="100vh" bgColor="#f9fafb">
          <Topbar isMobile={isMobile} handleToggle={handleToggle} />
          {open && (
            <Sidebar
              handleToggle={handleToggle}
              isMobile={isMobile}
              open={open}
              setOpen={setOpen}
              user={user}
              width={sidebarWidth}
            />
          )}
          <Flex
            marginLeft={isMobile ? 0 : sidebarWidth}
            mt="50px"
            p="10"
            flexDirection="column"
            width="100%"
          >
            <Component {...pageProps} />
          </Flex>
        </Flex>
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
