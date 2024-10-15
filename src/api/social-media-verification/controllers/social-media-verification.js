'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::social-media-verification.social-media-verification', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { user, provider, profile_url, profile_id } = ctx.request.body.data;

      // Validate member existence
      const existingMember = await strapi.entityService.findOne('api::member.member', user);
      if (!existingMember) {
        ctx.status = 404;
        ctx.body = { success: false, message: 'Member not found' };
        return;
      }

      // Create the new social media verification entry
      const newSocialMediaVerification = await strapi.entityService.create('api::social-media-verification.social-media-verification', {
        data: {
          user,
          provider,
          profile_url,
          profile_id,
          publishedAt: new Date(),
        },
      });

      ctx.status = 201;
      ctx.body = { success: true, message: 'Social media verification created successfully', socialMediaVerification: newSocialMediaVerification };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to add social media verification', error: err.message };
    }
  },
}));
