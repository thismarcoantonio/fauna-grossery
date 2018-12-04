export default (sequelize, DataTypes) => {
  const GroceryItem = sequelize.define('GroceryItem', {
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
    basePrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { notEmpty: true }
    }
  });

  GroceryItem.associate = (models) => {
    models.GroceryItem.belongsTo(models.Grocery, { foreignKey: 'id', as: 'lists' });
  };

  return GroceryItem;
};
