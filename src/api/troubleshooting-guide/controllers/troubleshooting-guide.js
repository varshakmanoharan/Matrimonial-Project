'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

// @ts-ignore
module.exports = createCoreController('api::troubleshooting-guide.troubleshooting-guide', ({ strapi }) => ({
  async create(ctx) {
    try {
      // @ts-ignore
      const { issue, solution } = ctx.request.body.data;

      const troubleshootingGuide = await strapi.entityService.create('api::troubleshooting-guide.troubleshooting-guide', {
        data: { issue, 
            solution,
            publishedAt: new Date().toISOString(), 
        },
      });

      return ctx.send({ data: troubleshootingGuide });
    } catch (error) {
      console.error('Error creating troubleshooting guide:', error);
      return ctx.badRequest('Failed to create troubleshooting guide');
    }
  },

  async find(ctx) {
    try {
      const troubleshootingGuides = await strapi.entityService.findMany('api::troubleshooting-guide.troubleshooting-guide');

      return ctx.send({ data: troubleshootingGuides });
    } catch (error) {
      console.error('Error fetching troubleshooting guides:', error);
      return ctx.badRequest('Failed to fetch troubleshooting guides');
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const troubleshootingGuide = await strapi.entityService.findOne('api::troubleshooting-guide.troubleshooting-guide', id);

      if (!troubleshootingGuide) {
        ctx.status = 404;
        return ctx.send({ error: 'Troubleshooting guide not found' });
      }

      return ctx.send({ data: troubleshootingGuide });
    } catch (error) {
      console.error('Error fetching troubleshooting guide:', error);
      return ctx.badRequest('Failed to fetch troubleshooting guide');
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      // @ts-ignore
      const { issue, solution } = ctx.request.body.data;

      const updatedTroubleshootingGuide = await strapi.entityService.update('api::troubleshooting-guide.troubleshooting-guide', id, {
        data: { issue, solution },
      });

      return ctx.send({ data: updatedTroubleshootingGuide });
    } catch (error) {
      console.error('Error updating troubleshooting guide:', error);
      return ctx.badRequest('Failed to update troubleshooting guide');
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      await strapi.entityService.delete('api::troubleshooting-guide.troubleshooting-guide', id);

      return ctx.send({ message: 'Troubleshooting guide deleted successfully' });
    } catch (error) {
      console.error('Error deleting troubleshooting guide:', error);
      return ctx.badRequest('Failed to delete troubleshooting guide');
    }
  },
}));
