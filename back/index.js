const server = require('./src/app.js');
const db = require('./src/db.js');

db.sync({ force: true }).then(() => {
    server.listen(3001, () => {
        console.log('Server running on port 3001');
    })
})