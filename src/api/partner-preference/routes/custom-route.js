"use strict";

module.exports ={
    "routes": [
      {
        "method": "GET",
        "path": "/members/:member_id/matches",
        "handler": "partner-preference.findMatches",
        "config": {
          "policies": []
        }
      }
    ]
  }
  