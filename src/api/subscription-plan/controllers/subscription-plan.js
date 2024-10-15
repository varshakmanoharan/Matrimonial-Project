'use strict';

/**
 * subscription-plan controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::subscription-plan.subscription-plan', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { name, price, duration, features, active, publishedAt } = ctx.request.body.data;

      // Log incoming data for debugging
      console.log('Incoming data:', ctx.request.body);

      // Validate required fields
      if (!name || typeof name !== 'string') {
        return ctx.badRequest('Name is required and must be a string');
      }
      if (price === undefined || price === null || typeof price !== 'number') {
        return ctx.badRequest('Price is required and must be a number');
      }
      if (!duration || typeof duration !== 'string') {
        return ctx.badRequest('Duration is required and must be a string');
      }
      if (!features || typeof features !== 'string') {
        return ctx.badRequest('Features are required and must be a string');
      }
      if (typeof active !== 'boolean') {
        return ctx.badRequest('Active status is required and must be a boolean');
      }
      if (publishedAt !== undefined && isNaN(new Date(publishedAt))) {
        return ctx.badRequest('Published date must be a valid date');
      }

      // Create subscription plan
      const newPlan = await strapi.entityService.create('api::subscription-plan.subscription-plan', {
        data: {
          name,
          price,
          duration,
          features,
          active,
          publishedAt,
        },
      });

      ctx.send({ data: newPlan });
    } catch (err) {
      console.error('Error creating subscription plan:', err);
      ctx.throw(500, 'Failed to create subscription plan');
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      if (!id) {
        return ctx.badRequest('ID is required');
      }

      await strapi.entityService.delete('api::subscription-plan.subscription-plan', id);

      ctx.send({ message: 'Subscription plan deleted successfully' });
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async find(ctx) {
    try {
      const plans = await strapi.entityService.findMany('api::subscription-plan.subscription-plan');
      ctx.send(plans);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const plan = await strapi.entityService.findOne('api::subscription-plan.subscription-plan', id);

      if (!plan) {
        return ctx.notFound('Subscription plan not found');
      }

      ctx.send(plan);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { name, price, duration, features, active, publishedAt } = ctx.request.body.data;

      // Validate required fields
      if (name !== undefined && (typeof name !== 'string' || !name)) {
        return ctx.badRequest('Name must be a string');
      }
      if (price !== undefined && (price === null || typeof price !== 'number')) {
        return ctx.badRequest('Price must be a number');
      }
      if (duration !== undefined && (typeof duration !== 'string' || !duration)) {
        return ctx.badRequest('Duration must be a string');
      }
      if (features !== undefined && (typeof features !== 'string' || !features)) {
        return ctx.badRequest('Features must be a string');
      }
      if (active !== undefined && typeof active !== 'boolean') {
        return ctx.badRequest('Active status must be a boolean');
      }
      if (publishedAt !== undefined && isNaN(new Date(publishedAt))) {
        return ctx.badRequest('Published date must be a valid date');
      }

      // Check if the subscription plan exists
      const existingPlan = await strapi.entityService.findOne('api::subscription-plan.subscription-plan', id);
      if (!existingPlan) {
        return ctx.notFound('Subscription plan not found');
      }

      // Update the subscription plan
      const updatedPlan = await strapi.entityService.update('api::subscription-plan.subscription-plan', id, {
        data: {
          name,
          price,
          duration,
          features,
          active,
          publishedAt,
        },
      });

      ctx.send({ data: updatedPlan });
    } catch (err) {
      console.error('Error updating subscription plan:', err);
      ctx.throw(500, 'Failed to update subscription plan');
    }
  },
}));
