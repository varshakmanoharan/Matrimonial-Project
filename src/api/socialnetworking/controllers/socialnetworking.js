'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::socialnetworking.socialnetworking', ({ strapi }) => ({
  async sendRequest(ctx) {
    try {
      const { user1, user2 } = ctx.request.body;

      // Check if the connection request already exists
      const existingRequest = await strapi.entityService.findMany('api::socialnetworking.socialnetworking', {
        filters: { user1, user2 }
      });
      if (existingRequest.length > 0) {
        return ctx.badRequest('Connection request already exists.');
      }

      // Create the connection request with status 'Send Request'
      const connection = await strapi.entityService.create('api::socialnetworking.socialnetworking', {
        data: { user1, user2, status: 'Send Request' },
      });

      ctx.send({ success: true, message: 'Connection request sent successfully', connection });
    } catch (err) {
      ctx.send({ success: false, message: 'Failed to send connection request', error: err.message });
    }
  },

  async acceptRequest(ctx) {
    try {
      const { id } = ctx.params;

      // Update the connection request status to 'Accepted'
      const connection = await strapi.entityService.update('api::socialnetworking.socialnetworking', id, {
        data: { status: 'Accepted' },
      });

      if (!connection) {
        return ctx.notFound('Connection request not found.');
      }

      ctx.send({ success: true, message: 'Connection request accepted', connection });
    } catch (err) {
      ctx.send({ success: false, message: 'Failed to accept connection request', error: err.message });
    }
  },

  async rejectRequest(ctx) {
    try {
      const { id } = ctx.params;

      // Update the connection request status to 'Blocked'
      const connection = await strapi.entityService.update('api::socialnetworking.socialnetworking', id, {
        data: { status: 'Blocked' },
      });

      if (!connection) {
        return ctx.notFound('Connection request not found.');
      }

      ctx.send({ success: true, message: 'Connection request rejected', connection });
    } catch (err) {
      ctx.send({ success: false, message: 'Failed to reject connection request', error: err.message });
    }
  },
}));
