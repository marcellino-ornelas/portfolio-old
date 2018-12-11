const express = require('express');
const profile = require('./profile');
const projects = require('./projects');
const contact = require('./contact');

const router = (module.exports = new express.Router());

/*
 * Project routes
 */
router.get('/projects', projects.get);

/*
 * Profile routes
 */
router.get('/profile', profile.get);

/*
 * Contact routes
 */

router.post('/contact', contact.new);
