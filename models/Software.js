var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Software Model
 * ==========
 */

var Software = new keystone.List('Software', {
	defaultColumns: 'name, type',
	defaultSort: 'type'
});

Software.add({
	name: { type: Types.Text, required: true, initial: true },
	type: {
		type: Types.Select,
		options: 'Database, Software language, Software tool, Library/Framework',
		required: true,
		initial: true
	},
	years: { type: Number, default: 1 }
});

/**
 * Registration
 */
Software.register();
