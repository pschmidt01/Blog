var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var CommentSchema = new Schema({
  username: String,
  email: String,
  text: String,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
CommentSchema.pre('save', function(next) {
	console.log("derp");
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});


//var Comment = mongoose.model('Comment', CommentSchema);

// make this available to our users in our Node applications
module.exports = CommentSchema;
