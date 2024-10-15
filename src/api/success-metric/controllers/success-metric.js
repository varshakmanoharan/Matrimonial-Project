'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::success-metric.success-metric', ({ strapi }) => ({
  async updateMetrics(ctx) {
    try {
      // @ts-ignore
      const { type } = ctx.request.body;

      // Validate the metric type
      if (!['number_of_matches', 'successful_connections', 'marriages'].includes(type)) {
        ctx.status = 400;
        ctx.body = {
          success: false,
          message: 'Invalid metric type',
        };
        return;
      }

      // Fetch the existing metrics entry (assuming there's only one)
      let metrics = await strapi.entityService.findMany('api::success-metric.success-metric', {
        limit: 1,
      });

      if (metrics.length === 0) {
        // Create a new metrics entry if none exists
        // @ts-ignore
        metrics = await strapi.entityService.create('api::success-metric.success-metric', {
          data: {
            successful_connections: 0,
            number_of_matches: 0,
            marriages: 0,
            last_updated: new Date(),
          },
        });
      } else {
        // @ts-ignore
        metrics = metrics[0];
      }

      // Update the specified metric
      const updatedMetrics = {
        ...metrics,
        // @ts-ignore
        [type]: metrics[type] + 1,
        last_updated: new Date(),
      };

      // Save the updated metrics
      // @ts-ignore
      await strapi.entityService.update('api::success-metric.success-metric', metrics.id, {
        data: updatedMetrics,
      });

      ctx.status = 200;
      ctx.body = {
        success: true,
        message: `${type} updated successfully`,
        data: updatedMetrics,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to update metrics',
        error: err.message,
      };
    }
  },
}));
