'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::success-story.success-story', ({ strapi }) => ({
  async create(ctx) {
    let data = ctx.request.body && ctx.request.body.data ? ctx.request.body.data : ctx.request.body;
    
    if (!data) {
      console.error('Request body is empty:', ctx.request.body);
      return ctx.badRequest('Missing request body');
    }

    const { member, couple_names, marriage_date, story, photo, rating, active, posted_on } = data;
    
    if (!member || !couple_names || !marriage_date || !story || !posted_on) {
      return ctx.badRequest('Missing required fields');
    }

    try {
      const newSuccessStory = await strapi.entityService.create('api::success-story.success-story', {
        data: {
          member,
          couple_names,
          marriage_date,
          story,
          photo,
          rating,
          active,
          posted_on,
          publishedAt: new Date().toISOString(),
        },
      });
      return ctx.send({ data: newSuccessStory });
    } catch (err) {
      console.error('Error creating success story:', err);
      return ctx.badRequest('Failed to create success story');
    }
  },

  async find(ctx) {
    try {
      const successStories = await strapi.entityService.findMany('api::success-story.success-story', {
        filters: { active: true }
      });
      return ctx.send({ data: successStories });
    } catch (err) {
      console.error('Error fetching success stories:', err);
      return ctx.badRequest('Failed to fetch success stories');
    }
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    try {
      const successStory = await strapi.entityService.findOne('api::success-story.success-story', id);
      if (!successStory) {
        return ctx.notFound('Success story not found');
      }
      return ctx.send({ data: successStory });
    } catch (err) {
      console.error('Error fetching success story:', err);
      return ctx.badRequest('Failed to fetch success story');
    }
  },

  async update(ctx) {
    const { id } = ctx.params;
    let data = ctx.request.body && ctx.request.body.data ? ctx.request.body.data : ctx.request.body;
    
    if (!data) {
      console.error('Request body is empty:', ctx.request.body);
      return ctx.badRequest('Missing request body');
    }

    const { member, couple_names, marriage_date, story, photo, rating, active, posted_on } = data;
    
    if (!member || !couple_names || !marriage_date || !story || !posted_on) {
      return ctx.badRequest('Missing required fields');
    }

    try {
      const updatedSuccessStory = await strapi.entityService.update('api::success-story.success-story', id, {
        data: {
          member,
          couple_names,
          marriage_date,
          story,
          photo,
          rating,
          active,
          posted_on,
        },
      });
      return ctx.send({message: 'Success story updated successfully', data: updatedSuccessStory });
    } catch (err) {
      console.error('Error updating success story:', err);
      return ctx.badRequest('Failed to update success story');
    }
  },

  async delete(ctx) {
    const { id } = ctx.params;
    try {
      await strapi.entityService.delete('api::success-story.success-story', id);
      return ctx.send({ message: 'Success story deleted' });
    } catch (err) {
      console.error('Error deleting success story:', err);
      return ctx.badRequest('Failed to delete success story');
    }
  },
}));