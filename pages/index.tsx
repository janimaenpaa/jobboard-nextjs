import { Post } from '@prisma/client';
import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import PostList from '../components/PostList';
import useSWR from 'swr';
import fetch from '../libs/fetch';

const App = () => {
  const { data, error } = useSWR<Post[]>('/api/posts', fetch);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <Flex alignItems="center" justifyContent="center" direction="column">
      <Heading m={20}>Test</Heading>
      <PostList posts={data} />
    </Flex>
  );
};

export default App;

/* export const getStaticProps = async () => {
  const posts = await prisma.post.findMany();
  console.log(posts);
  return {
    props: { posts: posts },
  };
};
 */
