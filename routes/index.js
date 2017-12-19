var express = require('express');
var router = express.Router();
var path = require("path");
/* GET home page. */
router.get("/index",function (req, res) {
    res.sendFile(path.join(__dirname, '../html/store.html'));
});

module.exports = router;
