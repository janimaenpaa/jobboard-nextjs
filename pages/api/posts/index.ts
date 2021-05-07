import { Post, PostStatus, User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import prisma from '../../../lib/prisma';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = nc<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const posts = await prisma.post.findMany();
    console.log(posts);
    res.json(posts);
  })
  .post(async (req, res) => {
    const newPost: Omit<Post, 'id' | 'createdAt'> = {
      title: 'Frontend Developer',
      company: 'Tiili Solutions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      requiredSkills: ['React'],
      niceToHaveSkills: ['NodeJS'],
      url: 'https://reactjs.org',
      deadline: new Date('2020-06-01'),
      status: PostStatus.WAITING,
      updatedAt: new Date(),
    };

    const post = await prisma.post.create({ data: newPost });

    res.json(post);
  });

export default handler;
