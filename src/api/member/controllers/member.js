'use strict';

/**
 * member controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::member.member', ({ strapi }) => ({
  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { data } = ctx.request.body;

      // Check if the member exists
      const member = await strapi.entityService.findOne('api::member.member', id, {
        populate: {
          location: true,
          religious_info: true,
          education: true,
          photos: true,
        },
      });

      if (!member) {
        ctx.status = 404;
        ctx.body = {
          success: false,
          message: 'Member not found',
        };
        return;
      }

      // Prepare the data for update
      const updateData = { ...data };

      // Handle location data separately if provided
      if (data.location) {
        updateData.location = {
          ...member.location,
          ...data.location,
          latitude: data.location.latitude ? parseFloat(data.location.latitude) : member.location.latitude,
          longitude: data.location.longitude ? parseFloat(data.location.longitude) : member.location.longitude,
        };
      }

      // Log the update data
      console.log('Update data:', updateData);

      // Update the member's profile
      const updatedMember = await strapi.entityService.update('api::member.member', id, {
        data: updateData,
        populate: {
          location: true,
          religious_info: true,
          education: true,
          photos: true,
        },
      });
      // Handle file uploads if provided
      if (files && files.photos) {
        const { photos } = files;

        // If the member has existing photos, delete them
        if (member.photos && member.photos.length > 0) {
          const existingPhotoIds = member.photos.map(photo => photo.id);
          await strapi.plugins['upload'].services.upload.remove(existingPhotoIds);
        }

        // Upload new photos
        const uploadedPhotos = await strapi.plugins['upload'].services.upload.upload({
          data: {}, // No additional data
          files: photos,
        });

        // Update member with new photo relations
        await strapi.entityService.update('api::member.member', id, {
          data: {
            photos: uploadedPhotos.map(photo => photo.id),
          },
        });
      }

      ctx.status = 200;
      ctx.body = {
        success: true,
        message: 'Member profile updated successfully',
        member: updatedMember,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to update member profile',
        error: err.message,
      };
    }
  },
  async advancedSearch(ctx) {
    try {
      
      // @ts-ignore
      const { ageFrom, ageTo, country, nationality,region,city,religion,languages_spoken, caste, subcaste, education, profession, annual_income, income } = ctx.query;

      const filters = {};

      // Age filter
      if (ageFrom && ageTo) {
        // @ts-ignore
        filters.age = { $gte: parseInt(ageFrom), $lte: parseInt(ageTo) };
      }

      // Location filter
      if (country) {
        filters['location.country'] = country;
      }

      if (nationality) {
        filters['location.nationality'] = nationality;
      }
      if (region) {
        filters['location.region'] = region;
      }
      if (city) {
        filters['location.city'] = city;
      }
     // Languages filter
     if (languages_spoken) {
      const languagesArray = languages_spoken.split(',').map(lang => lang.trim());
      filters['languages_spoken'] = { $containsi: languagesArray };
    }

      // Religion filter
      if (religion) {
        filters['religious_info.religion'] = religion;
      }

      if (caste) {
        filters['religious_info.caste'] = caste;
      }

      if (subcaste) {
        filters['religious_info.subcaste'] = subcaste;
      }

      // Education filter
      if (education) {
        filters['education.education'] = education;
      }

      if (profession) {
        filters['education.profession'] = profession;
      }

      // Income filter
      if (annual_income) {
        filters['education.annual_income'] = annual_income;
      }

      // Log filters for debugging
      console.log('Filters:', filters);

      // Query the database with filters and populate the necessary fields
      const members = await strapi.db.query('api::member.member').findMany({
        where: filters,
        populate: ['location', 'religious_info', 'education'],
      });

      ctx.status = 200;
      ctx.body = {
        success: true,
        data: members,
      };
    } catch (err) {
      console.error('Error in advancedSearch:', err);
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to perform advanced search',
        error: err.message,
      };
    }
  },

  async matchProfiles(ctx) {
    const { id: userId } = ctx.state.user;

    try {
      const user = await strapi.db.query('api::member.member').findOne({
        where: { id: userId },
        populate: ['location', 'religion', 'education'],
      });

      if (!user) {
        return ctx.badRequest('User not found');
      }

      const filters = {};

      if (user.age_preference) {
        filters.age = { $gte: user.age_preference.from, $lte: user.age_preference.to };
      }
      if (user.location && user.location.country) {
        filters['location.country'] = user.location.country;
      }
      if (user.location && user.location.nationality) {
        filters['location.nationality'] = user.location.nationality;
      }
      if (user.location && user.location.region) {
        filters['location.region'] = user.location.region;
      }
      if (user.location && user.location.city) {
        filters['location.city'] = user.location.city;
      }
      if (user.religion && user.religion.religion) {
        filters['religious_info.religion'] = user.religion.religion;
      }
      if (user.religion && user.religion.caste) {
        filters['religious_info.caste'] = user.religion.caste;
      }
      if (user.religion && user.religion.subcaste) {
        filters['religious_info.subcaste'] = user.religion.subcaste;
      }
      if (user.education && user.education.education) {
        filters['education.education'] = user.education.education;
      }
      if (user.education && user.education.profession) {
        filters['education.profession'] = user.education.profession;
      }
      if (user.annual_income) {
        filters.annual_income = user.annual_income;
      }
      if (user.languages_spoken) {
        const languagesArray = user.languages_spoken.split(',').map(lang => lang.trim());
        filters.languages_spoken = { $containsi: languagesArray };
      }

      console.log('Filters:', filters);

      const matches = await strapi.db.query('api::member.member').findMany({
        where: filters,
        populate: ['location', 'religion', 'education'],
      });

      return ctx.send({ data: matches });
    } catch (error) {
      console.error('Error finding matches:', error);
      return ctx.badRequest('Error finding matches');
    }
  },
 
  async delete(ctx) {
    try {
      const { id } = ctx.params;

      // Check if the member exists
      const member = await strapi.entityService.findOne('api::member.member', id);

      if (!member) {
        ctx.status = 404;
        ctx.body = {
          success: false,
          message: 'Member not found',
        };
        return;
      }

      // Delete the member's profile
      await strapi.entityService.delete('api::member.member', id);

      ctx.status = 200;
      ctx.body = {
        success: true,
        message: 'Member profile deleted successfully',
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: 'Failed to delete member profile',
        error: err.message,
      };
    }
  },

 
  async searchByLocation(ctx) {
    const { country, region, city } = ctx.request.query;

    const query = {};
    if (country) query['location.country'] = country;
    if (region) query['location.region'] = region;
    if (city) query['location.city'] = city;

    const members = await strapi.entityService.findMany('api::member.member', {
      // @ts-ignore
      filters: query,
      populate: { location: true }, // Ensure 'location' is the field name for geolocation data
    });

    ctx.send(members);
  },
  async findNearby(ctx) {
    const { latitude, longitude, radius } = ctx.query;

    console.log('Query params:', { latitude, longitude, radius });

    if (!latitude || !longitude || !radius) {
      return ctx.badRequest('Missing latitude, longitude, or radius');
    }

    try {
      // Fetch members from the database or service
      const members = await strapi.entityService.findMany('api::member.member', {
        populate: { location: true },
        fields: ['id', 'name'],
      });

      console.log(`Fetched ${members.length} members`);

      if (!members || members.length === 0) {
        return ctx.notFound('No members found');
      }

      // Filter members within the specified radius
      const nearbyMembers = members.filter(member => {
        try {
          if (member.location && member.location.latitude && member.location.longitude) {
            const memberLat = parseFloat(member.location.latitude);
            const memberLon = parseFloat(member.location.longitude);
            const userLat = parseFloat(latitude);
            const userLon = parseFloat(longitude);
            const maxDistance = parseFloat(radius);

            if (isNaN(memberLat) || isNaN(memberLon) || isNaN(userLat) || isNaN(userLon) || isNaN(maxDistance)) {
              console.warn(`Invalid coordinates or radius for member ${member.id}`);
              return false;
            }

            const distance = calculateDistance(userLat, userLon, memberLat, memberLon);
            return distance <= maxDistance;
          }
          return false;
        } catch (error) {
          console.error(`Error processing member ${member.id}:`, error);
          return false;
        }
      });

      console.log(`Found ${nearbyMembers.length} nearby members`);

      return ctx.send({ data: nearbyMembers });
    } catch (err) {
      console.error('Error fetching nearby members:', err);
      if (err instanceof Error) {
        console.error('Error stack:', err.stack);
      }
      return ctx.internalServerError(`Error fetching nearby members: ${err.message}`);
    }
  },

  // ... other methods ...
}));

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

const toRadians = (degrees) => {
  return degrees * Math.PI / 180;
};
