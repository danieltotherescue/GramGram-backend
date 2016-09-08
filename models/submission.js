var mongoose = require('../config/database')

var submissionSchema = new mongoose.Schema({
  title: { type: String },
  link: { type: String },
  comments:  { type: String },
  socialMediaLinks:  { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  composition: { type: mongoose.Schema.Types.ObjectId, ref: 'Composition' }
});



var Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
