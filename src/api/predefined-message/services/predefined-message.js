'use strict';

/**
 * predefined-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::predefined-message.predefined-message');
