const {Game, User} = require('../../db').models;

module.exports = async function (req, res, next) {
    console.log('----- CREATE GAME -----');

    try {

        const {players, winner, loser, equality, user} = req.body;
        if (!winner && !loser && !equality) {
            res.status(400).send('Bad Request');
        }

        if (user.length && players.length && (winner || loser || equality)) {
            const game = await Game.create({
                players,
                winner, 
                loser,
                equality,
            })

            const match = await User.findAll({
                where: {
                    username: user
                }
            })

            game.addUser(match);

            res.status(200).send(game);
        } else {
            res.status(400).send('Bad request');
        }
        

    } catch (error) {
        next(error)
    }


}