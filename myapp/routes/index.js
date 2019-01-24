var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var result = req.query.num1 + req.query.num2
  res.render('index', { message: result  });
});

module.exports = router;
