/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

const keystone = require('keystone');
const middleware = require('./middleware');
const async = require('async');
const path = require('path');

const apiRouter = require('./api');

// Setup Route Bindings
exports = module.exports = function(app) {
	// Views
	app.use('/api/', apiRouter);

	app.post('/contact', function(req, res) {
		const body = req.body;
		res.locals.data = body;
		const contactInfo = {
			name: {
				first: body.firstName,
				last: body.lastName
			},
			email: body.email,
			description: body.description
		};
		async.series(
			[
				function(cb) {
					// check for empty values
					const hasNoMissingFields = !(
						!!body.firstName &&
						body.lastName &&
						body.email &&
						body.description
					);
					cb(hasNoMissingFields);
				},
				function(cb) {
					const contactMessage = keystone.list('Contact').model(contactInfo);
					contactMessage.save(cb);
				}
			],
			function(err, results) {
				if (err) {
					req.flash(
						'error',
						'Sorry! There was a problem in your form please try again.'
					);
					res.redirect('/contact-us');
				} else {
					req.flash(
						'success',
						'Thanks for contacting me! Ill get back to you as soon as possible'
					);
					res.redirect('/');
				}
			}
		);
	});

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
};
