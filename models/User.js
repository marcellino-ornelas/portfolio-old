var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User');

var resumeStorage = new keystone.Storage({
	adapter: require('keystone-storage-adapter-s3'),
	s3: {
		key: process.env.S3_KEY,
		secret: process.env.S3_SECRET,
		bucket: process.env.S3_BUCKET,
		region: process.env.S3_REGION,
		path: '/resume',
		uploadParams: { ACL: 'public-read' }
	},
	schema: {
		path: true, // optional; store the path of the file in your db
		url: true // optional; generate & store a public URL
	}
});

User.add(
	{
		name: { type: Types.Name },
		email: { type: Types.Email, unique: true },
		description: { type: Types.Textarea },
		password: { type: Types.Password, initial: true, required: true },
		caption: { type: Types.Text }
	},
	'Personal',
	{
		resume: { type: Types.File, storage: resumeStorage }
	},
	'Social Websites',
	{
		github: { type: Types.Url, label: 'Github' },
		linkedIn: { type: Types.Url, label: 'Linked In' },
		website: { type: Types.Url, label: ' My Website' }
	},
	// 'Software skills',
	// {
	//   skills: { type: Types.Relationship, ref: 'Software', many: true }
	// },
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
