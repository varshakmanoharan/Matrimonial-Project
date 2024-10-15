module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/members/advanced-search",
      "handler": "member.advancedSearch",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "PUT",
      "path": "/members/:id",
      "handler": "member.update",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "DELETE",
      "path": "/members/:id",
      "handler": "member.delete",
      "config": {
        "policies": [],
        "middlewares": []
      }
    },
    {
      "method": "GET",
      "path": "/members/match-profiles",
      "handler": "member.matchProfiles",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/members/nearby",
      "handler": "member.findNearby",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/members/search",
      "handler": "member.searchByLocation",
      "config": {
        "policies": []
      }
    }
  ]
}
