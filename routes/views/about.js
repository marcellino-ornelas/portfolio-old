var keystone = require('keystone');
const User = keystone.list.model

exports = module.exports = function (req, res) {

  // var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'About';

  // locals.section is used to set the currently selected
  // item in the header navigation.

  // Render the view
    res.render('main/about');
};
