const router = require('express').Router();

router.post('/createGame', require('./Game'));
router.get('/allGame', require('./allGame'));

module.exports = router;