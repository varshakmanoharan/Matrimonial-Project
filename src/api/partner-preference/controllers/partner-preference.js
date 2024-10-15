'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::partner-preference.partner-preference', ({ strapi }) => ({
  async create(ctx) {
    try {
      // @ts-ignore
      const { data } = ctx.request.body;

      const { member_id, ...preferenceData } = data;

      if (!member_id) {
        return ctx.badRequest('Member ID is required');
      }

      const member = await strapi.entityService.findOne('api::member.member', member_id, {
        // @ts-ignore
        populate: ['user_id', 'location', 'education']
      });
      if (!member) {
        return ctx.notFound('Member not found');
      }

      const partnerPreference = await strapi.entityService.create('api::partner-preference.partner-preference', {
        data: {
          ...preferenceData,
          member: member_id,
        },
      });

      // @ts-ignore
      const populatedPartnerPreference = await this.populatePartnerPreference(partnerPreference.id);

      ctx.status = 201;
      ctx.body = {
        success: true,
        message: 'Partner preference created successfully',
        partnerPreference: populatedPartnerPreference,
      };
    } catch (err) {
      console.error('Failed to create partner preference:', err);
      // @ts-ignore
      ctx.internalServerError('Failed to create partner preference', { error: err.message });
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      // @ts-ignore
      const { data } = ctx.request.body;

      const existingPartnerPreference = await strapi.entityService.findOne('api::partner-preference.partner-preference', id);
      if (!existingPartnerPreference) {
        return ctx.notFound('Partner preference not found');
      }

      const updatedPartnerPreference = await strapi.entityService.update('api::partner-preference.partner-preference', id, { data });
      // @ts-ignore
      const populatedPartnerPreference = await this.populatePartnerPreference(updatedPartnerPreference.id);

      ctx.status = 200;
      ctx.body = {
        success: true,
        message: 'Partner preference updated successfully',
        partnerPreference: populatedPartnerPreference,
      };
    } catch (err) {
      console.error('Failed to update partner preference:', err);
      // @ts-ignore
      ctx.internalServerError('Failed to update partner preference', { error: err.message });
    }
  },

  async findMatches(ctx) {
    try {
      const { member_id } = ctx.params;

      const partnerPreferences = await strapi.entityService.findMany('api::partner-preference.partner-preference', {
        // @ts-ignore
        filters: { member: member_id },
        // @ts-ignore
        populate: this.defaultPopulateFields(),
      });

      if (!partnerPreferences || partnerPreferences.length === 0) {
        return ctx.notFound('Partner preferences not found');
      }

      const member = await strapi.entityService.findOne('api::member.member', member_id, {
        // @ts-ignore
        populate: ['user_id', 'location', 'education']
      });
      if (!member) {
        return ctx.notFound('Member not found');
      }

      const oppositeGender = member.gender === 'male' ? 'female' : 'male';
      const pref = partnerPreferences[0];
      // @ts-ignore
      const criteria = this.buildMatchCriteria(pref, oppositeGender);

      const matchedMembers = await strapi.entityService.findMany('api::member.member', {
        // @ts-ignore
        filters: criteria,
        // @ts-ignore
        populate: ['user_id', 'location', 'education', 'religion']
      });

      ctx.status = 200;
      ctx.body = {
        success: true,
        message: matchedMembers.length > 0 ? 'Found matching members' : 'No matching members found',
        matchedMembers,
      };
    } catch (err) {
      console.error('Failed to find matching members:', err);
      // @ts-ignore
      ctx.internalServerError('Failed to find matching members', { error: err.message });
    }
  },

  async populatePartnerPreference(id) {
    // @ts-ignore
    return await strapi.entityService.findOne('api::partner-preference.partner-preference', id, {
      populate: [
        'age_preference',
        'height_preference',
        'religious_preference.religion',
        'religious_preference.caste',
        'religious_preference.subcaste',
        'partner_education_preference.education',
        'partner_education_preference.profession',
        'partner_location.country',
        'partner_location.nationality',
        'partner_location.region',
        'partner_location.city',
        'languages_spoken',
        'member.user_id',
        'member.location',
        'member.education',
      ],
    });
  },

  buildMatchCriteria(pref, oppositeGender) {
    return {
      age: { $gte: pref.age_preference.From, $lte: pref.age_preference.To },
      height: { $gte: pref.height_preference.From, $lte: pref.height_preference.To },
      gender: oppositeGender,
      'religious_preference.religion': pref.religious_preference.religion,
      'religious_preference.caste': pref.religious_preference.caste,
      'religious_preference.subcaste': pref.religious_preference.subcaste,
      'partner_location.country': pref.partner_location.country,
      'partner_location.nationality': pref.partner_location.nationality,
      'partner_location.region':pref.partner_location.region,
      'partner_location.city':pref.partner_location.city,
      'partner_education_preference.education': pref.partner_education_preference.education,
      'partner_education_preference.profession': pref.partner_education_preference.profession,
      languages_spoken: pref.languages_spoken,
    };
  },

  defaultPopulateFields() {
    return [
      'age_preference',
      'height_preference',
      'religious_preference.religion',
      'religious_preference.caste',
      'religious_preference.subcaste',
      'partner_education_preference.education',
      'partner_education_preference.profession',
      'partner_location.country',
      'partner_location.nationality',
      'partner_location.region',
      'partner_location.city',
      'languages_spken'
      
    ];
  },
}));
