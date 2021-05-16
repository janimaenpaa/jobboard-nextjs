import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';

interface Props {}

const UserInfo = (props: Props) => {
  const lightBlue = '#2f3748';
  return (
    <Flex width="100%" background={lightBlue} borderRadius="5" p="2">
      <Text>user</Text>
    </Flex>
  );
};

export default UserInfo;
