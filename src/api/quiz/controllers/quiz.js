'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::quiz.quiz', ({ strapi }) => ({
  async createQuiz(ctx) {
    try {
      // @ts-ignore
      const { title, description, questions } = ctx.request.body;

      const newQuiz = await strapi.service('api::quiz.quiz').create({
        data: {
          title,
          description,
          questions,
        },
      });

      return ctx.send({ data: newQuiz });
    } catch (error) {
      console.error('Error creating quiz:', error);
      return ctx.badRequest('Failed to create quiz');
    }
  },

  
}));
