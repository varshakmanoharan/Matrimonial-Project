'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::budget-calculator.budget-calculator', ({ strapi }) => ({
  async create(ctx) {
    try {
      
      // @ts-ignore
      const { item, estimated_cost, actual_cost, notes, member } = ctx.request.body.data;


      const budgetItem = await strapi.entityService.create('api::budget-calculator.budget-calculator', {
        data: { 
            item, 
            estimated_cost, 
            actual_cost, 
            notes, 
            member,
            publishedAt: new Date().toISOString(),
        },
        
      });

      // Send the created budget item in the response
      return ctx.send({ data: budgetItem });
    } catch (error) {
      console.error('Error creating budget item:', error);
      return ctx.badRequest('Failed to create budget item');
    }
  },

  async find(ctx) {
    try {
      
      const budgetItems = await strapi.entityService.findMany('api::budget-calculator.budget-calculator', {
       
        // @ts-ignore
        populate: 'member'
      });

      // Send the fetched budget items in the response
      return ctx.send({ data: budgetItems });
    } catch (error) {
      console.error('Error fetching budget items:', error);
      return ctx.badRequest('Failed to fetch budget items');
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      
     
      const budgetItem = await strapi.entityService.findOne('api::budget-calculator.budget-calculator', id, {
        
        // @ts-ignore
        populate: 'member'
      });

      // If budget item not found, return 404
      if (!budgetItem) {
        ctx.status = 404;
        return ctx.send({ error: 'Budget item not found' });
      }

      // Send the fetched budget item in the response
      return ctx.send({ data: budgetItem });
    } catch (error) {
      console.error('Error fetching budget item:', error);
      return ctx.badRequest('Failed to fetch budget item');
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      // @ts-ignore
      const { item, estimated_cost, actual_cost, notes, member } = ctx.request.body.data;

      // Update the budget item with the provided ID
      const updatedBudgetItem = await strapi.entityService.update('api::budget-calculator.budget-calculator', id, {
        data: { item, estimated_cost, actual_cost, notes, member },
      });

      // Send the updated budget item in the response
      return ctx.send({ data: updatedBudgetItem });
    } catch (error) {
      console.error('Error updating budget item:', error);
      return ctx.badRequest('Failed to update budget item');
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      // Delete the budget item with the provided ID
      await strapi.entityService.delete('api::budget-calculator.budget-calculator', id);

      // Send success message in the response
      return ctx.send({ message: 'Budget item deleted successfully' });
    } catch (error) {
      console.error('Error deleting budget item:', error);
      return ctx.badRequest('Failed to delete budget item');
    }
  },
}));
