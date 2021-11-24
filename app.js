import express from 'express';
import env from './src/config/env';
import Server from './src/config/server';
import middlewares from './src/config/middlewares';
import db  from './src/config/db';
// import errorHandler from './src/middlewares/errorHandler';
import routes from './src/modules';

const api = new Server(express, middlewares, routes);

(async () => {
    try {
        // await db.associateAll(db.sequelize.models);
        await db.sequelize.sync({ alter: true });
        await api.listen(config.appPort);
    } catch (e) {
        console.error(e);
    }
})();