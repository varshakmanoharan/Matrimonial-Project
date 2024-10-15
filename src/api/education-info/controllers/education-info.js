'use strict';

/**
 * education-info controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::education-info.education-info', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { body } = ctx.request;

      // Validate user authentication
      const userId = ctx.state.user.id;
      if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Please log in' };
        return;
      }

      // Extract data from request body
      const {
        education_institution,
        profession,
        company_name,
        job_details,
        profession_type,
        annual_income,
        member_id,
        education,
      } = body.data;

      // Validate that member_id is a valid member
      const memberExists = await strapi.entityService.findOne('api::member.member', member_id);
      if (!memberExists) {
        return ctx.badRequest('Invalid member ID.');
      }

      // Create the education info
      const educationInfo = await strapi.entityService.create('api::education-info.education-info', {
        data: {
          education_institution,
          profession,
          company_name,
          job_details,
          profession_type,
          annual_income,
          member: member_id,
          education,
          publishedAt: new Date().toISOString()
        },
      });

      ctx.status = 201;
      ctx.body = {
        success: true,
        message: 'Education info created successfully',
        educationInfo,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to create education info',
        error: err.message,
      };
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;

      // Find the education info by ID
      const educationInfo = await strapi.entityService.findOne('api::education-info.education-info', id);

      if (!educationInfo) {
        ctx.status = 404;
        ctx.body = {
          success: false,
          message: 'Education info not found',
        };
        return;
      }

      ctx.status = 200;
      ctx.body = {
        success: true,
        educationInfo,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to fetch education info',
        error: err.message,
      };
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { body } = ctx.request;
      const { member_id } = body.data;

      // Check if the education info exists
      const educationInfo = await strapi.entityService.findOne('api::education-info.education-info', id);
      if (!educationInfo) {
        ctx.status = 404;
        ctx.body = {
          success: false,
          message: 'Education info not found',
        };
        return;
      }

      // Ensure educationInfo.member is defined before accessing id
      if (educationInfo.member && educationInfo.member.id !== member_id) {
        ctx.status = 403;
        ctx.body = {
          success: false,
          message: 'Education info does not belong to the specified member',
        };
        return;
      }

      // Update the education info
      const updatedEducationInfo = await strapi.entityService.update('api::education-info.education-info', id, {
        data: body.data,
      });

      ctx.status = 200;
      ctx.body = {
        success: true,
        message: 'Education info updated successfully',
        educationInfo: updatedEducationInfo,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to update education info',
        error: err.message,
      };
    }
  },async searchByEducation(ctx) {
    try {
      const { education } = ctx.query;
  
      if (!education) {
        ctx.status = 400;
        ctx.body = {
          success: false,
          message: 'Education parameter is required',
        };
        return;
      }
  
      console.log(`Searching for education: ${education}`);
  
      // Perform the search and include member details
      const educationInfos = await strapi.entityService.findMany('api::education-info.education-info', {
        filters: {
          $or: [
            { education: { $containsi: education } },
            { education_institution: { $containsi: education } }
          ]
        },
        populate: {
          member: {
            populate: {
              location: true,
              religious_info: true,
              education: true,
              photos: true,
              user_id: true,
              name: true,
              gender: true,
              profile_created_for: true,
              dob: true,
              age: true,
              height: true,
              weight: true,
              family_background: true,
              marital_status: true,
              eating_habits: true,
              drinking_habits: true,
              smoking_habits: true,
              income: true,
              languages_spoken: true,
              religious_info: {
                populate: ['religion', 'caste', 'subcaste']
              },
              location: {
                populate: ['country', 'nationality', 'region', 'city', 'latitude', 'longitude']
              },
            }
          }
        }
      });
  
      console.log(`Found ${educationInfos.length} education info entries`);
      console.log('Education info entries:', JSON.stringify(educationInfos, null, 2));
  
      ctx.status = 200;
      ctx.body = {
        success: true,
        educationInfos,
      };
    } catch (err) {
      console.error('Error in searchByEducation:', err);
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to search members by education',
        error: err.message,
      };
    }
  }
  
  
}));
