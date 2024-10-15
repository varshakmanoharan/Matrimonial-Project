'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::interest.interest', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { user, interested_user, interest, predefined_message } = ctx.request.body.data;

      if (user === interested_user) {
        return ctx.badRequest('User cannot express interest in their own profile.');
      }

      const existingInterest = await strapi.entityService.findMany('api::interest.interest', {
        filters: {
          user,
          interested_user,
          interest,
        },
      });

      if (existingInterest.length > 0) {
        return ctx.badRequest('You have already expressed this level of interest in this profile.');
      }

      const interestRecord = await strapi.entityService.create('api::interest.interest', {
        data: {
          user,
          interested_user,
          interest,
          predefined_message,
          publishedAt: new Date().toISOString(),
        },
      });

      const populatedInterest = await strapi.entityService.findOne('api::interest.interest', interestRecord.id, {
        populate: ['user', 'interested_user', 'predefined_message'],
      });

      // Fetch the sender user with the username
      const senderUser = await strapi.entityService.findOne('plugin::users-permissions.user', user, {
        populate: ['username'],
      });

      if (!senderUser) {
        return ctx.throw(404, 'Sender user not found');
      }

      const notificationMessage = `${senderUser.username} likes your profile`;

      await strapi.entityService.create('api::notification.notification', {
        data: {
          user: interested_user,
          message: notificationMessage,
          read: false,
          publishedAt: new Date().toISOString(),
        },
      });

      return ctx.created({ data: populatedInterest });
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async find(ctx) {
    const { user, interested_user, interest } = ctx.query;

    const filters = {};
    if (user) filters.user = user;
    if (interested_user) filters.interested_user = interested_user;
    if (interest) filters.interest = interest;

    const interests = await strapi.entityService.findMany('api::interest.interest', {
      filters,
      populate: ['user', 'interested_user', 'predefined_message'],
    });

    return ctx.send({ data: interests });
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      const existingInterest = await strapi.entityService.findOne('api::interest.interest', id);

      if (!existingInterest) {
        return ctx.notFound('Interest not found');
      }

      await strapi.entityService.delete('api::interest.interest', id);

      return ctx.send({ message: 'Interest deleted successfully' });
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));
