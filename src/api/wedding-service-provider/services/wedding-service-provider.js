'use strict';

/**
 * wedding-service-provider service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wedding-service-provider.wedding-service-provider');
