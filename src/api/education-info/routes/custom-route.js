'use strict';

/**
 * education-info router.
 */

module.exports = {
  routes: [
    // ... existing routes

    {
      method: 'GET',
      path: '/education-info/search-by-education',
      handler: 'education-info.searchByEducation',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
