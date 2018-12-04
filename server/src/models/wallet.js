export default (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { notEmpty: true }
    },
    accumulated: {
      type: DataTypes.FLOAT
    }
  });

  Wallet.associate = (models) => {
    models.Wallet.hasMany(models.WalletItem, { foreignKey: 'id', as: 'costs' });
    models.Wallet.hasOne(models.Users, { foreignKey: 'id', as: 'userId' });
  };

  return Wallet;
};
