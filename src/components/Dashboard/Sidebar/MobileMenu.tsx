import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

interface Props {
  user: string;
  handleToggle: () => void;
}

const MobileMenu = ({ user, handleToggle }: Props) => {
  return (
    <Flex justifyContent="space-between" width="100%">
      {user}{' '}
      <CloseIcon onClick={handleToggle} cursor="pointer" height={5} width={5} />
    </Flex>
  );
};

export default MobileMenu;
