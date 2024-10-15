'use strict';

/**
 * message controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::message.message', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Get the request body data
      // @ts-ignore
      const { sender_id, receiver_id, content } = ctx.request.body.data;

      // Ensure sender and receiver are not the same
      if (sender_id === receiver_id) {
        return ctx.badRequest('Sender and receiver cannot be the same user.');
      }

      // Create the message with the current timestamp
      const message = await strapi.entityService.create('api::message.message', {
        data: {
          sender_id,
          receiver_id,
          content,
          timestamp: new Date(),
          publishedAt:new Date().toISOString(),
        },
      });

      // Return the created message
      return ctx.created({ data: message });
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async find(ctx) {
    const { sender_id, receiver_id } = ctx.query;

    if (!sender_id || !receiver_id) {
      return ctx.badRequest('Sender and receiver IDs are required.');
    }

    // Retrieve messages between the two users
    const messages = await strapi.entityService.findMany('api::message.message', {
      filters: {
        $or: [
          // @ts-ignore
          { sender_id, receiver_id },
          // @ts-ignore
          { sender_id: receiver_id, receiver_id: sender_id },
        ],
      },
      sort: { timestamp: 'asc' },
    });

    // Return the messages
    return ctx.send({ data: messages });
  },
  async update(ctx) {
    try {
      const { id } = ctx.params;
      // @ts-ignore
      const { content } = ctx.request.body.data;

      // Validate that content is provided
      if (!content) {
        return ctx.badRequest('Content is required.');
      }

      // Update the message
      const updatedMessage = await strapi.entityService.update('api::message.message', id, {
        data: {
          content,
          timestamp: new Date(), // Optionally update the timestamp
        },
      });

      // Return the updated message
      return ctx.send({ success: true, message: 'Message updated successfully', data: updatedMessage });
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      // Delete the message
      await strapi.entityService.delete('api::message.message', id);

      // Return success response
      return ctx.send({ success: true, message: 'Message deleted successfully' });
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));
