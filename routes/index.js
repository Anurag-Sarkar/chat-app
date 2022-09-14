var express = require('express');
var router = express.Router();
var app = express()
var server = require("http").createServer(app)
var socket = require("socket.io")
var io = socket(server)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;
