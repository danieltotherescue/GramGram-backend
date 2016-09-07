var Composition = require('../models/composition');

module.exports = {
  create: create,
  show: show
}

function create(req, res) {
  var composition = new Composition(req.body);

  composition.save(function(error){
    if(error) res.json({message: 'Could not ceate message b/c: ' + error});
    res.json({composition:composition});
  })
}
