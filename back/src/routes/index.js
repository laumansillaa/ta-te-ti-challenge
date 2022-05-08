module.exports = function (app) {
    app.use('/user', require('./User'));
    app.use('/game', require('./Game'));
}