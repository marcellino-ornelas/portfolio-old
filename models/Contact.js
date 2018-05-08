const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Contact Model
 * ==========
 */
const Contact = new keystone.List('Contact',{
  nocreate: true
});

Contact.add({
  name: { type: Types.Name, required: true },
  email: { type: Types.Email, required: true },
  description: { type: Types.Textarea, required: true },
  date: { type: Types.Date, default: Date.now }
});

/**
 * Registration
 */
Contact.defaultColumns = 'name, email, isAdmin';
Contact.register();
