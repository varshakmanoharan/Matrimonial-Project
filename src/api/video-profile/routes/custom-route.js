module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/video-profiles',
        handler: 'video-profile.find',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'POST',
        path: '/video-profiles',
        handler: 'video-profile.create',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'DELETE',
        path: '/video-profiles/:id',
        handler: 'video-profile.delete',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  