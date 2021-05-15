import React from 'react';
import useSWR from 'swr';
//import fetch from '../../libs/fetch';
import { Post as PostType } from '@prisma/client';
import PostPage from '../../components/PostPage';
import { Center } from '@chakra-ui/layout';
import { getPosts } from '../api/posts';
import { getPostById } from '../api/posts/[id]';

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  return (
    <Center>
      <PostPage post={post} />
    </Center>
  );
};

export async function getStaticPaths() {
  /* const { data } = await useSWR<PostType[]>('/api/posts', fetch); */
  const posts = await getPosts();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: PostType) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await getPostById(Number(params.id));

  return {
    props: { post: post },
  };
}

export default Post;
