import React from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/layout';

interface Props extends FlexProps {
  username?: string;
}

const UserInfo = ({ username = 'User', ...props }: Props) => {
  const lightBlue = '#2f3748';
  return (
    <Flex
      background={lightBlue}
      height="40px"
      borderRadius="5"
      minWidth="80px"
      p="2"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <Text>{username}</Text>
    </Flex>
  );
};

export default UserInfo;
