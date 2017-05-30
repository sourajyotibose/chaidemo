var mongoose = require('mongoose');

var envSchema = new mongoose.Schema({
  envName: {
    type: String,
    required: true
  },
  uiurl: {
    type: String,
    required: true
  },
  bpmurl: {
    type:String,
    required: true
  },
  businessUnit: {
    type: String,
    required: true
  },
  hostIP: {
    type: String,
    required: true
  }
});

mongoose.model('Environments', envSchema);
