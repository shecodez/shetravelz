/**
 * Created by Nicole J. Nobles on 11/17/2016.
 */

var express = require('express');
var router = express.Router();

/**
 * GET /
 * Render Home page
 */

router.get('/', function (req, res) {
    res.render('index');
});

/**
 * GET /restful
 * Render Restful page
 */

router.get('/restful', function (req, res) {
    res.render('restful');
});

module.exports = router;