const keystone = require('keystone');

/**
 * [SIGNED_IN description]
 * @type {Object}
 */
const SIGNED_IN = {
	ok: true,
	signedIn: true
};

/**
 * [NOT_SIGNED_IN description]
 * @type {Object}
 */
const NOT_SIGNED_IN = {
	ok: true,
	signedIn: false
};

exports.checkAuthStatus = function(req, res) {
	const status = req.user ? SIGNED_IN : NOT_SIGNED_IN;

	res.json(status);
};

exports.signOut = function(req, res) {
	keystone.session.signOut(req, res, function() {
		res.json(NOT_SIGNED_IN);
	});
};
