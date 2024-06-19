module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        isActive: {
            type: DataTypes.BOOLEAN
        },
        items: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue: []
        }
    });

    Order.associate = models => {
        Order.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });

        Order.belongsToMany(models.MenuItem, { through: 'OrderMenuItem' });
    }

    return Order;
};