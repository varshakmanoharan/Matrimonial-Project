'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::faq.faq', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { question, answer, admin_user } = ctx.request.body.data;

      // Validate required fields
      if (!question || !answer || !admin_user) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'All fields (question, answer, admin_user) are required' };
        return;
      }

      // Verify admin_user exists
      const admin = await strapi.entityService.findOne('plugin::users-permissions.user', admin_user);
      if (!admin) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'Invalid admin_user reference' };
        return;
      }

      // Create FAQ record with publishedAt set to current date and time
      const newFaq = await strapi.entityService.create('api::faq.faq', {
        data: { 
          question, 
          answer, 
          admin_user, 
          publishedAt: new Date() 
        },
      });

      ctx.status = 201;
      ctx.body = { success: true, message: 'FAQ created successfully', data: newFaq };
    } catch (error) {
      console.error('Error creating FAQ:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to create FAQ', error: error.message };
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params; // FAQ ID
      const { question, answer, admin_user } = ctx.request.body.data;

      // Validate required fields
      if (!question || !answer || !admin_user) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'All fields (question, answer, admin_user) are required' };
        return;
      }

      // Verify admin_user exists
      const admin = await strapi.entityService.findOne('plugin::users-permissions.user', admin_user);
      if (!admin) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'Invalid admin_user reference' };
        return;
      }

      // Update FAQ record
      const updatedFaq = await strapi.entityService.update('api::faq.faq', id, {
        data: { question, answer, admin_user },
      });

      ctx.status = 200;
      ctx.body = { success: true, message: 'FAQ updated successfully', data: updatedFaq };
    } catch (error) {
      console.error('Error updating FAQ:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to update FAQ', error: error.message };
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params; // FAQ ID

      // Find the FAQ record
      const faq = await strapi.entityService.findOne('api::faq.faq', id);

      if (!faq) {
        ctx.status = 404;
        ctx.body = { success: false, message: 'FAQ not found' };
        return;
      }

      ctx.status = 200;
      ctx.body = { success: true, data: faq };
    } catch (error) {
      console.error('Error finding FAQ:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to find FAQ', error: error.message };
    }
  },

  async findAll(ctx) {
    try {
      // Fetch all FAQ records
      const faqs = await strapi.entityService.findMany('api::faq.faq');

      ctx.status = 200;
      ctx.body = { success: true, data: faqs };
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to fetch FAQs', error: error.message };
    }
  },
}));
