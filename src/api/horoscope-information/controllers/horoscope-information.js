'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::horoscope-information.horoscope-information', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { body, files } = ctx.request;
      const { member_id, date_of_birth, country_of_birth, state_of_birth, city_of_birth, time_of_birth, chart_style } =ctx.request.body;
      const horoscopeFile = files ? files.horoscope : null;

      // Validate member existence
      const existingMember = await strapi.entityService.findOne('api::member.member', member_id);
      if (!existingMember) {
        ctx.status = 404;
        ctx.body = { success: false, message: 'Member not found' };
        return;
      }

      // Validate time_of_birth format
      const timeRegex = /^\d{2}:\d{2}:\d{2}\.\d{3}$/;
      if (!timeRegex.test(time_of_birth)) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'Invalid time format, expected HH:mm:ss.SSS' };
        return;
      }

      // Handle file upload for horoscope if provided
      let uploadedHoroscope = null;
      if (horoscopeFile) {
        uploadedHoroscope = await strapi.plugins['upload'].services.upload.upload({
          data: {},
          files: horoscopeFile,
        });
      }

      // Create the new horoscope information entry
      const newHoroscopeInfo = await strapi.entityService.create('api::horoscope-information.horoscope-information', {
        data: {
          member_id,
          date_of_birth,
          country_of_birth,
          state_of_birth,
          city_of_birth,
          time_of_birth,
          chart_style,
          horoscope: uploadedHoroscope ? uploadedHoroscope[0].id : null,
          publishedAt: new Date(),
        },
      });

      ctx.status = 201;
      ctx.body = { success: true, message: 'Horoscope information created successfully', horoscopeInfo: newHoroscopeInfo };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to create horoscope information', error: err.message };
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { body, files } = ctx.request;
      const { member_id, date_of_birth, country_of_birth, state_of_birth, city_of_birth, time_of_birth, chart_style } = body;
      const horoscopeFile = files ? files.horoscope : null;

      // Validate member existence
      const existingMember = await strapi.entityService.findOne('api::member.member', member_id);
      if (!existingMember) {
        ctx.status = 404;
        ctx.body = { success: false, message: 'Member not found' };
        return;
      }

      // Validate time_of_birth format
      const timeRegex = /^\d{2}:\d{2}:\d{2}\.\d{3}$/;
      if (!timeRegex.test(time_of_birth)) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'Invalid time format, expected HH:mm:ss.SSS' };
        return;
      }

      // Handle file upload for horoscope if provided
      let uploadedHoroscope = null;
      if (horoscopeFile) {
        uploadedHoroscope = await strapi.plugins['upload'].services.upload.upload({
          data: {},
          files: horoscopeFile,
        });
      }

      // Update the existing horoscope information entry
      const updatedHoroscopeInfo = await strapi.entityService.update('api::horoscope-information.horoscope-information', id, {
        data: {
          member: member_id,
          date_of_birth,
          country_of_birth,
          state_of_birth,
          city_of_birth,
          time_of_birth,
          chart_style,
          horoscope: uploadedHoroscope ? uploadedHoroscope[0].id : null,
          publishedAt: new Date().toISOString(),
        },
      });

      ctx.status = 200;
      ctx.body = { success: true, message: 'Horoscope information updated successfully', horoscopeInfo: updatedHoroscopeInfo };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to update horoscope information', error: err.message };
    }
  },

  
}));
