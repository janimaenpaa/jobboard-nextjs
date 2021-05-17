import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import UserInfo from './UserInfo';

interface Props {
  isMobile: boolean;
  handleToggle: () => void;
}

const Topbar = ({ isMobile, handleToggle }: Props) => {
  const darkBlue = '#181923';
  return (
    <Flex
      width="100%"
      height="70px"
      position="fixed"
      bgColor={darkBlue}
      color="white"
      justifyContent="space-between"
      alignItems="center"
      padding="6"
    >
      <HamburgerIcon
        height={6}
        width={6}
        onClick={handleToggle}
        cursor="pointer"
      />
      <UserInfo />
    </Flex>
  );
};

export default Topbar;
