import express from 'express';
import bodyParser from 'body-parser';
import data from './src/config/data';
import usersRoute from './src/routes/users';

const app = express();
app.use(bodyParser.json());
app.data = data(app);
usersRoute(app);

export default app;
