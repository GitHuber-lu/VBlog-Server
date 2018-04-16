const express = require('express');
const router = express.Router();
const logger = require('../logs/log').logger;
const mongoose = require('mongoose');
const Article = mongoose.model('Article');

//发布文章
router.put('/publishArticle', function (req, res, next) {
  let _title = req.body.title;
  let _content = req.body.content;
  let article = new Article({
    title: _title,
    content: _content
  })
  article.save((err, doc) => {
    if (err) {
      logger.error(err);
      return res.json({ code: 'error', data: null, message: '数据库保存出错' })
    }
    return res.json({ code: 'success', data: null, message: '发布文章成功' })
  })

});

module.exports = router;