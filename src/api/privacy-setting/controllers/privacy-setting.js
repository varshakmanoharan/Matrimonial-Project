'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::privacy-setting.privacy-setting', ({ strapi }) => ({
  async updatePrivacySettings(ctx) {
    // @ts-ignore
    const { member_id } = ctx.request.body; // Extracting the member_id from the request body
    // @ts-ignore
    const { profile_visibility, can_contact } = ctx.request.body;

    try {
      const updatedPrivacySettings = await strapi.query('api::privacy-setting.privacy-setting').update(
        { member_id }, 
        // @ts-ignore
        { profile_visibility, 
            can_contact }
      );

      return ctx.send({ data: updatedPrivacySettings });
    } catch (error) {
      console.error('Error updating privacy settings:', error);
      return ctx.badRequest('Error updating privacy settings');
    }
  },
}));
