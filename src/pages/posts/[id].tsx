import React from 'react';
import useSWR from 'swr';
//import fetch from '../../libs/fetch';
import { Post as PostType } from '@prisma/client';
import PostPage from '../../components/PostPage';
import { Center, Flex } from '@chakra-ui/layout';
import { getPosts } from '../api/posts';
import { getPostById } from '../api/posts/[id]';
import { Button } from '@chakra-ui/button';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  const router = useRouter();
  return (
    <Flex flexDirection="column">
      <Button
        onClick={() => router.push('/')}
        my="4"
        width="100px"
        colorScheme="blue"
        opacity="0.8"
        leftIcon={<ArrowBackIcon height={5} width={5} />}
      >
        Back
      </Button>
      <Center>
        <PostPage post={post} />
      </Center>
    </Flex>
  );
};

export async function getStaticPaths() {
  /* const { data } = await useSWR<PostType[]>('/api/posts', fetch); */
  const posts = await getPosts();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: PostType) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostById(Number(params.id));

  return {
    props: { post: post },
  };
}

export default Post;
