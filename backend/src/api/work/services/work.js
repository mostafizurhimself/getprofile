'use strict';

/**
 * work service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work.work');
