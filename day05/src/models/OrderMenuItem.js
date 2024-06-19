module.exports = (sequelize, DataTypes) => {
    const OrderMenuItem = sequelize.define('OrderMenuItem', {
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        primaryKey: true,
      },
      menuItemId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'MenuItems',
          key: 'id',
        },
        primaryKey: true,
      }
    });
  
    return OrderMenuItem;
};  