const {User} = require('../../db').models;

module.exports = async function (req, res, next) {
    console.log('----- CREATE USER -----');

    try {
        
        const {name, username} = req.body;

        const user = await User.create({
            name,
            username
        })

        res.status(200).send('User created');


    } catch (error) {
        next(error)
    }


}