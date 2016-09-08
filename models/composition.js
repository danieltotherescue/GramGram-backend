var mongoose = require('../config/database')

var compositionSchema = new mongoose.Schema({
  msg: { type: String },
  style: { type: String },
  notes:  { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  //submissions are in an array bc there can be many submissions to the same message
  submissions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Submission'}]
});



var Composition = mongoose.model('Composition', compositionSchema);

module.exports = Composition;
