export default (sequelize, DataTypes) => {
  const Grocery = sequelize.define('Grocery', {
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: { notEmpty: true }
    },
    description: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: { notEmpty: true }
    }
  });

  Grocery.associate = (models) => {
    models.Grocery.belongsTo(models.Users, { foreignKey: 'id', as: 'userId' });
    models.Grocery.hasMany(models.GroceryItem, { foreignKey: 'id', as: 'items' });
  };

  return Grocery;
};
