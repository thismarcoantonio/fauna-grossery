export default {
  database: 'faunagrossery',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: `${process.env.NODE_ENV}_fauna.sqlite`
  },
  jwtSecret: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
  jwtSession: { session: false },
  expireInAWeek: 60 * 60 * 24 * 7
};
