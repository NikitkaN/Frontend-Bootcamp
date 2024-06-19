module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        orders: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue: [],
        },
        role: DataTypes.STRING
    });

    User.associate = models => {
        User.hasMany(models.Order, { foreignKey: 'userId' });
    };

    return User;
};