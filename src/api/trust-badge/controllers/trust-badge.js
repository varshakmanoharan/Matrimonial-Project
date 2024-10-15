'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::trust-badge.trust-badge', ({ strapi }) => ({
  async create(ctx) {
    try {
      // @ts-ignore
      const { name, description, icon, members } = ctx.request.body;

      const newBadge = await strapi.entityService.create('api::trust-badge.trust-badge', {
        data: {
          name,
          description,
          icon,
          members,
          publishedAt: new Date().toISOString()
        },
      });

      ctx.status = 201;
      ctx.body = { success: true, data: newBadge };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to create trust badge', error: err.message };
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      // @ts-ignore
      const { name, description, icon, members } = ctx.request.body;

      // Validate required fields
      if (!name || !description) {
        return ctx.badRequest('Name and description are required.');
      }

      const updatedBadge = await strapi.entityService.update('api::trust-badge.trust-badge', id, {
        data: {
          name,
          description,
          icon,
          members,
        },
      });

      ctx.status = 200;
      ctx.body = { success: true, data: updatedBadge };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to update trust badge', error: err.message };
    }
  },

  async assignBadge(ctx) {
    // @ts-ignore
    const { memberId, badgeId } = ctx.request.body;

    if (!memberId || !badgeId) {
      return ctx.badRequest('Member ID and Badge ID are required.');
    }

    try {
      const badge = await strapi.entityService.findOne('api::trust-badge.trust-badge', badgeId, {
        populate: { members: true },
      });

      if (!badge) {
        return ctx.notFound('Trust badge not found.');
      }

      const memberAlreadyAssigned = badge.members.some(member => member.id === memberId);

      if (memberAlreadyAssigned) {
        return ctx.badRequest('Member already has this badge.');
      }

      const updatedBadge = await strapi.entityService.update('api::trust-badge.trust-badge', badgeId, {
        data: {
          members: [...badge.members.map(member => member.id), memberId],
        },
      });

      ctx.status = 200;
      ctx.body = { success: true, data: updatedBadge };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to assign badge', error: err.message };
    }
  },

  async getBadges(ctx) {
    try {
      const badges = await strapi.entityService.findMany('api::trust-badge.trust-badge', {
        populate: { members: true },
        sort: 'createdAt:desc',
      });

      ctx.status = 200;
      ctx.body = { success: true, data: badges };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to fetch badges', error: err.message };
    }
  },
}));
