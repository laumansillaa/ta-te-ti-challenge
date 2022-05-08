const router = require('express').Router();

router.post('/createUser', require('./createUser'));
router.get('/allUser', require('./allUser'));

module.exports = router;