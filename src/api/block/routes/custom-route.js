'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/blocks',
      handler: 'block.createBlock',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/blocks/:id',
      handler: 'block.updateBlockStatus',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
