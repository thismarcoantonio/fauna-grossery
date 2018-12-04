export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    }
  });

  Users.associate = (models) => {
    models.Users.hasMany(models.Grocery, { foreignKey: 'id', as: 'lists' });
    models.Users.hasMany(models.Wishes, { foreignKey: 'id', as: 'wishes' });
  };

  return Users;
};
