import React, { useEffect, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Container,
  Flex,
  Box,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar';

interface Props {}

const Dashboard = (props: Props) => {
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
    <Flex height="100vh" bgColor="#f9fafb">
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
      {/* <Box ml={isMobile ? 0 : sidebarWidth}>Test</Box> */}
    </Flex>
  );
};

export default Dashboard;
