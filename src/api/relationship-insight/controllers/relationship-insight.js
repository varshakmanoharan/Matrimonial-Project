'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::relationship-insight.relationship-insight', ({ strapi }) => ({
  async createInsight(ctx) {
    try {
      const { title, content, category } = ctx.request.body.data;

      const newInsight = await strapi.entityService.create('api::relationship-insight.relationship-insight', {
        data: { title, content, category },
      });

      ctx.status = 201;
      ctx.body = {
        success: true,
        message: 'Relationship insight created successfully',
        data: newInsight,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to create relationship insight',
        error: err.message,
      };
    }
  },

  async updateInsight(ctx) {
    try {
      const { id } = ctx.params;
      const { title, content, category } = ctx.request.body.data;

      const updatedInsight = await strapi.entityService.update('api::relationship-insight.relationship-insight', id, {
        data: { title, content, category },
      });

      ctx.status = 200;
      ctx.body = {
        success: true,
        message: 'Relationship insight updated successfully',
        data: updatedInsight,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to update relationship insight',
        error: err.message,
      };
    }
  },

  async fetchInsights(ctx) {
    try {
      const insights = await strapi.entityService.findMany('api::relationship-insight.relationship-insight', {
        sort: { createdAt: 'desc' },
      });

      ctx.status = 200;
      ctx.body = {
        success: true,
        data: insights,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to fetch relationship insights',
        error: err.message,
      };
    }
  },
}));
