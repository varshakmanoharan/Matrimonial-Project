// @ts-nocheck
"use strict";

module.exports = (plugin) => {
  plugin.controllers.auth.register = async (ctx) => {
    try {
      const { body, files } = ctx.request;

      // Check if any field is empty
      const emptyBody = Object.values(body).some(
        (value) => value.toString().trim().length === 0
      );

      if (emptyBody) {
        ctx.status = 442;
        ctx.body = {
          success: false,
          message: "Each field cannot be empty",
        };
        return;
      }
       // Check if the user already exists
      const existingUser = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        {
          filters: { email: body.email },
        }
      );

      if (existingUser) {
        ctx.status = 409;
        ctx.body = {
          success: false,
          message: "User is already registered, please login",
        };
        return;
      }
      // Fetch roles from the roles table
      const roles = await strapi.entityService.findMany(
        "plugin::users-permissions.role"
      );

      // Check if the given role exists
      const givenRole = roles.find((role) => role.name === body.role);
      if (!givenRole) {
        ctx.status = 404;
        ctx.body = { success: false, message: "Role is not available" };
        return;
      }

      const userData = {
        ...body,
        role: givenRole.id,
        confirmed: true,
        provider: "local",
        publishedAt: new Date(),
      };

      const user = await strapi.entityService.create(
        "plugin::users-permissions.user",
        {
          data: userData,
        }
      );

      let responseMsg;
      // Creating matrimony member
      if (givenRole.name === "member") {
        const member = await strapi.entityService.create("api::member.member", {
          data: {
            user_id: user.id,
            name: body.username,
            gender: body.gender,
            profile_created_for: body.profile_created_for,
            dob: body.dob,
            age: body.age,
            height: body.height,
            weight: body.weight,
            family_background: body.family_background,
            marital_status: body.marital_status,
            eating_habits: body.eating_habits,
            drinking_habits: body.drinking_habits,
            smoking_habits: body.smoking_habits,
            income: body.income,
            languages_spoken: body.languages_spoken,
            religious_info: {
              religion: body.religion,
              caste: body.caste,
              subcaste: body.subcaste,
            },
            location: {
              country: body.country,
              nationality: body.nationality,
              region: body.region,
              city: body.city,
              latitude: body.latitude,
              longitude: body.longitude,
            },
          },
          files: {
            profile_image: files.profile_image,
          },
        });

        const memberWithPopulatedFields = await strapi.entityService.findOne(
          "api::member.member",
          member.id,
          {
            populate: ["user_id", "location", "religious_info"],
          }
        );

        responseMsg = `User has been registered as ${body.role}`;
        ctx.status = 200;
        ctx.body = {
          success: true,
          message: responseMsg,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            role: givenRole.name,
          },
          member: memberWithPopulatedFields,
        };
      } else if (givenRole.name === "Admin") {
        responseMsg = `User has been registered as ${body.role}`;
        ctx.status = 200;
        ctx.body = {
          success: true,
          message: responseMsg,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: givenRole.name,
          },
        };
      }
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: "Failed to register",
        error: err.message,
      };
    }
  };

  plugin.controllers.auth.login = async (ctx) => {
    try {
      const { identifier, password } = ctx.request.body;

      if (!identifier || !password) {
        ctx.status = 400;
        ctx.body = {
          success: false,
          message: "Identifier and password are required",
        };
        return;
      }

      // Find the user by their identifier (email or username)
      const user = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        {
          filters: { email: identifier },
          populate: ["role"], // Populate the role
        }
      );

      if (
        !user ||
        !(await strapi.plugins["users-permissions"].services.user.validatePassword(
          password,
          user.password
        ))
      ) {
        ctx.status = 401;
        ctx.body = {
          success: false,
          message: "Invalid identifier or password",
        };
        return;
      }

      const token = strapi.plugins["users-permissions"].services.jwt.issue({
        id: user.id,
      });

      ctx.status = 200;
      ctx.body = {
        success: true,
        message: "Login successful",
        jwt: token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          provider: user.provider,
          confirmed: user.confirmed,
          blocked: user.blocked,
          phone: user.phone,
          active: user.active,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          role: user.role ? user.role.name : null, // Include the role name
        },
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = {
        success: false,
        message: "Failed to login",
        error: err.message,
      };
    }
  };

  return plugin;
};
