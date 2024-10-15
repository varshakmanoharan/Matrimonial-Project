'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::verification-document.verification-document', ({ strapi }) => ({
  /**
   * Create a new verification document entry
   */
  create: async (ctx) => {
    try {
      // @ts-ignore
      const { body, files } = ctx.request;
      const userId = ctx.state.user.id;

      // Log the request body and files for debugging
      console.log('Request Body:', body);
      console.log('Request Files:', files);

      // Validate user authentication
      if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: "Please log in" };
        return;
      }

      // Extract data from request body directly
      const { member_id, verification_status, date } = body;

      // Handle missing data fields
      if (!member_id || !verification_status || !date) {
        ctx.status = 400;
        ctx.body = { success: false, message: "Missing required fields: member_id, verification_status, or date" };
        return;
      }

      const id_verification = files ? files.id_verification : null;
      const photo_verification = files ? files.photo_verification : null;
      const education_verification = files ? files.education_verification : null;

      // Handle file uploads for verification documents
      const uploadedFiles = await Promise.all([
        id_verification ? strapi.plugins['upload'].services.upload.upload({ data: {}, files: id_verification }) : null,
        photo_verification ? strapi.plugins['upload'].services.upload.upload({ data: {}, files: photo_verification }) : null,
        education_verification ? strapi.plugins['upload'].services.upload.upload({ data: {}, files: education_verification }) : null,
      ]);

      const [uploadedIdVerification, uploadedPhotoVerification, uploadedEducationVerification] = uploadedFiles;

      // Create new verification document entry
      const newVerificationDocument = await strapi.entityService.create('api::verification-document.verification-document', {
        data: {
          member_id,
          verification_status,
          date,
          id_verification: uploadedIdVerification ? uploadedIdVerification[0].id : null,
          photo_verification: uploadedPhotoVerification ? uploadedPhotoVerification[0].id : null,
          education_verification: uploadedEducationVerification ? uploadedEducationVerification[0].id : null,
          publishedAt: new Date().toISOString(),
        },
      });

      ctx.status = 201;
      ctx.body = {
        success: true,
        message: 'Verification document created successfully',
        verificationDocument: newVerificationDocument,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to create verification document',
        error: err.message,
      };
    }
  },

  // ... other methods (update, delete)
}));
