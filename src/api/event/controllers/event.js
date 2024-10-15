'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
  async createEvent(ctx) {
    let data = ctx.request.body && ctx.request.body.data ? ctx.request.body.data : ctx.request.body;
    
    if (!data) {
      console.error('Request body is empty:', ctx.request.body);
      return ctx.badRequest('Missing request body');
    }

    const { title, description, date, time, location, organizer, members, type } = data;
    
    if (!title || !description || !date || !time || !location || !organizer || !type) {
      return ctx.badRequest('Missing required fields');
    }

    try {
      // Validate organizer and members
      const validOrganizer = await strapi.entityService.findOne('api::member.member', organizer);
      if (!validOrganizer) {
        return ctx.badRequest('Invalid organizer ID');
      }

      if (members) {
        for (const memberId of members) {
          const validMember = await strapi.entityService.findOne('api::member.member', memberId);
          if (!validMember) {
            return ctx.badRequest(`Invalid member ID: ${memberId}`);
          }
        }
      }

      const newEvent = await strapi.entityService.create('api::event.event', {
        data: {
          title,
          description,
          date,
          time,
          location,
          organizer,
          members,
          type,
        },
      });

      return ctx.send({ data: newEvent });
    } catch (err) {
      console.error('Error creating event:', err);
      return ctx.badRequest('Failed to create event');
    }
  },
  async updateEvent(ctx) {
    const { id } = ctx.params;
    let data = ctx.request.body && ctx.request.body.data ? ctx.request.body.data : ctx.request.body;
    
    if (!data) {
      console.error('Request body is empty:', ctx.request.body);
      return ctx.badRequest('Missing request body');
    }

    const { title, description, date, time, location, members, type } = data;

    if (!title || !description || !date || !time || !location || !type) {
      console.error('Missing required fields:', { title, description, date, time, location, type });
      return ctx.badRequest('Missing required fields');
    }

    try {
      // Check if the event exists
      const existingEvent = await strapi.entityService.findOne('api::event.event', id);
      if (!existingEvent) {
        return ctx.notFound('Event not found');
      }

      // Validate members array if provided
      if (members) {
        for (const memberId of members) {
          const validMember = await strapi.entityService.findOne('api::member.member', memberId);
          if (!validMember) {
            console.error(`Invalid member ID: ${memberId}`);
            return ctx.badRequest(`Invalid member ID: ${memberId}`);
          }
        }
      }

      const updatedEvent = await strapi.entityService.update('api::event.event', id, {
        data: {
          title: title || existingEvent.title,
          description: description || existingEvent.description,
          date: date || existingEvent.date,
          time: time || existingEvent.time,
          location: location || existingEvent.location,
          members: members || existingEvent.members,
          type: type || existingEvent.type,
        },
      });

      return ctx.send({ message: 'event updated successfully',data: updatedEvent });
    } catch (err) {
      console.error('Error updating event:', err);
      return ctx.badRequest('Failed to update event');
    }
}
,
  async deleteEvent(ctx) {
    const { id } = ctx.params;
    
    try {
      const existingEvent = await strapi.entityService.findOne('api::event.event', id);
      if (!existingEvent) {
        return ctx.notFound('Event not found');
      }

      await strapi.entityService.delete('api::event.event', id);
      return ctx.send({ message: 'Event deleted successfully' });
    } catch (err) {
      console.error('Error deleting event:', err);
      return ctx.badRequest('Failed to delete event');
    }
  },
}));
