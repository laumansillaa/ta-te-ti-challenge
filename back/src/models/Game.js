const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Game', {
        players: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        winner: {
            type: DataTypes.STRING
        },
        loser: {
            type: DataTypes.STRING
        },
        equality: {
            type: DataTypes.STRING
        }
    })
}