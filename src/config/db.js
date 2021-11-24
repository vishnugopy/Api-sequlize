import { Sequelize } from 'sequelize';
import config from './env';

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    { dialect: 'mysql', port: config.dbPort, host: config.dbHost }
);

// const associateAll = async (models) => {
//     Object.values(models).map((model) => model.associate(models));
// };

const db = { sequelize };

export default db;