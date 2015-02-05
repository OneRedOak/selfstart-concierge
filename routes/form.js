var express = require('express');
var router = express.Router();

/* Test Post from User Sign Up Form */
router.post('/register', function(req, res) {
    console.log(req.body);
    res.send('hi');
});

module.exports = router;
