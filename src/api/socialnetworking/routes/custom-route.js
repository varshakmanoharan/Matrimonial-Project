module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/socialnetworking/send-request',
        handler: 'socialnetworking.sendRequest',
        config: {
          auth: false,
          policies: [],
        },
      },
      {
        method: 'PUT',
        path: '/socialnetworking/accept-request/:id',
        handler: 'socialnetworking.acceptRequest',
        config: {
          auth: false,
          policies: [],
        },
      },
      {
        method: 'PUT',
        path: '/socialnetworking/reject-request/:id',
        handler: 'socialnetworking.rejectRequest',
        config: {
          auth: false,
          policies: [],
        },
      },
    ],
  };
  