import express from 'express';
import bodyParser from 'body-parser';
import data from './src/config/data';
import usersRoute from './src/routes/users';
import authRoute from './src/routes/auth';
import authorization from './auth';

const app = express();
app.use(bodyParser.json());
app.data = data(app);

const auth = authorization(app);
app.use(auth.initialize());
app.auth = auth;

usersRoute(app);
authRoute(app);

export default app;
