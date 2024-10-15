'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::match-review.match-review', ({ strapi }) => ({
  async create(ctx) {
    try {
      const userId = ctx.state.user?.id;
      if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Please log in' };
        return;
      }

      const { family_id, potential_match_id, status, reviewed_by, publishedAt } = ctx.request.body.data;

      // Log the request data for debugging
      strapi.log.info('Received data for match review creation:', { family_id, potential_match_id, status, reviewed_by, publishedAt });

      // Validate fields
      if (!family_id || !potential_match_id || !status || !reviewed_by) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'Missing required fields' };
        return;
      }

      // Create the match review
      const matchReview = await strapi.entityService.create('api::match-review.match-review', {
        data: {
          family_id,
          potential_match_id,
          status,
          reviewed_by,
          review_date: new Date().toISOString(),
          publishedAt: new Date().toISOString(),
        },
      });

      ctx.status = 201;
      ctx.body = { success: true, message: 'Match review created successfully', matchReview };
    } catch (error) {
      strapi.log.error('Error creating match review:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Error creating match review', error: error.message };
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const userId = ctx.state.user?.id;
      if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Please log in' };
        return;
      }

      // Extract the fields from the request body
      const { status, reviewed_by, publishedAt } = ctx.request.body.data;

      // Log the request data for debugging
      strapi.log.info('Received data for match review update:', { id, status, reviewed_by, publishedAt });

      // Validate fields
      if (!status || !reviewed_by) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'Status and reviewed_by are required' };
        return;
      }

      // Find the existing match review by id
      const existingMatchReview = await strapi.entityService.findOne('api::match-review.match-review', id);
      if (!existingMatchReview) {
        ctx.status = 404;
        ctx.body = { success: false, message: 'Match review not found' };
        return;
      }

      // Update the match review
      const updatedMatchReview = await strapi.entityService.update('api::match-review.match-review', id, {
        data: {
          status,
          reviewed_by,
          review_date: new Date().toISOString(), // Optionally update the review date
          publishedAt: new Date().toISOString(),
        },
      });

      ctx.status = 200;
      ctx.body = { success: true, message: 'Match review updated successfully', matchReview: updatedMatchReview };
    } catch (error) {
      strapi.log.error('Error updating match review:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Error updating match review', error: error.message };
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      await strapi.entityService.delete('api::match-review.match-review', id);

      ctx.status = 200;
      ctx.body = { success: true, message: 'Match review deleted successfully' };
    } catch (error) {
      strapi.log.error('Error deleting match review:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Error deleting match review', error: error.message };
    }
  },
}));
