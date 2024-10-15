'use strict';

/**
 * predefined-message router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::predefined-message.predefined-message');
