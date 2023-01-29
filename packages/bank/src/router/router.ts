/* eslint-disable @typescript-eslint/no-unused-vars */
import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';

export const createContext = ({
  req,
  res,
}: CreateExpressContextOptions) => ({}); // No context provided
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({});

export type AppRouter = typeof appRouter;
