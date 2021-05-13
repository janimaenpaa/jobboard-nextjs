import React from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Link as StyledLink } from '@chakra-ui/layout';

interface Props {}

const Navigation = (props: Props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      background="white"
      width="100%"
      {...props}
    >
      <Flex align="center" ml={4} mr={4}>
        <Link href="/">
          <a style={{ fontSize: '2rem', fontWeight: 'bold' }}>Jobs</a>
        </Link>
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
