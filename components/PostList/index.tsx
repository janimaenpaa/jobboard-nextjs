import { Post } from '@prisma/client';
import React from 'react';

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  //console.log(props)
  return (
    <div>
      {posts.map((post) => (
        <p key={`post-${post.id}`}>{post.title}</p>
      ))}
    </div>
  );
};

export default PostList;
