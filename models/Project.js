var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Project Model
 * ==========
 */
const DEFAULT_PIC = {
  url: "http://www.artconnect.com/assets/default/default_project_list-7c7cb913cb130a76c51f21509f73bbb6.png"
};

var Project = new keystone.List('Project');

var storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET,
    region: process.env.S3_REGION,
    path: '/projects'
  },
  schema: {
    path: true, // optional; store the path of the file in your db
    url: true, // optional; generate & store a public URL
  },
});


Project.add({
  name: { type: Types.Text, required: true },
  description: { type: Types.Textarea },
// picture: { type: Types.Url, default: DEFAULT_PIC },
  picture: { type: Types.File, storage: storage, default: DEFAULT_PIC },
}, "Project Links",{
  github: { type: Types.Url },
  website: { type: Types.Url }
});

Project.schema.virtual('url').get(function () {
  return '/projects/' + this._id
});


/**
 * Registration
 */

Project.defaultColumns = 'name';
Project.register();
