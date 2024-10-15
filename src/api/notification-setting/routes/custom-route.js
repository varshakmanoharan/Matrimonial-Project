module.exports={
    "routes": [
      {
        "method": "PUT",
        "path": "/notification-settings/:id",
        "handler": "notification-setting.update",
        "config": {
          "policies": []
        }
      },
      {
        "method": "GET",
        "path": "/notification-settings/:user",
        "handler": "notification-setting.get",
        "config": {
          "policies": []
        }
      }
    ]
  }
  