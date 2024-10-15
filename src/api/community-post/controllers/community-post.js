'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::community-post.community-post', ({ strapi }) => ({
  async createPost(ctx) {
    try {
      // Extracting data from the request body
      // @ts-ignore
      const { member_id, title, content, create_at, update_at, community_comment } = ctx.request.body.data;

      // Check if member_id is valid
      const member = await strapi.entityService('api::member.member').findOne({ where: { id: member_id } });
      if (!member) {
        return ctx.badRequest('Invalid member ID');
      }

      // Create the post
      const newPost = await strapi.entityService('api::community-post.community-post').create({
        data: {
          member: member_id,
          title,
          content,
          create_at: new Date(create_at),
          update_at: new Date(update_at),
          community_comment,
        },
      });

      return ctx.send({ data: newPost });
    } catch (err) {
      console.error('Error creating community post:', err);
      return ctx.badRequest('Failed to create community post');
    }
  },

  async updatePost(ctx) {
    try {
      const { id } = ctx.params;
      // @ts-ignore
      const { title, content, update_at } = ctx.request.body.data;

      // Check if the post exists
      const existingPost = await strapi.entityService('api::community-post.community-post').findOne({ id });
      if (!existingPost) {
        return ctx.notFound('Post not found');
      }

      // Update the post
      const updatedPost = await strapi.entityService('api::community-post.community-post').update({
        where: { id },
        data: {
          title: title || existingPost.title,
          content: content || existingPost.content,
          update_at: new Date(update_at),
        },
      });

      return ctx.send({ message:'updated succesfully',data: updatedPost });
    } catch (err) {
      console.error('Error updating community post:', err);
      return ctx.badRequest('Failed to update community post');
    }
  },

  async deletePost(ctx) {
    try {
      const { id } = ctx.params;

      // Check if the post exists
      const existingPost = await strapi.entityService('api::community-post.community-post').findOne({ id });
      if (!existingPost) {
        return ctx.notFound('Post not found');
      }

      // Delete the post
      await strapi.entityService('api::community-post.community-post').delete({ id });

      return ctx.send({ message: 'Post deleted successfully',existingPost});
    } catch (err) {
      console.error('Error deleting community post:', err);
      return ctx.badRequest('Failed to delete community post');
    }
  },
}));
