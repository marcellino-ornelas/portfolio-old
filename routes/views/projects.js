var keystone = require('keystone');
const Project = keystone.list('Project');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'projects';

  Project.model.find()
    .exec()
    .then(function( projects ){

      locals.projects = projects;
      view.render('projects/index');

    })
    .catch(function(err){
      console.log(err)
      req.flash('error','something went wrong')
      res.redirect('/');

    })


  // Render the view
};
