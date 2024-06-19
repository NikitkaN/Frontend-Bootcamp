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
        description: DataTypes.STRING
    });
    
    MenuItem.associate = models => {
        MenuItem.belongsToMany(models.Order, { through: 'OrderMenuItem', onDelete: 'CASCADE' });
    }

    return MenuItem;
};