const {User, Game} = require('../../db').models;

module.exports = async function (req, res, next) {

    console.log('----- ALL USERS -----');

    try {
        const user = await User.findAll({
            include: Game
        })

        res.status(200).json(user);

    } catch (error) {
        next (error)
    }



}