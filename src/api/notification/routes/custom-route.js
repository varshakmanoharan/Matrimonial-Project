"use strict";

module.exports ={
    "routes": [
      {
        "method": "POST",
        "path": "/notifications",
        "handler": "notification.createNotification",
        "config": {
          "policies": []
        }
      },
      {
        "method": "GET",
        "path": "/notifications/:member_id",
        "handler": "notification.getNotifications",
        "config": {
          "policies": []
        }
      },
      {
        "method": "PUT",
        "path": "/notifications/:id/read",
        "handler": "notification.markAsRead",
        "config": {
          "policies": []
        }
      }
    ]
  }
  