const keystone = require('keystone');

exports.new = function(req, res) {
	const body = req.body;
	res.locals.data = body;

	const hasNoMissingFields = !(
		!!body.firstName &&
		body.lastName &&
		body.email &&
		body.description
	);

	if (!hasNoMissingFields) {
		return res.redirect('/contact-us');
	}

	const contactInfo = {
		name: {
			first: body.firstName,
			last: body.lastName
		},
		email: body.email,
		description: body.description
	};

	const contactMessage = keystone.list('Contact').model(contactInfo);
	contactMessage.save(function(err) {
		if (err) {
			res.send({ ok: false, message: 'Email has failed to send' });
		} else {
			res.send({ ok: true, message: 'Email has sent' });
		}
	});
};
