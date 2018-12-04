export default (sequelize, DataTypes) => {
  const WalletItem = sequelize.define('WalletItem', {
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: { notEmpty: true }
    },
    monthtly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: { notEmpty: true }
    },
    primary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: { notEmpty: true }
    },
    description: {
      type: DataTypes.STRING
    }
  });

  WalletItem.associate = (models) => {
    models.WalletItem.belongsTo(models.Wallet, { foreignKey: 'id', as: 'walletId' });
  };

  return WalletItem;
};
