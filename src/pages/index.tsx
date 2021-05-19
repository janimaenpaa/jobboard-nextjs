import { Post } from '@prisma/client';
import { Center, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import PostList from '../components/PostList';
import useSWR from 'swr';
import fetch from '../lib/fetch';
import LoadingSpinner from '../components/LoadingSpinner';

const App = () => {
  const { data, error } = useSWR<Post[]>('/api/posts', fetch);

  if (!data) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  return (
    <Flex direction="column">
      <Heading mt="10" mb="6" ml="4">
        Jobs
      </Heading>
      <Center>
        <PostList posts={data} />
      </Center>
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
