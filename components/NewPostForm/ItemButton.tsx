import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/button';
import { CloseIcon } from '@chakra-ui/icons';

interface Props extends ButtonProps {
  text: string;
}

const ItemButton = ({ colorScheme, text, ...props }: Props) => {
  return (
    <Button
      colorScheme={colorScheme ? colorScheme : 'blue'}
      mt="2"
      mr="2"
      size="sm"
      opacity="0.8"
      lineHeight="0"
      {...props}
    >
      {text} <CloseIcon ml="2" boxSize="10px" />
    </Button>
  );
};

export default ItemButton;
