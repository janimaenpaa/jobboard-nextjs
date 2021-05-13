import React from 'react';
import { Post } from '@prisma/client';
import Card from '../Card';
import { Divider, Heading, Text } from '@chakra-ui/layout';

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  console.log(post);
  return (
    <Card maxWidth="800px" padding="4">
      <Heading as="h2">
        {post.title}
      </Heading>
      <Heading as="h3" size="md" color="gray.500">
        {post.company}
      </Heading>
      <Text>
        Published {post.updatedAt}{' '}
        {post.deadline ? `| Deadline ${post.deadline}` : ''}
      </Text>
      <Divider mt="2" mb="2" />
      <Text>{post.description}</Text>
    </Card>
  );
};

export default PostPage;
