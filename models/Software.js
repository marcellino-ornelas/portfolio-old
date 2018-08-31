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
    initial: true,
    default: 1
  },
  years: { type: Number, validateRequiredInput: true }
});

/**
 * Registration
 */

Software.register();

/**
 * Data Generator
 */

// data = ['CSS', 'Ruby', 'PHP', 'Nginx'].map(function(item) {
//   return {
//     name: item,
//     type: 'Software language'
//   };
// });

// data1 = [
//   'AngularJS',
//   'React',
//   'Backbone',
//   'jQuery',
//   'Underscore',
//   'Wordpress',
//   'Ruby on Rails',
//   'Jest',
//   'Sass',
//   'Less',
//   'Node',
//   'Expres'
// ].map(function(item) {
//   return {
//     name: item,
//     type: 'Library/Framework'
//   };
// });

// data2 = ['MongoDB', 'MySQL', 'PostgreSQl', 'Cassandra'].map(function(item) {
//   return {
//     name: item,
//     type: 'Database'
//   };
// });

// data3 = [
//   'Webpack',
//   'Babel',
//   'GiT',
//   'Docker',
//   'AWS',
//   'GrunT',
//   'CircleCI',
//   'NPM'
// ].map(function(item) {
//   return {
//     name: item,
//     type: 'Software tool'
//   };
// });

// console.log(
//   Software.model.insertMany(data1, function(err, item) {
//     err ? console.log(err) : console.log('done');
//   })
// );

// console.log(
//   Software.model.insertMany(data2, function(err, item) {
//     err ? console.log(err) : console.log('done');
//   })
// );

// console.log(
//   Software.model.insertMany(data3, function(err, item) {
//     err ? console.log(err) : console.log('done');
//   })
// );
