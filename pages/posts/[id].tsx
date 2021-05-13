import React from 'react';
import useSWR from 'swr';
//import fetch from '../../libs/fetch';
import { Post as PostType } from '@prisma/client';
import PostPage from '../../components/PostPage';

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  return <PostPage post={post} />;
};

export async function getStaticPaths() {
  /* const { data } = await useSWR<PostType[]>('/api/posts', fetch); */
  const results = await fetch('http://localhost:3000/api/posts');
  const posts = await results.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  /* const { data } = await useSWR<PostType>(`/api/posts/${params.id}`, fetch); */
  const response = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const post = await response.json();

  return {
    props: { post: post },
  };
}

export default Post;
