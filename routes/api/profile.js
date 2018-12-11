const keystone = require('keystone');

exports.get = function(req, res) {
	keystone
		.list('User')
		.model.findOne({ isAdmin: true })
		.exec()
		.then(function(profile) {
			res.json({ response: 'ok', profile: profile });
		})
		.catch(function(err) {
			res.json({ response: 'error', error: err });
		});
};
