var onlyWords = {
	validate: i => !/\W/g.test(i),
	error: 'Must only contain letters'
};

/**
 * Validator for form field
 * @type {Object}
 */
export const validate = {
	email: {
		validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		error: 'Please use a valid email address',
		required: true
	},
	firstName: onlyWords,
	lastName: onlyWords,
	description: {
		validate: /\w+/,
		error: 'Can only contain letters, numbers and underscore',
		required: true
	}
};
