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
import PostTable from './PostTable';
import { getPosts } from '../../services/PostService';

interface Props {}

const Dashboard = (props: Props) => {
  const [isMobile] = useMediaQuery('(max-width: 900px)');
  const [open, setOpen] = useState(true);
  const sidebarWidth = '260px';
  const user = 'User';
  const { data, error } = getPosts();

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

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
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
        <Heading>Posts</Heading>
        <PostTable posts={data} />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
