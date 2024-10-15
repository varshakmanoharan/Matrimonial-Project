'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::purchase.purchase', ({ strapi }) => ({
  async create(ctx) {
    // @ts-ignore
    const { member, subscription_plan, type, payment_method } = ctx.request.body.data;

    if (!member || !subscription_plan || !type || !payment_method) {
      return ctx.badRequest('Missing required fields');
    }

    try {
      // Fetch the selected subscription plan to get its duration
      const plan = await strapi.entityService.findOne('api::subscription-plan.subscription-plan', subscription_plan);

      if (!plan) {
        return ctx.badRequest('Invalid subscription plan');
      }

      const purchase_date = new Date();
      const expiry_date = new Date(purchase_date);

      // Parse the duration and calculate the expiry date
      const durationParts = plan.duration.split(' ');
      const durationValue = parseInt(durationParts[0], 10);
      const durationUnit = durationParts[1].toLowerCase();

      if (isNaN(durationValue)) {
        return ctx.badRequest('Invalid plan duration');
      }

      switch (durationUnit) {
        case 'month':
        case 'months':
          expiry_date.setMonth(expiry_date.getMonth() + durationValue);
          break;
        case 'year':
        case 'years':
          expiry_date.setFullYear(expiry_date.getFullYear() + durationValue);
          break;
        default:
          return ctx.badRequest('Invalid duration unit');
      }

      const newPurchase = await strapi.entityService.create('api::purchase.purchase', {
        data: { member, subscription_plan, purchase_date, expiry_date, type, payment_method , publishedAt: new Date(),},
      });

      return ctx.send({ data: newPurchase });
    } catch (err) {
      console.error('Error creating purchase:', err);
      return ctx.badRequest('Failed to create purchase');
    }
  },

  async find(ctx) {
    try {
      const purchases = await strapi.entityService.findMany('api::purchase.purchase');
      return ctx.send({ data: purchases });
    } catch (err) {
      console.error('Error fetching purchases:', err);
      return ctx.badRequest('Failed to fetch purchases');
    }
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    try {
      const purchase = await strapi.entityService.findOne('api::purchase.purchase', id);
      if (!purchase) {
        return ctx.notFound('Purchase not found');
      }
      return ctx.send({ data: purchase });
    } catch (err) {
      console.error('Error fetching purchase:', err);
      return ctx.badRequest('Failed to fetch purchase');
    }
  },

  async update(ctx) {
    const { id } = ctx.params;
    // @ts-ignore
    const { member, subscription_plan, type, payment_method } = ctx.request.body.data;

    if (!member || !subscription_plan || !type || !payment_method) {
      return ctx.badRequest('Missing required fields');
    }

    try {
      // Fetch the selected subscription plan to get its duration
      const plan = await strapi.entityService.findOne('api::subscription-plan.subscription-plan', subscription_plan);

      if (!plan) {
        return ctx.badRequest('Invalid subscription plan');
      }

      const purchase_date = new Date();
      const expiry_date = new Date(purchase_date);

      // Parse the duration and calculate the expiry date
      const durationParts = plan.duration.split(' ');
      const durationValue = parseInt(durationParts[0], 10);
      const durationUnit = durationParts[1].toLowerCase();

      if (isNaN(durationValue)) {
        return ctx.badRequest('Invalid plan duration');
      }

      switch (durationUnit) {
        case 'month':
        case 'months':
          expiry_date.setMonth(expiry_date.getMonth() + durationValue);
          break;
        case 'year':
        case 'years':
          expiry_date.setFullYear(expiry_date.getFullYear() + durationValue);
          break;
        default:
          return ctx.badRequest('Invalid duration unit');
      }

      const updatedPurchase = await strapi.entityService.update('api::purchase.purchase', id, {
        data: { member, subscription_plan, purchase_date, expiry_date, type, payment_method, publishedAt: new Date(),},
      });

      return ctx.send({ data: updatedPurchase });
    } catch (err) {
      console.error('Error updating purchase:', err);
      return ctx.badRequest('Failed to update purchase');
    }
  },
}));
