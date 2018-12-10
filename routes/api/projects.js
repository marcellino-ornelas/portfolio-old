const keystone = require('keystone');

exports.get = function(req, res) {
	keystone
		.list('Project')
		.model.find()
		.exec()
		.then(function(projects) {
			res.json({ response: 'ok', projects: projects });
		})
		.catch(function(err) {
			// res.status('404')
			res.json({ response: 'error', error: err });
		});
};
