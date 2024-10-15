'use strict';

/**
 * budget-calculator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::budget-calculator.budget-calculator');
