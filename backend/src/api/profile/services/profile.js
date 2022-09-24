'use strict';

/**
 * profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::profile.profile');
