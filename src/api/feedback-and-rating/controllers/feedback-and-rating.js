'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::feedback-and-rating.feedback-and-rating', ({ strapi }) => ({
  async createFeedback(ctx) {
    const { member_id, profile_id, rating, feedback } = ctx.request.body;

    // Input validation
    if (!member_id || !profile_id || !rating || !feedback) {
      return ctx.badRequest('Missing required fields');
    }

    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return ctx.badRequest('Invalid rating value');
    }

    try {
      const newFeedback = await strapi.entityService.create('api::feedback-and-rating.feedback-and-rating', {
        data: {
          member: member_id,  // Assuming 'member' is the relation field name
          profile: profile_id,  // Assuming 'profile' is the relation field name
          rating,
          feedback,
          publishedAt: new Date(),
        },
      });

      return ctx.send({
        success: true,
        message: 'Feedback submitted successfully',
        data: newFeedback,
      });
    } catch (error) {
      return ctx.badRequest('Failed to submit feedback', { error: error.message });
    }
  },

  async getFeedback(ctx) {
    const { profile_id } = ctx.params;

    try {
      const feedbacks = await strapi.entityService.findMany('api::feedback-and-rating.feedback-and-rating', {
        filters: { profile: profile_id },
        sort: { createdAt: 'desc' },
        populate: ['member', 'profile'],
      });

      return ctx.send({
        success: true,
        data: feedbacks,
      });
    } catch (error) {
      return ctx.badRequest('Failed to retrieve feedback', { error: error.message });
    }
  },

  async updateFeedback(ctx) {
    const { id } = ctx.params;
    const { rating, feedback } = ctx.request.body;

    // Input validation
    if (!rating && !feedback) {
      return ctx.badRequest('No fields to update');
    }

    if (rating && (typeof rating !== 'number' || rating < 1 || rating > 5)) {
      return ctx.badRequest('Invalid rating value');
    }

    try {
      const updatedFeedback = await strapi.entityService.update('api::feedback-and-rating.feedback-and-rating', id, {
        data: {
          rating,
          feedback,
        },
      });

      return ctx.send({
        success: true,
        message: 'Feedback updated successfully',
        data: updatedFeedback,
      });
    } catch (error) {
      return ctx.badRequest('Failed to update feedback', { error: error.message });
    }
  },

  async deleteFeedback(ctx) {
    const { id } = ctx.params;

    try {
      await strapi.entityService.delete('api::feedback-and-rating.feedback-and-rating', id);
      return ctx.send({
        success: true,
        message: 'Feedback deleted successfully',
      });
    } catch (error) {
      return ctx.badRequest('Failed to delete feedback', { error: error.message });
    }
  },
}));