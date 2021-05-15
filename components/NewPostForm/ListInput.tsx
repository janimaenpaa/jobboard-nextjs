import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import {
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
} from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import ItemButton from './ItemButton';

interface Props extends Omit<InputProps, 'list'> {
  list: string[];
  listItem: string;
  setList: React.Dispatch<React.SetStateAction<string[]>>;
  setListItem: React.Dispatch<React.SetStateAction<string>>;
}

const ListInput = ({
  list,
  listItem,
  setList,
  setListItem,
  colorScheme,
  ...props
}: Props) => {
  const submitItem = () => {
    if (!list.includes(listItem) && listItem.length !== 0) {
      setList([...list, listItem]);
      setListItem('');
    } else {
      console.log('Item already exists in the list');
    }
  };

  const deleteItem = (item: string) => {
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
