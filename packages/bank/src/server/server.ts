import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import dotenv from 'dotenv';
import { Logger, HttpLogger } from '@enyineer/zwegat-logger';
import { appRouter, createContext } from '../router/router';

dotenv.config();

const app = express();

const apiPath = 'trpc';
const portEnv = parseInt(process.env.SERVER_PORT || '', 10);
const serverPort = Number.isNaN(portEnv) ? 4000 : portEnv;

const expressLogger = HttpLogger();
const logger = Logger();

app.use(expressLogger);

app.use(
  apiPath,
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

logger.info(`Starting TRPC Server.\nPort: ${serverPort}\nEndpoint: /${apiPath}`);

app.listen(serverPort);
