import { Center } from '@chakra-ui/layout';
import React from 'react';
import NewPostForm from '../../components/NewPostForm';

interface Props {}

const NewPost = (props: Props) => {
  return (
    <Center>
      <NewPostForm />
    </Center>
  );
};

export default NewPost;
