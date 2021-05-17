import React from 'react';
import { Box, BoxProps } from '@chakra-ui/layout';

const Card = (props: BoxProps) => {
  return (
    <Box
      flex="1"
      border="1px"
      borderRadius="5px"
      borderColor="gray.300"
      bg="white"
      p="2"
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Card;
