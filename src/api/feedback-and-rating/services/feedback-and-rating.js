'use strict';

/**
 * feedback-and-rating service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feedback-and-rating.feedback-and-rating');
