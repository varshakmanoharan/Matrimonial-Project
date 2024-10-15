'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::family-profile.family-profile', ({ strapi }) => ({
  async create(ctx) {
    try {
      const userId = ctx.state.user && ctx.state.user.id;
      if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Please log in' };
        return;
      }

      const { family_name, member_id, joint_accounts, match_review } = ctx.request.body.data;

      const familyProfile = await strapi.entityService.create('api::family-profile.family-profile', {
        data: {
          family_name,
          member: member_id, // Correct relation field name
          joint_accounts,
          match_review: match_review, // Correct relation field name
          created_by: userId,
          publishedAt: new Date().toISOString(),
        },
      });

      ctx.status = 201;
      ctx.body = { success: true, message: 'Family profile created successfully', familyProfile };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Error creating family profile', error: error.message };
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { family_name, member_id, joint_accounts, match_review } = ctx.request.body.data;

      const updatedFamilyProfile = await strapi.entityService.update('api::family-profile.family-profile', id, {
        data: {
          family_name,
          member: member_id, // Correct relation field name
          joint_accounts,
          match_review: match_review, // Correct relation field name
          updated_by: ctx.state.user && ctx.state.user.id,
          updatedAt: new Date().toISOString(),
        },
        populate: ['member', 'match_review'], // Populate relations if necessary
      });

      ctx.status = 200;
      ctx.body = { success: true, message: 'Family profile updated successfully', familyProfile: updatedFamilyProfile };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Error updating family profile', error: error.message };
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      await strapi.entityService.delete('api::family-profile.family-profile', id);

      ctx.status = 200;
      ctx.body = { success: true, message: 'Family profile deleted successfully' };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Error deleting family profile', error: error.message };
    }
  },
}));
