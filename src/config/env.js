import dotenv from 'dotenv';
dotenv.config();

const config = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT || 3000,
    dbHost: process.env.DB_HOST,
    jwtSecret: process.env.JWT_SECRET,
    appPort: process.env.APP_PORT || 8080,
};

export default config;