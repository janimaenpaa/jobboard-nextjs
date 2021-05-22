import React from 'react';
import { Post } from '@prisma/client';
import Card from '../Card';
import { Divider, Heading, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { formatDate } from '../../lib/dates';

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  console.log(post);
  const handleApply = () => {
    window.open(post.url, '_blank');
  };
  return (
    <Card padding="4">
      <Heading as="h2">{post.title}</Heading>
      <Heading as="h3" size="md" color="gray.500">
        {post.company}
      </Heading>
      <Text>
        Published {formatDate(post.updatedAt)}{' '}
        {post.deadline ? `| Deadline ${formatDate(post.deadline)}` : ''}
      </Text>
      <Divider mt="2" mb="2" />
      <Text mb="2">{post.description}</Text>
      <Button colorScheme="green" isFullWidth onClick={handleApply}>
        Apply
      </Button>
    </Card>
  );
};

export default PostPage;
