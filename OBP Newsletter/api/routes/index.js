var express = require('express');
var router = express.Router();

var ctrlArticles = require('../controllers/articles.controller.js');

router
  .route('/articles')
  .get(ctrlArticles.articlesGetAll);

router
  .route('/articles/:id')
  .get(ctrlArticles.articleGetOne);

module.exports = router;
