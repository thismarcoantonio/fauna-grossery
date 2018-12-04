import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from './index';

const loadModels = (sequelize) => {
  const dir = path.join(__dirname, '../models');
  return fs
    .readdirSync(dir)
    .reduce((accumulator, file) => {
      const model = sequelize.import(path.join(dir, file));
      return { ...accumulator, [model.name]: model };
    }, {});
};

export default () => {
  const options = { ...config.params, operatorsAliases: Sequelize.Op };
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    options
  );
  const database = { sequelize, Sequelize, models: loadModels(sequelize) };

  Object.values(database.models).forEach(model => model.associate && model.associate(database.models));

  sequelize.sync().done(() => database);
  return database;
};
