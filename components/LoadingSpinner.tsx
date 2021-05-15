import React from 'react';
import { Spinner } from '@chakra-ui/spinner';
import { Center, Flex, Text } from '@chakra-ui/layout';

const LoadingSpinner = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="50vh"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text m="4">Loading...</Text>
    </Flex>
  );
};

export default LoadingSpinner;
