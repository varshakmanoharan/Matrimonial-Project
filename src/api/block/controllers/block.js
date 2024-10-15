

// block.controller.js

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::block.block', ({ strapi }) => ({
  async createBlock(ctx) {
    // @ts-ignore
    const { blocked_by, blocked_profile } = ctx.request.body;

    try {
      const newBlock = await strapi.query('api::block.block').create({
        // @ts-ignore
        blocked_by,
        blocked_profile,
        status: 'block', 
      });

      return ctx.send({ data: newBlock });
    } catch (error) {
      console.error('Error creating block:', error);
      return ctx.badRequest('Error creating block');
    }
  },

  async updateBlockStatus(ctx) {
    const { id } = ctx.params;
    // @ts-ignore
    const { status } = ctx.request.body;

    try {
      const updatedBlock = await strapi.query('api::block.block').update(
        { id },
        // @ts-ignore
        { status }
      );

      return ctx.send({ data: updatedBlock });
    } catch (error) {
      console.error('Error updating block status:', error);
      return ctx.badRequest('Error updating block status');
    }
  },
}));
