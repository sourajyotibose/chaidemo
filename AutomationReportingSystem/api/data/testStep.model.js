var mongoose = require('mongoose');

var testStepSchema = new mongoose.Schema({
  testCaseID :{
    type: String,
    required: true
  },
  testStepId: {
    type: String,
    required: true
  },
  toBeExecuted: {
    type: String,
    required: true
  },
  keyWord: {
    type: String,
    required: true
  },
  fieldName: {
    type: String,
    required: true
  },
  fieldDefinition: {
    type: String,
    required: true
  },
  dataType: {
    type: String,
    required: true
  },
  iterateField: {
    type: String,
    required: true
  },
  storeData: {
    type: String,
    required: true
  },
  iterateWith: {
    type: String,
    required: true
  },
  runTime: {
    type: String,
    required: true
  },
  testStepResult: {
    type: Boolean,
    required: true
  }
});

var reportSchema = new mongoose.Schema({
  testCaseID: {
    type: String,
    required: true
  },
  testScreenID: {
    type: String,
    required: true
  },
  steps : {
    type: [testStepSchema],
    required: true
  },
  buildDate: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  screenShotPath: {
    type: String,
    required: true
  },
  reasonFailure: {
    type: String,
    required: true
  },
  failLog: {
    type: String,
    required: true
  },
  finalLog: {
    type: String,
    required: true
  },
  jiras : [{
    type: String
  }],
  environment: {
    type: String,
    required: true
  },
  comment: [{
      type: String
  }]
});

mongoose.model('Report', reportSchema);
