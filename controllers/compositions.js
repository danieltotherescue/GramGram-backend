var Composition = require('../models/composition');

module.exports = {
  index: index,
  create: create,
  show: show
}

// GET /compositions
function index(request, response) {
  Composition.find({}, function(error, compositions) {
    if(error) response.json({message: 'Could not find any compositions'});

    response.json({compositions: compositions});
  }).select('-__v');
}

function create(req, res) {
  var composition = new Composition(req.body);

  composition.user = req.decoded._id

  composition.save(function(error){
    if(error) res.json({message: 'Could not ceate message b/c: ' + error});
    res.json({composition: composition});
  })
}

// GET /compositions/:id
function show(request, response) {
  var id = request.params.id;

  Composition.findById({_id: id}, function(error, composition) {
    if(error) response.json({message: 'Could not find composition b/c:' + error});

    response.json({composition: composition});
  }).select('-__v');
}
