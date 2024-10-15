module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/trust-badge/assign',
        handler: 'trust-badge.assignBadge',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/trust-badge',
        handler: 'trust-badge.getBadges',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  