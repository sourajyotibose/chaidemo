var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  bodytext : {
    type: String,
    required: true
  },
  createdOn : {
    type: Date,
    required: true
  }
});

var imageSchema = new mongoose.Schema({
  path : {
    type: String,
    required: true
  },
  caption : {
    type: String,
    required: true
  },
  createdOn : {
    type: Date,
    required:true
  }
});

var bodySchema = new mongoose.Schema({
  subhead: {
    type: String
  },
  text: {
    type: String,
    required: true
  }
});

var articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: [String],
    required: true
  },
  editedBy:{
    type: String,
  },
  uploadBy: {
    type: String,
    required: true
  },
  likes: {
    type: Number
  },
  comments: {
    type : [commentSchema]
  },
  images: {
    type: [imageSchema]
  },
  category: {
    type: String,
    required: true
  },
  body: {
    type : [bodySchema]
  },
  edited: {
    type: String,
    required: true,
    default: 'no'
  },
  edition: {
    type: String,
    required: true
  },
  uploadDate: {
    type: String,
    required: true
  },
  editedDate: {
    type: String
  }
});

mongoose.model('Articles', articleSchema);
