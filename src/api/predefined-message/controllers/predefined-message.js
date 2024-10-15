'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::predefined-message.predefined-message', ({ strapi }) => ({
  /**
   * Create a new predefined message
   */
  create: async (ctx) => {
    try {
      const { content, member, interest } = ctx.request.body.data;

      // Validate user authentication (if needed)
      const userId = ctx.state.user ? ctx.state.user.id : null;
      if (!userId) {
        ctx.status = 401;
        ctx.body = { success: false, message: 'Please log in' };
        return;
      }

      console.log('User ID:', userId);

      // Check if the member exists
      console.log('Checking member with ID:', member);
      const existingMember = await strapi.entityService.findOne('api::member.member', member);
      if (!existingMember) {
        ctx.status = 404;
        ctx.body = { success: false, message: 'Member not found' };
        return;
      }

      console.log('Member found:', existingMember);

      // Optionally check if interest exists if provided
      if (interest) {
        console.log('Checking interest with ID:', interest);
        const existingInterest = await strapi.entityService.findOne('api::interest.interest', interest);
        if (!existingInterest) {
          ctx.status = 404;
          ctx.body = { success: false, message: 'Interest not found' };
          return;
        }
      }

      // Create the predefined message
      const newPredefinedMessage = await strapi.entityService.create('api::predefined-message.predefined-message', {
        data: {
          content: content,
          member: member,
          interest: interest || null, // Set to null if interest is not provided
          publishedAt: new Date(),
        },
      });

      ctx.status = 201;
      ctx.body = {
        success: true,
        message: 'Predefined message created successfully',
        predefinedMessage: newPredefinedMessage,
      };
    } catch (err) {
      console.error('Error creating predefined message:', err);
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to create predefined message',
        error: err.message,
      };
    }
  }, /**
  * Update an existing predefined message
  */
 update: async (ctx) => {
   try {
     const { id } = ctx.params;
     const { content, member, interest } = ctx.request.body.data;

     // Validate user authentication (if needed)
     const userId = ctx.state.user ? ctx.state.user.id : null;
     if (!userId) {
       ctx.status = 401;
       ctx.body = { success: false, message: 'Please log in' };
       return;
     }

     console.log('User ID:', userId);

     // Check if the predefined message exists
     console.log('Checking predefined message with ID:', id);
     const existingPredefinedMessage = await strapi.entityService.findOne('api::predefined-message.predefined-message', id);
     if (!existingPredefinedMessage) {
       ctx.status = 404;
       ctx.body = { success: false, message: 'Predefined message not found' };
       return;
     }

     console.log('Predefined message found:', existingPredefinedMessage);

     // Check if the member exists
     console.log('Checking member with ID:', member);
     const existingMember = await strapi.entityService.findOne('api::member.member', member);
     if (!existingMember) {
       ctx.status = 404;
       ctx.body = { success: false, message: 'Member not found' };
       return;
     }

     console.log('Member found:', existingMember);

     // Optionally check if interest exists if provided
     if (interest) {
       console.log('Checking interest with ID:', interest);
       const existingInterest = await strapi.entityService.findOne('api::interest.interest', interest);
       if (!existingInterest) {
         ctx.status = 404;
         ctx.body = { success: false, message: 'Interest not found' };
         return;
       }
     }

     // Update the predefined message
     const updatedPredefinedMessage = await strapi.entityService.update('api::predefined-message.predefined-message', id, {
       data: {
         content: content,
         member: member,
         interest: interest || null, // Set to null if interest is not provided
       },
     });

     ctx.status = 200;
     ctx.body = {
       success: true,
       message: 'Predefined message updated successfully',
       predefinedMessage: updatedPredefinedMessage,
     };
   } catch (err) {
     console.error('Error updating predefined message:', err);
     ctx.status = 500;
     ctx.body = {
       success: false,
       message: 'Failed to update predefined message',
       error: err.message,
     };
   }
 },
}));
