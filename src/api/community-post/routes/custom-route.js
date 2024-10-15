module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/community-posts',
        handler: 'community-post.createPost',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'PUT',
        path: '/community-posts/:id',
        handler: 'community-post.updatePost',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'DELETE',
        path: '/community-posts/:id',
        handler: 'community-post.deletePost',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  