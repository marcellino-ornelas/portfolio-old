const keystone = require('keystone');
const middleware = require('./middleware');
const async = require('async');
const path = require('path');

const apiRouter = require('./api');

// Setup Route Bindings
exports = module.exports = function(app) {
	// Views
	app.use('/api/', apiRouter);

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
};
