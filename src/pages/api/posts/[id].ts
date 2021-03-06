import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';
import superjson from 'superjson';

export const getPostById = async (id: number) => {
  const post = await prisma.post.findUnique({
    where: { id: id },
  });

  if (!post) return null;

  // DateTimes won't work without this when server side rendering
  const serializedPost = superjson.serialize(post);

  return serializedPost.json;
};

const handler = nc<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const id = Number(req.query.id);
    const post = await getPostById(id);

    if (!post) {
      console.log(post);
      res.status(404);
      res.json({ error: 'Post not found' });
      return;
    }

    res.json(post);
  })
  .put(async (req, res) => {
    const id = Number(req.query.id);

    const post = await prisma.post.findUnique({
      where: { id: id },
    });

    if (!post) {
      res.status(404);
      res.json({ error: 'Post not found' });
      return;
    }

    try {
      const updatedPost = await prisma.post.update({
        where: { id: id },
        data: { ...req.body },
      });
      res.json(updatedPost);
    } catch (error) {
      res.status(400).json({ error });
    }
  })
  .delete(async (req, res) => {
    const id = Number(req.query.id);

    const post = await prisma.post.findUnique({
      where: { id: id },
    });

    console.log(post);

    if (!post) {
      res.status(404);
      res.json({ error: 'Post not found' });
      return;
    }

    try {
      await prisma.post.delete({
        where: { id: id },
      });

      res.json({ message: `Post deleted` });
    } catch (error) {
      res.json({ error });
    }
  });

export default handler;
