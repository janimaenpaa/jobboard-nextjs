import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Post } from '@prisma/client';
import Card from '../Card';
import { useRouter } from 'next/router';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  const router = useRouter();
  const {
    id,
    title,
    company,
    deadline,
    description,
    createdAt,
    niceToHaveSkills,
    requiredSkills,
    status,
    updatedAt,
    url,
  } = post;

  const goToPostPage = () => router.push(`/posts/${id}`);
  
  return (
    <Card p="4" m="4" onClick={goToPostPage}>
      <Heading as="h3" size="md">
        {post.title}
      </Heading>
      <Heading as="h2" size="sm" color="gray.500">
        {post.company}
      </Heading>
      <Flex>
        {post.createdAt} {post.deadline ? `| deadline: ${post.deadline}` : ''}
      </Flex>
      <Text>{post.description}</Text>
    </Card>
  );
};

export default PostItem;
