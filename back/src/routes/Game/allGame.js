const {Game, User} = require('../../db').models;


module.exports = async function (req, res, next) {
    console.log('----- ALL GAMES -----');

    try {
        const games = await Game.findAll({
            include: User
        })

        res.status(200).json(games);

    } catch (error) {
        next (error)
    }


}