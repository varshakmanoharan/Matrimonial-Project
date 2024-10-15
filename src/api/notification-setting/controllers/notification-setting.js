'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::notification-setting.notification-setting', ({ strapi }) => ({
  async update(ctx) {
    const { id } = ctx.params;
    const { notify_on_new_match, notify_on_message, notify_on_interest, notify_on_profile_view } = ctx.request.body;

    try {
      const updatedSettings = await strapi.services['api::notification-setting.notification-setting'].update(
        { id },
        {
          notify_on_new_match,
          notify_on_message,
          notify_on_interest,
          notify_on_profile_view,
        }
      );

      return ctx.send({ message: 'Settings updated successfully', data: updatedSettings });
    } catch (error) {
      return ctx.internalServerError('Error updating settings', { error });
    }
  },

  async get(ctx) {
    const { user } = ctx.params;

    if (!user) {
      return ctx.badRequest('User ID is required');
    }

    try {
      const settings = await strapi.services['api::notification-setting.notification-setting'].findOne({
        user,
      });

      if (!settings) {
        return ctx.notFound('Settings not found');
      }

      return ctx.send({ data: settings });
    } catch (error) {
      return ctx.internalServerError('Error fetching settings', { error });
    }
  },
}));
