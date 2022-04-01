    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            database: process.env.DATABASE_NAME,
            ssl: {
                rejectUnauthorized: false
            },
        },
        debug: false,
      },
    });