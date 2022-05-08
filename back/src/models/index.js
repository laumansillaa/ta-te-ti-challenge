module.exports = function(sequelize) {
    require('./User')(sequelize);
    require('./Game')(sequelize);


    const {User, Game} = sequelize.models;
    User.belongsToMany(Game, {through: 'GameUser'});
    Game.belongsToMany(User, {through: 'GameUser'});


}