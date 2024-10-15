"use-strict"
module.exports = {

        "routes": [
          {
            "method": "POST",
            "path": "/events",
            "handler": "event.createEvent",
            "config": {
              "policies": []
            }
          },
          {
            "method": "PUT",
            "path": "/events/:id",
            "handler": "event.updateEvent",
            "config": {
              "policies": []
            }
          },
          {
            "method": "DELETE",
            "path": "/events/:id",
            "handler": "event.deleteEvent",
            "config": {
              "policies": []
            }
          }
        ]
      }
      