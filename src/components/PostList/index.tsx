import { Flex } from '@chakra-ui/layout';
import { Post } from '@prisma/client';
import React from 'react';
import PostItem from './PostItem';

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  //console.log(props)
  return (
    <Flex direction="column">
      {posts.map((post) => (
        <PostItem key={`post-${post.id}`} post={post} />
      ))}
    </Flex>
  );
};

export default PostList;
