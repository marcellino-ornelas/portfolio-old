var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Software Model
 * ==========
 */

var Education = new keystone.List('Education', {
  defaultColumns: 'name, type, startDate',
  defaultSort: 'startDate'
});

Education.add({
  name: { type: Types.Text, required: true, initial: true },
  type: {
    type: Types.Select,
    options: 'College, Bootcamp',
    required: true,
    initial: true,
    default: 'Bootcamp'
  },
  description: { type: Types.Textarea },
  startDate: { type: Types.Date },
  endDate: { type: Types.Date },
  degree: { type: Types.Text, default: 'None' }
});

/**
 * Registration
 */

Education.register();

/**
 * Data Generator
 */
