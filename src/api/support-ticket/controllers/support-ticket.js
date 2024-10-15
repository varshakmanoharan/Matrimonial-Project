// controllers/support-ticket.js

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::support-ticket.support-ticket', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { member_id, subject, description, status, priority } = ctx.request.body.data;

      // Validate required fields
      if (!member_id || !subject || !description || !status || !priority) {
        ctx.status = 400;
        return ctx.send({ error: 'All fields are required' });
      }

      const supportTicket = await strapi.entityService.create('api::support-ticket.support-ticket', {
        data: {
          member_id,
          subject,
          description,
          status,
          priority,
          publishedAt: new Date().toISOString(),
        },
      });

      ctx.status = 201;
      return ctx.send({ data: supportTicket });
    } catch (error) {
      console.error('Error creating support ticket:', error);
      return ctx.badRequest('Failed to create support ticket');
    }
  },

  async find(ctx) {
    try {
      const supportTickets = await strapi.entityService.findMany('api::support-ticket.support-ticket');
      return ctx.send({ data: supportTickets });
    } catch (error) {
      console.error('Error fetching support tickets:', error);
      return ctx.badRequest('Failed to fetch support tickets');
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const supportTicket = await strapi.entityService.findOne('api::support-ticket.support-ticket', id);

      if (!supportTicket) {
        ctx.status = 404;
        return ctx.send({ error: 'Support ticket not found' });
      }

      return ctx.send({ data: supportTicket });
    } catch (error) {
      console.error('Error fetching support ticket:', error);
      return ctx.badRequest('Failed to fetch support ticket');
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { member_id, subject, description, status, priority } = ctx.request.body.data;

      // Validate required fields
      if (!member_id || !subject || !description || !status || !priority) {
        ctx.status = 400;
        return ctx.send({ error: 'All fields are required' });
      }

      const updatedSupportTicket = await strapi.entityService.update('api::support-ticket.support-ticket', id, {
        data: { member_id, subject, description, status, priority },
      });

      return ctx.send({ data: updatedSupportTicket });
    } catch (error) {
      console.error('Error updating support ticket:', error);
      return ctx.badRequest('Failed to update support ticket');
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      await strapi.entityService.delete('api::support-ticket.support-ticket', id);

      return ctx.send({ message: 'Support ticket deleted successfully' });
    } catch (error) {
      console.error('Error deleting support ticket:', error);
      return ctx.badRequest('Failed to delete support ticket');
    }
  },
}));
