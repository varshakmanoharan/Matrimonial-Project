'use strict';

/**
 * privacy-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::privacy-setting.privacy-setting');
