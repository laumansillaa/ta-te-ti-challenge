const {User} = require('../../db').models;

module.exports = async function (req, res, next) {
    console.log('----- CREATE USER -----');

    try {
        
        const {name, username} = req.body;

        if (name, username) {

            const user = await User.create({
                name,
                username
            })
    
            res.status(200).send('User created');

        } else {
            res.status(404).send('Bad request');
        }

    } catch (error) {
        next(error)
    }

}