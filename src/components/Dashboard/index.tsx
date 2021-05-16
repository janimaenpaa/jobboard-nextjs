import React from 'react';
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
import Sidebar from './Sidebar';

interface Props {}

const Dashboard = (props: Props) => {
  const [isMobile] = useMediaQuery('(max-width: 900px)');
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <Flex>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} />
      <Box ml={isMobile ? 0 : '300px'}>Test</Box>
    </Flex>
  );
};

export default Dashboard;
