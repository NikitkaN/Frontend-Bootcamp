module.exports = (sequelize, DataTypes) => {
    const MenuItem = sequelize.define('MenuItem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        title: DataTypes.STRING,
        picture: DataTypes.STRING,
        cost: DataTypes.INTEGER,
        callQuantity: DataTypes.INTEGER,
        calories: DataTypes.FLOAT,
        description: DataTypes.STRING
    });
    
    MenuItem.associate = models => {
        MenuItem.belongsToMany(models.Order, { 
            through: 'OrderMenuItem',
            foreignKey: 'menuItemId',
            otherKey: 'orderId',
            onDelete: 'CASCADE'
        });
    }

    return MenuItem;
};