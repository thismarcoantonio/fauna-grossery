export default {
  database: 'faunagrossery',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: `${process.env.NODE_ENV}_fauna.sqlite`
  }
};
