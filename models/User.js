var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User');

User.add(
  {
    name: { type: Types.Name },
    email: { type: Types.Email, unique: true },
    description: { type: Types.Textarea },
    password: { type: Types.Password, initial: true, required: true },
    caption: { type: Types.Text }
  },
  'Social Websites',
  {
    github: { type: Types.Url, label: 'Github' },
    linkedIn: { type: Types.Url, label: 'Linked In' },
    website: { type: Types.Url, label: ' My Website' }
  },
  'Permissions',
  {
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
  }
);

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
  return this.isAdmin;
});

User.schema.virtual('fullName').get(function() {
  return this.name.first + ' ' + this.name.last;
});

/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
