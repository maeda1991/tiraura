var mongoose = require('mongoose');
var uuid = require('node-uuid');

mongoose.connect('mongodb://localhost/tiraura');

var postSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    default: function() {
      return uuid.v4().replace(/-/g, '')
    },
  },
  body: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

var Post = mongoose.model('post', postSchema);

module.exports.Post = Post;
