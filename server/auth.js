import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import config from './src/config';

export default (app) => {
  const { Users } = app.data.models;

  const options = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  };

  const strategy = new Strategy(options, (payload, done) => {
    Users.findOne({ where: { id: payload.id } })
      .then(user => done(
        null,
        user ? { id: user.id, email: user.email } : false
      ))
      .catch(error => done(error));
  });

  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', config.jwtSession)
  };
};
