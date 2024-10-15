'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::family-information.family-information', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { data } = ctx.request.body;
      console.log('Received body:', data);

      // Validate user authentication
      const userId = ctx.state.user?.id;
      if (!userId) {
        return ctx.unauthorized('Please log in');
      }

      // Extract member_id and validate presence
      const { member_id, ...familyInfoData } = data;
      if (!member_id) {
        return ctx.badRequest('Missing required field: member_id');
      }

      // Verify that the member exists and belongs to the logged-in user
      const member = await strapi.entityService.findOne('api::member.member', member_id, { populate: ['user_id'] });
      if (!member) {
        return ctx.notFound('Member not found');
      }
      if (member.user_id.id !== userId) {
        return ctx.forbidden('You do not have permission to add family information for this member');
      }

      // Create the family information
      const createdFamilyInfo = await strapi.entityService.create('api::family-information.family-information', {
        data: {
          ...familyInfoData,
          publishedAt: new Date().toISOString(),
          member_id: member.id,
        },
      });

      return ctx.created({
        success: true,
        message: 'Family information created successfully',
        familyInfo: createdFamilyInfo,
      });
    } catch (err) {
      console.error('Error in create:', err);
      return ctx.internalServerError({
        success: false,
        message: 'Failed to create family information',
        error: err.message,
      });
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { data } = ctx.request.body;
      console.log('Received body:', data);

      // Validate user authentication
      const userId = ctx.state.user?.id;
      if (!userId) {
        return ctx.unauthorized('Please log in');
      }

      // Extract member_id and validate presence
      const { member_id, ...familyInfoData } = data;
      if (!member_id) {
        return ctx.badRequest('Missing required field: member_id');
      }

      // Fetch existing family information
      const existingFamilyInfo = await strapi.entityService.findOne('api::family-information.family-information', id, {
        populate: ['member'],
      });
      if (!existingFamilyInfo) {
        return ctx.notFound('Family information not found');
      }

      // Verify that the member exists and belongs to the logged-in user
      const member = await strapi.entityService.findOne('api::member.member', member_id, { populate: ['user_id'] });
      if (!member) {
        return ctx.notFound('Member not found');
      }
      if (member.user_id.id !== userId) {
        return ctx.forbidden('You do not have permission to update family information for this member');
      }

      // Update the family information
      const updatedFamilyInfo = await strapi.entityService.update('api::family-information.family-information', id, {
        data: {
          ...familyInfoData,
          publishedAt: new Date().toISOString(),
        },
      });

      return ctx.created({
        success: true,
        message: 'Family information updated successfully',
        familyInfo: updatedFamilyInfo,
      });
    } catch (err) {
      console.error('Error in update:', err);
      return ctx.internalServerError({
        success: false,
        message: 'Failed to update family information',
        error: err.message,
      });
    }
  },
}));
