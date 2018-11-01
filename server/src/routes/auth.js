import { encode } from 'jwt-simple';
import config from '../config';

export default (app) => {
  const { Users } = app.data.models;
  const { Op } = app.data.Sequelize;

  app.post('/authenticate', (req, res) => {
    const { email = '', username = '', password = '' } = req.body || {};

    if ((email || username) && password) {
      return Users.findOne({
        where: {
          [Op.or]: [
            { username },
            { email }
          ]
        }
      })
        .then((user) => {
          console.log(user);
          if (user && user.password === password) {
            const payload = {
              id: user.id,
              iat: Date.now() / 1000,
              exp: Date.now() / 1000 + config.expireInAWeek
            };

            return res.json({
              token: encode(payload, config.jwtSecret)
            });
          }

          return res.sendStatus(401);
        })
        .catch(() => res.sendStatus(401));
    }

    return res.sendStatus(401);
  });

  app.get('/', (req, res) => {
    res.json({
      appName: 'fauna-grocery',
      appUrl: 'nothing yet',
      gitBranch: 'https://github.com/thismarcoantonio/fauna-grocery'
    });
  });
};
