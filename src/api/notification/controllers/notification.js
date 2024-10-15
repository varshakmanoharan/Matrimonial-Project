'use strict';

/**
 * notification controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::notification.notification', ({ strapi }) => ({
  async createNotification(ctx) {
    // @ts-ignore
    const { message, type, recipients, member_id } = ctx.request.body;

    // if (!message || !type || !recipients || !member_id) {
    //   return ctx.badRequest('All fields are required');
    // }

    try {
      const newNotification = await strapi.service('api::notification.notification').create({
        data: {
          message,
          type,
          recipients,
          read: false,
          member_id,
        },
      });

      return ctx.send({ message: 'Notification created successfully', data: newNotification });
    } catch (error) {
      // @ts-ignore
      return ctx.internalServerError('Error creating notification', { error });
    }
  },

  async getNotifications(ctx) {
    const { member_id } = ctx.params;

    if (!member_id) {
      return ctx.badRequest('Member ID is required');
    }

    try {
      const notifications = await strapi.service('api::notification.notification').find({
        where: { member_id },
      });

      return ctx.send({ data: notifications });
    } catch (error) {
      // @ts-ignore
      return ctx.internalServerError('Error fetching notifications', { error });
    }
  },

  async markAsRead(ctx) {
    const { id } = ctx.params;

    if (!id) {
      return ctx.badRequest('Notification ID is required');
    }

    try {
      const notification = await strapi.service('api::notification.notification').update(id, {
        data: { read: true },
      });

      return ctx.send({ message: 'Notification marked as read', data: notification });
    } catch (error) {
      // @ts-ignore
      return ctx.internalServerError('Error marking notification as read', { error });
    }
  },
}));
