var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '我超可爱的 请给我打钱' });
});

module.exports = router;
