import React from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import { useRouter } from 'next/router';

interface Props {}

const Navigation = (props: Props) => {
  const router = useRouter();

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
        <Button
          bg="transparent"
          border="1px"
          onClick={() => router.push('/posts/new')}
        >
          Post A Job
        </Button>
      </Box>
    </Flex>
  );
};

export default Navigation;
