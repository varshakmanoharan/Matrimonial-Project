'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::report.report', ({ strapi }) => ({
  async createReport(ctx) {
    // @ts-ignore
    const { reported_user, reason } = ctx.request.body;
    const { id: reporting_user } = ctx.state.user;

    try {
      const newReport = await strapi.query('api::report.report').create({
        // @ts-ignore
        reported_user,
        reporting_user,
        reason,
        status: 'pending', // Assuming 'pending' is the default status for new reports
      });

      return ctx.send({ data: newReport });
    } catch (error) {
      console.error('Error creating report:', error);
      return ctx.badRequest('Error creating report');
    }
  },

  async updateReport(ctx) {
    const { id } = ctx.params;
    // @ts-ignore
    const { status } = ctx.request.body;

    try {
      const updatedReport = await strapi.query('api::report.report').update(
        { id },
        // @ts-ignore
        { status }
      );

      return ctx.send({ data: updatedReport });
    } catch (error) {
      console.error('Error updating report:', error);
      return ctx.badRequest('Error updating report');
    }
  },
}));
