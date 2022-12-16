var express = require('express');
var router = express.Router();

var  index = require('./handlers/main');

    //     res.render('index')
router.get('/', index.main);
router.post('/', index.search);

module.exports = router;