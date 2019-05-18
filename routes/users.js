var express = require('express');
var router = express.Router();

var userList = [
  {id: 1, name: '张三', age: 26, phone: 15075843548, address: '上海'},
  {id: 2, name: '李四', age: 16, phone: 15045589548, address: '广州'},
  {id: 3, name: '王五', age: 26, phone: 18945849948, address: '北京'}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(userList);
});

module.exports = router;
