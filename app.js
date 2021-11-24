import express from 'express';
import env from './src/config/env';
import Server from './src/config/server';
import middlewares from './src/config/middlewares';
import db  from './src/config/db';
// import errorHandler from './src/middlewares/errorHandler';
import routes from './src/modules';

const http = express();
const server = new Server(http);
server.middlewares(middlewares);
server.routes(routes);
server.errorHandler(errorHandler);

server.start(env.appPort);