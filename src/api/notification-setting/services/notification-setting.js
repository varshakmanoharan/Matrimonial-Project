'use strict';

/**
 * notification-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::notification-setting.notification-setting');
