module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6c480da4c9e5d0ac55ff0ce97a8e09e4'),
  },
});
