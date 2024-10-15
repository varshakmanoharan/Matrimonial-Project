"use-strict"
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/community-comments',
        handler: 'community-comment.createComment',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'PUT',
        path: '/community-comments/:id',
        handler: 'community-comment.updateComment',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'DELETE',
        path: '/community-comments/:id',
        handler: 'community-comment.deleteComment',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  