'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hobbies-and-interest.hobbies-and-interest', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { data } = ctx.request.body;  // Extract the data directly

      // Log the request body for debugging
      console.log('Request Body:', data);

      // Validate user authentication
      const userId = ctx.state.user?.id;
      if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Please log in' };
        return;
      }

      // Ensure multi-select fields are arrays
      const fieldsToConvert = ['hobbies_and_interest', 'favourite_food', 'favourite_sports', 'favourite_places', 'books', 'movies_and_music', 'personality', 'sense_of_humor', 'dress_sense', 'languages_spoken'];
      const processedData = {};
      fieldsToConvert.forEach(field => {
        if (data[field]) {
          processedData[field] = typeof data[field] === 'string' ? data[field].split(',').map(value => value.trim()) : data[field];
        }
      });

      // Add member_id and publishedAt to processed data
      processedData.member_id = data.member_id;
      processedData.publishedAt = new Date().toISOString();

      // Validate required fields
      const requiredFields = ['hobbies_and_interest', 'member_id'];
      for (const field of requiredFields) {
        if (!processedData[field]) {
          ctx.status = 400;
          ctx.body = { success: false, message: `Missing required field: ${field}` };
          return;
        }
      }

      // Create the hobbies and interest data
      const hobbiesAndInterest = await strapi.entityService.create('api::hobbies-and-interest.hobbies-and-interest', {
        data: processedData,
      });

      ctx.status = 201;
      ctx.body = {
        success: true,
        message: 'Hobbies and interest created successfully',
        hobbiesAndInterest,
        publishedAt: processedData.publishedAt,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to create hobbies and interest',
        error: err.message,
      };
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { data } = ctx.request.body;  // Extract the data directly

      // Log the request body for debugging
      console.log('Request Body:', data);

      // Validate user authentication
      const userId = ctx.state.user?.id;
      if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Please log in' };
        return;
      }

      // Ensure multi-select fields are arrays
      const fieldsToConvert = ['hobbies_and_interest', 'favourite_food', 'favourite_sports', 'favourite_places', 'books', 'movies_and_music', 'personality', 'sense_of_humor', 'dress_sense', 'languages_spoken'];
      fieldsToConvert.forEach(field => {
        if (data[field] && typeof data[field] === 'string') {
          data[field] = data[field].split(',').map(value => value.trim());
        }
      });

      // Update the hobbies and interest data
      const updatedHobbiesAndInterest = await strapi.entityService.update('api::hobbies-and-interest.hobbies-and-interest', id, {
        data: data,
      });

      if (!updatedHobbiesAndInterest) {
        ctx.status = 404;
        ctx.body = { success: false, message: 'Hobbies and interest not found' };
        return;
      }

      ctx.status = 200;
      ctx.body = {
        success: true,
        message: 'Hobbies and interest updated successfully',
        hobbiesAndInterest: updatedHobbiesAndInterest,
        publishedAt: new Date().toISOString(),
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to update hobbies and interest',
        error: err.message,
      };
    }
  },
}));
