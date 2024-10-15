'use strict';

/**
 * community-comment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::community-comment.community-comment');
