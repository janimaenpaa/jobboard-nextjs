import { Post } from '.prisma/client';
import useSWR from 'swr';
import fetcher from '../libs/fetch';

export const getPosts = () => {
  return useSWR<Post[]>('/api/posts', fetcher);
};

export const getPostById = (id: number) => {
  return useSWR<Post>(`/api/posts/${id}`, fetcher);
};
