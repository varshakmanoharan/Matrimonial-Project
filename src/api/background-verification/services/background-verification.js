'use strict';

/**
 * background-verification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::background-verification.background-verification');
