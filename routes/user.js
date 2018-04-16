const express = require('express');
const router = express.Router();
const logger = require('../logs/log').logger;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('../config/config.js');

//用户登录
router.get('/login', function (req, res, next) {
  const _username = req.query.username;
  const _password = req.query.password;
  User.findOne({ username: _username }, function (err, doc) {
    if (err) {
      logger.error(err);
      res.json({ code: 600, data: null, message: '查询失败' });
      return;
    }
    if (doc) {
      bcrypt.compare(_password, doc.password, function (err, flag) {
        if (flag) {
          const _token = jwt.sign({ name: _username }, 'config.Token.secret', {
            expiresIn: config.Token.expires
          });
          return res.json({ code: 200, data: { token: _token }, message: '验证通过' });
        }
        return res.json({ code: 600, data: null, message: '用户名或密码错误' });
      });
    }else{
      return res.json({ code: 600, data: null, message: '用户名或密码错误' });
    }
  })

});

//用户注册
router.put('/register', function (req, res, next) {
  const _username = req.query.username;
  const _password = req.query.password;
  User.findOne({ username: _username }, function (err, doc) {
    if (err) {
      logger.error(err);
      res.json({ code: 600, data: null, message: '查询失败' });
      return;
    }
    if (doc && doc.username === _username) {
      return res.json({ code: 601, data: null, message: '用户名已存在' });
    }
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(_password, salt, function (err, hash) {
        let user = new User({
          username: _username,
          password: hash
        })
        user.save(function (err, doc) {
          if (err) {
            logger.error(err);
            return res.json({ code: 600, data: null, message: '创建用户失败' });
          }
          return res.json({ code: 200, data: null, message: '成功创建用户' });
        })
      });
    });
  })

});

module.exports = router;