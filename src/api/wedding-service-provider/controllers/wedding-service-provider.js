const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wedding-service-provider.wedding-service-provider', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { name, category, contact_information, website, description, special_offer } = ctx.request.body.data;

      let specialOfferData = null;
      if (special_offer) {
        specialOfferData = {
          title: special_offer.title,
          description: special_offer.description,
          valid_until: special_offer.valid_until
        };
      }

      const serviceProvider = await strapi.entityService.create('api::wedding-service-provider.wedding-service-provider', {
        data: { 
          name,
          category,
          contact_information,
          website,
          description,
          special_offer: specialOfferData,
          publishedAt: new Date().toISOString(),
        }
      });

      return ctx.send({ data: serviceProvider });
    } catch (error) {
      console.error('Error creating wedding service provider:', error);
      return ctx.badRequest('Failed to create wedding service provider');
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const serviceProvider = await strapi.entityService.findOne('api::wedding-service-provider.wedding-service-provider', id, {
        populate: 'special_offer'
      });

      if (!serviceProvider) {
        ctx.status = 404;
        return ctx.send({ error: 'Wedding service provider not found' });
      }

      return ctx.send({ data: serviceProvider });
    } catch (error) {
      console.error('Error fetching wedding service provider:', error);
      return ctx.badRequest('Failed to fetch wedding service provider');
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { name, category, contact_information, website, description, special_offer } = ctx.request.body.data;

      let specialOfferData = null;
      if (special_offer) {
        specialOfferData = {
          title: special_offer.title,
          description: special_offer.description,
          valid_until: special_offer.valid_until
        };
      }

      const updatedServiceProvider = await strapi.entityService.update('api::wedding-service-provider.wedding-service-provider', id, {
        data: { 
          name, 
          category, 
          contact_information, 
          website, 
          description, 
          special_offer: specialOfferData 
        },
      });

      return ctx.send({ data: updatedServiceProvider });
    } catch (error) {
      console.error('Error updating wedding service provider:', error);
      return ctx.badRequest('Failed to update wedding service provider');
    }
  },

  async delete(ctx) {
    try {
      const { id } = ctx.params;

      await strapi.entityService.delete('api::wedding-service-provider.wedding-service-provider', id);

      return ctx.send({ message: 'Wedding service provider deleted successfully' });
    } catch (error) {
      console.error('Error deleting wedding service provider:', error);
      return ctx.badRequest('Failed to delete wedding service provider');
    }
  },
}));
