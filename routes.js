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
 * GET /about
 * Render About page
 */

router.get('/about', function (req, res) {
    res.render('about');
});


/**
 * GET /auth
 * Render #SignIn/SignUp page
 */

router.get('/auth', function (req, res) {
    res.render('auth');
});

module.exports = router;