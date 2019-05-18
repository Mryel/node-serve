var express = require('express');
var router = express.Router();
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();

router.post('/', function (req, res, next) {
    var data = {
        id: 4,
        name: req.body.name,
        age: 25,
        phone: 110,
        address: '深圳'
    }
    var result = {
        res: 'add success',
        data: data
    }
    res.send(result)
})

module.exports = router