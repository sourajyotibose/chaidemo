var mongoose = require('mongoose');
var Environments = mongoose.model('Environments');

module.exports.envGetAll = function(req, res) {
  console.log('GET the environment');

  Environments
    .find()
    .exec(function(err, envs) {
      console.log(err);
      if (err) {
        console.log("Error finding environments");
        res
          .status(500)
          .json(err);
      } else {
        console.log("Found environments", envs.length);
        res.json(envs);
      }
    });
};

module.exports.envGetSingleEnv = function(req, res) {
console.log('GET a single environment');
  var env = req.params.envId;

  Environments
    .find({
      envName: env
    })
    .exec(function(err, envs) {
      if (err) {
          console.log(err);
          res
          .status(500)
          .json(err);
      } else {
        console.log("Found environments", envs.length);
        res.json(envs);
      }
    });
};

module.exports.releaseGetAll = function(req, res) {
  console.log('GET the releases');

  Environments
    .find()
    .distinct('release')
    .exec(function(err, releases) {
      console.log(err);
      if (err) {
        console.log("Error finding environments");
        res
          .status(500)
          .json(err);
      } else {
        console.log("Found environments and releases", releases.length);
        res.json(releases);
      }
    });
};
