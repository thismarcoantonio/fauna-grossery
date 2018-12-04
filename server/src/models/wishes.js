export default (sequelize, DataTypes) => {
  const Wishes = sequelize.define('Wishes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { notEmpty: true }
    },
    description: {
      type: DataTypes.STRING
    },
    icon: {
      type: DataTypes.STRING
    }
  });

  Wishes.associate = (models) => {
    models.Wishes.hasMany(models.Users, { foreignKey: 'id', as: 'userId' });
  };

  return Wishes;
};
