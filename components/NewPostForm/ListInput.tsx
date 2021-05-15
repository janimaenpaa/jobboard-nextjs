import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import {
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
} from '@chakra-ui/input';
import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import ItemButton from './ItemButton';

interface Props extends InputProps {}

const ListInput = ({ colorScheme, ...props }: Props) => {
  const [list, setList] = useState<string[]>([]);
  const [listItem, setListItem] = useState<string>('');

  const submitItem = () => {
    setList([...list, listItem]);
    setListItem('');
  };

  const deleteItem = (item) => {
    const filteredList = list.filter((i) => i !== item);
    setList(filteredList);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitItem();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setListItem(event.target.value);
  };

  return (
    <Flex flexDirection="column">
      <InputGroup>
        <Input
          value={listItem}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          {...props}
        />
        <InputRightAddon
          bgColor={colorScheme === 'green' ? 'green.400' : 'blue.400'}
          children="Add"
          cursor="pointer"
          onClick={submitItem}
          textColor="white"
          px="50px"
        />
      </InputGroup>
      <Flex wrap="wrap">
        {list.map((item, index) => (
          <ItemButton
            key={index}
            colorScheme={colorScheme}
            text={item}
            onClick={() => deleteItem(item)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ListInput;
