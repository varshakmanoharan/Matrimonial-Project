
"use-strict"
// api/feedback-and-rating/config/custom-routes.js

module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/feedback',
        handler: 'feedback-and-rating.createFeedback',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/feedback/:profile_id',
        handler: 'feedback-and-rating.getFeedback',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'PUT',
        path: '/feedback/:id',
        handler: 'feedback-and-rating.updateFeedback',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'DELETE',
        path: '/feedback/:id',
        handler: 'feedback-and-rating.deleteFeedback',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  