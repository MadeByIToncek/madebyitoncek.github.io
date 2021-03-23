var APP_DATA = {
  "scenes": [
    {
      "id": "0-official_nasa",
      "name": "Official_NASA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.011028964836217625,
          "pitch": 0.03858145326574025,
          "rotation": 3.141592653589793,
          "target": "1-original"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.40108551505946366,
          "pitch": 1.5707963267948966,
          "title": "Author",
          "text": "https://mars.nasa.gov/bin/panos/download/PIA2464-Perseverance_Sol3_Mastcam-Z_panorama.tif"
        }
      ]
    },
    {
      "id": "1-original",
      "name": "Original",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        },
        {
          "tileSize": 512,
          "size": 8192
        }
      ],
      "faceSize": 5750,
      "initialViewParameters": {
        "yaw": 0.3128031054947442,
        "pitch": 0.13138094277420898,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.31700533551120813,
          "pitch": 0.1297596093173503,
          "rotation": 3.141592653589793,
          "target": "0-official_nasa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5709178875390961,
          "pitch": 1.5707963267948966,
          "title": "Author",
          "text": "https://www.db-prods.net/marsroversimages/perseverance2021.php#6"
        }
      ]
    }
  ],
  "name": "Mars 2021",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
