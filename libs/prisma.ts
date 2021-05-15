import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  if (!prisma) {
    prisma = new PrismaClient();
  }
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient();
  }

  // @ts-ignore
  prisma = global.prisma;
}

export { prisma };
