var Submission = require('../models/submission');

module.exports = {
  index: index,
  create: create,
  show: show
}

// GET /submissions
function index(request, response) {
  // ).populate('composition').exec(
  Submission.find({}).populate('composition').select('-__v').exec(function(error, submissions) {
    if(error) response.json({message: 'Could not find any submissions'});

    response.json({submissions: submissions});
  })
  // Submission.find({},function(error, submissions) {
  //   if(error) response.json({message: 'Could not find any submissions'});
  //
  //   response.json({submissions: submissions});
  // }).select('-__v');
}

function create(req, res) {
  var submission = new Submission(req.body);
  //decode the user token
  console.log(req.body)
  submission.user = req.decoded._id

  submission.save(function(error){
    if(error) res.json({message: 'Could not ceate message b/c: ' + error});
    res.json({submission: submission});
  })
}

// GET /submissions/:id
function show(request, response) {
  var id = request.params.id;

  Submission.findById({_id: id}, function(error, submission) {
    if(error) response.json({message: 'Could not find submission b/c:' + error});

    response.json({submission: submission});
  }).select('-__v');
}
