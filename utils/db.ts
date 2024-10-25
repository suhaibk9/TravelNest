import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
// it means that if the prisma client is not already created, it will create a new instance of the PrismaClient and store it in the globalThis object. This way, the prisma client is created only once and reused across the application. This is useful because creating a new instance of the PrismaClient for each request can be expensive and slow down the application. By reusing the same instance of the PrismaClient, we can improve the performance of the application.