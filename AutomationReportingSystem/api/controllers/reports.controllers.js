var mongoose = require('mongoose');
var Reports = mongoose.model('Report');
var Environments = mongoose.model('Environments');

module.exports.reportsGetAll = function(req, res) {

  console.log('GET the reports');
  console.log(req.query);

  var offset= 0;
  var count= 100;

  //Change the offset to the offset present in the URl if stated
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  //Change the count to the count present in the URl if stated
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  Reports
  .find()
  .skip(offset)
  .limit(count)
  .exec(function(err, reports) {
    console.log(err);
    if (err) {
      console.log("Error finding reports");
      res
      .status(500)
      .json(err);
    } else {
      console.log("Found reports", reports.length);
      res
      .json(reports);
    }
  });
};

//Get single report from Database
module.exports.reportsGetOne = function(req, res) {
  var id = req.params.reportId;
  console.log('GET reportId', id);

  Reports
  .findById(id)
  .exec(function(err, doc) {
    var response = {
      status : 200,
      message : doc
    };
    if (err) {
      console.log("Error finding report");
      response.status = 500;
      response.message = err;
    } else if(!doc) {
      console.log("Report Id not found in database", id);
      response.status = 404;
      response.message = {
        "message" : "Report ID not found " + id
      };
    }
    res
    .status(response.status)
    .json(response.message);
  });
};

//Get report by current Date
module.exports.reportsGetByCurrentDate = function(req, res) {

  var env = req.params.envId;
  var type = req.params.type;
  console.log('GET reports by date for Environment:', env);
  var d = new Date();
  console.log(d);
  var temp = d.toISOString();
  var curDate = temp.substr(0,10);
  console.log(curDate);

  Reports
  .find({
    buildDate: curDate,
    environment: env,
    type: type
  })
  .exec(function(err, doc) {
    var response = {
      status : 200,
      message : doc
    };
    if (err) {
      console.log('Error');
      response.status = 500;
      response.message = err;
    } else if (!doc) {
      console.log("Documents against the date not found in database" ,curDate);
      response.status = 404;
      response.message = {
        "message" : "Documents not found for " + curDate
      };
    }
    res
    .status(response.status)
    .json(response.message);
  });
};

//GET report by given date
module.exports.reportsGetByGivenDate = function(req, res) {

  var givenDate = req.params.date;
  var env = req.params.envId;
  var type = req.params.type;
  console.log(givenDate);
  console.log(env);
  Reports
  .find({
    buildDate: givenDate,
    environment: env,
    type: type
  })
  .exec(function(err, doc) {
    var response = {
      status : 200,
      message : doc
    };
    if (err) {
      console.log('Error');
      response.status = 500;
      response.message = err;
    } else if (!doc) {
      console.log("Documents against the date not found in database" ,curDate);
      response.status = 404;
      response.message = {
        "message" : "Documents not found for " + curDate
      };
    }
    res
    .status(response.status)
    .json(response.message);
  });
};

//Update JIRAs
module.exports.updateJira = function(req, res) {
  var id = req.params.id;
  var jiraNumber = req.params.number;
  console.log('GET Id', id);
  console.log('GET jiraNumber', jiraNumber);

  Reports
  .findById(id)
  .select('jiras')
  .exec(function(err, report) {
    if (err) {
      console.log("Error finding hotel");
      res
        .status(500)
        .json(err);
        return;
    } else if(!report) {
      console.log("ReportId not found in database", id);
      res
        .status(404)
        .json({
          "message" : "Report ID not found " + id
        });
        return;
    }

    report.jiras = jiraNumber;
    report
      .save(function(err, reportUpdated) {
        if(err) {
          res
            .status(500)
            .json(err);
        } else {
          res
            .status(204)
            .json();
        }
      });
  });
};

//Update Comment
module.exports.updateComment = function(req, res) {
  var id = req.params.id;
  var comment = req.params.comment;
  console.log('GET Id', id);
  console.log('GET Comment', comment);

  Reports
  .findById(id)
  .select('comment')
  .exec(function(err, report) {
    if (err) {
      console.log("Error finding hotel");
      res
        .status(500)
        .json(err);
        return;
    } else if(!report) {
      console.log("ReportId not found in database", id);
      res
        .status(404)
        .json({
          "message" : "Report ID not found " + id
        });
        return;
    }

    report.comment = comment;
    report
      .save(function(err, reportUpdated) {
        if(err) {
          res
            .status(500)
            .json(err);
        } else {
          res
            .status(204)
            .json();
        }
      });
  });
};

//Update Result
module.exports.updateResult = function(req, res) {
  var id = req.params.id;
  var result = req.params.result;
  console.log('GET Id', id);
  console.log('GET Result', result);

  Reports
  .findById(id)
  .select('result')
  .exec(function(err, report) {
    if (err) {
      console.log("Error finding hotel");
      res
        .status(500)
        .json(err);
        return;
    } else if(!report) {
      console.log("ReportId not found in database", id);
      res
        .status(404)
        .json({
          "message" : "Report ID not found " + id
        });
        return;
    }

    report.result = result;
    report
      .save(function(err, reportUpdated) {
        if(err) {
          res
            .status(500)
            .json(err);
        } else {
          res
            .status(204)
            .json();
        }
      });
  });
};
