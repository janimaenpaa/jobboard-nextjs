import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';

interface Props {}

const App = (props: Props) => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading>Test</Heading>
        <p>Lorem ipsum</p>
      </Flex>
    </Flex>
  );
};

export default App;
