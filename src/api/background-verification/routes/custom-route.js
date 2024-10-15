'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/background-verifications/request-verification',
      handler: 'background-verification.requestVerification',
      config: {
        policies: [],
        middlewares: [],
      },
    },{
      "method": "PUT",
      "path": "/background-verifications/:id",
      "handler": "background-verification.update",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/background-verifications/:id",
      "handler": "background-verification.findOne",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/background-verifications",
      "handler": "background-verification.findAll",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/background-verifications/:id/verify",
      "handler": "background-verification.verifyMember",
      "config": {
        "policies": []
      }
    }
   
  ],
};
