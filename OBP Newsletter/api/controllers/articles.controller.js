var mongoose = require('mongoose');
var Articles = mongoose.model('Articles');

module.exports.articlesGetAll = function(req, res) {
  console.log('GET all articles');
  Articles.
    find().
    exec(function(err, articles) {
      console.log(err);
      if (err) {
        console.log("Error finding articles");
        res
          .status(500)
          .json(err);
        } else {
          console.log("Found articles", articles.length);
          res.json(articles);
        }
    });
};

module.exports.articleGetOne = function(req, res) {
  var id = req.params.articleId;
  console.log('GET the article ',article );

  Articles.
    findById(id).
    exec(function(err, article) {
      console.log(err);
      if (err) {
        console.log("Error finding articles");
        res
          .status(500)
          .json(err);
        } else {
          console.log("Found article");
          res.json(article);
        }
    });
};
