var mongoose = require('../config/database')

var compositionSchema = new mongoose.Schema({
  msg: { type: String },
  style: { type: String },
  notes:  { type: String }
});



// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
// composeSchema.options.toJSON = {
//   transform: function(document, returnedObject, options) {
//     delete returnedObject.password;
//     return returnedObject;
//

//   }
// };

var Composition = mongoose.model('Composition', compositionSchema);

module.exports = Composition;
