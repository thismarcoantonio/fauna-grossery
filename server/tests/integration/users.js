import Chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

Chai.use(chaiHttp);
const request = Chai.request(app).keepOpen();

describe('users route', () => {
  const { Users } = app.data.models;

  const defaultUser = {
    id: 1,
    password: '123',
    username: 'user-test',
    email: 'usertest@mail.com'
  };

  beforeEach(done => {
    Users.destroy({ where: {} })
      .then(() => {
        Users.create(defaultUser);
        done();
      });
  });

  after(done => {
    request.close();
    done();
  });

  describe('GET /users', () => {
    it('should return a list of users', done => {
      request
        .get('/users')
        .end((err, res) => {
          expect(res.body[0].username).to.be.eql(defaultUser.username);
          expect(res.body[0].id).to.be.eql(defaultUser.id);
          done(err);
        });
    });
  });

  describe('POST /users', () => {
    it('should post a user', done => {
      const newUser = {
        id: 2,
        username: 'new user',
        email: 'newuser@mail.com',
        password: '123'
      };

      request
        .post('/users')
        .send(newUser)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(newUser.id);
          expect(res.body.username).to.be.eql(newUser.username);
          done(err);
        });
    });
  });
});
