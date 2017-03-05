var express = require('express');
var request = require('request');
var path = require('path');

var lepdCaller = require('../models/LepdCaller');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    var htmlFile = path.join(__dirname + '/../public/index.html');
    res.sendFile(htmlFile);
});

router.get('/ping/:server', function(req, res, next) {

    var server = req.params.server;

    lepdCaller.ping(server, function(response) {
        res.json(response);
    });
});

module.exports = router;
