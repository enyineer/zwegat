import pino from 'pino';
import pinoHttp from 'pino-http';

const Logger = pino;
const HttpLogger = pinoHttp;

export {
  Logger,
  HttpLogger,
};
