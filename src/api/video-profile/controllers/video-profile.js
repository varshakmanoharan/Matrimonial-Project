'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::video-profile.video-profile', ({ strapi }) => ({
  async find(ctx) {
    try {
      const { query } = ctx;
      const entities = await strapi.entityService.findMany('api::video-profile.video-profile', {
        filters: query,
        populate: ['user', 'video'],
      });
      return ctx.send({ data: entities });
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  
  async create(ctx) {
    try {
      const { body } = ctx.request;
      const entity = await strapi.entityService.create('api::video-profile.video-profile', {
        data: {
          ...body,
          publishedAt: new Date(), // explicitly set publishedAt to current date and time
        },
        files: ctx.request.files,
      });
      return ctx.send({ data: entity });
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { body } = ctx.request;
      const entity = await strapi.entityService.update('api::video-profile.video-profile', id, {
        data: body,
        files: ctx.request.files,
      });
      return ctx.send({ data: entity });
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  
  async delete(ctx) {
    try {
      const { id } = ctx.params;
      const entity = await strapi.entityService.delete('api::video-profile.video-profile', id);
      return ctx.send({ message: 'Video profile has been deleted', data: entity });
    } catch (err) {
      ctx.throw(500, err);
    }
  }
}));
