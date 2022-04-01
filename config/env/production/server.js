module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  app: {
    keys: env.array('APP_KEYS',
    [ 'DATABASE_USER',
      'DATABASE_PASS',
      'DATABASE_HOST',
      'DATABASE_PORT',
      'DATABASE_NAME']),
  },
});
