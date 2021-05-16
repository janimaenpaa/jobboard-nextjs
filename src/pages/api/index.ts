import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  res.json({ message: "Hello World!" });
});

export default handler;
