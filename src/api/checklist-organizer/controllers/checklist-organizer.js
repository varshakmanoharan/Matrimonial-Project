'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::checklist-organizer.checklist-organizer', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { title, description, completed, due_date, member } = ctx.request.body.data;

      const checklistItem = await strapi.entityService.create('api::checklist-organizer.checklist-organizer', {
        data: { 
          title, 
          description, 
          completed, 
          due_date, 
          member,
          publishedAt: new Date().toISOString(),
        }
      });

      return ctx.send({ data: checklistItem });
    } catch (error) {
      console.error('Error creating checklist item:', error);
      return ctx.badRequest('Failed to create checklist item');
    }
  },

  async find(ctx) {
    try {
      const checklistItems = await strapi.entityService.findMany('api::checklist-organizer.checklist-organizer', {
        populate: 'member' // Ensure 'member' matches your relation name in Strapi
      });

      return ctx.send({ data: checklistItems });
    } catch (error) {
      console.error('Error fetching checklist items:', error);
      return ctx.badRequest('Failed to fetch checklist items');
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const checklistItem = await strapi.entityService.findOne('api::checklist-organizer.checklist-organizer', id, {
        populate: 'member' // Ensure 'member' matches your relation name in Strapi
      });

      if (!checklistItem) {
        ctx.status = 404;
        return ctx.send({ error: 'Checklist item not found' });
      }

      return ctx.send({ data: checklistItem });
    } catch (error) {
      console.error('Error fetching checklist item:', error);
      return ctx.badRequest('Failed to fetch checklist item');
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { title, description, completed, due_date, member } = ctx.request.body.data;

      const updatedChecklistItem = await strapi.entityService.update('api::checklist-organizer.checklist-organizer', id, {
        data: { title, description, completed, due_date, member },
      });

      return ctx.send({ data: updatedChecklistItem });
    } catch (error) {
      console.error('Error updating checklist item:', error);
      return ctx.badRequest('Failed to update checklist item');
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      await strapi.entityService.delete('api::checklist-organizer.checklist-organizer', id);

      return ctx.send({ message: 'Checklist item deleted successfully' });
    } catch (error) {
      console.error('Error deleting checklist item:', error);
      return ctx.badRequest('Failed to delete checklist item');
    }
  },
}));
