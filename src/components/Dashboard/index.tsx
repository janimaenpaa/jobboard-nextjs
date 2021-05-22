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
import PostTable from './PostTable';
import { getPosts } from '../../services/PostService';

interface Props {}

const Dashboard = (props: Props) => {
  const [isMobile] = useMediaQuery('(max-width: 900px)');
  const [open, setOpen] = useState(true);
  const { data, error } = getPosts();

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
    <Flex flexDirection="column" width="100%">
      <Heading>Posts</Heading>
      <PostTable posts={data} />
    </Flex>
  );
};

export default Dashboard;
