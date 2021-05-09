import { Post, PrismaClient } from '@prisma/client';
import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import PostList from '../components/PostList';
import superjson from 'superjson';

interface Props {
  posts: Post[];
}

const App = ({ posts }: Props) => {
  return (
    <Flex alignItems="center" justifyContent="center" direction="column">
      <Heading m={20}>Test</Heading>
      <PostList posts={posts} />
    </Flex>
  );
};

export default App;

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
  prisma.$disconnect();
  console.log(posts);
  return {
    props: { posts: posts },
  };
};
