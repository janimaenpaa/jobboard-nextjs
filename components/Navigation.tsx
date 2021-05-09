import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

interface Props {}

const Navigation = (props: Props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      position="fixed"
      background="white"
      width="100%"
      {...props}
    >
      <Flex align="center" ml={5} mr={5}>
        <Heading as="h1">Jobs</Heading>
      </Flex>
      <Box>
        <Button bg="transparent" border="1px">
          Post A Job
        </Button>
      </Box>
    </Flex>
  );
};

export default Navigation;
