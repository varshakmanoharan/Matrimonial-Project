'use strict';

/**
 * vendor-directory router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::vendor-directory.vendor-directory');
