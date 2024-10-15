'use strict';

/**
 * vendor-directory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vendor-directory.vendor-directory');
