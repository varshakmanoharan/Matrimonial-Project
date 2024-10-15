'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tutorial.tutorial', ({ strapi }) => ({
  async create(ctx) {
    try {
      // Extract data from the request body
      const { title, content, video_url, description, category } = ctx.request.body.data;

      // Create a new tutorial entry
      const tutorial = await strapi.entityService.create('api::tutorial.tutorial', {
        data: {
          title,
          content,
          video_url,
          description,
          category,
          publishedAt: new Date().toISOString()
        },
      });

      // Respond with the created tutorial data
      return ctx.send({ data: tutorial });
    } catch (error) {
      console.error('Error creating tutorial:', error);
      return ctx.badRequest('Failed to create tutorial');
    }
  },

  async find(ctx) {
    try {
      // Retrieve all tutorial entries
      const tutorials = await strapi.entityService.findMany('api::tutorial.tutorial');

      // Respond with the list of tutorials
      return ctx.send({ data: tutorials });
    } catch (error) {
      console.error('Error fetching tutorials:', error);
      return ctx.badRequest('Failed to fetch tutorials');
    }
  },

  async findOne(ctx) {
    try {
      // Extract ID from the request parameters
      const { id } = ctx.params;

      // Retrieve a single tutorial entry by ID
      const tutorial = await strapi.entityService.findOne('api::tutorial.tutorial', id);

      if (!tutorial) {
        ctx.status = 404;
        return ctx.send({ error: 'Tutorial not found' });
      }

      // Respond with the tutorial data
      return ctx.send({ data: tutorial });
    } catch (error) {
      console.error('Error fetching tutorial:', error);
      return ctx.badRequest('Failed to fetch tutorial');
    }
  },

  async update(ctx) {
    try {
      // Extract ID from the request parameters
      const { id } = ctx.params;

      // Extract data from the request body
      const { title, content, video_url, description, category } = ctx.request.body.data;

      // Update the tutorial entry
      const updatedTutorial = await strapi.entityService.update('api::tutorial.tutorial', id, {
        data: { title, content, video_url, description, category },
      });

      // Respond with the updated tutorial data
      return ctx.send({ data: updatedTutorial });
    } catch (error) {
      console.error('Error updating tutorial:', error);
      return ctx.badRequest('Failed to update tutorial');
    }
  },

  async delete(ctx) {
    try {
      // Extract ID from the request parameters
      const { id } = ctx.params;

      // Delete the tutorial entry
      await strapi.entityService.delete('api::tutorial.tutorial', id);

      // Respond with a success message
      return ctx.send({ message: 'Tutorial deleted successfully' });
    } catch (error) {
      console.error('Error deleting tutorial:', error);
      return ctx.badRequest('Failed to delete tutorial');
    }
  },
}));
