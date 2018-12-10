const express = require('express');
const profile = require('./profile');
const projects = require('./projects');

const router = (module.exports = new express.Router());

/*
 * Project routes
 */
router.get('/projects', projects.get);

/*
 * Profile routes
 */
router.get('/profile', profile.get);
