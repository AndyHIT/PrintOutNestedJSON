var rawData = [
  {
    "title": "Animals",
    "children": [
      {
        "title": "Dogs",
        "children": [
          {
            "title": "Pitbull",
            "children": [
              {
                "title": "English Pitbull",
                "children": null
              },
              {
                "title": "American Pibull"
              }
            ]
          },
          {
            "title": "Chihuahua",
            "children": null
          }
        ]
      },
      {
        "title": "Cats",
        "children": [
          {
            "title": "Calico",
            "children": [
              {
                "title": "British Shorthair",
                "children": null
              },
              {
                "title": "Japenese Bobtail"
              }
            ]
          },
          {
            "title": "Scottish Fold",
            "children": null
          }
        ]
      }
    ]
  }
]
printNestedObj(rawData[0]);
