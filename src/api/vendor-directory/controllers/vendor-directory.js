'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vendor-directory.vendor-directory', ({ strapi }) => ({
  async create(ctx) {
    try {
      // @ts-ignore
      const { vendor_name, category, contact, website, description } = ctx.request.body.data;

      // Validate required fields
      if (!vendor_name || !category || !contact|| !website || !description) {
        ctx.status = 400;
        return ctx.send({ error: 'All fields are required' });
      }

      // Create vendor directory record
      const newVendor = await strapi.entityService.create('api::vendor-directory.vendor-directory', {
        data: {
          vendor_name,
          category,
          contact,
          website,
          description,
          publishedAt: new Date().toISOString(),
        },
      });

      ctx.status = 201;
      ctx.send({ data: newVendor });
    } catch (error) {
      console.error('Error creating vendor directory:', error);
      return ctx.badRequest('Failed to create vendor directory');
    }
  },

  async find(ctx) {
    try {
      const vendors = await strapi.entityService.findMany('api::vendor-directory.vendor-directory');

      return ctx.send({ data: vendors });
    } catch (error) {
      console.error('Error fetching vendors:', error);
      return ctx.badRequest('Failed to fetch vendors');
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const vendor = await strapi.entityService.findOne('api::vendor-directory.vendor-directory', id);

      if (!vendor) {
        ctx.status = 404;
        return ctx.send({ error: 'Vendor not found' });
      }

      return ctx.send({ data: vendor });
    } catch (error) {
      console.error('Error fetching vendor:', error);
      return ctx.badRequest('Failed to fetch vendor');
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      // @ts-ignore
      const { vendor_name, category, contact, website, description } = ctx.request.body.data;

      // Update vendor directory record
      const updatedVendor = await strapi.entityService.update('api::vendor-directory.vendor-directory', id, {
        data: {
          vendor_name,
          category,
          contact,
          website,
          description,
        },
      });

      return ctx.send({ data: updatedVendor });
    } catch (error) {
      console.error('Error updating vendor directory:', error);
      return ctx.badRequest('Failed to update vendor directory');
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      // Delete vendor directory record
      await strapi.entityService.delete('api::vendor-directory.vendor-directory', id);

      return ctx.send({ message: 'Vendor directory deleted successfully' });
    } catch (error) {
      console.error('Error deleting vendor directory:', error);
      return ctx.badRequest('Failed to delete vendor directory');
    }
  },
}));
