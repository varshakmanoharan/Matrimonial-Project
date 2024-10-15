'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::community-comment.community-comment', ({ strapi }) => ({
  async createComment(ctx) {
    try {
      const { member_id, post, comments, created_at } = ctx.request.body.data;

      // Validate required fields
      if (!member_id || !post || !comments) {
        return ctx.badRequest('Missing required fields');
      }

      // Create the comment
      const newComment = await strapi.entityService('api::community-comment.community-comment').create({
        data: {
          member_id,
          post,
          comments,
          created_at: new Date(created_at),
        },
      });

      return ctx.send({ message: 'Comment added', data: newComment });
    } catch (err) {
      console.error('Error creating community comment:', err);
      return ctx.badRequest('Failed to create community comment');
    }
  },

  async updateComment(ctx) {
    try {
      const { id } = ctx.params; // Get the comment ID from the request params
      const { comments, created_at } = ctx.request.body.data;

      // Check if the comment exists
      const existingComment = await strapi.entityService('api::community-comment.community-comment').findOne({ id });
      if (!existingComment) {
        return ctx.notFound('Comment not found');
      }

      // Update the comment
      const updatedComment = await strapi.entityService('api::community-comment.community-comment').update({
        where: { id },
        data: {
          comments: comments || existingComment.comments,
          created_at: new Date(created_at),
        },
      });

      return ctx.send({ message: 'Comment edited', data: updatedComment });
    } catch (err) {
      console.error('Error updating community comment:', err);
      return ctx.badRequest('Failed to update community comment');
    }
  },

  async deleteComment(ctx) {
    try {
      const { id } = ctx.params; // Get the comment ID from the request params

      // Check if the comment exists
      const existingComment = await strapi.entityService('api::community-comment.community-comment').findOne({ id });
      if (!existingComment) {
        return ctx.notFound('Comment not found');
      }

      // Delete the comment
      await strapi.entityService('api::community-comment.community-comment').delete({ id });

      return ctx.send({ message: 'Comment deleted successfully', data: existingComment });
    } catch (err) {
      console.error('Error deleting community comment:', err);
      return ctx.badRequest('Failed to delete community comment');
    }
  },
}));
