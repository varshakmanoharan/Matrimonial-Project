'use strict';

/**
 * socialnw-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::socialnw-post.socialnw-post', ({ strapi }) => ({
  // Override the default create action
  async create(ctx) {
    const { data } = ctx.request.body;

    try {
      // Validate author existence
      const authorExists = await strapi.entityService.findOne('api::member.member', data.author);
      if (!authorExists) {
        return ctx.badRequest('Author does not exist');
      }

      // Validate comments authors existence
      for (let comment of data.comments) {
        const commentAuthorExists = await strapi.entityService.findOne('api::member.member', comment.author.data.id);
        if (!commentAuthorExists) {
          return ctx.badRequest(`Comment author with ID ${comment.author.data.id} does not exist`);
        }
      }

      // Create the social network post
      const socialnwPost = await strapi.entityService.create('api::socialnw-post.socialnw-post', {
        data: {
          author: data.author,
          content: data.content,
          likes: data.likes,
          comments: data.comments.map(comment => ({
            author: comment.author.data.id,
            content: comment.content,
            socialnw_post: comment.socialnw_post.data.id,
            created_at: new Date().toISOString(),
          })),
        },
      });

      ctx.send({
        success: true,
        message: 'Post created successfully',
        data: socialnwPost,
      });
    } catch (error) {
      strapi.log.error('Error creating post:', error);
      ctx.send({
        success: false,
        message: 'Error creating post',
        error: error.message,
      });
    }
  },

  // Override the default update action
  async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;

    try {
      // Validate author existence
      const authorExists = await strapi.entityService.findOne('api::member.member', data.author);
      if (!authorExists) {
        return ctx.badRequest('Author does not exist');
      }

      // Validate comments authors existence
      for (let comment of data.comments) {
        const commentAuthorExists = await strapi.entityService.findOne('api::member.member', comment.author.data.id);
        if (!commentAuthorExists) {
          return ctx.badRequest(`Comment author with ID ${comment.author.data.id} does not exist`);
        }
      }

      // Update the social network post
      const socialnwPost = await strapi.entityService.update('api::socialnw-post.socialnw-post', id, {
        data: {
          author: data.author,
          content: data.content,
          likes: data.likes,
          comments: data.comments.map(comment => ({
            author: comment.author.data.id,
            content: comment.content,
            socialnw_post: comment.socialnw_post.data.id,
          })),
        },
      });

      ctx.send({
        success: true,
        message: 'Post updated successfully',
        data: socialnwPost,
      });
    } catch (error) {
      strapi.log.error('Error updating post:', error);
      ctx.send({
        success: false,
        message: 'Error updating post',
        error: error.message,
      });
    }
  },

  // Override the default delete action
  async delete(ctx) {
    const { id } = ctx.params;

    try {
      const result = await strapi.entityService.delete('api::socialnw-post.socialnw-post', id);
      ctx.send({
        success: true,
        message: 'Post deleted successfully',
        data: result,
      });
    } catch (error) {
      strapi.log.error('Error deleting post:', error);
      ctx.send({
        success: false,
        message: 'Error deleting post',
        error: error.message,
      });
    }
  },
}));
