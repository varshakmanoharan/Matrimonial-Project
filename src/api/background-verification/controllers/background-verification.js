'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::background-verification.background-verification', ({ strapi }) => ({

  async requestVerification(ctx) {
    try {
      // Extract member_id, verification_type, verified_by, verified_at, and details from the request body
      const { member_id, verification_type, verified_by, verified_at, details, verification_document } = ctx.request.body.data;

      // Validate required fields
      if (!member_id || !verification_type || !verified_by || !verified_at || !details || !verification_document) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'All fields are required' };
        return;
      }

      // Create the background verification record
      const newVerification = await strapi.entityService.create('api::background-verification.background-verification', {
        data: {
          member_id,
          verification_type,
          verified_by,
          verified_at,
          details,
          verification_document
        },
      });

      ctx.status = 201;
      ctx.body = { success: true, message: 'Background verification created successfully', data: newVerification };
    } catch (error) {
      console.error('Error creating background verification:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to create background verification', error: error.message };
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params; // Background verification ID
      const { member_id, verification_type, verified_by, verified_at, details, verification_document } = ctx.request.body.data;

      // Validate required fields
      if (!member_id || !verification_type || !verified_by || !verified_at || !details || !verification_document) {
        ctx.status = 400;
        ctx.body = { success: false, message: 'All fields are required' };
        return;
      }

      // Update the background verification record
      const updatedVerification = await strapi.entityService.update('api::background-verification.background-verification', id, {
        data: {
          member_id,
          verification_type,
          verified_by,
          verified_at,
          details,
          verification_document
        },
      });

      ctx.status = 200;
      ctx.body = { success: true, message: 'Background verification updated successfully', data: updatedVerification };
    } catch (error) {
      console.error('Error updating background verification:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to update background verification', error: error.message };
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params; // Background verification ID

      // Find the background verification record
      const verification = await strapi.entityService.findOne('api::background-verification.background-verification', id);

      if (!verification) {
        ctx.status = 404;
        ctx.body = { success: false, message: 'Background verification not found' };
        return;
      }

      ctx.status = 200;
      ctx.body = { success: true, data: verification };
    } catch (error) {
      console.error('Error finding background verification:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to find background verification', error: error.message };
    }
  },

  async findAll(ctx) {
    try {
      // Fetch all background verifications
      const verifications = await strapi.entityService.findMany('api::background-verification.background-verification');

      ctx.status = 200;
      ctx.body = { success: true, data: verifications };
    } catch (error) {
      console.error('Error fetching background verifications:', error);
      ctx.status = 500;
      ctx.body = { success: false, message: 'Failed to fetch background verifications', error: error.message };
    }
  }, async verifyMember(ctx) {
    try {
      const { id } = ctx.params; // Background verification ID
      const { verified_by, status, admin_notes } = ctx.request.body.data;

      if (!verified_by || !status) {
        return ctx.badRequest('Verified by and status are required');
      }

      const verification = await strapi.entityService.findOne('api::background-verification.background-verification', id, {
        populate: ['member_id'],
      });

      if (!verification) {
        return ctx.notFound('Background verification not found');
      }

      // Update the background verification record
      const updatedVerification = await strapi.entityService.update('api::background-verification.background-verification', id, {
        data: {
          verified_by,
          verified_at: new Date(),
          status,
          admin_notes
        },
      });

      // If the verification is approved, assign the trust badge
      if (status === 'approved') {
        const trustBadge = this.getTrustBadgeForVerificationType(verification.verification_type);
        
        await strapi.entityService.update('api::member.member', verification.member_id.id, {
          data: {
            verification_status: 'verified',
            trust_badges: trustBadge ? { $push: trustBadge } : undefined,
          },
        });
      } else {
        // If not approved, update verification status without assigning a badge
        await strapi.entityService.update('api::member.member', verification.member_id.id, {
          data: {
            verification_status: status === 'rejected' ? 'unverified' : 'pending',
          },
        });
      }

      ctx.body = { 
        success: true, 
        message: 'Background verification updated successfully', 
        data: updatedVerification 
      };
    } catch (error) {
      console.error('Error updating background verification:', error);
      ctx.internalServerError('Failed to update background verification');
    }
  },

  // Helper method to determine the trust badge based on verification type
  getTrustBadgeForVerificationType(verificationType) {
    const badgeMap = {
      'identity': 'identity_verified',
      'education': 'education_verified',
      'employment': 'employment_verified',
      'address': 'address_verified',
      // Add more mappings as needed
    };

    return badgeMap[verificationType] || null;
  },


}));
