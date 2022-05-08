const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
        }
    })
}