const express = require('express');
var router = express.Router();
var alan = require('../config/alan')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wake', function (req, res, next) {
  const randomString = alan[Math.floor(Math.random() * alan.length)];
  res.json({ randomString })
});

module.exports = router;
