module.exports=
{
  "routes": [
    {
      "method": "POST",
      "path": "/relationship-insights",
      "handler": "relationship-insight.createInsight",
      "config": {
        "policies": []
      }
    },
    {
      "method": "PUT",
      "path": "/relationship-insights/:id",
      "handler": "relationship-insight.updateInsight",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/relationship-insights",
      "handler": "relationship-insight.fetchInsights",
      "config": {
        "policies": []
      }
    }
  ]
}
